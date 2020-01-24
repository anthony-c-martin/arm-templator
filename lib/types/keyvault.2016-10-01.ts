// Generated using 'npm run schema C:\github\azure-resource-manager-schemas\schemas\2016-10-01\Microsoft.KeyVault.json'
import { Expressionable, ResourceDefinition } from '../common';

export interface AccessPolicyEntry {
  tenantId: Expressionable<string>;
  objectId: Expressionable<string>;
  applicationId?: Expressionable<string>;
  permissions: Expressionable<Permissions>;
}

export interface Permissions {
  keys?: Expressionable<('encrypt' | 'decrypt' | 'wrapKey' | 'unwrapKey' | 'sign' | 'verify' | 'get' | 'list' | 'create' | 'update' | 'import' | 'delete' | 'backup' | 'restore' | 'recover' | 'purge')[]>;
  secrets?: Expressionable<('get' | 'list' | 'set' | 'delete' | 'backup' | 'restore' | 'recover' | 'purge')[]>;
  certificates?: Expressionable<('get' | 'list' | 'delete' | 'create' | 'import' | 'update' | 'managecontacts' | 'getissuers' | 'listissuers' | 'setissuers' | 'deleteissuers' | 'manageissuers' | 'recover' | 'purge')[]>;
  storage?: Expressionable<('get' | 'list' | 'delete' | 'set' | 'update' | 'regeneratekey' | 'setsas' | 'listsas' | 'getsas' | 'deletesas')[]>;
}

export interface SecretAttributes {
  enabled?: Expressionable<boolean>;
  nbf?: Expressionable<number>;
  exp?: Expressionable<number>;
}

export interface SecretProperties {
  value?: Expressionable<string>;
  contentType?: Expressionable<string>;
  attributes?: Expressionable<SecretAttributes>;
}

export interface Sku {
  family: Expressionable<('A')>;
  name: Expressionable<('standard' | 'premium')>;
}

export interface VaultAccessPolicyProperties {
  accessPolicies: Expressionable<AccessPolicyEntry[]>;
}

export interface VaultProperties {
  tenantId: Expressionable<string>;
  sku: Expressionable<Sku>;
  accessPolicies?: Expressionable<AccessPolicyEntry[]>;
  enabledForDeployment?: Expressionable<boolean>;
  enabledForDiskEncryption?: Expressionable<boolean>;
  enabledForTemplateDeployment?: Expressionable<boolean>;
  enableSoftDelete?: Expressionable<boolean>;
  createMode?: Expressionable<('recover' | 'default')>;
}

export interface vaults_accessPolicies_childResource {
  name: Expressionable<('add' | 'replace' | 'remove')>;
  type: Expressionable<('accessPolicies')>;
  apiVersion: Expressionable<('2016-10-01')>;
  properties: Expressionable<VaultAccessPolicyProperties>;
}

export interface vaults_secrets_childResource {
  name: Expressionable<string>;
  type: Expressionable<('secrets')>;
  apiVersion: Expressionable<('2016-10-01')>;
  properties: Expressionable<SecretProperties>;
}

export class KeyVaultBuilder {
  public static vaults(name: Expressionable<string>, properties: VaultProperties, location: Expressionable<string>): ResourceDefinition<VaultProperties> {
    return {
      type: 'Microsoft.KeyVault/vaults',
      apiVersion: '2016-10-01',
      name,
      location,
      properties,
    };
  }
  public static vaults_accessPolicies(name: Expressionable<string>, properties: VaultAccessPolicyProperties, location: Expressionable<string>): ResourceDefinition<VaultAccessPolicyProperties> {
    return {
      type: 'Microsoft.KeyVault/vaults/accessPolicies',
      apiVersion: '2016-10-01',
      name,
      location,
      properties,
    };
  }
  public static vaults_secrets(name: Expressionable<string>, properties: SecretProperties, location: Expressionable<string>): ResourceDefinition<SecretProperties> {
    return {
      type: 'Microsoft.KeyVault/vaults/secrets',
      apiVersion: '2016-10-01',
      name,
      location,
      properties,
    };
  }
}
