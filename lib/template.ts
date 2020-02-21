import { Expressionable, ResourceReference, ResourceDefinition, ExpressionBase, Expression, formatTopLevelExpressionable, formatFunction } from './common';
import { ParameterExpression, ResourceIdExpression, ReferenceExpression, ConcatExpression, ResourceGroupLocationExpression } from './expression';

const TYPE_OBJECT = 'object';
const TYPE_ARRAY = 'array';
const TYPE_STRING = 'string';
const TYPE_SECURESTRING = 'securestring';
const TYPE_INT = 'int';
const TYPE_BOOL = 'bool';

interface ResourceDeployment {
  resource: ResourceDefinition<any, any>,
  dependencies?: ResourceReference<any>[],
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
  public static readonly String = new ParamType<string>(TYPE_STRING);
  public static readonly SecureString = new ParamType<string>(TYPE_SECURESTRING);
  public static readonly Int = new ParamType<number>(TYPE_INT);
  public static readonly Bool = new ParamType<boolean>(TYPE_BOOL);
  public static Array<T>(): ParamType<T[]> {
    return new ParamType<T[]>(TYPE_ARRAY);
  }
  public static Object<T>(): ParamType<T> {
    return new ParamType<T[]>(TYPE_OBJECT);
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
  public static readonly String = new OutputType<string>(TYPE_STRING);
  public static readonly Int = new OutputType<number>(TYPE_INT);
  public static readonly Bool = new OutputType<boolean>(TYPE_BOOL);
  public static Array<T>(): OutputType<T[]> {
    return new OutputType<T[]>(TYPE_ARRAY);
  }
  public static Object<T>(): OutputType<T> {
    return new OutputType<T[]>(TYPE_OBJECT);
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

  private readonly resources: ResourceDeployment[];
  private readonly paramTypes: Paramify<TParams>;
  private readonly outputTypes: Outputify<TOutputs>;

  deploy<T, U>(resource: ResourceDefinition<T, U>, dependencies?: ResourceReference<any>[]): ResourceReference<T> {
    this.resources.push({
      resource,
      dependencies
    });
    
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
        expressionEvaluationOptions: {
          scope: 'Inner',
        },
        mode: 'Incremental',
        template: builder.render(),
        parameters: renderParams(parameters),
      }
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
    return undefined;
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

function formatOptionalProperties(input: any, output: any, keys: string[]) {
  if (!input) { 
    return;
  }

  for (const key of keys) {
    if (input[key]) {
      output[key] = formatObject(input[key]);
    }
  }
}

function formatResourceObject<T>(deployment: ResourceDeployment): any {
  const { resource, dependencies } = deployment;

  const output: any = {
    type: formatObject(resource.type),
    apiVersion: formatObject(resource.apiVersion),
    name: formatObject(concatResourceName(...resource.name)),
    properties: formatObject(resource.properties),
  };

  if (resource.location) {
    output.location = formatObject(resource.location);
  }

  formatOptionalProperties(resource.additional, output, ['identity', 'sku', 'zones', 'kind', 'plan', 'tags']);

  if (dependencies && dependencies.length > 0) {
    output.dependsOn = formatObject(dependencies.map(d => getResourceId(d)));
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

class CustomExpression<T> extends Expression<T> {
  private name: string;
  private components: Expressionable<any>[];
  constructor(name: string, components: Expressionable<any>[]) {
    super();
    this.name = name;
    this.components = components;
  }

  format() {
    return formatFunction(this.name, ...this.components);
  }
}

/* idea for usage:
function getPrimaryConnectionString(resource: ResourceReference<any> & { type: 'Microsoft.Eventhub/namespaces/authorizationRules'}): Expressionable<string> {
  return customExpression<any>(
    'listKeys', [
      getResourceId(resource),
      '2017-04-01'
    ]
  ).call('primaryConnectionString');
} */
export function customExpression<TOutput>(name: string, components: Expressionable<any>[]): Expression<TOutput> {
  return new CustomExpression<TOutput>(name, components);
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