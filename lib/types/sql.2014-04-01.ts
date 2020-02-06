// Generated using 'npm run schema /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2014-04-01/Microsoft.Sql.json'
import { Expressionable, ResourceDefinition } from '../common';

export interface AdvisorPropertiesModel {
  autoExecuteValue: Expressionable<('Enabled' | 'Disabled' | 'Default')>;
}

export interface BackupLongTermRetentionPolicyProperties {
  recoveryServicesBackupPolicyResourceId: Expressionable<string>;
  state: Expressionable<('Disabled' | 'Enabled')>;
}

export interface BackupLongTermRetentionVaultProperties {
  recoveryServicesVaultResourceId: Expressionable<string>;
}

export interface DatabaseConnectionPolicyProperties {
  proxyDnsName?: Expressionable<string>;
  proxyPort?: Expressionable<string>;
  redirectionState?: Expressionable<string>;
  securityEnabledAccess?: Expressionable<string>;
  state?: Expressionable<string>;
  useServerDefault?: Expressionable<string>;
  visibility?: Expressionable<string>;
}

export interface DatabaseProperties {
  collation?: Expressionable<string>;
  createMode?: Expressionable<('Copy' | 'Default' | 'NonReadableSecondary' | 'OnlineSecondary' | 'PointInTimeRestore' | 'Recovery' | 'Restore' | 'RestoreLongTermRetentionBackup' | 'Secondary' | 'RestoreExternalBackup' | 'RestoreExternalBackupSecondary')>;
  edition?: Expressionable<('Web' | 'Business' | 'Basic' | 'Standard' | 'Premium' | 'PremiumRS' | 'Free' | 'Stretch' | 'DataWarehouse' | 'System' | 'System2' | 'GeneralPurpose' | 'BusinessCritical' | 'Hyperscale')>;
  elasticPoolName?: Expressionable<string>;
  maxSizeBytes?: Expressionable<string>;
  readScale?: Expressionable<('Enabled' | 'Disabled')>;
  recoveryServicesRecoveryPointResourceId?: Expressionable<string>;
  requestedServiceObjectiveId?: Expressionable<string>;
  requestedServiceObjectiveName?: Expressionable<('System' | 'System0' | 'System1' | 'System2' | 'System3' | 'System4' | 'System2L' | 'System3L' | 'System4L' | 'Free' | 'Basic' | 'S0' | 'S1' | 'S2' | 'S3' | 'S4' | 'S6' | 'S7' | 'S9' | 'S12' | 'P1' | 'P2' | 'P3' | 'P4' | 'P6' | 'P11' | 'P15' | 'PRS1' | 'PRS2' | 'PRS4' | 'PRS6' | 'DW100' | 'DW200' | 'DW300' | 'DW400' | 'DW500' | 'DW600' | 'DW1000' | 'DW1200' | 'DW1000c' | 'DW1500' | 'DW1500c' | 'DW2000' | 'DW2000c' | 'DW3000' | 'DW2500c' | 'DW3000c' | 'DW6000' | 'DW5000c' | 'DW6000c' | 'DW7500c' | 'DW10000c' | 'DW15000c' | 'DW30000c' | 'DS100' | 'DS200' | 'DS300' | 'DS400' | 'DS500' | 'DS600' | 'DS1000' | 'DS1200' | 'DS1500' | 'DS2000' | 'ElasticPool')>;
  restorePointInTime?: Expressionable<string>;
  sampleName?: Expressionable<('AdventureWorksLT' | 'WideWorldImportersStd' | 'WideWorldImportersFull')>;
  sourceDatabaseDeletionDate?: Expressionable<string>;
  sourceDatabaseId?: Expressionable<string>;
  zoneRedundant?: Expressionable<boolean>;
}

export interface DatabaseSecurityAlertPolicyProperties {
  disabledAlerts?: Expressionable<string>;
  emailAccountAdmins?: Expressionable<('Enabled' | 'Disabled')>;
  emailAddresses?: Expressionable<string>;
  retentionDays?: Expressionable<number>;
  state: Expressionable<('New' | 'Enabled' | 'Disabled')>;
  storageAccountAccessKey?: Expressionable<string>;
  storageEndpoint?: Expressionable<string>;
  useServerDefault?: Expressionable<('Enabled' | 'Disabled')>;
}

export interface DatabaseTableAuditingPolicyProperties {
  auditingState?: Expressionable<string>;
  auditLogsTableName?: Expressionable<string>;
  eventTypesToAudit?: Expressionable<string>;
  fullAuditLogsTableName?: Expressionable<string>;
  retentionDays?: Expressionable<string>;
  storageAccountKey?: Expressionable<string>;
  storageAccountName?: Expressionable<string>;
  storageAccountResourceGroupName?: Expressionable<string>;
  storageAccountSecondaryKey?: Expressionable<string>;
  storageAccountSubscriptionId?: Expressionable<string>;
  storageTableEndpoint?: Expressionable<string>;
  useServerDefault?: Expressionable<string>;
}

