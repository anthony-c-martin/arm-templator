import { Template, Resource } from "./language";

export class ConcreteTemplate implements Template {
  constructor() {
    this.resources = [];
  }

  resources: Resource<any>[];
  addResource<T>(resource: Resource<T>, dependencies: Resource<any>[]) {
    this.resources.push(resource);
  }
}

export function renderJson(template: ConcreteTemplate) {
  const json = {
    '$schema': "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    contentVersion: '1.0.0.0',
    parameters: {
    },
    resources: template.resources,
  };

  return JSON.stringify(json, null, 2);
}