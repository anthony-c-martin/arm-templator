const TYPE_OBJECT = 'object';
const TYPE_ARRAY = 'array';
const TYPE_STRING = 'string';
const TYPE_SECURESTRING = 'securestring';
const TYPE_INT = 'int';
const TYPE_BOOL = 'bool';

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

export type Expressionify<T> = {
  readonly [P in keyof T]: Expressionable<T[P]>;
}

export interface NameType {
  readonly type: string;
  readonly name: Expressionable<string>;
}

export interface ResourceBase {
  readonly namespace: string;
  readonly apiVersion: string;
  readonly nameTypes: NameType[];
}

export type Paramify<T> = {
  [P in keyof T]: ParamType<T[P]>;
}

export class ParamType<T> {
  constructor(type: string) {
    this.type = type;
  }
  type: string;
}

export class Params {
  public static readonly String = new ParamType<string>(TYPE_STRING);
  public static readonly SecureString = new ParamType<string>(TYPE_SECURESTRING);
  public static readonly Int = new ParamType<number>(TYPE_INT);
  public static readonly Bool = new ParamType<boolean>(TYPE_BOOL);
  public static Array<T>(): ParamType<T[]> {
    return new ParamType<T[]>(TYPE_ARRAY);
  }
  public static Object<T>(): ParamType<T> {
    return new ParamType<T[]>(TYPE_OBJECT);
  }
}

export type Outputify<T> = {
  [P in keyof T]: OutputType<T[P]>;
}

export class OutputType<T> {
  constructor(type: string) {
    this.type = type;
  }
  type: string;
}

export class Outputs {
  public static readonly String = new OutputType<string>(TYPE_STRING);
  public static readonly Int = new OutputType<number>(TYPE_INT);
  public static readonly Bool = new OutputType<boolean>(TYPE_BOOL);
  public static Array<T>(): OutputType<T[]> {
    return new OutputType<T[]>(TYPE_ARRAY);
  }
  public static Object<T>(): OutputType<T> {
    return new OutputType<T[]>(TYPE_OBJECT);
  }
}

function escapeParameterStringLiteral(input: string) {
  return input.replace(/\'/g, '\'\'');
}

function escapeStringLiteral(input: string) {
  return input.replace(/^\[/, '[[');
}

function formatExpressionable(expression: Expressionable<any>): any {
  if (expression instanceof ExpressionBase) {
    return expression.format();
  }

  if (typeof expression === 'string') {
    return `'${escapeParameterStringLiteral(expression)}'`;
  }

  if (Array.isArray(expression)) {
    return expression.map(formatTopLevelExpressionable);
  }

  if (typeof expression === 'object') {
    const output: any = {};
    for (const key of Object.keys(expression)) {
      output[key] = formatTopLevelExpressionable(expression[key]);
    }

    return output;
  }

  return expression;
}

export function formatTopLevelExpressionable(expression: Expressionable<any>) {
  if (expression instanceof ExpressionBase) {
    return `[${expression.format()}]`;
  }

  if (typeof expression === 'string') {
    return escapeStringLiteral(expression);
  }

  return formatExpressionable(expression);
}

export function formatFunction(name: string, ...parameters: Expressionable<any>[]) {
  return `${name}(${parameters.map(formatExpressionable).join(', ')})`;
}