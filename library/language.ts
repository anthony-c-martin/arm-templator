export class Template {
  constructor() {
    this.parameters = [];
    this.resources = [];
  }

  parameters: ParameterExpression<any>[];
  resources: Resource<any>[];

  addResource<T>(resource: Resource<T>, dependencies: Resource<any>[]) {
    this.resources.push(resource);
  }

  addParameter<T>(name: string, defaultValue: T): OptionalExpression<T> {
    const parameter = new ParameterExpression(name, defaultValue);
    this.parameters.push(parameter);

    return parameter;
  }
}

export abstract class ExpressionBase {
  abstract format(): string;
}

export abstract class Expression<T> extends ExpressionBase {
}

export type OptionalExpression<T> = T | Expression<T>

export interface Resource<T> {
  type: string;
  apiVersion: string;
  name: OptionalExpression<string>;
  location: OptionalExpression<string>;
  properties: OptionalExpression<T>;
}

export class ParameterExpression<T> extends Expression<T> {
  name: string;
  defaultValue: T;
  constructor(name: string, defaultValue: T) {
    super();
    this.name = name;
    this.defaultValue = defaultValue;
  }

  format() {
    return `parameters('${this.name}')`;
  }

  getType(): string {
    return typeof this.defaultValue;       
  }
}