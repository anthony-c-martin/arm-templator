export interface Template {
  addResource<T>(resource: Resource<T>, dependencies: Resource<any>[]): void
}

export interface Expression<T> {
  value: T;
}

export type OptionalExpression<T> = T | Expression<T>

export interface Resource<T> {
  type: OptionalExpression<string>;
  apiVersion: OptionalExpression<string>;
  name: OptionalExpression<string>;
  location: OptionalExpression<string>;
  properties: OptionalExpression<T>;
}

export class ParameterExpression<T> implements Expression<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}