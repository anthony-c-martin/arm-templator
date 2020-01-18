export abstract class ExpressionBase {
  abstract format(): string;
}

export abstract class Expression<T> extends ExpressionBase {
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
  location: Expressionable<string>;
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