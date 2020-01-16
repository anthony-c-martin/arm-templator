import { Expressionable, ResourceReference, ResourceDefinition, ExpressionBase, Expression, formatExpressionable } from './common';
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
  name: Expressionable<string>;
  location: Expressionable<string>;
  properties: Expressionable<T>;
  dependsOn?: Expressionable<string>[];
}

export class Template {
  constructor() {
    this.resources = [];
    this.parameters = [];
    this.variables = [];
    this.outputs = [];
  }

  resources: TemplateResource<any>[];
  parameters: ParameterExpression<any>[];
  variables: VariableExpression<any>[];
  outputs: TemplateOutput<any>[];

  deploy<T>(resource: ResourceDefinition<T>, dependencies: ResourceReference<any>[]): ResourceReference<T> {
    const templateResource: TemplateResource<T> = {
      type: resource.type,
      apiVersion: resource.apiVersion,
      name: resource.name,
      location: resource.location,
      properties: resource.properties,
    };

    if (dependencies.length > 0) {
      templateResource.dependsOn = dependencies.map(d => new ResourceIdExpression(d));
    }

    this.resources.push(templateResource);
    
    return {
      type: resource.type,
      apiVersion: resource.apiVersion,
      name: resource.name,
    };
  }

  addVariable<T>(name: string, value: Expressionable<T>): Expression<T> {
    const variable = new VariableExpression(name, value);
    this.variables.push(variable);

    return variable;
  }

  addObjectParameter<T extends object>(name: string, defaultValue?: T): Expression<T> {
    const parameter = new ParameterExpression(name, TYPE_OBJECT, defaultValue);
    this.parameters.push(parameter);

    return parameter;
  }

  addArrayParameter<T>(name: string, defaultValue?: T[]): Expression<T[]> {
    const parameter = new ParameterExpression(name, TYPE_ARRAY, defaultValue);
    this.parameters.push(parameter);

    return parameter;
  }

  addBooleanParameter(name: string, defaultValue?: boolean): Expression<boolean> {
    const parameter = new ParameterExpression(name, TYPE_BOOL, defaultValue);
    this.parameters.push(parameter);

    return parameter;
  }

  addNumericParameter(name: string, defaultValue?: number): Expression<number> {
    const parameter = new ParameterExpression(name, TYPE_INT, defaultValue);
    this.parameters.push(parameter);

    return parameter;
  }

  addStringParameter(name: string, defaultValue?: string): Expression<string> {
    const parameter = new ParameterExpression(name, TYPE_STRING, defaultValue);
    this.parameters.push(parameter);

    return parameter;
  }

  addSecureStringParameter(name: string, defaultValue?: string): Expression<string> {
    const parameter = new ParameterExpression(name, TYPE_SECURESTRING, defaultValue);
    this.parameters.push(parameter);

    return parameter;
  }

  addObjectOutput<T extends object>(name: string, value: Expressionable<T>) {
    const output = new TemplateOutput(name, TYPE_OBJECT, value);
    this.outputs.push(output);
  }

  addArrayOutput<T>(name: string, value: Expressionable<T[]>) {
    const output = new TemplateOutput(name, TYPE_ARRAY, value);
    this.outputs.push(output);
  }

  addBooleanOutput(name: string, value: Expressionable<boolean>) {
    const output = new TemplateOutput(name, TYPE_BOOL, value);
    this.outputs.push(output);
  }

  addNumberOutput(name: string, value: Expressionable<number>) {
    const output = new TemplateOutput(name, TYPE_INT, value);
    this.outputs.push(output);
  }

  addStringOutput(name: string, value: Expressionable<string>) {
    const output = new TemplateOutput(name, TYPE_STRING, value);
    this.outputs.push(output);
  }

  addSecureStringOutput(name: string, value: Expressionable<string>) {
    const output = new TemplateOutput(name, TYPE_SECURESTRING, value);
    this.outputs.push(output);
  }

  getReference<T>(resource: ResourceReference<T>): Expression<string> {
    return new ReferenceExpression<T>(resource);
  }

  getResourceId<T>(resource: ResourceReference<T>): Expression<string> {
    return new ResourceIdExpression(resource);
  }

  concat(...components: Expressionable<string>[]) {
    return new ConcatExpression(components);
  }

  resourceGroupLocation() {
    return new ResourceGroupLocationExpression();
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
    name: formatObject(resource.name),
    location: formatObject(resource.location),
    properties: formatObject(resource.properties),
  };

  if (resource.dependsOn) {
    output.dependsOn = formatObject(resource.dependsOn);
  }
  
  return output;
}

function formatParameters(template: Template): any {
  const output: any = {};
  for (const parameter of template.parameters) {
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

function formatVariables(template: Template): any {
  const output: any = {};
  for (const variable of template.variables) {
    output[variable.name] = `[${formatExpressionable(variable.value)}]`;
  }

  return output;
}

function formatOutputs(template: Template): any {
  const outputs: any = {};
  for (const output of template.outputs) {
    const outputDefinition: any = {
      type: output.getType(),
      value: `[${formatExpressionable(output.value)}]`,
    };

    outputs[output.name] = outputDefinition;
  }

  return outputs;
}

export function renderTemplate(template: Template): any {
  const resources = template.resources.map(formatResourceObject);
  const parameters = formatParameters(template);
  const variables = formatVariables(template);
  const outputs = formatOutputs(template);

  return {
    $schema: 'https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#',
    contentVersion: '1.0.0.0',
    parameters,
    variables,
    resources,
    outputs,
  };
}