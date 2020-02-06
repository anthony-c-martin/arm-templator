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
  constructor(properties: { [name: string]: Property }, required: string[], oneOfs: Property[], additional: Property | null) {
    super();
    this.properties = properties;
    this.required = required;
    this.oneOfs = oneOfs;
    this.additional = additional;
  }
  properties: { [name: string]: Property };
  required: string[];
  oneOfs: Property[];
  additional: Property | null;
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

  if (prop.properties) {
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
  }

  let additionals = null;
  if (prop.additionalProperties) {
    additionals = getProperty(prop.additionalProperties);
  }

  let oneOfs = [];
  if (prop.oneOf) {
    oneOfs = prop.oneOf.map(getProperty);
  }

  return new ObjectProperty(properties, required, oneOfs, additionals);
}

function getStringProperty(prop: any): Property {
  if (prop.enum) {
    return new EnumProperty(prop.enum);
  }

  return new PrimitiveProperty('string');  
}

function getDefinition(jsonDef: any, jsonName: string): ObjectProperty {
  if (!jsonDef.properties) {
    return new ObjectProperty({}, [], [], null);
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

function writeHeaders(schemaPath: string) {
  appendOutput(`// Generated using 'npm run schema ${schemaPath}'`);
  appendOutput(`import { Expressionable, ResourceDefinition } from '../common';`);
  appendOutput(``);
}

function writeDefinition(definition: ObjectProperty, name: string) {
  appendOutput(`export interface ${name} {`);
  for (const key of Object.keys(definition.properties)) {
    const required = definition.required.indexOf(key) > -1;
    appendOutput(`  ${key}${required ? '' : '?'}: Expressionable<${definition.properties[key].getType()}>;`);
  }
  appendOutput(`}`);
  appendOutput(``);
}

function writeBuilderFunction(definition: ObjectProperty, name: string) {
  let resourceProperties = [];
  if (definition.properties.properties instanceof RefProperty) {
    resourceProperties = [definition.properties.properties];
  } else if (definition.oneOfs)
    for (const oneOf of definition.oneOfs) {
      if (!(oneOf instanceof RefProperty)) {
        throw `Unable to process oneOf for resource ${name}`;
      }

      const target = getDefinition(schema.definitions[oneOf.refName], oneOf.refName);
      if (!(target instanceof ObjectProperty)) {
        throw `Unable to process target with ref ${oneOf.refName} for resource ${name}`;
      }
      if (!(target.properties.properties instanceof RefProperty)) {
        throw `Unable to process target with ref ${oneOf.refName} for resource ${name}`;
      }

      resourceProperties.push(target.properties.properties);
    }
  else {
    throw `Unable to process properties for resource ${name}`;
  }

  const resourceType = definition.properties.type;
  if (!(resourceType instanceof EnumProperty)) {
    throw `Unable to process type for resource ${name}`;
  }

  const resourceApiVersion = definition.properties.apiVersion;
  if (!(resourceApiVersion instanceof EnumProperty)) {
    throw `Unable to process apiVersion for resource ${name}`;
  }
  globalApiVersion = resourceApiVersion.values[0];

  const propertiesType = resourceProperties.length > 0 ? resourceProperties.map(r => r.refName).join(' | ') : 'any';
  appendOutput(`  public static ${name}(name: Expressionable<string>, properties: ${propertiesType}, location: Expressionable<string>): ResourceDefinition<${propertiesType}> {`);
  appendOutput(`    return {`);
  appendOutput(`      type: '${resourceType.values[0]}',`);
  appendOutput(`      apiVersion: '${resourceApiVersion.values[0]}',`);
  appendOutput(`      name,`);
  appendOutput(`      location,`);
  appendOutput(`      properties,`);
  appendOutput(`    };`);
  appendOutput(`  }`);
}

const schemaPath = path.resolve(process.argv[2]);
const schema = JSON.parse(fs.readFileSync(schemaPath, { encoding: 'utf8' }));

const namespace = schema.title;
const shortNamespace = namespace.split('.').pop();
let globalApiVersion;

writeHeaders(schemaPath);

for (const name of Object.keys(schema.definitions)) {
  const definition = getDefinition(schema.definitions[name], name);
  writeDefinition(definition, name);
}

if (!schema.resourceDefinitions) {
  throw `Unable to find resource definitions`;
}

appendOutput(`export class ${shortNamespace}Builder {`);
const resources = schema.resourceDefinitions;
for (const name of Object.keys(resources)) {
  const definition = getDefinition(resources[name], name);

  writeBuilderFunction(definition, name);
}
appendOutput(`}`);

fs.writeFileSync(
  `${__dirname}/../lib/types/${shortNamespace.toLowerCase()}.${globalApiVersion}.ts`,
  output,
  { encoding: 'utf8' });