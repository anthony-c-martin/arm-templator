import { concat, Expressionable, Expression } from '../../lib';
import fs from 'fs';

function readScriptFile(path: string): string {
  return fs.readFileSync(path, { encoding: 'utf8' }).replace(/\r/g, '');
}

function formatArgs(args: {[key: string]: Expressionable<string>}): Expression<string> {
  const output: Expressionable<string>[] = [];
  for (const key of Object.keys(args)) {
    output.push(` -${key}`);
    output.push(args[key]);
  }

  return concat(...output);
}

export function createScriptsResource(name: Expressionable<string>, location: Expressionable<string>, scriptPath: string, args: {[key: string]: Expressionable<string>}) {
  return {
    namespace: 'Microsoft.Resources',
    nameTypes: [{type: 'deploymentScripts', name: name}],
    apiVersion: '2019-10-01-preview',
    location: location,
    properties: {
      azPowerShellVersion: '1.7.0',
      scriptContent: readScriptFile(scriptPath),
      arguments: formatArgs(args),
      retentionInterval: 'PT7D',
      timeout: 'PT1H',
      cleanupPreference: 'Always'
    },
    identity: {
      type: 'UserAssigned',
    }
  }
}