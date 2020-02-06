// Generated using 'npm run schema /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2015-03-20/Microsoft.OperationalInsights.json'
import { Expressionable, ResourceDefinition } from '../common';

export interface SavedSearchProperties {
  category: Expressionable<string>;
  displayName: Expressionable<string>;
  query: Expressionable<string>;
  tags?: Expressionable<Tag[]>;
  version?: Expressionable<number>;
}

export interface StorageAccount {
  id: Expressionable<string>;
  key: Expressionable<string>;
}

export interface StorageInsightProperties {
  containers?: Expressionable<string[]>;
  storageAccount: Expressionable<StorageAccount>;
  tables?: Expressionable<string[]>;
}

export interface Tag {
  name: Expressionable<string>;
  value: Expressionable<string>;
}

export class OperationalInsightsBuilder {
  public static workspaces_savedSearches(name: Expressionable<string>, properties: SavedSearchProperties, location: Expressionable<string>): ResourceDefinition<SavedSearchProperties> {
    return {
      type: 'Microsoft.OperationalInsights/workspaces/savedSearches',
      apiVersion: '2015-03-20',
      name,
      location,
      properties,
    };
  }
  public static workspaces_storageInsightConfigs(name: Expressionable<string>, properties: StorageInsightProperties, location: Expressionable<string>): ResourceDefinition<StorageInsightProperties> {
    return {
      type: 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs',
      apiVersion: '2015-03-20',
      name,
      location,
      properties,
    };
  }
}
