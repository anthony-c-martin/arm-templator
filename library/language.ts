export interface TemplateResource<T> {
  type: string;
  apiVersion: string;
  name: OptionalExpression<string>;
  location: OptionalExpression<string>;
  properties: OptionalExpression<T>;
  dependsOn: OptionalExpression<string>[] | null;
}

export class Template {
  constructor() {
    this.parameters = [];
    this.resources = [];
  }

  parameters: ParameterExpression<any>[];
  resources: TemplateResource<any>[];

  deploy<T>(resource: ResourceDefinition<T>, dependencies: ResourceReference<any>[]): ResourceReference<T> {
    const templateResource: TemplateResource<T> = {
      type: resource.type,
      apiVersion: resource.apiVersion,
      name: resource.name,
      location: resource.location,
      properties: resource.properties,
      dependsOn: (dependencies.length > 0) ? dependencies.map(d => new ResourceIdExpression(d)) : null,
    };

    this.resources.push(templateResource);
    
    return {
      type: resource.type,
      apiVersion: resource.apiVersion,
      name: resource.name,
    };
  }

  addObjectParameter<T extends object>(name: string, defaultValue?: T): Expression<T> {
    const parameter = new ParameterExpression(name, 'object', defaultValue);
    this.parameters.push(parameter);

    return parameter;
  }

  addArrayParameter<T>(name: string, defaultValue?: T[]): Expression<T[]> {
    const parameter = new ParameterExpression(name, 'array', defaultValue);
    this.parameters.push(parameter);

    return parameter;
  }

  addBooleanParameter(name: string, defaultValue?: boolean): Expression<boolean> {
    const parameter = new ParameterExpression(name, 'boolean', defaultValue);
    this.parameters.push(parameter);

    return parameter;
  }

  addNumericParameter(name: string, defaultValue?: number): Expression<number> {
    const parameter = new ParameterExpression(name, 'number', defaultValue);
    this.parameters.push(parameter);

    return parameter;
  }

  addStringParameter(name: string, defaultValue?: string): Expression<string> {
    const parameter = new ParameterExpression(name, 'string', defaultValue);
    this.parameters.push(parameter);

    return parameter;
  }

  addSecureStringParameter(name: string, defaultValue?: string): Expression<string> {
    const parameter = new ParameterExpression(name, 'securestring', defaultValue);
    this.parameters.push(parameter);

    return parameter;
  }

  getReference<T>(resource: ResourceReference<T>): Expression<string> {
    return new ReferenceExpression<T>(resource);
  }

  getResourceId<T>(resource: ResourceReference<T>): Expression<string> {
    return new ResourceIdExpression(resource);
  }

  concat(...components: OptionalExpression<string>[]) {
    return new ConcatExpression(components);
  }
}

export abstract class ExpressionBase {
  abstract format(): string;
}

export abstract class Expression<T> extends ExpressionBase {
}

export type OptionalExpression<T> = T | Expression<T>

export interface ResourceDefinition<T> {
  type: string;
  apiVersion: string;
  name: OptionalExpression<string>;
  location: OptionalExpression<string>;
  properties: OptionalExpression<T>;
}

export interface ResourceReference<T> {
  type: string;
  apiVersion: string;
  name: OptionalExpression<string>;
}

function formatOptionalExpression(expression: OptionalExpression<string>) {
  if (expression instanceof ExpressionBase) {
    return expression.format();
  }

  return `'${expression}'`
}

class ParameterExpression<T> extends Expression<T> {
  name: string;
  type: string;
  defaultValue?: T;
  constructor(name: string, type: string, defaultValue?: T) {
    super();
    this.name = name;
    this.type = type;
    this.defaultValue = defaultValue;
  }

  format() {
    return `parameters('${this.name}')`;
  }

  getType(): string {
    return this.type;      
  }
}

class ReferenceExpression<T> extends Expression<T> {
  resource: ResourceReference<T>;
  constructor(resource: ResourceReference<T>) {
    super();
    this.resource = resource;
  }

  format() {
    const resourceIdExpression = new ResourceIdExpression(this.resource);
    return `reference('${resourceIdExpression.format()}')`;
  }
}

class ResourceIdExpression extends Expression<string> {
  resource: ResourceReference<any>;
  constructor(resource: ResourceReference<any>) {
    super();
    this.resource = resource;
  }

  format() {
    return `resourceId('${this.resource.type}', ${formatOptionalExpression(this.resource.name)})`;
  }
}

class ConcatExpression extends Expression<string> {
  components: OptionalExpression<string>[];
  constructor(components: OptionalExpression<string>[]) {
    super();
    if (components.length < 1) {
      throw new Error(`Cannot build concat with 0 elements`);
    }

    this.components = components;
  }

  format() {
    const formatted = this.components.map(formatOptionalExpression);
    return `concat(${formatted.join(', ')})`;
  }
}