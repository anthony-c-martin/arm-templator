import { Expression, Expressionable, formatFunction, ResourceReference, formatExpressionable } from './common';

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

export class TemplateOutput<T> {
  name: string;
  type: string;
  value: Expressionable<T>;
  constructor(name: string, type: string, value: Expressionable<T>) {
    this.name = name;
    this.type = type;
    this.value = value;
  }

  getType(): string {
    return this.type;
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
    return formatFunction('resourceId', this.resource.type, ...this.resource.name);
  }
}

function compressConcatComponents(expr: ConcatExpression): Expressionable<string>[] {
  return expr.components.reduce<Expressionable<string>[]>((acc, cur, i) => {
    if (cur instanceof ConcatExpression) {
      const expanded = compressConcatComponents(cur);
      if (acc.length > 0 && typeof acc[acc.length - 1] === 'string'
         && expanded.length > 0 && typeof expanded[0] === 'string') {
        acc[acc.length - 1] = acc[acc.length - 1] + expanded[0];
        return acc.concat(expanded.slice(1));
      }

      return acc.concat(expanded);
    }
    
    if (acc.length > 0 && typeof acc[acc.length - 1] === 'string'
       && typeof cur === 'string') {
      acc[acc.length - 1] = acc[acc.length - 1] + cur;
      return acc;
    }

    acc.push(cur);
    return acc;
  }, []);
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
    const compressed = compressConcatComponents(this);

    return formatFunction('concat', ...compressed);
  }
}

export class ResourceGroupLocationExpression extends Expression<string> {
  format() {
    return `${formatFunction('resourceGroup')}.location`;
  }
}