export interface DataMaskingPolicyProperties {
  dataMaskingState: Expressionable<('Disabled' | 'Enabled')>;
  exemptPrincipals?: Expressionable<string>;
}

export interface DataMaskingRuleProperties {
  aliasName?: Expressionable<string>;
  columnName: Expressionable<string>;
  maskingFunction: Expressionable<('Default' | 'CCN' | 'Email' | 'Number' | 'SSN' | 'Text')>;
  numberFrom?: Expressionable<string>;
  numberTo?: Expressionable<string>;
  prefixSize?: Expressionable<string>;
  replacementString?: Expressionable<string>;
  ruleState?: Expressionable<('Disabled' | 'Enabled')>;
  schemaName: Expressionable<string>;
  suffixSize?: Expressionable<string>;
  tableName: Expressionable<string>;
}

export interface ElasticPoolPropertiesModel {
  databaseDtuMax?: Expressionable<number>;
  databaseDtuMin?: Expressionable<number>;
  dtu?: Expressionable<number>;
  edition?: Expressionable<('Basic' | 'Standard' | 'Premium' | 'GeneralPurpose' | 'BusinessCritical')>;
  storageMB?: Expressionable<number>;
  zoneRedundant?: Expressionable<boolean>;
}

export interface FirewallRuleProperties {
  endIpAddress: Expressionable<string>;
  startIpAddress: Expressionable<string>;
}

export interface GeoBackupPolicyProperties {
  state: Expressionable<('Disabled' | 'Enabled')>;
}

export interface ImportExtensionProperties {
  administratorLogin: Expressionable<string>;
  administratorLoginPassword: Expressionable<string>;
  authenticationType?: Expressionable<('SQL' | 'ADPassword')>;
  operationMode: Expressionable<('Import')>;
  storageKey: Expressionable<string>;
  storageKeyType: Expressionable<('StorageAccessKey' | 'SharedAccessKey')>;
  storageUri: Expressionable<string>;
}

export interface ServerAdministratorProperties {
  administratorType: Expressionable<('ActiveDirectory')>;
  login: Expressionable<string>;
  sid: Expressionable<string>;
  tenantId: Expressionable<string>;
}

export interface ServerCommunicationLinkProperties {
  partnerServer: Expressionable<string>;
}

export interface ServerConnectionPolicyProperties {
  connectionType: Expressionable<('Default' | 'Proxy' | 'Redirect')>;
}

export interface ServerPropertiesModel {
  administratorLogin?: Expressionable<string>;
  administratorLoginPassword?: Expressionable<string>;
  version?: Expressionable<('2.0' | '12.0')>;
}

export interface servers_administrators_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<('activeDirectory')>;
  properties: Expressionable<ServerAdministratorProperties>;
  type: Expressionable<('administrators')>;
}

export interface servers_advisors_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<string>;
  properties: Expressionable<AdvisorPropertiesModel>;
  type: Expressionable<('advisors')>;
}

export interface servers_auditingPolicies_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<('default')>;
  properties: Expressionable<ServerTableAuditingPolicyProperties>;
  type: Expressionable<('auditingPolicies')>;
}

export interface servers_backupLongTermRetentionVaults_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<('RegisteredVault')>;
  properties: Expressionable<BackupLongTermRetentionVaultProperties>;
  type: Expressionable<('backupLongTermRetentionVaults')>;
}

export interface servers_communicationLinks_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<string>;
  properties: Expressionable<ServerCommunicationLinkProperties>;
  type: Expressionable<('communicationLinks')>;
}

export interface servers_connectionPolicies_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<('default')>;
  properties: Expressionable<ServerConnectionPolicyProperties>;
  type: Expressionable<('connectionPolicies')>;
}

export interface servers_databases_advisors_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<string>;
  properties: Expressionable<AdvisorPropertiesModel>;
  type: Expressionable<('advisors')>;
}

export interface servers_databases_auditingPolicies_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<('default')>;
  properties: Expressionable<DatabaseTableAuditingPolicyProperties>;
  type: Expressionable<('auditingPolicies')>;
}

export interface servers_databases_backupLongTermRetentionPolicies_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<('Default')>;
  properties: Expressionable<BackupLongTermRetentionPolicyProperties>;
  type: Expressionable<('backupLongTermRetentionPolicies')>;
}

