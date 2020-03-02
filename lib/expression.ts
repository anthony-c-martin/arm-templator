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

class ConcatExpression extends Expression<string> {
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

class CustomExpression<T> extends Expression<T> {
  private name: string;
  private components: Expressionable<any>[];
  constructor(name: string, components: Expressionable<any>[]) {
    super();
    this.name = name;
    this.components = components;
  }

  format() {
    return formatFunction(this.name, ...this.components);
  }
}

export function concat(...components: Expressionable<string>[]): Expression<string> {
  return new ConcatExpression(components);
}

export function custom<TOutput>(name: string, components: Expressionable<any>[]): Expression<TOutput> {
  return new CustomExpression<TOutput>(name, components);
}

export function resourceGroupLocation(): Expression<string> {
  return custom<any>('resourceGroup', []).call('location');
}

export function getReference<T>(resource: ResourceReference<T>): Expression<T> {
  return custom<T>('reference', [getResourceId(resource)]);
}

export function getResourceId<T>(resource: ResourceReference<T>): Expression<string> {
  return custom<string>('resourceId', [resource.type, ...resource.name]);
}