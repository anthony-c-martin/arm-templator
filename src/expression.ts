import { Expression, Expressionable, formatFunction, ResourceReference } from './common';

export class ParameterExpression<T> extends Expression<T> {
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
    return formatFunction('parameters', this.name);
  }

  getType(): string {
    return this.type;
  }
}

export class VariableExpression<T> extends Expression<T> {
  name: string;
  value: Expressionable<T>;
  constructor(name: string, value: Expressionable<T>) {
    super();
    this.name = name;
    this.value = value;
  }

  format() {
    return formatFunction('variables', this.name);
  }
}

export class ReferenceExpression<T> extends Expression<T> {
  resource: ResourceReference<T>;
  constructor(resource: ResourceReference<T>) {
    super();
    this.resource = resource;
  }

  format() {
    const resourceIdExpression = new ResourceIdExpression(this.resource);
    return formatFunction('reference', resourceIdExpression);
  }
}

export class ResourceIdExpression extends Expression<string> {
  resource: ResourceReference<any>;
  constructor(resource: ResourceReference<any>) {
    super();
    this.resource = resource;
  }

  format() {
    return formatFunction('resourceId', this.resource.type, this.resource.name);
  }
}

export class ConcatExpression extends Expression<string> {
  components: Expressionable<string>[];
  constructor(components: Expressionable<string>[]) {
    super();
    if (components.length < 1) {
      throw new Error(`Cannot build concat with 0 elements`);
    }

    this.components = components;
  }

  format() {
    return formatFunction('concat', ...this.components);
  }
}