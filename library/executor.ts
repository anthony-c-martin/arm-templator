import { Template, Resource, ExpressionBase, ParameterExpression } from "./language";

function formatObject(input: any): any {
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

function formatResourceObject<T>(resource: Resource<T>): any {
  return {
    type: formatObject(resource.type),
    apiVersion: formatObject(resource.apiVersion),
    name: formatObject(resource.name),
    location: formatObject(resource.location),
    properties: formatObject(resource.properties),
  };
}

function formatParameters(template: Template): any {
  const output: any = {};
  for (const parameter of template.parameters) {
    output[parameter.name] = {
      type: parameter.getType(),
      defaultValue: parameter.defaultValue,
    };
  }

  return output;
}

export function renderTemplate(template: Template): any {
  const resources = template.resources.map(formatResourceObject);
  const parameters = formatParameters(template);

  return {
    '$schema': "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
    contentVersion: '1.0.0.0',
    parameters,
    variables: { },
    resources,
    outputs: { },
  };
}