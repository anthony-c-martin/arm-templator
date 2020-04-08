import { Expressionable, ExpressionBase, formatTopLevelExpressionable, Paramify, Outputify, Expressionify, ResourceBase } from './common';
import { ParameterExpression, concat, getResourceId, getFullyQualifiedType, getNameComponents, custom } from './expression';

export interface DeploymentSettings {
  location: string;
  subscriptionId: string;
  resourceGroup: string;
  name: string;
  mode: 'Incremental' | 'Complete';
}

export class DeploymentBuilder<TParams, TOutputs> {
  constructor(settings: DeploymentSettings, builder: TemplateBuilder<TParams, TOutputs>, parameters: TParams) {
    this.settings = settings;
    this.builder = builder;
    this.parameters = parameters;
  }

  private settings: DeploymentSettings;
  private builder: TemplateBuilder<TParams, TOutputs>;
  private parameters: TParams;

  renderParams() {
    return renderParams(this.parameters);
  }

  renderTemplate() {
    return this.builder.render();
  }

  getSettings() {
    return this.settings;
  }
}

export function buildDeployment<TParams, TOutputs>(settings: DeploymentSettings, builder: TemplateBuilder<TParams, TOutputs>, parameters: TParams) {
  return new DeploymentBuilder(settings, builder, parameters);
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

class DependencyNode {
  constructor(resource: ResourceBase) {
    this.resource = resource;
  }

  readonly resource: ResourceBase;
  readonly children: DependencyNode[] = [];
}

interface ResourceDeployer {
  deploy<TResource extends ResourceBase>(resource: TResource): ResourceFuture<TResource>;
}

interface ResourceFuture<TData> {
  then<TOutput>(func: (deployer: ResourceDeployer, data: TData) => TOutput): TOutput;
}

export function thenMultiple<T1, T2, TOutput>(future1: ResourceFuture<T1>, future2: ResourceFuture<T2>, func: (deployer: ResourceDeployer, resourceA: T1, resourceB: T2) => TOutput): TOutput {
  const data1 = future1.then((deployer, data) => ({deployer, data}));
  const data2 = future2.then((deployer, data) => ({deployer, data}));

  return func(new AggregatedDeployer([data1.deployer, data2.deployer]), data1.data, data2.data);
}

class DependencyTrackingFuture<TData> implements ResourceFuture<TData> {
  private readonly deployer: ResourceDeployer;
  private readonly data: TData;
  constructor(deployer: ResourceDeployer, data: TData) {
    this.deployer = deployer;
    this.data = data;
  }

  then<TOutput>(func: (deployer: ResourceDeployer, data: TData) => TOutput): TOutput {
    return func(this.deployer, this.data);
  }
}

class AggregatedDeployer implements ResourceDeployer {
  private readonly deployers: ResourceDeployer[];
  constructor(deployers: ResourceDeployer[]) {
    this.deployers = deployers;
  }

  deploy<TResource extends ResourceBase>(resource: TResource): ResourceFuture<TResource> {
    let future;
    for (const deployer of this.deployers) {
      future = deployer.deploy(resource);
    }

    if (!future) {
      throw new Error(`No deployers specified`);
    }

    return future;
  }
}

class DependentDeployer implements ResourceDeployer {
  private readonly parents: DependencyNode[];
  constructor(parents: DependencyNode[]) {
    this.parents = parents;
  }

  deploy<TResource extends ResourceBase>(resource: TResource): ResourceFuture<TResource> {
    const node = new DependencyNode(resource);
    for (const parent of this.parents) {
      parent.children.push(node);
    }

    const deployer = new DependentDeployer([node]);
    return new DependencyTrackingFuture(deployer, resource);
  }
}

export class Template<TParams, TOutputs> implements ResourceDeployer {
  constructor(paramTypes: Paramify<TParams>, outputTypes: Outputify<TOutputs>) {
    this.resources = [];
    this.paramTypes = paramTypes;
    this.outputTypes = outputTypes;
  }

  public getParam<K extends keyof TParams>(key: K): Expressionable<TParams[K]> {
    return new ParameterExpression<TParams[K]>(key as string, this.paramTypes[key].type);
  }

  private readonly resources: DependencyNode[];
  private readonly paramTypes: Paramify<TParams>;
  private readonly outputTypes: Outputify<TOutputs>;

  deploy<TResource extends ResourceBase>(resource: TResource): ResourceFuture<TResource> {
    const node = new DependencyNode(resource);
    this.resources.push(node);

    const deployer = new DependentDeployer([node]);
    return new DependencyTrackingFuture(deployer, resource);
  }

  deployNested<TNestedParams, TNestedOutputs>(name: Expressionable<string>, location: Expressionable<string>, builder: TemplateBuilder<TNestedParams, TNestedOutputs>, parameters: Expressionify<TNestedParams>, dependencies?: ResourceFuture<any>[]): ResourceFuture<ResourceBase> {
    const resource = {
      namespace: 'Microsoft.Resources',
      apiVersion: '2019-10-01',
      nameTypes: [{type: 'deployments', name: name}],
      location: location,
      properties: {
        expressionEvaluationOptions: {
          scope: 'Inner',
        },
        mode: 'Incremental',
        template: builder.render(),
        parameters: renderParams(parameters),
      }
    };

    if (dependencies && dependencies.length > 0) {
      const futures = dependencies.map(d => d.then(deployer => deployer.deploy(resource)));
      return futures[0];
    } else {
      return this.deploy(resource);
    }
  }

  render(outputs: Expressionify<TOutputs>): any {
    return {
      $schema: 'https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#',
      contentVersion: '1.0.0.0',
      parameters: formatParameters(this.paramTypes),
      resources: getResourceDependencies(this.resources).map(({resource, dependencies}) => formatResourceObject(resource, dependencies)),
      outputs: formatOutputs(this.outputTypes, outputs),
    };
  }
}

function getResourceDependencies(nodes: DependencyNode[]) {
  const resources = listResources(nodes);
  const dependencies = resources.map<ResourceBase[]>(_ => []);

  const nodesToVisit = [...nodes];
  while (nodesToVisit.length > 0) {
    const [current] = nodesToVisit.splice(0, 1);

    for (const child of current.children) {
      const childIndex = resources.indexOf(child.resource);
      dependencies[childIndex].push(current.resource);
    }

    nodesToVisit.unshift(...current.children);
  }

  return resources.map((resource, i) => ({
    resource,
    dependencies: dependencies[i],
  })).sort((a, b) => a.dependencies.length - b.dependencies.length);
}

function listResources(nodes: DependencyNode[]) {
  const foundResources = new Set<ResourceBase>();

  const nodesToVisit = [...nodes];
  while (nodesToVisit.length > 0) {
    const [current] = nodesToVisit.splice(0, 1);
    nodesToVisit.unshift(...current.children);

    foundResources.add(current.resource);
  }

  return [...foundResources];
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

function formatResourceObject<TResource extends ResourceBase>(resource: TResource, dependencies: ResourceBase[]): any {
  const fullyQualifiedType = getFullyQualifiedType(resource);
  const fullyQuaifiedName = concatResourceName(...getNameComponents(resource));

  let output: any = {...resource};
  delete output.namespace;
  delete output.nameTypes;
  delete output.apiVersion;

  output = {
    type: fullyQualifiedType,
    apiVersion: resource.apiVersion,
    name: fullyQuaifiedName,
    ...output,
  };
  
  if (dependencies.length > 0) {
    output.dependsOn = formatObject(dependencies.map(d => getResourceId(d)));
  }

  return formatObject(output);
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