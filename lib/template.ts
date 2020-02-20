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

type Expressionify<T> = {
  readonly [P in keyof T]: Expressionable<T[P]>;
}

export class TemplateBuilder<TParams, TOutputs> {
  private readonly params: Paramify<TParams>;
  private readonly outputs: Outputify<TOutputs>;
  private readonly execute: (params: Expressionify<TParams>, template: Template<TParams, TOutputs>) => Expressionify<TOutputs>;

  constructor(params: Paramify<TParams>, outputs: Outputify<TOutputs>, execute: (params: Expressionify<TParams>, template: Template<TParams, TOutputs>) => Expressionify<TOutputs>) {
    this.params = params;
    this.outputs = outputs;
    this.execute = execute;
  }

  render() {
    const template = new Template<TParams, TOutputs>(this.params, this.outputs);
    const params = getParamExpressions(this.params);
    const outputs = this.execute(params, template);

    return template.render(outputs);
  }
}

type Paramify<T> = {
  [P in keyof T]: ParamType<T[P]>;
}

class ParamType<T> {
  constructor(type: string) {
    this.type = type;
  }
  type: string;
}

export class Params {
  public static readonly String = new ParamType<string>('string');
  public static readonly SecureString = new ParamType<string>('securestring');
  public static readonly Int = new ParamType<number>('int');
  public static readonly Bool = new ParamType<boolean>('bool');
  public static Array<T>(): ParamType<T[]> {
    return new ParamType<T[]>('array');
  }
  public static Object<T>(): ParamType<T> {
    return new ParamType<T[]>('object');
  }
}

type Outputify<T> = {
  [P in keyof T]: OutputType<T[P]>;
}

class OutputType<T> {
  constructor(type: string) {
    this.type = type;
  }
  type: string;
}

export class Outputs {
  public static readonly String = new OutputType<string>('string');
  public static readonly Int = new OutputType<number>('int');
  public static readonly Bool = new OutputType<boolean>('bool');
  public static Array<T>(): ParamType<T[]> {
    return new OutputType<T[]>('array');
  }
  public static Object<T>(): ParamType<T> {
    return new OutputType<T[]>('object');
  }
}

export function buildTemplate<TParams, TOutputs>(params: Paramify<TParams>, outputs: Outputify<TOutputs>, execute: (params: Expressionify<TParams>, template: Template<TParams, TOutputs>) => Expressionify<TOutputs>) {
  return new TemplateBuilder<TParams, TOutputs>(params, outputs, execute);
}

function getParamExpressions<TParams>(params: Paramify<TParams>): Expressionify<TParams> {
  let result: any = {};
  for (const k in params) {
      result[k] = new ParameterExpression<any>(k as string, params[k].type);
  }
  return result;
}

export class Template<TParams, TOutputs> {
  constructor(paramTypes: Paramify<TParams>, outputTypes: Outputify<TOutputs>) {
    this.resources = [];
    this.paramTypes = paramTypes;
    this.outputTypes = outputTypes;
  }

  public getParam<K extends keyof TParams>(key: K): Expressionable<TParams[K]> {
    return new ParameterExpression<TParams[K]>(key as string, this.paramTypes[key].type);
  }

  private readonly resources: TemplateResource<any>[];
  private readonly paramTypes: Paramify<TParams>;
  private readonly outputTypes: Outputify<TOutputs>;

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

  render(outputs: Expressionify<TOutputs>): any {
    return {
      $schema: 'https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#',
      contentVersion: '1.0.0.0',
      parameters: formatParameters(this.paramTypes),
      resources: this.resources.map(formatResourceObject),
      outputs: formatOutputs(this.outputTypes, outputs),
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

function formatParameters<T>(types: Paramify<T>): any {
  const output: any = {};
  for (const name in types) {
    output[name] = {
      type: types[name].type,
    };
  }

  return output;
}

function formatOutputs<T>(types: Outputify<T>, values: Expressionify<T>): any {
  const result: any = {};
  for (const name in types) {
    result[name] = {
      type: types[name].type,
      value: formatTopLevelExpressionable(values[name]),
    };
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