export interface servers_databases_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  location: Expressionable<string>;
  name: Expressionable<string>;
  properties: Expressionable<DatabaseProperties>;
  tags?: Expressionable<any>;
  type: Expressionable<('databases')>;
}

export interface servers_databases_connectionPolicies_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<('default')>;
  properties: Expressionable<DatabaseConnectionPolicyProperties>;
  type: Expressionable<('connectionPolicies')>;
}

export interface servers_databases_dataMaskingPolicies_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<('Default')>;
  properties: Expressionable<DataMaskingPolicyProperties>;
  type: Expressionable<('dataMaskingPolicies')>;
}

export interface servers_databases_dataMaskingPolicies_rules_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<string>;
  properties: Expressionable<DataMaskingRuleProperties>;
  type: Expressionable<('rules')>;
}

export interface servers_databases_extensions_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<('import')>;
  properties: Expressionable<ImportExtensionProperties>;
  type: Expressionable<('extensions')>;
}

export interface servers_databases_geoBackupPolicies_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<('Default')>;
  properties: Expressionable<GeoBackupPolicyProperties>;
  type: Expressionable<('geoBackupPolicies')>;
}

export interface servers_databases_securityAlertPolicies_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  location?: Expressionable<string>;
  name: Expressionable<('default')>;
  properties: Expressionable<DatabaseSecurityAlertPolicyProperties>;
  type: Expressionable<('securityAlertPolicies')>;
}

export interface servers_databases_transparentDataEncryption_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<('current')>;
  properties: Expressionable<TransparentDataEncryptionProperties>;
  type: Expressionable<('transparentDataEncryption')>;
}

export interface servers_disasterRecoveryConfiguration_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<string>;
  type: Expressionable<('disasterRecoveryConfiguration')>;
}

export interface servers_elasticPools_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  location: Expressionable<string>;
  name: Expressionable<string>;
  properties: Expressionable<ElasticPoolPropertiesModel>;
  tags?: Expressionable<any>;
  type: Expressionable<('elasticPools')>;
}

export interface servers_firewallRules_childResource {
  apiVersion: Expressionable<('2014-04-01')>;
  name: Expressionable<string>;
  properties: Expressionable<FirewallRuleProperties>;
  type: Expressionable<('firewallRules')>;
}

export interface ServerTableAuditingPolicyProperties {
  auditingState?: Expressionable<string>;
  auditLogsTableName?: Expressionable<string>;
  eventTypesToAudit?: Expressionable<string>;
  fullAuditLogsTableName?: Expressionable<string>;
  retentionDays?: Expressionable<string>;
  storageAccountKey?: Expressionable<string>;
  storageAccountName?: Expressionable<string>;
  storageAccountResourceGroupName?: Expressionable<string>;
  storageAccountSecondaryKey?: Expressionable<string>;
  storageAccountSubscriptionId?: Expressionable<string>;
  storageTableEndpoint?: Expressionable<string>;
}

export interface TransparentDataEncryptionProperties {
  status?: Expressionable<('Enabled' | 'Disabled')>;
}

