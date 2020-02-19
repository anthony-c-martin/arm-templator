import { Expressionable, ResourceDefinition, Expression } from '../../lib/common';
import { ConcatExpression } from '../../lib/expression';
import fs from 'fs';

function readScriptFile(path: string): string {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

function formatArgs(args: {[key: string]: Expressionable<string>}): Expression<string> {
  const output: Expressionable<string>[] = [];
  for (const key of Object.keys(args)) {
    output.push(` -${key}`);
    output.push(args[key]);
  }

  return new ConcatExpression(output);
}

export const createScriptsResource = (name: Expressionable<string>, location: Expressionable<string>, scriptPath: string, args: {[key: string]: Expressionable<string>}): ResourceDefinition<any> => ({
  type: 'Microsoft.Resources/deploymentScripts',
  apiVersion: '2019-10-01-preview',
  name: [name],
  location: location,
  properties: {
    azPowerShellVersion: '1.7.0',
    scriptContent: readScriptFile(scriptPath),
    arguments: formatArgs(args),
    retentionInterval: 'PT7D',
    timeout: 'PT1H',
    cleanupPreference: 'Always'
  },
});