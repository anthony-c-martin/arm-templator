import { Expressionable, ResourceReference, ResourceDefinition, ExpressionBase, Expression, formatTopLevelExpressionable } from './common';
import { ParameterExpression, VariableExpression, ResourceIdExpression, ReferenceExpression, ConcatExpression, ResourceGroupLocationExpression, TemplateOutput } from './expression';

const TYPE_OBJECT = 'object';
const TYPE_ARRAY = 'array';
const TYPE_STRING = 'string';
const TYPE_SECURESTRING = 'securestring';
const TYPE_INT = 'int';
const TYPE_BOOL = 'bool';

interface TemplateResource<T> {
  type: string;
  apiVersion: string;
  name: Expressionable<string>[];
  location?: Expressionable<string>;
  properties: Expressionable<T>;
  dependsOn?: Expressionable<string>[];
}

export class Deployment<TParams, TOutputs> {
  constructor(
    location: string,
    subscriptionId: string,
    resourceGroup: string,
    name: string,
    mode: 'Incremental' | 'Complete',
    builder: TemplateBuilder<TParams, TOutputs>,
    parameters: TParams,
  ) {
    this.location = location;
    this.subscriptionId = subscriptionId;
    this.resourceGroup = resourceGroup;
    this.name = name;
    this.mode = mode;
    this.builder = builder;
    this.parameters = parameters;
  }
  location: string;
  subscriptionId: string;
  resourceGroup: string;
  name: string;
  mode: 'Incremental' | 'Complete';
  builder: TemplateBuilder<TParams, TOutputs>;
  parameters: TParams;

  renderParams() {
    return renderParams(this.parameters);
  }
}

type Parameterify<T> = {
  [P in keyof T]?: ParameterExpression<T[P]>;
}

type Outputify<T> = {
  [P in keyof T]?: TemplateOutput<T[P]>;
}

type Expressionify<T> = {
  readonly [P in keyof T]: Expressionable<T[P]>;
}

export class TemplateBuilder<TParams, TOutputs> {
  private readonly execute: (template: Template<TParams, TOutputs>) => void;

  constructor(execute: (template: Template<TParams, TOutputs>) => void) {
    this.execute = execute;
  }

  render() {
    const template = new Template<TParams, TOutputs>();
    this.execute(template);

    return template.render();
  }
}

export function buildTemplate<TParams, TOutputs>(execute: (template: Template<TParams, TOutputs>) => void) {
  return new TemplateBuilder<TParams, TOutputs>(execute);
}

export class Template<TParams, TOutputs> {
  constructor() {
    this.resources = [];
    this.parameters = {};
    this.outputs = {};
  }

  public getParam<K extends keyof TParams>(type: string, key: K): Expressionable<TParams[K]> {
    if (!this.parameters[key]) {
      this.parameters[key] = new ParameterExpression<TParams[K]>(key as string, type);
    }

    return this.parameters[key] as Expressionable<TParams[K]>;
  }

  public setOutput<K extends keyof TOutputs>(type: string, key: K, value: Expressionable<TOutputs[K]>) {
    this.outputs[key] = new TemplateOutput(key as string, type, value);
  }

  private readonly resources: TemplateResource<any>[];
  private readonly parameters: Parameterify<TParams>;
  private readonly outputs: Outputify<TOutputs>;

  deploy<T>(resource: ResourceDefinition<T>, dependencies?: ResourceReference<any>[]): ResourceReference<T> {
    const templateResource: TemplateResource<T> = {
      type: resource.type,
      apiVersion: resource.apiVersion,
      name: resource.name,
      location: resource.location,
      properties: resource.properties,
    };

    if (dependencies && dependencies.length > 0) {
      templateResource.dependsOn = dependencies.map(d => new ResourceIdExpression(d));
    }

    this.resources.push(templateResource);
    
    return {
      type: resource.type,
      apiVersion: resource.apiVersion,
      name: resource.name,
    };
  }

  deployNested<TNestedParams, TNestedOutputs>(name: Expressionable<string>, location: Expressionable<string>, builder: TemplateBuilder<TNestedParams, TNestedOutputs>, parameters: Expressionify<TNestedParams>, dependencies?: ResourceReference<any>[]) {
    return this.deploy({
      apiVersion: '2019-10-01',
      type: 'Microsoft.Resources/deployments',
      name: [name],
      location: location,
      properties: {
        mode: 'Incremental',
        template: builder.render(),
        parameters: renderParams(parameters),
      },
    }, dependencies);
  }

  render(): any {
    return {
      $schema: 'https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#',
      contentVersion: '1.0.0.0',
      parameters: formatParameters(this.parameters),
      resources: this.resources.map(formatResourceObject),
      outputs: formatOutputs(this.outputs),
    };
  }
}

function formatObject(input: any): any {
  if (input === null || input === undefined) {
    throw new Error(`Unable to format null or undefined input`);
  }

  if (Array.isArray(input)) {
    return input.map(formatObject);
  } else if (input instanceof ExpressionBase) {
    const expression = input as ExpressionBase;
    return `[${expression.format()}]`;
  } else if (typeof input === 'object' && input !== null) {
    const output: any = {};
    for (const key of Object.keys(input)) {
      output[key] = formatObject(input[key]);
    }

    return output;
  }

  return input;
}

function formatResourceObject<T>(resource: TemplateResource<T>): any {
  const output: any = {
    type: formatObject(resource.type),
    apiVersion: formatObject(resource.apiVersion),
    name: formatObject(concatResourceName(...resource.name)),
    properties: formatObject(resource.properties),
  };

  if (resource.location) {
    output.location = formatObject(resource.location);
  }

  if (resource.dependsOn) {
    output.dependsOn = formatObject(resource.dependsOn);
  }
  
  return output;
}

function formatParameters<T>(parameters: Parameterify<T>): any {
  const output: any = {};
  for (const name in parameters) {
    const parameter = parameters[name];
    if (parameter === undefined) {
      continue;
    }

    const paramDefinition: any = {
      type: parameter.getType(),
    }

    if (parameter.defaultValue) {
      paramDefinition.defaultValue = parameter.defaultValue;
    }

    output[parameter.name] = paramDefinition;
  }

  return output;
}

function formatOutputs<T>(outputs: Outputify<T>): any {
  const result: any = {};
  for (const name in outputs) {
    const output = outputs[name];
    if (output === undefined) {
      continue;
    }

    const outputDefinition: any = {
      type: output.getType(),
      value: formatTopLevelExpressionable(output.value),
    };

    result[output.name] = outputDefinition;
  }

  return result;
}

function renderParams<TParams>(parameters: Expressionify<TParams>) {
  const output: {[key: string]: any} = {};

  for (const key in parameters) {
    output[key] = {
      value: parameters[key],
    };
  }

  return output;
}

export function concat(...components: Expressionable<string>[]): Expression<string> {
  return new ConcatExpression(components);
}

function concatResourceName(...components: Expressionable<string>[]): Expressionable<string> {
  if (components.length === 1) {
    return components[0];
  }

  const separated = components.reduce<Expressionable<string>[]>((acc, cur, i) => {
    if (i > 0) {
      acc.push('/');
    }
    acc.push(cur);

    return acc;
  }, []);

  return concat(...separated);
}

export function resourceGroupLocation(): Expression<string> {
  return new ResourceGroupLocationExpression();
}

export function getReference<T>(resource: ResourceReference<T>): Expression<T> {
  return new ReferenceExpression<T>(resource);
}

export function getResourceId<T>(resource: ResourceReference<T>): Expression<string> {
  return new ResourceIdExpression(resource);
}