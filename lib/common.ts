export abstract class ExpressionBase {
  abstract format(): string;
}

export abstract class Expression<T> extends ExpressionBase {
  call<P extends keyof T>(prop: P): Expression<T[P]> {
    return new CallExpression<T, P>(this, prop);
  }
}

class CallExpression<T, P extends keyof T> extends Expression<T[P]> {
  expression: Expression<T>;
  prop: P;
  constructor(expression: Expression<T>, prop: P) {
    super();
    this.expression = expression;
    this.prop = prop;
  }

  format() {
    return `${this.expression.format()}.${this.prop}`;
  }
}

export type Expressionable<T> = T | Expression<T>

export interface ResourceReference<T> {
  type: string;
  apiVersion: string;
  name: Expressionable<string>;
}

export interface ResourceDefinition<T> {
  type: string;
  apiVersion: string;
  name: Expressionable<string>;
  location?: Expressionable<string>;
  properties: Expressionable<T>;
}

function escapeParameterStringLiteral(input: string) {
  return input.replace(/\'/g, '\'\'');
}

function escapeStringLiteral(input: string) {
  return input.replace(/^\[/, '[[');
}

export function formatExpressionable(expression: Expressionable<string>) {
  if (expression instanceof ExpressionBase) {
    return expression.format();
  }

  return `'${escapeParameterStringLiteral(expression)}'`;
}

export function formatTopLevelExpressionable(expression: Expressionable<string>) {
  if (expression instanceof ExpressionBase) {
    return `[${expression.format()}]`;
  }

  return escapeStringLiteral(expression);
}

export function formatFunction(name: string, ...parameters: Expressionable<string>[]) {
  return `${name}(${parameters.map(formatExpressionable).join(', ')})`;
}