export interface Template {
  addResource<T>(resource: Resource<T>, dependencies: Resource<any>[]);
}

export interface Expression<T> {
  value: T;
}

export type OptionalExpression<T> = T | Expression<T>

export interface Resource<T> {
  type: OptionalExpression<string>;
  apiVersion: OptionalExpression<string>;
  location: OptionalExpression<string>;
  properties: OptionalExpression<T>;
}