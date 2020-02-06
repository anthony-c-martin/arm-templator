// Generated using 'npm run schema /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2019-10-01-preview/Microsoft.Resources.json'
import { Expressionable, ResourceDefinition } from '../common';

export interface AzureCliScript {
  kind: Expressionable<('AzureCLI')>;
  properties: Expressionable<AzureCliScriptProperties>;
}

export interface AzureCliScriptProperties {
  arguments?: Expressionable<string>;
  azCliVersion: Expressionable<string>;
  cleanupPreference?: Expressionable<('Always' | 'OnSuccess' | 'OnExpiration')>;
  environmentVariables?: Expressionable<EnvironmentVariable[]>;
  forceUpdateTag?: Expressionable<string>;
  primaryScriptUri?: Expressionable<string>;
  retentionInterval: Expressionable<string>;
  scriptContent?: Expressionable<string>;
  supportingScriptUris?: Expressionable<string[]>;
  timeout?: Expressionable<string>;
}

export interface AzurePowerShellScript {
  kind: Expressionable<('AzurePowerShell')>;
  properties: Expressionable<AzurePowerShellScriptProperties>;
}

export interface AzurePowerShellScriptProperties {
  arguments?: Expressionable<string>;
  azPowerShellVersion: Expressionable<string>;
  cleanupPreference?: Expressionable<('Always' | 'OnSuccess' | 'OnExpiration')>;
  environmentVariables?: Expressionable<EnvironmentVariable[]>;
  forceUpdateTag?: Expressionable<string>;
  primaryScriptUri?: Expressionable<string>;
  retentionInterval: Expressionable<string>;
  scriptContent?: Expressionable<string>;
  supportingScriptUris?: Expressionable<string[]>;
  timeout?: Expressionable<string>;
}

export interface EnvironmentVariable {
  name: Expressionable<string>;
  secureValue?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface ManagedServiceIdentity {
  type?: Expressionable<('UserAssigned')>;
  userAssignedIdentities?: Expressionable<any>;
}

export interface UserAssignedIdentity {
  clientId?: Expressionable<string>;
  principalId?: Expressionable<string>;
}

export class ResourcesBuilder {
  public static deploymentScripts(name: Expressionable<string>, properties: AzurePowerShellScriptProperties | AzureCliScriptProperties, location: Expressionable<string>): ResourceDefinition<AzurePowerShellScriptProperties | AzureCliScriptProperties> {
    return {
      type: 'Microsoft.Resources/deploymentScripts',
      apiVersion: '2019-10-01-preview',
      name,
      location,
      properties,
    };
  }
}