export namespace servers {
  export function create(name: Expressionable<string>, properties: ServerPropertiesModel, location: Expressionable<string>): ResourceDefinition<ServerPropertiesModel> {
    return {
      type: 'Microsoft.Sql/servers',
      apiVersion: '2014-04-01',
      name,
      location,
      properties,
    };
  }
}
export namespace servers {
  export namespace administrators {
    export function create(name: Expressionable<string>, properties: ServerAdministratorProperties, location: Expressionable<string>): ResourceDefinition<ServerAdministratorProperties> {
      return {
        type: 'Microsoft.Sql/servers/administrators',
        apiVersion: '2014-04-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace advisors {
    export function create(name: Expressionable<string>, properties: AdvisorPropertiesModel, location: Expressionable<string>): ResourceDefinition<AdvisorPropertiesModel> {
      return {
        type: 'Microsoft.Sql/servers/advisors',
        apiVersion: '2014-04-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace auditingPolicies {
    export function create(name: Expressionable<string>, properties: ServerTableAuditingPolicyProperties, location: Expressionable<string>): ResourceDefinition<ServerTableAuditingPolicyProperties> {
      return {
        type: 'Microsoft.Sql/servers/auditingPolicies',
        apiVersion: '2014-04-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace backupLongTermRetentionVaults {
    export function create(name: Expressionable<string>, properties: BackupLongTermRetentionVaultProperties, location: Expressionable<string>): ResourceDefinition<BackupLongTermRetentionVaultProperties> {
      return {
        type: 'Microsoft.Sql/servers/backupLongTermRetentionVaults',
        apiVersion: '2014-04-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace communicationLinks {
    export function create(name: Expressionable<string>, properties: ServerCommunicationLinkProperties, location: Expressionable<string>): ResourceDefinition<ServerCommunicationLinkProperties> {
      return {
        type: 'Microsoft.Sql/servers/communicationLinks',
        apiVersion: '2014-04-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace connectionPolicies {
    export function create(name: Expressionable<string>, properties: ServerConnectionPolicyProperties, location: Expressionable<string>): ResourceDefinition<ServerConnectionPolicyProperties> {
      return {
        type: 'Microsoft.Sql/servers/connectionPolicies',
        apiVersion: '2014-04-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace databases {
    export function create(name: Expressionable<string>, properties: DatabaseProperties, location: Expressionable<string>): ResourceDefinition<DatabaseProperties> {
      return {
        type: 'Microsoft.Sql/servers/databases',
        apiVersion: '2014-04-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace advisors {
      export function create(name: Expressionable<string>, properties: AdvisorPropertiesModel, location: Expressionable<string>): ResourceDefinition<AdvisorPropertiesModel> {
        return {
          type: 'Microsoft.Sql/servers/databases/advisors',
          apiVersion: '2014-04-01',
          name,
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace auditingPolicies {
      export function create(name: Expressionable<string>, properties: DatabaseTableAuditingPolicyProperties, location: Expressionable<string>): ResourceDefinition<DatabaseTableAuditingPolicyProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/auditingPolicies',
          apiVersion: '2014-04-01',
          name,
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace backupLongTermRetentionPolicies {
      export function create(name: Expressionable<string>, properties: BackupLongTermRetentionPolicyProperties, location: Expressionable<string>): ResourceDefinition<BackupLongTermRetentionPolicyProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies',
          apiVersion: '2014-04-01',
          name,
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace connectionPolicies {
      export function create(name: Expressionable<string>, properties: DatabaseConnectionPolicyProperties, location: Expressionable<string>): ResourceDefinition<DatabaseConnectionPolicyProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/connectionPolicies',
          apiVersion: '2014-04-01',
          name,
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace dataMaskingPolicies {
      export function create(name: Expressionable<string>, properties: DataMaskingPolicyProperties, location: Expressionable<string>): ResourceDefinition<DataMaskingPolicyProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/dataMaskingPolicies',
          apiVersion: '2014-04-01',
          name,
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace dataMaskingPolicies {
      export namespace rules {
        export function create(name: Expressionable<string>, properties: DataMaskingRuleProperties, location: Expressionable<string>): ResourceDefinition<DataMaskingRuleProperties> {
          return {
            type: 'Microsoft.Sql/servers/databases/dataMaskingPolicies/rules',
            apiVersion: '2014-04-01',
            name,
            location,
            properties,
          };
        }
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace extensions {
      export function create(name: Expressionable<string>, properties: ImportExtensionProperties, location: Expressionable<string>): ResourceDefinition<ImportExtensionProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/extensions',
          apiVersion: '2014-04-01',
          name,
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace geoBackupPolicies {
      export function create(name: Expressionable<string>, properties: GeoBackupPolicyProperties, location: Expressionable<string>): ResourceDefinition<GeoBackupPolicyProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/geoBackupPolicies',
          apiVersion: '2014-04-01',
          name,
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace securityAlertPolicies {
      export function create(name: Expressionable<string>, properties: DatabaseSecurityAlertPolicyProperties, location: Expressionable<string>): ResourceDefinition<DatabaseSecurityAlertPolicyProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/securityAlertPolicies',
          apiVersion: '2014-04-01',
          name,
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace transparentDataEncryption {
      export function create(name: Expressionable<string>, properties: TransparentDataEncryptionProperties, location: Expressionable<string>): ResourceDefinition<TransparentDataEncryptionProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/transparentDataEncryption',
          apiVersion: '2014-04-01',
          name,
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace disasterRecoveryConfiguration {
    export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
      return {
        type: 'Microsoft.Sql/servers/disasterRecoveryConfiguration',
        apiVersion: '2014-04-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace elasticPools {
    export function create(name: Expressionable<string>, properties: ElasticPoolPropertiesModel, location: Expressionable<string>): ResourceDefinition<ElasticPoolPropertiesModel> {
      return {
        type: 'Microsoft.Sql/servers/elasticPools',
        apiVersion: '2014-04-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace firewallRules {
    export function create(name: Expressionable<string>, properties: FirewallRuleProperties, location: Expressionable<string>): ResourceDefinition<FirewallRuleProperties> {
      return {
        type: 'Microsoft.Sql/servers/firewallRules',
        apiVersion: '2014-04-01',
        name,
        location,
        properties,
      };
    }
  }
}
