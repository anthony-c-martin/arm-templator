export interface Template {
  addResource<T>(resource: Resource<T>, dependencies: Resource<any>[]): void
}

export abstract class Expression {
  abstract format(): string;
}

export type OptionalExpression<T> = T | Expression

export interface Resource<T> {
  type: string;
  apiVersion: string;
  name: OptionalExpression<string>;
  location: OptionalExpression<string>;
  properties: OptionalExpression<T>;
}

export class ParameterExpression<T> extends Expression {
  value: T;
  constructor(value: T) {
    super();
    this.value = value;
  }

  format() {
    return `parameters('${this.value}')`;
  }
}