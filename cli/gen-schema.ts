import path = require('path');
import fs from 'fs';
import os from 'os';

abstract class Property {
  abstract getType(): string;
}

class PrimitiveProperty extends Property {
  constructor(type: string) {
    super();
    this.type = type;
  }
  type: string;
  getType(): string {
    return this.type;
  }
}

class EnumProperty extends Property {
  constructor(values: string[]) {
    super();
    this.values = values;
  }
  values: string[];
  getType(): string {
    return `('${this.values.join("' | '")}')`;
  }
}

class OneOfProperty extends Property {
  constructor(properties: Property[]) {
    super();
    this.properties = properties;
  }
  properties: Property[];
  getType(): string {
    return this.properties.map(p => p.getType()).join(" | ");
  }
}

class RefProperty extends Property {
  constructor(refName: string) {
    super();
    this.refName = refName;
  }
  refName: string;
  getType(): string {
    return this.refName;
  }
}

class ArrayProperty extends Property {
  constructor(items: Property) {
    super();
    this.items = items;
  }
  items: Property;
  getType(): string {
    return `${this.items.getType()}[]`;
  }
}

class ObjectProperty extends Property {
  constructor(properties: { [name: string]: Property }, required: string[]) {
    super();
    this.properties = properties;
    this.required = required;
  }
  properties: { [name: string]: Property };
  required: string[];
  getType(): string {
    //todo
    return 'any';
  }
}

function getProperty(prop: any): Property | null {
  if (prop.$ref) {
    const defsIndex = prop.$ref.indexOf('#/definitions/');
    if (defsIndex === 0) {
      const refName = prop.$ref.slice('#/definitions/'.length);

      return new RefProperty(refName);
    } 
    
    throw `Unable to process $ref ${prop.$ref}`;
  }

  if (prop.oneOf) {
    const properties = prop.oneOf.map(getProperty);
    return new OneOfProperty(properties);
  }

  if (!prop.type) {
    return null;
  }

  switch (prop.type) {
    case 'boolean':
      return new PrimitiveProperty('boolean');
    case 'string':
      return getStringProperty(prop);
    case 'integer':
    case 'number':
      return new PrimitiveProperty('number');
    case 'array':
      if (!prop.items) {
        throw `Missing items declaration`;
      }
      return getArrayProperty(prop);
    case 'object':
      if (!prop.properties) {
        //todo additionalProperties
        return null;
      }
      return getObjectProperty(prop);
    default:
      throw `Unexpected type ${prop.type}`;
  }
}

function getArrayProperty(prop: any) {
  const items = flattenOneOf(prop.items, p => prop.items = p);
  const itemProps = getProperty(items);
  if (!(itemProps instanceof Property)) {
    throw `Failed to read array property ${JSON.stringify(prop)}`;
  }

  return new ArrayProperty(itemProps);
}

function getObjectProperty(prop: any) {
  const properties: { [name: string]: Property } = {};
  const required: string[] = [];

  for (const name of Object.keys(prop.properties)) {
    const subProp = flattenOneOf(prop.properties[name], p => prop.properties[name] = p);

    const property = getProperty(subProp);
    if (property instanceof Property) {
      properties[name] = property;
    }
  }

  if (prop.required) {
    for (const name of prop.required) {
      required.push(name);
    }
  }

  return new ObjectProperty(properties, required);
}

function getStringProperty(prop: any): Property {
  if (prop.enum) {
    return new EnumProperty(prop.enum);
  }

  return new PrimitiveProperty('string');  
}

function getDefinition(jsonDef: any, jsonName: string): ObjectProperty {
  if (!jsonDef.properties) {
    return new ObjectProperty({}, []);
  }

  return getObjectProperty(jsonDef);
}

function flattenOneOf(prop: any, replaceFunc: (prop: any) => void) {
  if (!Array.isArray(prop.oneOf)) {
    return prop;
  }

  if (prop.oneOf.length === 1) {
    prop = prop.oneOf[0];
  } else if (prop.oneOf.length === 2) {
    if (prop.oneOf[0].$ref === 'https://schema.management.azure.com/schemas/common/definitions.json#/definitions/expression') {
      prop = prop.oneOf[1];
    } else if (prop.oneOf[1].$ref === 'https://schema.management.azure.com/schemas/common/definitions.json#/definitions/expression') {
      prop = prop.oneOf[0];
    }
  }

  replaceFunc(prop);
  return prop;
}

let output = '';
function appendOutput(line: string) {
  output += `${line}${os.EOL}`;
}

const schemaPath = path.resolve(process.argv[2]);
const schema = JSON.parse(fs.readFileSync(schemaPath, { encoding: 'utf8' }));

const definitions = schema.definitions;

appendOutput(`// Generated using 'npm run schema ${schemaPath}'`);
appendOutput(`import { Expressionable, ResourceDefinition } from '../lib/common';`);
appendOutput(``);

for (const name of Object.keys(definitions)) {
  const definition = getDefinition(definitions[name], name);

  if (!(definition instanceof ObjectProperty)) {
    throw `Unable to process properties for definition ${name}`;
  }

  appendOutput(`export interface ${name} {`);
  for (const key of Object.keys(definition.properties)) {
    const required = definition.required.indexOf(key) > -1;
    appendOutput(`  ${key}${required ? '' : '?'}: Expressionable<${definition.properties[key].getType()}>;`);
  }
  appendOutput(`}`);
  appendOutput(``);
}

const namespace = schema.title;
const shortNamespace = namespace.split('.').pop();
let globalApiVersion;

if (!schema.resourceDefinitions) {
  throw `Unable to find resource definitions`;
}

appendOutput(`export class ${shortNamespace}Builder {`);
const resources = schema.resourceDefinitions;
for (const name of Object.keys(resources)) {
  const definition = getDefinition(resources[name], name);
  const properties = definition.properties.properties;
  if (!(properties instanceof RefProperty)) {
    throw `Unable to process properties for resource ${name}`;
  }

  const type = definition.properties.type;
  if (!(type instanceof EnumProperty)) {
    throw `Unable to process type for resource ${name}`;
  }

  const apiVersion = definition.properties.apiVersion;
  if (!(apiVersion instanceof EnumProperty)) {
    throw `Unable to process apiVersion for resource ${name}`;
  }
  globalApiVersion = apiVersion.values[0];

  appendOutput(`  public static ${name}(name: Expressionable<string>, properties: ${properties.refName}, location: Expressionable<string>): ResourceDefinition<${properties.refName}> {`);
  appendOutput(`    return {`);
  appendOutput(`      type: '${type.values[0]}',`);
  appendOutput(`      apiVersion: '${apiVersion.values[0]}',`);
  appendOutput(`      name,`);
  appendOutput(`      location,`);
  appendOutput(`      properties,`);
  appendOutput(`    };`);
  appendOutput(`  }`);
}
appendOutput(`}`);

fs.writeFileSync(
  `${__dirname}/../defs/${shortNamespace.toLowerCase()}.${globalApiVersion}.ts`,
  output,
  { encoding: 'utf8' });