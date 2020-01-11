import { Template, Resource, Expression } from "./language";

export class ConcreteTemplate implements Template {
  constructor() {
    this.resources = [];
  }

  resources: Resource<any>[];
  addResource<T>(resource: Resource<T>, dependencies: Resource<any>[]) {
    this.resources.push(resource);
  }
}

function formatObject(input: any): any {
  if (Array.isArray(input)) {
    return input.map(formatObject);
  } else if (input instanceof Expression) {
    const expression = input as Expression;
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

function formatResourceObject<T>(resource: Resource<T>): any {
  return {
    type: formatObject(resource.type),
    apiVersion: formatObject(resource.apiVersion),
    name: formatObject(resource.name),
    location: formatObject(resource.location),
    properties: formatObject(resource.properties),
  };
}

function formatTemplateObject(template: ConcreteTemplate): any {
  const resources = template.resources.map(formatResourceObject);

  return {
    '$schema': "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    contentVersion: '1.0.0.0',
    parameters: { },
    variables: { },
    resources: resources,
    outputs: { },
  };
}

export function renderJson(template: ConcreteTemplate) {
  const json = formatTemplateObject(template);

  return JSON.stringify(json, null, 2);
}