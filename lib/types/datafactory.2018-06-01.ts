// Generated using 'npm run schema /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-06-01/Microsoft.DataFactory.json'
import { Expressionable, ResourceDefinition } from '../common';

export interface Activity {
  additionalProperties?: Expressionable<any>;
  dependsOn?: Expressionable<ActivityDependency[]>;
  description?: Expressionable<string>;
  name: Expressionable<string>;
  userProperties?: Expressionable<UserProperty[]>;
}

export interface ActivityDependency {
  activity: Expressionable<string>;
  additionalProperties?: Expressionable<any>;
  dependencyConditions: Expressionable<('Succeeded' | 'Failed' | 'Skipped' | 'Completed')[]>;
}

export interface ActivityPolicy {
  additionalProperties?: Expressionable<any>;
  retry?: Expressionable<any>;
  retryIntervalInSeconds?: Expressionable<number>;
  secureInput?: Expressionable<boolean>;
  secureOutput?: Expressionable<boolean>;
  timeout?: Expressionable<any>;
}

export interface AmazonMWSLinkedService {
  type: Expressionable<('AmazonMWS')>;
  typeProperties: Expressionable<AmazonMWSLinkedServiceTypeProperties>;
}

export interface AmazonMWSLinkedServiceTypeProperties {
  accessKeyId: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  marketplaceID: Expressionable<any>;
  mwsAuthToken?: Expressionable<SecretBase>;
  secretKey?: Expressionable<SecretBase>;
  sellerID: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface AmazonMWSObjectDataset {
  type: Expressionable<('AmazonMWSObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface AmazonMWSSource {
  query?: Expressionable<any>;
  type: Expressionable<('AmazonMWSSource')>;
}

export interface AmazonRedshiftLinkedService {
  type: Expressionable<('AmazonRedshift')>;
  typeProperties: Expressionable<AmazonRedshiftLinkedServiceTypeProperties>;
}

export interface AmazonRedshiftLinkedServiceTypeProperties {
  database: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  server: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface AmazonRedshiftSource {
  query?: Expressionable<any>;
  redshiftUnloadSettings?: Expressionable<RedshiftUnloadSettings>;
  type: Expressionable<('AmazonRedshiftSource')>;
}

export interface AmazonRedshiftTableDataset {
  type: Expressionable<('AmazonRedshiftTable')>;
  typeProperties?: Expressionable<AmazonRedshiftTableDatasetTypeProperties>;
}

export interface AmazonRedshiftTableDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface AmazonS3Dataset {
  type: Expressionable<('AmazonS3Object')>;
  typeProperties: Expressionable<AmazonS3DatasetTypeProperties>;
}

export interface AmazonS3DatasetTypeProperties {
  bucketName: Expressionable<any>;
  compression?: Expressionable<DatasetCompression>;
  format?: Expressionable<DatasetStorageFormat>;
  key?: Expressionable<any>;
  modifiedDatetimeEnd?: Expressionable<any>;
  modifiedDatetimeStart?: Expressionable<any>;
  prefix?: Expressionable<any>;
  version?: Expressionable<any>;
}

export interface AmazonS3LinkedService {
  type: Expressionable<('AmazonS3')>;
  typeProperties: Expressionable<AmazonS3LinkedServiceTypeProperties>;
}

export interface AmazonS3LinkedServiceTypeProperties {
  accessKeyId?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  secretAccessKey?: Expressionable<SecretBase>;
  serviceUrl?: Expressionable<any>;
}

export interface AmazonS3Location {
  bucketName?: Expressionable<any>;
  type: Expressionable<('AmazonS3Location')>;
  version?: Expressionable<any>;
}

export interface AmazonS3ReadSettings {
  enablePartitionDiscovery?: Expressionable<boolean>;
  modifiedDatetimeEnd?: Expressionable<any>;
  modifiedDatetimeStart?: Expressionable<any>;
  prefix?: Expressionable<any>;
  recursive?: Expressionable<any>;
  type: Expressionable<('AmazonS3ReadSettings')>;
  wildcardFileName?: Expressionable<any>;
  wildcardFolderPath?: Expressionable<any>;
}

export interface AppendVariableActivity {
  type: Expressionable<('AppendVariable')>;
  typeProperties: Expressionable<AppendVariableActivityTypeProperties>;
}

export interface AppendVariableActivityTypeProperties {
  value?: Expressionable<any>;
  variableName?: Expressionable<string>;
}

export interface AvroDataset {
  type: Expressionable<('Avro')>;
  typeProperties?: Expressionable<AvroDatasetTypeProperties>;
}

export interface AvroDatasetTypeProperties {
  avroCompressionCodec?: Expressionable<('none' | 'deflate' | 'snappy' | 'xz' | 'bzip2')>;
  avroCompressionLevel?: Expressionable<number>;
  location: Expressionable<DatasetLocation>;
}

export interface AvroFormat {
  type: Expressionable<('AvroFormat')>;
}

export interface AvroSink {
  formatSettings?: Expressionable<AvroWriteSettings>;
  storeSettings?: Expressionable<StoreWriteSettings>;
  type: Expressionable<('AvroSink')>;
}

export interface AvroSource {
  storeSettings?: Expressionable<StoreReadSettings>;
  type: Expressionable<('AvroSource')>;
}

export interface AvroWriteSettings {
  additionalProperties?: Expressionable<any>;
  recordName?: Expressionable<string>;
  recordNamespace?: Expressionable<string>;
}

export interface AzureBatchLinkedService {
  type: Expressionable<('AzureBatch')>;
  typeProperties: Expressionable<AzureBatchLinkedServiceTypeProperties>;
}

export interface AzureBatchLinkedServiceTypeProperties {
  accessKey?: Expressionable<SecretBase>;
  accountName: Expressionable<any>;
  batchUri: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  linkedServiceName: Expressionable<LinkedServiceReference>;
  poolName: Expressionable<any>;
}

export interface AzureBlobDataset {
  type: Expressionable<('AzureBlob')>;
  typeProperties?: Expressionable<AzureBlobDatasetTypeProperties>;
}

export interface AzureBlobDatasetTypeProperties {
  compression?: Expressionable<DatasetCompression>;
  fileName?: Expressionable<any>;
  folderPath?: Expressionable<any>;
  format?: Expressionable<DatasetStorageFormat>;
  modifiedDatetimeEnd?: Expressionable<any>;
  modifiedDatetimeStart?: Expressionable<any>;
  tableRootLocation?: Expressionable<any>;
}

export interface AzureBlobFSDataset {
  type: Expressionable<('AzureBlobFSFile')>;
  typeProperties?: Expressionable<AzureBlobFSDatasetTypeProperties>;
}

export interface AzureBlobFSDatasetTypeProperties {
  compression?: Expressionable<DatasetCompression>;
  fileName?: Expressionable<any>;
  folderPath?: Expressionable<any>;
  format?: Expressionable<DatasetStorageFormat>;
}

export interface AzureBlobFSLinkedService {
  type: Expressionable<('AzureBlobFS')>;
  typeProperties: Expressionable<AzureBlobFSLinkedServiceTypeProperties>;
}

export interface AzureBlobFSLinkedServiceTypeProperties {
  accountKey?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  tenant?: Expressionable<any>;
  url: Expressionable<any>;
}

export interface AzureBlobFSLocation {
  fileSystem?: Expressionable<any>;
  type: Expressionable<('AzureBlobFSLocation')>;
}

export interface AzureBlobFSReadSettings {
  enablePartitionDiscovery?: Expressionable<boolean>;
  modifiedDatetimeEnd?: Expressionable<any>;
  modifiedDatetimeStart?: Expressionable<any>;
  recursive?: Expressionable<any>;
  type: Expressionable<('AzureBlobFSReadSettings')>;
  wildcardFileName?: Expressionable<any>;
  wildcardFolderPath?: Expressionable<any>;
}

export interface AzureBlobFSSink {
  copyBehavior?: Expressionable<any>;
  type: Expressionable<('AzureBlobFSSink')>;
}

export interface AzureBlobFSSource {
  recursive?: Expressionable<any>;
  skipHeaderLineCount?: Expressionable<any>;
  treatEmptyAsNull?: Expressionable<any>;
  type: Expressionable<('AzureBlobFSSource')>;
}

export interface AzureBlobFSWriteSettings {
  blockSizeInMB?: Expressionable<any>;
  type: Expressionable<('AzureBlobFSWriteSettings')>;
}

export interface AzureBlobStorageLinkedService {
  type: Expressionable<('AzureBlobStorage')>;
  typeProperties: Expressionable<AzureBlobStorageLinkedServiceTypeProperties>;
}

export interface AzureBlobStorageLinkedServiceTypeProperties {
  accountKey?: Expressionable<AzureKeyVaultSecretReference>;
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<string>;
  sasToken?: Expressionable<AzureKeyVaultSecretReference>;
  sasUri?: Expressionable<any>;
  serviceEndpoint?: Expressionable<string>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  tenant?: Expressionable<any>;
}

export interface AzureBlobStorageLocation {
  container?: Expressionable<any>;
  type: Expressionable<('AzureBlobStorageLocation')>;
}

export interface AzureBlobStorageReadSettings {
  enablePartitionDiscovery?: Expressionable<boolean>;
  modifiedDatetimeEnd?: Expressionable<any>;
  modifiedDatetimeStart?: Expressionable<any>;
  prefix?: Expressionable<any>;
  recursive?: Expressionable<any>;
  type: Expressionable<('AzureBlobStorageReadSettings')>;
  wildcardFileName?: Expressionable<any>;
  wildcardFolderPath?: Expressionable<any>;
}

export interface AzureBlobStorageWriteSettings {
  blockSizeInMB?: Expressionable<any>;
  type: Expressionable<('AzureBlobStorageWriteSettings')>;
}

export interface AzureDatabricksLinkedService {
  type: Expressionable<('AzureDatabricks')>;
  typeProperties: Expressionable<AzureDatabricksLinkedServiceTypeProperties>;
}

export interface AzureDatabricksLinkedServiceTypeProperties {
  accessToken: Expressionable<SecretBase>;
  domain: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  existingClusterId?: Expressionable<any>;
  instancePoolId?: Expressionable<any>;
  newClusterCustomTags?: Expressionable<any>;
  newClusterDriverNodeType?: Expressionable<any>;
  newClusterEnableElasticDisk?: Expressionable<any>;
  newClusterInitScripts?: Expressionable<any>;
  newClusterNodeType?: Expressionable<any>;
  newClusterNumOfWorker?: Expressionable<any>;
  newClusterSparkConf?: Expressionable<any>;
  newClusterSparkEnvVars?: Expressionable<any>;
  newClusterVersion?: Expressionable<any>;
}

export interface AzureDataExplorerCommandActivity {
  type: Expressionable<('AzureDataExplorerCommand')>;
  typeProperties: Expressionable<AzureDataExplorerCommandActivityTypeProperties>;
}

export interface AzureDataExplorerCommandActivityTypeProperties {
  command: Expressionable<any>;
  commandTimeout?: Expressionable<any>;
}

export interface AzureDataExplorerDatasetTypeProperties {
  table?: Expressionable<any>;
}

export interface AzureDataExplorerLinkedService {
  type: Expressionable<('AzureDataExplorer')>;
  typeProperties: Expressionable<AzureDataExplorerLinkedServiceTypeProperties>;
}

export interface AzureDataExplorerLinkedServiceTypeProperties {
  database: Expressionable<any>;
  endpoint: Expressionable<any>;
  servicePrincipalId: Expressionable<any>;
  servicePrincipalKey: Expressionable<SecretBase>;
  tenant: Expressionable<any>;
}

export interface AzureDataExplorerSink {
  flushImmediately?: Expressionable<any>;
  ingestionMappingAsJson?: Expressionable<any>;
  ingestionMappingName?: Expressionable<any>;
  type: Expressionable<('AzureDataExplorerSink')>;
}

export interface AzureDataExplorerSource {
  noTruncation?: Expressionable<any>;
  query: Expressionable<any>;
  queryTimeout?: Expressionable<any>;
  type: Expressionable<('AzureDataExplorerSource')>;
}

export interface AzureDataExplorerTableDataset {
  type: Expressionable<('AzureDataExplorerTable')>;
  typeProperties: Expressionable<AzureDataExplorerDatasetTypeProperties>;
}

export interface AzureDataLakeAnalyticsLinkedService {
  type: Expressionable<('AzureDataLakeAnalytics')>;
  typeProperties: Expressionable<AzureDataLakeAnalyticsLinkedServiceTypeProperties>;
}

export interface AzureDataLakeAnalyticsLinkedServiceTypeProperties {
  accountName: Expressionable<any>;
  dataLakeAnalyticsUri?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  resourceGroupName?: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  subscriptionId?: Expressionable<any>;
  tenant: Expressionable<any>;
}

export interface AzureDataLakeStoreDataset {
  type: Expressionable<('AzureDataLakeStoreFile')>;
  typeProperties?: Expressionable<AzureDataLakeStoreDatasetTypeProperties>;
}

export interface AzureDataLakeStoreDatasetTypeProperties {
  compression?: Expressionable<DatasetCompression>;
  fileName?: Expressionable<any>;
  folderPath?: Expressionable<any>;
  format?: Expressionable<DatasetStorageFormat>;
}

export interface AzureDataLakeStoreLinkedService {
  type: Expressionable<('AzureDataLakeStore')>;
  typeProperties: Expressionable<AzureDataLakeStoreLinkedServiceTypeProperties>;
}

export interface AzureDataLakeStoreLinkedServiceTypeProperties {
  accountName?: Expressionable<any>;
  dataLakeStoreUri: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  resourceGroupName?: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  subscriptionId?: Expressionable<any>;
  tenant?: Expressionable<any>;
}

export interface AzureDataLakeStoreLocation {
  type: Expressionable<('AzureDataLakeStoreLocation')>;
}

export interface AzureDataLakeStoreReadSettings {
  enablePartitionDiscovery?: Expressionable<boolean>;
  modifiedDatetimeEnd?: Expressionable<any>;
  modifiedDatetimeStart?: Expressionable<any>;
  recursive?: Expressionable<any>;
  type: Expressionable<('AzureDataLakeStoreReadSettings')>;
  wildcardFileName?: Expressionable<any>;
  wildcardFolderPath?: Expressionable<any>;
}

export interface AzureDataLakeStoreSink {
  copyBehavior?: Expressionable<any>;
  enableAdlsSingleFileParallel?: Expressionable<any>;
  type: Expressionable<('AzureDataLakeStoreSink')>;
}

export interface AzureDataLakeStoreSource {
  recursive?: Expressionable<any>;
  type: Expressionable<('AzureDataLakeStoreSource')>;
}

export interface AzureDataLakeStoreWriteSettings {
  type: Expressionable<('AzureDataLakeStoreWriteSettings')>;
}

export interface AzureFileStorageLinkedService {
  type: Expressionable<('AzureFileStorage')>;
  typeProperties: Expressionable<AzureFileStorageLinkedServiceTypeProperties>;
}

export interface AzureFileStorageLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  userId?: Expressionable<any>;
}

export interface AzureFileStorageLocation {
  type: Expressionable<('AzureFileStorageLocation')>;
}

export interface AzureFileStorageReadSettings {
  enablePartitionDiscovery?: Expressionable<boolean>;
  modifiedDatetimeEnd?: Expressionable<any>;
  modifiedDatetimeStart?: Expressionable<any>;
  recursive?: Expressionable<any>;
  type: Expressionable<('AzureFileStorageReadSettings')>;
  wildcardFileName?: Expressionable<any>;
  wildcardFolderPath?: Expressionable<any>;
}

export interface AzureFunctionActivity {
  type: Expressionable<('AzureFunctionActivity')>;
  typeProperties: Expressionable<AzureFunctionActivityTypeProperties>;
}

export interface AzureFunctionActivityTypeProperties {
  body?: Expressionable<any>;
  functionName: Expressionable<any>;
  headers?: Expressionable<any>;
  method: Expressionable<('GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'TRACE')>;
}

export interface AzureFunctionLinkedService {
  type: Expressionable<('AzureFunction')>;
  typeProperties: Expressionable<AzureFunctionLinkedServiceTypeProperties>;
}

export interface AzureFunctionLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  functionAppUrl: Expressionable<any>;
  functionKey?: Expressionable<SecretBase>;
}

export interface AzureKeyVaultLinkedService {
  type: Expressionable<('AzureKeyVault')>;
  typeProperties: Expressionable<AzureKeyVaultLinkedServiceTypeProperties>;
}

export interface AzureKeyVaultLinkedServiceTypeProperties {
  baseUrl: Expressionable<any>;
}

export interface AzureKeyVaultSecretReference {
  secretName: Expressionable<any>;
  secretVersion?: Expressionable<any>;
  store: Expressionable<LinkedServiceReference>;
  type: Expressionable<('AzureKeyVaultSecret')>;
}

export interface AzureMariaDBLinkedService {
  type: Expressionable<('AzureMariaDB')>;
  typeProperties: Expressionable<AzureMariaDBLinkedServiceTypeProperties>;
}

export interface AzureMariaDBLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  pwd?: Expressionable<AzureKeyVaultSecretReference>;
}

export interface AzureMariaDBSource {
  query?: Expressionable<any>;
  type: Expressionable<('AzureMariaDBSource')>;
}

export interface AzureMariaDBTableDataset {
  type: Expressionable<('AzureMariaDBTable')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface AzureMLBatchExecutionActivity {
  type: Expressionable<('AzureMLBatchExecution')>;
  typeProperties: Expressionable<AzureMLBatchExecutionActivityTypeProperties>;
}

export interface AzureMLBatchExecutionActivityTypeProperties {
  globalParameters?: Expressionable<any>;
  webServiceInputs?: Expressionable<any>;
  webServiceOutputs?: Expressionable<any>;
}

export interface AzureMLExecutePipelineActivity {
  type: Expressionable<('AzureMLExecutePipeline')>;
  typeProperties: Expressionable<AzureMLExecutePipelineActivityTypeProperties>;
}

export interface AzureMLExecutePipelineActivityTypeProperties {
  continueOnStepFailure?: Expressionable<any>;
  experimentName?: Expressionable<any>;
  mlParentRunId?: Expressionable<any>;
  mlPipelineId: Expressionable<any>;
  mlPipelineParameters?: Expressionable<any>;
}

export interface AzureMLLinkedService {
  type: Expressionable<('AzureML')>;
  typeProperties: Expressionable<AzureMLLinkedServiceTypeProperties>;
}

export interface AzureMLLinkedServiceTypeProperties {
  apiKey: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  mlEndpoint: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  tenant?: Expressionable<any>;
  updateResourceEndpoint?: Expressionable<any>;
}

export interface AzureMLServiceLinkedService {
  type: Expressionable<('AzureMLService')>;
  typeProperties: Expressionable<AzureMLServiceLinkedServiceTypeProperties>;
}

export interface AzureMLServiceLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  mlWorkspaceName: Expressionable<any>;
  resourceGroupName: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  subscriptionId: Expressionable<any>;
  tenant?: Expressionable<any>;
}

export interface AzureMLUpdateResourceActivity {
  type: Expressionable<('AzureMLUpdateResource')>;
  typeProperties: Expressionable<AzureMLUpdateResourceActivityTypeProperties>;
}

export interface AzureMLUpdateResourceActivityTypeProperties {
  trainedModelFilePath: Expressionable<any>;
  trainedModelLinkedServiceName: Expressionable<LinkedServiceReference>;
  trainedModelName: Expressionable<any>;
}

export interface AzureMLWebServiceFile {
  filePath: Expressionable<any>;
  linkedServiceName: Expressionable<LinkedServiceReference>;
}

export interface AzureMySqlLinkedService {
  type: Expressionable<('AzureMySql')>;
  typeProperties: Expressionable<AzureMySqlLinkedServiceTypeProperties>;
}

export interface AzureMySqlLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<AzureKeyVaultSecretReference>;
}

export interface AzureMySqlSink {
  preCopyScript?: Expressionable<any>;
  type: Expressionable<('AzureMySqlSink')>;
}

export interface AzureMySqlSource {
  query?: Expressionable<any>;
  type: Expressionable<('AzureMySqlSource')>;
}

export interface AzureMySqlTableDataset {
  type: Expressionable<('AzureMySqlTable')>;
  typeProperties: Expressionable<AzureMySqlTableDatasetTypeProperties>;
}

export interface AzureMySqlTableDatasetTypeProperties {
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface AzurePostgreSqlLinkedService {
  type: Expressionable<('AzurePostgreSql')>;
  typeProperties: Expressionable<AzurePostgreSqlLinkedServiceTypeProperties>;
}

export interface AzurePostgreSqlLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<AzureKeyVaultSecretReference>;
}

export interface AzurePostgreSqlSink {
  preCopyScript?: Expressionable<any>;
  type: Expressionable<('AzurePostgreSqlSink')>;
}

export interface AzurePostgreSqlSource {
  query?: Expressionable<any>;
  type: Expressionable<('AzurePostgreSqlSource')>;
}

export interface AzurePostgreSqlTableDataset {
  type: Expressionable<('AzurePostgreSqlTable')>;
  typeProperties?: Expressionable<AzurePostgreSqlTableDatasetTypeProperties>;
}

export interface AzurePostgreSqlTableDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface AzureQueueSink {
  type: Expressionable<('AzureQueueSink')>;
}

export interface AzureSearchIndexDataset {
  type: Expressionable<('AzureSearchIndex')>;
  typeProperties: Expressionable<AzureSearchIndexDatasetTypeProperties>;
}

export interface AzureSearchIndexDatasetTypeProperties {
  indexName: Expressionable<any>;
}

export interface AzureSearchIndexSink {
  type: Expressionable<('AzureSearchIndexSink')>;
  writeBehavior?: Expressionable<('Merge' | 'Upload')>;
}

export interface AzureSearchLinkedService {
  type: Expressionable<('AzureSearch')>;
  typeProperties: Expressionable<AzureSearchLinkedServiceTypeProperties>;
}

export interface AzureSearchLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  key?: Expressionable<SecretBase>;
  url: Expressionable<any>;
}

export interface AzureSqlDatabaseLinkedService {
  type: Expressionable<('AzureSqlDatabase')>;
  typeProperties: Expressionable<AzureSqlDatabaseLinkedServiceTypeProperties>;
}

export interface AzureSqlDatabaseLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<AzureKeyVaultSecretReference>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  tenant?: Expressionable<any>;
}

export interface AzureSqlDWLinkedService {
  type: Expressionable<('AzureSqlDW')>;
  typeProperties: Expressionable<AzureSqlDWLinkedServiceTypeProperties>;
}

export interface AzureSqlDWLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<AzureKeyVaultSecretReference>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  tenant?: Expressionable<any>;
}

export interface AzureSqlDWTableDataset {
  type: Expressionable<('AzureSqlDWTable')>;
  typeProperties?: Expressionable<AzureSqlDWTableDatasetTypeProperties>;
}

export interface AzureSqlDWTableDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface AzureSqlMILinkedService {
  type: Expressionable<('AzureSqlMI')>;
  typeProperties: Expressionable<AzureSqlMILinkedServiceTypeProperties>;
}

export interface AzureSqlMILinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<AzureKeyVaultSecretReference>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  tenant?: Expressionable<any>;
}

export interface AzureSqlMITableDataset {
  type: Expressionable<('AzureSqlMITable')>;
  typeProperties?: Expressionable<AzureSqlMITableDatasetTypeProperties>;
}

export interface AzureSqlMITableDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface AzureSqlSink {
  preCopyScript?: Expressionable<any>;
  sqlWriterStoredProcedureName?: Expressionable<any>;
  sqlWriterTableType?: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
  storedProcedureTableTypeParameterName?: Expressionable<any>;
  tableOption?: Expressionable<any>;
  type: Expressionable<('AzureSqlSink')>;
}

export interface AzureSqlSource {
  produceAdditionalTypes?: Expressionable<any>;
  sqlReaderQuery?: Expressionable<any>;
  sqlReaderStoredProcedureName?: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
  type: Expressionable<('AzureSqlSource')>;
}

export interface AzureSqlTableDataset {
  type: Expressionable<('AzureSqlTable')>;
  typeProperties?: Expressionable<AzureSqlTableDatasetTypeProperties>;
}

export interface AzureSqlTableDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface AzureStorageLinkedService {
  type: Expressionable<('AzureStorage')>;
  typeProperties: Expressionable<AzureStorageLinkedServiceTypeProperties>;
}

export interface AzureStorageLinkedServiceTypeProperties {
  accountKey?: Expressionable<AzureKeyVaultSecretReference>;
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<string>;
  sasToken?: Expressionable<AzureKeyVaultSecretReference>;
  sasUri?: Expressionable<any>;
}

export interface AzureTableDataset {
  type: Expressionable<('AzureTable')>;
  typeProperties: Expressionable<AzureTableDatasetTypeProperties>;
}

export interface AzureTableDatasetTypeProperties {
  tableName: Expressionable<any>;
}

export interface AzureTableSink {
  azureTableDefaultPartitionKeyValue?: Expressionable<any>;
  azureTableInsertType?: Expressionable<any>;
  azureTablePartitionKeyName?: Expressionable<any>;
  azureTableRowKeyName?: Expressionable<any>;
  type: Expressionable<('AzureTableSink')>;
}

export interface AzureTableSource {
  azureTableSourceIgnoreTableNotFound?: Expressionable<any>;
  azureTableSourceQuery?: Expressionable<any>;
  type: Expressionable<('AzureTableSource')>;
}

export interface AzureTableStorageLinkedService {
  type: Expressionable<('AzureTableStorage')>;
  typeProperties: Expressionable<AzureStorageLinkedServiceTypeProperties>;
}

export interface BinaryDataset {
  type: Expressionable<('Binary')>;
  typeProperties?: Expressionable<BinaryDatasetTypeProperties>;
}

export interface BinaryDatasetTypeProperties {
  compression?: Expressionable<DatasetCompression>;
  location: Expressionable<DatasetLocation>;
}

export interface BinarySink {
  storeSettings?: Expressionable<StoreWriteSettings>;
  type: Expressionable<('BinarySink')>;
}

export interface BinarySource {
  storeSettings?: Expressionable<StoreReadSettings>;
  type: Expressionable<('BinarySource')>;
}

export interface BlobEventsTrigger {
  type: Expressionable<('BlobEventsTrigger')>;
  typeProperties: Expressionable<BlobEventsTriggerTypeProperties>;
}

export interface BlobEventsTriggerTypeProperties {
  blobPathBeginsWith?: Expressionable<string>;
  blobPathEndsWith?: Expressionable<string>;
  events: Expressionable<('Microsoft.Storage.BlobCreated' | 'Microsoft.Storage.BlobDeleted')[]>;
  ignoreEmptyBlobs?: Expressionable<boolean>;
  scope: Expressionable<string>;
}

export interface BlobSink {
  blobWriterAddHeader?: Expressionable<any>;
  blobWriterDateTimeFormat?: Expressionable<any>;
  blobWriterOverwriteFiles?: Expressionable<any>;
  copyBehavior?: Expressionable<any>;
  type: Expressionable<('BlobSink')>;
}

export interface BlobSource {
  recursive?: Expressionable<any>;
  skipHeaderLineCount?: Expressionable<any>;
  treatEmptyAsNull?: Expressionable<any>;
  type: Expressionable<('BlobSource')>;
}

export interface BlobTrigger {
  type: Expressionable<('BlobTrigger')>;
  typeProperties: Expressionable<BlobTriggerTypeProperties>;
}

export interface BlobTriggerTypeProperties {
  folderPath: Expressionable<string>;
  linkedService: Expressionable<LinkedServiceReference>;
  maxConcurrency: Expressionable<number>;
}

export interface CassandraLinkedService {
  type: Expressionable<('Cassandra')>;
  typeProperties: Expressionable<CassandraLinkedServiceTypeProperties>;
}

export interface CassandraLinkedServiceTypeProperties {
  authenticationType?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface CassandraSource {
  consistencyLevel?: Expressionable<('ALL' | 'EACH_QUORUM' | 'QUORUM' | 'LOCAL_QUORUM' | 'ONE' | 'TWO' | 'THREE' | 'LOCAL_ONE' | 'SERIAL' | 'LOCAL_SERIAL')>;
  query?: Expressionable<any>;
  type: Expressionable<('CassandraSource')>;
}

export interface CassandraTableDataset {
  type: Expressionable<('CassandraTable')>;
  typeProperties?: Expressionable<CassandraTableDatasetTypeProperties>;
}

export interface CassandraTableDatasetTypeProperties {
  keyspace?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface ChainingTrigger {
  pipeline: Expressionable<TriggerPipelineReference>;
  type: Expressionable<('ChainingTrigger')>;
  typeProperties: Expressionable<ChainingTriggerTypeProperties>;
}

export interface ChainingTriggerTypeProperties {
  dependsOn: Expressionable<PipelineReference[]>;
  runDimension: Expressionable<string>;
}

export interface CmdkeySetup {
  type: Expressionable<('CmdkeySetup')>;
  typeProperties: Expressionable<CmdkeySetupTypeProperties>;
}

export interface CmdkeySetupTypeProperties {
  password: Expressionable<SecretBase>;
  targetName: Expressionable<any>;
  userName: Expressionable<any>;
}

export interface CommonDataServiceForAppsEntityDataset {
  type: Expressionable<('CommonDataServiceForAppsEntity')>;
  typeProperties?: Expressionable<CommonDataServiceForAppsEntityDatasetTypeProperties>;
}

export interface CommonDataServiceForAppsEntityDatasetTypeProperties {
  entityName?: Expressionable<any>;
}

export interface CommonDataServiceForAppsLinkedService {
  type: Expressionable<('CommonDataServiceForApps')>;
  typeProperties: Expressionable<CommonDataServiceForAppsLinkedServiceTypeProperties>;
}

export interface CommonDataServiceForAppsLinkedServiceTypeProperties {
  authenticationType: Expressionable<('Office365' | 'Ifd' | 'AADServicePrincipal')>;
  deploymentType: Expressionable<('Online' | 'OnPremisesWithIfd')>;
  encryptedCredential?: Expressionable<any>;
  hostName?: Expressionable<any>;
  organizationName?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  servicePrincipalCredential?: Expressionable<SecretBase>;
  servicePrincipalCredentialType?: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  serviceUri?: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface CommonDataServiceForAppsSink {
  alternateKeyName?: Expressionable<any>;
  ignoreNullValues?: Expressionable<any>;
  type: Expressionable<('CommonDataServiceForAppsSink')>;
  writeBehavior: Expressionable<('Upsert')>;
}

export interface CommonDataServiceForAppsSource {
  query?: Expressionable<any>;
  type: Expressionable<('CommonDataServiceForAppsSource')>;
}

export interface ComponentSetup {
  type: Expressionable<('ComponentSetup')>;
  typeProperties: Expressionable<LicensedComponentSetupTypeProperties>;
}

export interface ConcurLinkedService {
  type: Expressionable<('Concur')>;
  typeProperties: Expressionable<ConcurLinkedServiceTypeProperties>;
}

export interface ConcurLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
  username: Expressionable<any>;
}

export interface ConcurObjectDataset {
  type: Expressionable<('ConcurObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface ConcurSource {
  query?: Expressionable<any>;
  type: Expressionable<('ConcurSource')>;
}

export interface ControlActivity {
  type: Expressionable<('Container')>;
}

export interface CopyActivity {
  inputs?: Expressionable<DatasetReference[]>;
  outputs?: Expressionable<DatasetReference[]>;
  type: Expressionable<('Copy')>;
  typeProperties: Expressionable<CopyActivityTypeProperties>;
}

export interface CopyActivityTypeProperties {
  dataIntegrationUnits?: Expressionable<any>;
  enableSkipIncompatibleRow?: Expressionable<any>;
  enableStaging?: Expressionable<any>;
  parallelCopies?: Expressionable<any>;
  preserve?: Expressionable<any[]>;
  preserveRules?: Expressionable<any[]>;
  redirectIncompatibleRowSettings?: Expressionable<RedirectIncompatibleRowSettings>;
  sink: Expressionable<CopySink>;
  source: Expressionable<CopySource>;
  stagingSettings?: Expressionable<StagingSettings>;
  translator?: Expressionable<any>;
}

export interface CopySink {
  additionalProperties?: Expressionable<any>;
  maxConcurrentConnections?: Expressionable<any>;
  sinkRetryCount?: Expressionable<any>;
  sinkRetryWait?: Expressionable<any>;
  writeBatchSize?: Expressionable<any>;
  writeBatchTimeout?: Expressionable<any>;
}

export interface CopySource {
  additionalProperties?: Expressionable<any>;
  maxConcurrentConnections?: Expressionable<any>;
  sourceRetryCount?: Expressionable<any>;
  sourceRetryWait?: Expressionable<any>;
}

export interface CosmosDbLinkedService {
  type: Expressionable<('CosmosDb')>;
  typeProperties: Expressionable<CosmosDbLinkedServiceTypeProperties>;
}

export interface CosmosDbLinkedServiceTypeProperties {
  accountEndpoint?: Expressionable<any>;
  accountKey?: Expressionable<SecretBase>;
  connectionString?: Expressionable<any>;
  database?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
}

export interface CosmosDbMongoDbApiCollectionDataset {
  type: Expressionable<('CosmosDbMongoDbApiCollection')>;
  typeProperties: Expressionable<CosmosDbMongoDbApiCollectionDatasetTypeProperties>;
}

export interface CosmosDbMongoDbApiCollectionDatasetTypeProperties {
  collection: Expressionable<any>;
}

export interface CosmosDbMongoDbApiLinkedService {
  type: Expressionable<('CosmosDbMongoDbApi')>;
  typeProperties: Expressionable<CosmosDbMongoDbApiLinkedServiceTypeProperties>;
}

export interface CosmosDbMongoDbApiLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  database: Expressionable<any>;
}

export interface CosmosDbMongoDbApiSink {
  type: Expressionable<('CosmosDbMongoDbApiSink')>;
  writeBehavior?: Expressionable<any>;
}

export interface CosmosDbMongoDbApiSource {
  batchSize?: Expressionable<any>;
  cursorMethods?: Expressionable<MongoDbCursorMethodsProperties>;
  filter?: Expressionable<any>;
  queryTimeout?: Expressionable<any>;
  type: Expressionable<('CosmosDbMongoDbApiSource')>;
}

export interface CosmosDbSqlApiCollectionDataset {
  type: Expressionable<('CosmosDbSqlApiCollection')>;
  typeProperties: Expressionable<CosmosDbSqlApiCollectionDatasetTypeProperties>;
}

export interface CosmosDbSqlApiCollectionDatasetTypeProperties {
  collectionName: Expressionable<any>;
}

export interface CosmosDbSqlApiSink {
  type: Expressionable<('CosmosDbSqlApiSink')>;
  writeBehavior?: Expressionable<any>;
}

export interface CosmosDbSqlApiSource {
  pageSize?: Expressionable<any>;
  preferredRegions?: Expressionable<any>;
  query?: Expressionable<any>;
  type: Expressionable<('CosmosDbSqlApiSource')>;
}

export interface CouchbaseLinkedService {
  type: Expressionable<('Couchbase')>;
  typeProperties: Expressionable<CouchbaseLinkedServiceTypeProperties>;
}

export interface CouchbaseLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  credString?: Expressionable<AzureKeyVaultSecretReference>;
  encryptedCredential?: Expressionable<any>;
}

export interface CouchbaseSource {
  query?: Expressionable<any>;
  type: Expressionable<('CouchbaseSource')>;
}

export interface CouchbaseTableDataset {
  type: Expressionable<('CouchbaseTable')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface CustomActivity {
  type: Expressionable<('Custom')>;
  typeProperties: Expressionable<CustomActivityTypeProperties>;
}

export interface CustomActivityReferenceObject {
  datasets?: Expressionable<DatasetReference[]>;
  linkedServices?: Expressionable<LinkedServiceReference[]>;
}

export interface CustomActivityTypeProperties {
  command: Expressionable<any>;
  extendedProperties?: Expressionable<any>;
  folderPath?: Expressionable<any>;
  referenceObjects?: Expressionable<CustomActivityReferenceObject>;
  resourceLinkedService?: Expressionable<LinkedServiceReference>;
  retentionTimeInDays?: Expressionable<any>;
}

export interface CustomDataset {
  type: Expressionable<('CustomDataset')>;
  typeProperties?: Expressionable<any>;
}

export interface CustomDataSourceLinkedService {
  type: Expressionable<('CustomDataSource')>;
  typeProperties: Expressionable<any>;
}

export interface CustomSetupBase {
}

export interface DatabricksNotebookActivity {
  type: Expressionable<('DatabricksNotebook')>;
  typeProperties: Expressionable<DatabricksNotebookActivityTypeProperties>;
}

export interface DatabricksNotebookActivityTypeProperties {
  baseParameters?: Expressionable<any>;
  libraries?: Expressionable<any[]>;
  notebookPath: Expressionable<any>;
}

export interface DatabricksSparkJarActivity {
  type: Expressionable<('DatabricksSparkJar')>;
  typeProperties: Expressionable<DatabricksSparkJarActivityTypeProperties>;
}

export interface DatabricksSparkJarActivityTypeProperties {
  libraries?: Expressionable<any[]>;
  mainClassName: Expressionable<any>;
  parameters?: Expressionable<any[]>;
}

export interface DatabricksSparkPythonActivity {
  type: Expressionable<('DatabricksSparkPython')>;
  typeProperties: Expressionable<DatabricksSparkPythonActivityTypeProperties>;
}

export interface DatabricksSparkPythonActivityTypeProperties {
  libraries?: Expressionable<any[]>;
  parameters?: Expressionable<any[]>;
  pythonFile: Expressionable<any>;
}

export interface DataFlow {
  annotations?: Expressionable<any[]>;
  description?: Expressionable<string>;
  folder?: Expressionable<DataFlowFolder>;
}

export interface DataFlowFolder {
  name?: Expressionable<string>;
}

export interface DataFlowReference {
  additionalProperties?: Expressionable<any>;
  datasetParameters?: Expressionable<any>;
  referenceName: Expressionable<string>;
  type: Expressionable<('DataFlowReference')>;
}

export interface DataFlowSink {
  dataset?: Expressionable<DatasetReference>;
  description?: Expressionable<string>;
  name: Expressionable<string>;
}

export interface DataFlowSource {
  dataset?: Expressionable<DatasetReference>;
  description?: Expressionable<string>;
  name: Expressionable<string>;
}

export interface DataFlowStagingInfo {
  folderPath?: Expressionable<string>;
  linkedService?: Expressionable<LinkedServiceReference>;
}

export interface DataLakeAnalyticsUSQLActivity {
  type: Expressionable<('DataLakeAnalyticsU-SQL')>;
  typeProperties: Expressionable<DataLakeAnalyticsUSQLActivityTypeProperties>;
}

export interface DataLakeAnalyticsUSQLActivityTypeProperties {
  compilationMode?: Expressionable<any>;
  degreeOfParallelism?: Expressionable<any>;
  parameters?: Expressionable<any>;
  priority?: Expressionable<any>;
  runtimeVersion?: Expressionable<any>;
  scriptLinkedService: Expressionable<LinkedServiceReference>;
  scriptPath: Expressionable<any>;
}

export interface Dataset {
  additionalProperties?: Expressionable<any>;
  annotations?: Expressionable<any[]>;
  description?: Expressionable<string>;
  folder?: Expressionable<DatasetFolder>;
  linkedServiceName: Expressionable<LinkedServiceReference>;
  parameters?: Expressionable<any>;
  schema?: Expressionable<any>;
  structure?: Expressionable<any>;
}

export interface DatasetBZip2Compression {
  type: Expressionable<('BZip2')>;
}

export interface DatasetCompression {
  additionalProperties?: Expressionable<any>;
}

export interface DatasetDeflateCompression {
  level?: Expressionable<any>;
  type: Expressionable<('Deflate')>;
}

export interface DatasetFolder {
  name?: Expressionable<string>;
}

export interface DatasetGZipCompression {
  level?: Expressionable<any>;
  type: Expressionable<('GZip')>;
}

export interface DatasetLocation {
  additionalProperties?: Expressionable<any>;
  fileName?: Expressionable<any>;
  folderPath?: Expressionable<any>;
}

export interface DatasetReference {
  parameters?: Expressionable<any>;
  referenceName: Expressionable<string>;
  type: Expressionable<('DatasetReference')>;
}

export interface DatasetStorageFormat {
  additionalProperties?: Expressionable<any>;
  deserializer?: Expressionable<any>;
  serializer?: Expressionable<any>;
}

export interface DatasetZipDeflateCompression {
  level?: Expressionable<any>;
  type: Expressionable<('ZipDeflate')>;
}

export interface Db2LinkedService {
  type: Expressionable<('Db2')>;
  typeProperties: Expressionable<Db2LinkedServiceTypeProperties>;
}

export interface Db2LinkedServiceTypeProperties {
  authenticationType?: Expressionable<('Basic')>;
  certificateCommonName?: Expressionable<any>;
  database: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  packageCollection?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  server: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface Db2Source {
  query?: Expressionable<any>;
  type: Expressionable<('Db2Source')>;
}

export interface Db2TableDataset {
  type: Expressionable<('Db2Table')>;
  typeProperties?: Expressionable<Db2TableDatasetTypeProperties>;
}

export interface Db2TableDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface DeleteActivity {
  type: Expressionable<('Delete')>;
  typeProperties: Expressionable<DeleteActivityTypeProperties>;
}

export interface DeleteActivityTypeProperties {
  dataset: Expressionable<DatasetReference>;
  enableLogging?: Expressionable<any>;
  logStorageSettings?: Expressionable<LogStorageSettings>;
  maxConcurrentConnections?: Expressionable<number>;
  recursive?: Expressionable<any>;
}

export interface DelimitedTextDataset {
  type: Expressionable<('DelimitedText')>;
  typeProperties?: Expressionable<DelimitedTextDatasetTypeProperties>;
}

export interface DelimitedTextDatasetTypeProperties {
  columnDelimiter?: Expressionable<any>;
  compressionCodec?: Expressionable<('none' | 'gzip' | 'snappy' | 'lzo' | 'bzip2' | 'deflate' | 'zipDeflate' | 'lz4')>;
  compressionLevel?: Expressionable<any>;
  encodingName?: Expressionable<any>;
  escapeChar?: Expressionable<any>;
  firstRowAsHeader?: Expressionable<any>;
  location: Expressionable<DatasetLocation>;
  nullValue?: Expressionable<any>;
  quoteChar?: Expressionable<any>;
  rowDelimiter?: Expressionable<any>;
}

export interface DelimitedTextReadSettings {
  additionalProperties?: Expressionable<any>;
  skipLineCount?: Expressionable<any>;
}

export interface DelimitedTextSink {
  formatSettings?: Expressionable<DelimitedTextWriteSettings>;
  storeSettings?: Expressionable<StoreWriteSettings>;
  type: Expressionable<('DelimitedTextSink')>;
}

export interface DelimitedTextSource {
  formatSettings?: Expressionable<DelimitedTextReadSettings>;
  storeSettings?: Expressionable<StoreReadSettings>;
  type: Expressionable<('DelimitedTextSource')>;
}

export interface DelimitedTextWriteSettings {
  additionalProperties?: Expressionable<any>;
  fileExtension: Expressionable<any>;
  quoteAllText?: Expressionable<any>;
}

export interface DependencyReference {
}

export interface DistcpSettings {
  distcpOptions?: Expressionable<any>;
  resourceManagerEndpoint: Expressionable<any>;
  tempScriptPath: Expressionable<any>;
}

export interface DocumentDbCollectionDataset {
  type: Expressionable<('DocumentDbCollection')>;
  typeProperties: Expressionable<DocumentDbCollectionDatasetTypeProperties>;
}

export interface DocumentDbCollectionDatasetTypeProperties {
  collectionName: Expressionable<any>;
}

export interface DocumentDbCollectionSink {
  nestingSeparator?: Expressionable<any>;
  type: Expressionable<('DocumentDbCollectionSink')>;
  writeBehavior?: Expressionable<any>;
}

export interface DocumentDbCollectionSource {
  nestingSeparator?: Expressionable<any>;
  query?: Expressionable<any>;
  queryTimeout?: Expressionable<any>;
  type: Expressionable<('DocumentDbCollectionSource')>;
}

export interface DrillDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface DrillLinkedService {
  type: Expressionable<('Drill')>;
  typeProperties: Expressionable<DrillLinkedServiceTypeProperties>;
}

export interface DrillLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  pwd?: Expressionable<AzureKeyVaultSecretReference>;
}

export interface DrillSource {
  query?: Expressionable<any>;
  type: Expressionable<('DrillSource')>;
}

export interface DrillTableDataset {
  type: Expressionable<('DrillTable')>;
  typeProperties?: Expressionable<DrillDatasetTypeProperties>;
}

export interface DWCopyCommandDefaultValue {
  columnName?: Expressionable<any>;
  defaultValue?: Expressionable<any>;
}

export interface DWCopyCommandSettings {
  additionalOptions?: Expressionable<any>;
  defaultValues?: Expressionable<DWCopyCommandDefaultValue[]>;
}

export interface DynamicsAXLinkedService {
  type: Expressionable<('DynamicsAX')>;
  typeProperties: Expressionable<DynamicsAXLinkedServiceTypeProperties>;
}

export interface DynamicsAXLinkedServiceTypeProperties {
  aadResourceId: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  servicePrincipalId: Expressionable<any>;
  servicePrincipalKey: Expressionable<SecretBase>;
  tenant: Expressionable<any>;
  url: Expressionable<any>;
}

export interface DynamicsAXResourceDataset {
  type: Expressionable<('DynamicsAXResource')>;
  typeProperties: Expressionable<DynamicsAXResourceDatasetTypeProperties>;
}

export interface DynamicsAXResourceDatasetTypeProperties {
  path: Expressionable<any>;
}

export interface DynamicsAXSource {
  query?: Expressionable<any>;
  type: Expressionable<('DynamicsAXSource')>;
}

export interface DynamicsCrmEntityDataset {
  type: Expressionable<('DynamicsCrmEntity')>;
  typeProperties?: Expressionable<DynamicsCrmEntityDatasetTypeProperties>;
}

export interface DynamicsCrmEntityDatasetTypeProperties {
  entityName?: Expressionable<any>;
}

export interface DynamicsCrmLinkedService {
  type: Expressionable<('DynamicsCrm')>;
  typeProperties: Expressionable<DynamicsCrmLinkedServiceTypeProperties>;
}

export interface DynamicsCrmLinkedServiceTypeProperties {
  authenticationType: Expressionable<('Office365' | 'Ifd' | 'AADServicePrincipal')>;
  deploymentType: Expressionable<('Online' | 'OnPremisesWithIfd')>;
  encryptedCredential?: Expressionable<any>;
  hostName?: Expressionable<any>;
  organizationName?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  servicePrincipalCredential?: Expressionable<SecretBase>;
  servicePrincipalCredentialType?: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  serviceUri?: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface DynamicsCrmSink {
  alternateKeyName?: Expressionable<any>;
  ignoreNullValues?: Expressionable<any>;
  type: Expressionable<('DynamicsCrmSink')>;
  writeBehavior: Expressionable<('Upsert')>;
}

export interface DynamicsCrmSource {
  query?: Expressionable<any>;
  type: Expressionable<('DynamicsCrmSource')>;
}

export interface DynamicsEntityDataset {
  type: Expressionable<('DynamicsEntity')>;
  typeProperties?: Expressionable<DynamicsEntityDatasetTypeProperties>;
}

export interface DynamicsEntityDatasetTypeProperties {
  entityName?: Expressionable<any>;
}

export interface DynamicsLinkedService {
  type: Expressionable<('Dynamics')>;
  typeProperties: Expressionable<DynamicsLinkedServiceTypeProperties>;
}

export interface DynamicsLinkedServiceTypeProperties {
  authenticationType: Expressionable<('Office365' | 'Ifd' | 'AADServicePrincipal')>;
  deploymentType: Expressionable<('Online' | 'OnPremisesWithIfd')>;
  encryptedCredential?: Expressionable<any>;
  hostName?: Expressionable<any>;
  organizationName?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  servicePrincipalCredential?: Expressionable<SecretBase>;
  servicePrincipalCredentialType?: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  serviceUri?: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface DynamicsSink {
  alternateKeyName?: Expressionable<any>;
  ignoreNullValues?: Expressionable<any>;
  type: Expressionable<('DynamicsSink')>;
  writeBehavior: Expressionable<('Upsert')>;
}

export interface DynamicsSource {
  query?: Expressionable<any>;
  type: Expressionable<('DynamicsSource')>;
}

export interface EloquaLinkedService {
  type: Expressionable<('Eloqua')>;
  typeProperties: Expressionable<EloquaLinkedServiceTypeProperties>;
}

export interface EloquaLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
  username: Expressionable<any>;
}

export interface EloquaObjectDataset {
  type: Expressionable<('EloquaObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface EloquaSource {
  query?: Expressionable<any>;
  type: Expressionable<('EloquaSource')>;
}

export interface EntityReference {
  referenceName?: Expressionable<string>;
  type?: Expressionable<('IntegrationRuntimeReference' | 'LinkedServiceReference')>;
}

export interface EnvironmentVariableSetup {
  type: Expressionable<('EnvironmentVariableSetup')>;
  typeProperties: Expressionable<EnvironmentVariableSetupTypeProperties>;
}

export interface EnvironmentVariableSetupTypeProperties {
  variableName: Expressionable<string>;
  variableValue: Expressionable<string>;
}

export interface ExecuteDataFlowActivity {
  type: Expressionable<('ExecuteDataFlow')>;
  typeProperties: Expressionable<ExecuteDataFlowActivityTypeProperties>;
}

export interface ExecuteDataFlowActivityTypeProperties {
  compute?: Expressionable<ExecuteDataFlowActivityTypePropertiesCompute>;
  dataFlow: Expressionable<DataFlowReference>;
  integrationRuntime?: Expressionable<IntegrationRuntimeReference>;
  staging?: Expressionable<DataFlowStagingInfo>;
}

export interface ExecuteDataFlowActivityTypePropertiesCompute {
  computeType?: Expressionable<('General' | 'MemoryOptimized' | 'ComputeOptimized')>;
  coreCount?: Expressionable<number>;
}

export interface ExecutePipelineActivity {
  type: Expressionable<('ExecutePipeline')>;
  typeProperties: Expressionable<ExecutePipelineActivityTypeProperties>;
}

export interface ExecutePipelineActivityTypeProperties {
  parameters?: Expressionable<any>;
  pipeline: Expressionable<PipelineReference>;
  waitOnCompletion?: Expressionable<boolean>;
}

export interface ExecuteSSISPackageActivity {
  type: Expressionable<('ExecuteSSISPackage')>;
  typeProperties: Expressionable<ExecuteSSISPackageActivityTypeProperties>;
}

export interface ExecuteSSISPackageActivityTypeProperties {
  connectVia: Expressionable<IntegrationRuntimeReference>;
  environmentPath?: Expressionable<any>;
  executionCredential?: Expressionable<SSISExecutionCredential>;
  loggingLevel?: Expressionable<any>;
  logLocation?: Expressionable<SSISLogLocation>;
  packageConnectionManagers?: Expressionable<any>;
  packageLocation: Expressionable<SSISPackageLocation>;
  packageParameters?: Expressionable<any>;
  projectConnectionManagers?: Expressionable<any>;
  projectParameters?: Expressionable<any>;
  propertyOverrides?: Expressionable<any>;
  runtime?: Expressionable<any>;
}

export interface ExecutionActivity {
  linkedServiceName?: Expressionable<LinkedServiceReference>;
  policy?: Expressionable<ActivityPolicy>;
  type: Expressionable<('Execution')>;
}

export interface Expression {
  type: Expressionable<('Expression')>;
  value: Expressionable<string>;
}

export interface factories_dataflows_childResource {
  apiVersion: Expressionable<('2018-06-01')>;
  name: Expressionable<string>;
  properties: Expressionable<DataFlow>;
  type: Expressionable<('dataflows')>;
}

export interface factories_datasets_childResource {
  apiVersion: Expressionable<('2018-06-01')>;
  name: Expressionable<string>;
  properties: Expressionable<Dataset>;
  type: Expressionable<('datasets')>;
}

export interface factories_integrationRuntimes_childResource {
  apiVersion: Expressionable<('2018-06-01')>;
  name: Expressionable<string>;
  properties: Expressionable<IntegrationRuntime>;
  type: Expressionable<('integrationRuntimes')>;
}

export interface factories_linkedservices_childResource {
  apiVersion: Expressionable<('2018-06-01')>;
  name: Expressionable<string>;
  properties: Expressionable<LinkedService>;
  type: Expressionable<('linkedservices')>;
}

export interface factories_pipelines_childResource {
  apiVersion: Expressionable<('2018-06-01')>;
  name: Expressionable<string>;
  properties: Expressionable<Pipeline>;
  type: Expressionable<('pipelines')>;
}

export interface factories_triggers_childResource {
  apiVersion: Expressionable<('2018-06-01')>;
  name: Expressionable<string>;
  properties: Expressionable<Trigger>;
  type: Expressionable<('triggers')>;
}

export interface factories_triggers_rerunTriggers_childResource {
  apiVersion: Expressionable<('2018-06-01')>;
  endTime: Expressionable<string>;
  maxConcurrency: Expressionable<number>;
  name: Expressionable<string>;
  startTime: Expressionable<string>;
  type: Expressionable<('rerunTriggers')>;
}

export interface FactoryGitHubConfiguration {
  hostName?: Expressionable<string>;
  type: Expressionable<('FactoryGitHubConfiguration')>;
}

export interface FactoryIdentity {
  type: Expressionable<('SystemAssigned')>;
}

export interface FactoryProperties {
  repoConfiguration?: Expressionable<FactoryRepoConfiguration>;
}

export interface FactoryRepoConfiguration {
  accountName: Expressionable<string>;
  collaborationBranch: Expressionable<string>;
  lastCommitId?: Expressionable<string>;
  repositoryName: Expressionable<string>;
  rootFolder: Expressionable<string>;
}

export interface FactoryVSTSConfiguration {
  projectName: Expressionable<string>;
  tenantId?: Expressionable<string>;
  type: Expressionable<('FactoryVSTSConfiguration')>;
}

export interface FileServerLinkedService {
  type: Expressionable<('FileServer')>;
  typeProperties: Expressionable<FileServerLinkedServiceTypeProperties>;
}

export interface FileServerLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  userId?: Expressionable<any>;
}

export interface FileServerLocation {
  type: Expressionable<('FileServerLocation')>;
}

export interface FileServerReadSettings {
  enablePartitionDiscovery?: Expressionable<boolean>;
  modifiedDatetimeEnd?: Expressionable<any>;
  modifiedDatetimeStart?: Expressionable<any>;
  recursive?: Expressionable<any>;
  type: Expressionable<('FileServerReadSettings')>;
  wildcardFileName?: Expressionable<any>;
  wildcardFolderPath?: Expressionable<any>;
}

export interface FileServerWriteSettings {
  type: Expressionable<('FileServerWriteSettings')>;
}

export interface FileShareDataset {
  type: Expressionable<('FileShare')>;
  typeProperties?: Expressionable<FileShareDatasetTypeProperties>;
}

export interface FileShareDatasetTypeProperties {
  compression?: Expressionable<DatasetCompression>;
  fileFilter?: Expressionable<any>;
  fileName?: Expressionable<any>;
  folderPath?: Expressionable<any>;
  format?: Expressionable<DatasetStorageFormat>;
  modifiedDatetimeEnd?: Expressionable<any>;
  modifiedDatetimeStart?: Expressionable<any>;
}

export interface FileSystemSink {
  copyBehavior?: Expressionable<any>;
  type: Expressionable<('FileSystemSink')>;
}

export interface FileSystemSource {
  recursive?: Expressionable<any>;
  type: Expressionable<('FileSystemSource')>;
}

export interface FilterActivity {
  type: Expressionable<('Filter')>;
  typeProperties: Expressionable<FilterActivityTypeProperties>;
}

export interface FilterActivityTypeProperties {
  condition: Expressionable<Expression>;
  items: Expressionable<Expression>;
}

export interface ForEachActivity {
  type: Expressionable<('ForEach')>;
  typeProperties: Expressionable<ForEachActivityTypeProperties>;
}

export interface ForEachActivityTypeProperties {
  activities: Expressionable<Activity[]>;
  batchCount?: Expressionable<number>;
  isSequential?: Expressionable<boolean>;
  items: Expressionable<Expression>;
}

export interface FtpReadSettings {
  recursive?: Expressionable<any>;
  type: Expressionable<('FtpReadSettings')>;
  useBinaryTransfer?: Expressionable<boolean>;
  wildcardFileName?: Expressionable<any>;
  wildcardFolderPath?: Expressionable<any>;
}

export interface FtpServerLinkedService {
  type: Expressionable<('FtpServer')>;
  typeProperties: Expressionable<FtpServerLinkedServiceTypeProperties>;
}

export interface FtpServerLinkedServiceTypeProperties {
  authenticationType?: Expressionable<('Basic' | 'Anonymous')>;
  enableServerCertificateValidation?: Expressionable<any>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface FtpServerLocation {
  type: Expressionable<('FtpServerLocation')>;
}

export interface GenericDatasetTypeProperties {
  tableName?: Expressionable<any>;
}

export interface GetMetadataActivity {
  type: Expressionable<('GetMetadata')>;
  typeProperties: Expressionable<GetMetadataActivityTypeProperties>;
}

export interface GetMetadataActivityTypeProperties {
  dataset: Expressionable<DatasetReference>;
  fieldList?: Expressionable<any[]>;
}

export interface GoogleAdWordsLinkedService {
  type: Expressionable<('GoogleAdWords')>;
  typeProperties: Expressionable<GoogleAdWordsLinkedServiceTypeProperties>;
}

export interface GoogleAdWordsLinkedServiceTypeProperties {
  authenticationType: Expressionable<('ServiceAuthentication' | 'UserAuthentication')>;
  clientCustomerID: Expressionable<any>;
  clientId?: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  developerToken: Expressionable<SecretBase>;
  email?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  keyFilePath?: Expressionable<any>;
  refreshToken?: Expressionable<SecretBase>;
  trustedCertPath?: Expressionable<any>;
  useSystemTrustStore?: Expressionable<any>;
}

export interface GoogleAdWordsObjectDataset {
  type: Expressionable<('GoogleAdWordsObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface GoogleAdWordsSource {
  query?: Expressionable<any>;
  type: Expressionable<('GoogleAdWordsSource')>;
}

export interface GoogleBigQueryDatasetTypeProperties {
  dataset?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface GoogleBigQueryLinkedService {
  type: Expressionable<('GoogleBigQuery')>;
  typeProperties: Expressionable<GoogleBigQueryLinkedServiceTypeProperties>;
}

export interface GoogleBigQueryLinkedServiceTypeProperties {
  additionalProjects?: Expressionable<any>;
  authenticationType: Expressionable<('ServiceAuthentication' | 'UserAuthentication')>;
  clientId?: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  email?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  keyFilePath?: Expressionable<any>;
  project: Expressionable<any>;
  refreshToken?: Expressionable<SecretBase>;
  requestGoogleDriveScope?: Expressionable<any>;
  trustedCertPath?: Expressionable<any>;
  useSystemTrustStore?: Expressionable<any>;
}

export interface GoogleBigQueryObjectDataset {
  type: Expressionable<('GoogleBigQueryObject')>;
  typeProperties?: Expressionable<GoogleBigQueryDatasetTypeProperties>;
}

export interface GoogleBigQuerySource {
  query?: Expressionable<any>;
  type: Expressionable<('GoogleBigQuerySource')>;
}

export interface GoogleCloudStorageLinkedService {
  type: Expressionable<('GoogleCloudStorage')>;
  typeProperties: Expressionable<GoogleCloudStorageLinkedServiceTypeProperties>;
}

export interface GoogleCloudStorageLinkedServiceTypeProperties {
  accessKeyId?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  secretAccessKey?: Expressionable<SecretBase>;
  serviceUrl?: Expressionable<any>;
}

export interface GoogleCloudStorageLocation {
  bucketName?: Expressionable<any>;
  type: Expressionable<('GoogleCloudStorageLocation')>;
  version?: Expressionable<any>;
}

export interface GoogleCloudStorageReadSettings {
  enablePartitionDiscovery?: Expressionable<boolean>;
  modifiedDatetimeEnd?: Expressionable<any>;
  modifiedDatetimeStart?: Expressionable<any>;
  prefix?: Expressionable<any>;
  recursive?: Expressionable<any>;
  type: Expressionable<('GoogleCloudStorageReadSettings')>;
  wildcardFileName?: Expressionable<any>;
  wildcardFolderPath?: Expressionable<any>;
}

export interface GreenplumDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface GreenplumLinkedService {
  type: Expressionable<('Greenplum')>;
  typeProperties: Expressionable<GreenplumLinkedServiceTypeProperties>;
}

export interface GreenplumLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  pwd?: Expressionable<AzureKeyVaultSecretReference>;
}

export interface GreenplumSource {
  query?: Expressionable<any>;
  type: Expressionable<('GreenplumSource')>;
}

export interface GreenplumTableDataset {
  type: Expressionable<('GreenplumTable')>;
  typeProperties?: Expressionable<GreenplumDatasetTypeProperties>;
}

export interface HBaseLinkedService {
  type: Expressionable<('HBase')>;
  typeProperties: Expressionable<HBaseLinkedServiceTypeProperties>;
}

export interface HBaseLinkedServiceTypeProperties {
  allowHostNameCNMismatch?: Expressionable<any>;
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType: Expressionable<('Anonymous' | 'Basic')>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  httpPath?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  trustedCertPath?: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface HBaseObjectDataset {
  type: Expressionable<('HBaseObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface HBaseSource {
  query?: Expressionable<any>;
  type: Expressionable<('HBaseSource')>;
}

export interface HdfsLinkedService {
  type: Expressionable<('Hdfs')>;
  typeProperties: Expressionable<HdfsLinkedServiceTypeProperties>;
}

export interface HdfsLinkedServiceTypeProperties {
  authenticationType?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  url: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface HdfsLocation {
  type: Expressionable<('HdfsLocation')>;
}

export interface HdfsReadSettings {
  distcpSettings?: Expressionable<DistcpSettings>;
  enablePartitionDiscovery?: Expressionable<boolean>;
  modifiedDatetimeEnd?: Expressionable<any>;
  modifiedDatetimeStart?: Expressionable<any>;
  recursive?: Expressionable<any>;
  type: Expressionable<('HdfsReadSettings')>;
  wildcardFileName?: Expressionable<any>;
  wildcardFolderPath?: Expressionable<any>;
}

export interface HdfsSource {
  distcpSettings?: Expressionable<DistcpSettings>;
  recursive?: Expressionable<any>;
  type: Expressionable<('HdfsSource')>;
}

export interface HDInsightHiveActivity {
  type: Expressionable<('HDInsightHive')>;
  typeProperties: Expressionable<HDInsightHiveActivityTypeProperties>;
}

export interface HDInsightHiveActivityTypeProperties {
  arguments?: Expressionable<any[]>;
  defines?: Expressionable<any>;
  getDebugInfo?: Expressionable<('None' | 'Always' | 'Failure')>;
  queryTimeout?: Expressionable<number>;
  scriptLinkedService?: Expressionable<LinkedServiceReference>;
  scriptPath?: Expressionable<any>;
  storageLinkedServices?: Expressionable<LinkedServiceReference[]>;
  variables?: Expressionable<any[]>;
}

export interface HDInsightLinkedService {
  type: Expressionable<('HDInsight')>;
  typeProperties: Expressionable<HDInsightLinkedServiceTypeProperties>;
}

export interface HDInsightLinkedServiceTypeProperties {
  clusterUri: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  fileSystem?: Expressionable<any>;
  hcatalogLinkedServiceName?: Expressionable<LinkedServiceReference>;
  isEspEnabled?: Expressionable<any>;
  linkedServiceName?: Expressionable<LinkedServiceReference>;
  password?: Expressionable<SecretBase>;
  userName?: Expressionable<any>;
}

export interface HDInsightMapReduceActivity {
  type: Expressionable<('HDInsightMapReduce')>;
  typeProperties: Expressionable<HDInsightMapReduceActivityTypeProperties>;
}

export interface HDInsightMapReduceActivityTypeProperties {
  arguments?: Expressionable<any[]>;
  className: Expressionable<any>;
  defines?: Expressionable<any>;
  getDebugInfo?: Expressionable<('None' | 'Always' | 'Failure')>;
  jarFilePath: Expressionable<any>;
  jarLibs?: Expressionable<any[]>;
  jarLinkedService?: Expressionable<LinkedServiceReference>;
  storageLinkedServices?: Expressionable<LinkedServiceReference[]>;
}

export interface HDInsightOnDemandLinkedService {
  type: Expressionable<('HDInsightOnDemand')>;
  typeProperties: Expressionable<HDInsightOnDemandLinkedServiceTypeProperties>;
}

export interface HDInsightOnDemandLinkedServiceTypeProperties {
  additionalLinkedServiceNames?: Expressionable<LinkedServiceReference[]>;
  clusterNamePrefix?: Expressionable<any>;
  clusterPassword?: Expressionable<SecretBase>;
  clusterResourceGroup: Expressionable<any>;
  clusterSize: Expressionable<any>;
  clusterSshPassword?: Expressionable<SecretBase>;
  clusterSshUserName?: Expressionable<any>;
  clusterType?: Expressionable<any>;
  clusterUserName?: Expressionable<any>;
  coreConfiguration?: Expressionable<any>;
  dataNodeSize?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  hBaseConfiguration?: Expressionable<any>;
  hcatalogLinkedServiceName?: Expressionable<LinkedServiceReference>;
  hdfsConfiguration?: Expressionable<any>;
  headNodeSize?: Expressionable<any>;
  hiveConfiguration?: Expressionable<any>;
  hostSubscriptionId: Expressionable<any>;
  linkedServiceName: Expressionable<LinkedServiceReference>;
  mapReduceConfiguration?: Expressionable<any>;
  oozieConfiguration?: Expressionable<any>;
  scriptActions?: Expressionable<ScriptAction[]>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  sparkVersion?: Expressionable<any>;
  stormConfiguration?: Expressionable<any>;
  subnetName?: Expressionable<any>;
  tenant: Expressionable<any>;
  timeToLive: Expressionable<any>;
  version: Expressionable<any>;
  virtualNetworkId?: Expressionable<any>;
  yarnConfiguration?: Expressionable<any>;
  zookeeperNodeSize?: Expressionable<any>;
}

export interface HDInsightPigActivity {
  type: Expressionable<('HDInsightPig')>;
  typeProperties: Expressionable<HDInsightPigActivityTypeProperties>;
}

export interface HDInsightPigActivityTypeProperties {
  arguments?: Expressionable<any>;
  defines?: Expressionable<any>;
  getDebugInfo?: Expressionable<('None' | 'Always' | 'Failure')>;
  scriptLinkedService?: Expressionable<LinkedServiceReference>;
  scriptPath?: Expressionable<any>;
  storageLinkedServices?: Expressionable<LinkedServiceReference[]>;
}

export interface HDInsightSparkActivity {
  type: Expressionable<('HDInsightSpark')>;
  typeProperties: Expressionable<HDInsightSparkActivityTypeProperties>;
}

export interface HDInsightSparkActivityTypeProperties {
  arguments?: Expressionable<any[]>;
  className?: Expressionable<string>;
  entryFilePath: Expressionable<any>;
  getDebugInfo?: Expressionable<('None' | 'Always' | 'Failure')>;
  proxyUser?: Expressionable<any>;
  rootPath: Expressionable<any>;
  sparkConfig?: Expressionable<any>;
  sparkJobLinkedService?: Expressionable<LinkedServiceReference>;
}

export interface HDInsightStreamingActivity {
  type: Expressionable<('HDInsightStreaming')>;
  typeProperties: Expressionable<HDInsightStreamingActivityTypeProperties>;
}

export interface HDInsightStreamingActivityTypeProperties {
  arguments?: Expressionable<any[]>;
  combiner?: Expressionable<any>;
  commandEnvironment?: Expressionable<any[]>;
  defines?: Expressionable<any>;
  fileLinkedService?: Expressionable<LinkedServiceReference>;
  filePaths: Expressionable<any[]>;
  getDebugInfo?: Expressionable<('None' | 'Always' | 'Failure')>;
  input: Expressionable<any>;
  mapper: Expressionable<any>;
  output: Expressionable<any>;
  reducer: Expressionable<any>;
  storageLinkedServices?: Expressionable<LinkedServiceReference[]>;
}

export interface HiveDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface HiveLinkedService {
  type: Expressionable<('Hive')>;
  typeProperties: Expressionable<HiveLinkedServiceTypeProperties>;
}

export interface HiveLinkedServiceTypeProperties {
  allowHostNameCNMismatch?: Expressionable<any>;
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType: Expressionable<('Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService')>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  httpPath?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  serverType?: Expressionable<('HiveServer1' | 'HiveServer2' | 'HiveThriftServer')>;
  serviceDiscoveryMode?: Expressionable<any>;
  thriftTransportProtocol?: Expressionable<('Binary' | 'SASL' | 'HTTP ')>;
  trustedCertPath?: Expressionable<any>;
  useNativeQuery?: Expressionable<any>;
  username?: Expressionable<any>;
  useSystemTrustStore?: Expressionable<any>;
  zooKeeperNameSpace?: Expressionable<any>;
}

export interface HiveObjectDataset {
  type: Expressionable<('HiveObject')>;
  typeProperties?: Expressionable<HiveDatasetTypeProperties>;
}

export interface HiveSource {
  query?: Expressionable<any>;
  type: Expressionable<('HiveSource')>;
}

export interface HttpDataset {
  type: Expressionable<('HttpFile')>;
  typeProperties?: Expressionable<HttpDatasetTypeProperties>;
}

export interface HttpDatasetTypeProperties {
  additionalHeaders?: Expressionable<any>;
  compression?: Expressionable<DatasetCompression>;
  format?: Expressionable<DatasetStorageFormat>;
  relativeUrl?: Expressionable<any>;
  requestBody?: Expressionable<any>;
  requestMethod?: Expressionable<any>;
}

export interface HttpLinkedService {
  type: Expressionable<('HttpServer')>;
  typeProperties: Expressionable<HttpLinkedServiceTypeProperties>;
}

export interface HttpLinkedServiceTypeProperties {
  authenticationType?: Expressionable<('Basic' | 'Anonymous' | 'Digest' | 'Windows' | 'ClientCertificate')>;
  certThumbprint?: Expressionable<any>;
  embeddedCertData?: Expressionable<any>;
  enableServerCertificateValidation?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  url: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface HttpReadSettings {
  additionalHeaders?: Expressionable<any>;
  requestBody?: Expressionable<any>;
  requestMethod?: Expressionable<any>;
  requestTimeout?: Expressionable<any>;
  type: Expressionable<('HttpReadSettings')>;
}

export interface HttpServerLocation {
  relativeUrl?: Expressionable<any>;
  type: Expressionable<('HttpServerLocation')>;
}

export interface HttpSource {
  httpRequestTimeout?: Expressionable<any>;
  type: Expressionable<('HttpSource')>;
}

export interface HubspotLinkedService {
  type: Expressionable<('Hubspot')>;
  typeProperties: Expressionable<HubspotLinkedServiceTypeProperties>;
}

export interface HubspotLinkedServiceTypeProperties {
  accessToken?: Expressionable<SecretBase>;
  clientId: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  refreshToken?: Expressionable<SecretBase>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface HubspotObjectDataset {
  type: Expressionable<('HubspotObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface HubspotSource {
  query?: Expressionable<any>;
  type: Expressionable<('HubspotSource')>;
}

export interface IfConditionActivity {
  type: Expressionable<('IfCondition')>;
  typeProperties: Expressionable<IfConditionActivityTypeProperties>;
}

export interface IfConditionActivityTypeProperties {
  expression: Expressionable<Expression>;
  ifFalseActivities?: Expressionable<Activity[]>;
  ifTrueActivities?: Expressionable<Activity[]>;
}

export interface ImpalaDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface ImpalaLinkedService {
  type: Expressionable<('Impala')>;
  typeProperties: Expressionable<ImpalaLinkedServiceTypeProperties>;
}

export interface ImpalaLinkedServiceTypeProperties {
  allowHostNameCNMismatch?: Expressionable<any>;
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType: Expressionable<('Anonymous' | 'SASLUsername' | 'UsernameAndPassword')>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  trustedCertPath?: Expressionable<any>;
  username?: Expressionable<any>;
  useSystemTrustStore?: Expressionable<any>;
}

export interface ImpalaObjectDataset {
  type: Expressionable<('ImpalaObject')>;
  typeProperties?: Expressionable<ImpalaDatasetTypeProperties>;
}

export interface ImpalaSource {
  query?: Expressionable<any>;
  type: Expressionable<('ImpalaSource')>;
}

export interface InformixLinkedService {
  type: Expressionable<('Informix')>;
  typeProperties: Expressionable<InformixLinkedServiceTypeProperties>;
}

export interface InformixLinkedServiceTypeProperties {
  authenticationType?: Expressionable<any>;
  connectionString: Expressionable<any>;
  credential?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  userName?: Expressionable<any>;
}

export interface InformixSink {
  preCopyScript?: Expressionable<any>;
  type: Expressionable<('InformixSink')>;
}

export interface InformixSource {
  query?: Expressionable<any>;
  type: Expressionable<('InformixSource')>;
}

export interface InformixTableDataset {
  type: Expressionable<('InformixTable')>;
  typeProperties?: Expressionable<InformixTableDatasetTypeProperties>;
}

export interface InformixTableDatasetTypeProperties {
  tableName?: Expressionable<any>;
}

export interface IntegrationRuntime {
  additionalProperties?: Expressionable<any>;
  description?: Expressionable<string>;
}

export interface IntegrationRuntimeComputeProperties {
  additionalProperties?: Expressionable<any>;
  dataFlowProperties?: Expressionable<IntegrationRuntimeDataFlowProperties>;
  location?: Expressionable<string>;
  maxParallelExecutionsPerNode?: Expressionable<number>;
  nodeSize?: Expressionable<string>;
  numberOfNodes?: Expressionable<number>;
  vNetProperties?: Expressionable<IntegrationRuntimeVNetProperties>;
}

export interface IntegrationRuntimeCustomSetupScriptProperties {
  blobContainerUri?: Expressionable<string>;
  sasToken?: Expressionable<SecureString>;
}

export interface IntegrationRuntimeDataFlowProperties {
  additionalProperties?: Expressionable<any>;
  computeType?: Expressionable<('General' | 'MemoryOptimized' | 'ComputeOptimized')>;
  coreCount?: Expressionable<number>;
  timeToLive?: Expressionable<number>;
}

export interface IntegrationRuntimeDataProxyProperties {
  connectVia?: Expressionable<EntityReference>;
  path?: Expressionable<string>;
  stagingLinkedService?: Expressionable<EntityReference>;
}

export interface IntegrationRuntimeReference {
  parameters?: Expressionable<any>;
  referenceName: Expressionable<string>;
  type: Expressionable<('IntegrationRuntimeReference')>;
}

export interface IntegrationRuntimeSsisCatalogInfo {
  additionalProperties?: Expressionable<any>;
  catalogAdminPassword?: Expressionable<SecureString>;
  catalogAdminUserName?: Expressionable<string>;
  catalogPricingTier?: Expressionable<('Basic' | 'Standard' | 'Premium' | 'PremiumRS')>;
  catalogServerEndpoint?: Expressionable<string>;
}

export interface IntegrationRuntimeSsisProperties {
  additionalProperties?: Expressionable<any>;
  catalogInfo?: Expressionable<IntegrationRuntimeSsisCatalogInfo>;
  customSetupScriptProperties?: Expressionable<IntegrationRuntimeCustomSetupScriptProperties>;
  dataProxyProperties?: Expressionable<IntegrationRuntimeDataProxyProperties>;
  edition?: Expressionable<('Standard' | 'Enterprise')>;
  expressCustomSetupProperties?: Expressionable<CustomSetupBase[]>;
  licenseType?: Expressionable<('BasePrice' | 'LicenseIncluded')>;
}

export interface IntegrationRuntimeVNetProperties {
  additionalProperties?: Expressionable<any>;
  publicIPs?: Expressionable<string[]>;
  subnet?: Expressionable<string>;
  vNetId?: Expressionable<string>;
}

export interface JiraLinkedService {
  type: Expressionable<('Jira')>;
  typeProperties: Expressionable<JiraLinkedServiceTypeProperties>;
}

export interface JiraLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
  username: Expressionable<any>;
}

export interface JiraObjectDataset {
  type: Expressionable<('JiraObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface JiraSource {
  query?: Expressionable<any>;
  type: Expressionable<('JiraSource')>;
}

export interface JsonDataset {
  type: Expressionable<('Json')>;
  typeProperties?: Expressionable<JsonDatasetTypeProperties>;
}

export interface JsonDatasetTypeProperties {
  compression?: Expressionable<DatasetCompression>;
  encodingName?: Expressionable<any>;
  location: Expressionable<DatasetLocation>;
}

export interface JsonFormat {
  encodingName?: Expressionable<any>;
  filePattern?: Expressionable<any>;
  jsonNodeReference?: Expressionable<any>;
  jsonPathDefinition?: Expressionable<any>;
  nestingSeparator?: Expressionable<any>;
  type: Expressionable<('JsonFormat')>;
}

export interface JsonSink {
  formatSettings?: Expressionable<JsonWriteSettings>;
  storeSettings?: Expressionable<StoreWriteSettings>;
  type: Expressionable<('JsonSink')>;
}

export interface JsonSource {
  storeSettings?: Expressionable<StoreReadSettings>;
  type: Expressionable<('JsonSource')>;
}

export interface JsonWriteSettings {
  additionalProperties?: Expressionable<any>;
  filePattern?: Expressionable<('setOfObjects' | 'arrayOfObjects')>;
}

export interface LicensedComponentSetupTypeProperties {
  componentName: Expressionable<string>;
  licenseKey?: Expressionable<SecretBase>;
}

export interface LinkedIntegrationRuntimeKeyAuthorization {
  authorizationType: Expressionable<('Key')>;
  key: Expressionable<SecureString>;
}

export interface LinkedIntegrationRuntimeRbacAuthorization {
  authorizationType: Expressionable<('RBAC')>;
  resourceId: Expressionable<string>;
}

export interface LinkedIntegrationRuntimeType {
}

export interface LinkedService {
  additionalProperties?: Expressionable<any>;
  annotations?: Expressionable<any[]>;
  connectVia?: Expressionable<IntegrationRuntimeReference>;
  description?: Expressionable<string>;
  parameters?: Expressionable<any>;
}

export interface LinkedServiceReference {
  parameters?: Expressionable<any>;
  referenceName: Expressionable<string>;
  type: Expressionable<('LinkedServiceReference')>;
}

export interface LogStorageSettings {
  additionalProperties?: Expressionable<any>;
  linkedServiceName: Expressionable<LinkedServiceReference>;
  path?: Expressionable<any>;
}

export interface LookupActivity {
  type: Expressionable<('Lookup')>;
  typeProperties: Expressionable<LookupActivityTypeProperties>;
}

export interface LookupActivityTypeProperties {
  dataset: Expressionable<DatasetReference>;
  firstRowOnly?: Expressionable<any>;
  source: Expressionable<CopySource>;
}

export interface MagentoLinkedService {
  type: Expressionable<('Magento')>;
  typeProperties: Expressionable<MagentoLinkedServiceTypeProperties>;
}

export interface MagentoLinkedServiceTypeProperties {
  accessToken?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface MagentoObjectDataset {
  type: Expressionable<('MagentoObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface MagentoSource {
  query?: Expressionable<any>;
  type: Expressionable<('MagentoSource')>;
}

export interface ManagedIntegrationRuntime {
  type: Expressionable<('Managed')>;
  typeProperties: Expressionable<ManagedIntegrationRuntimeTypeProperties>;
}

export interface ManagedIntegrationRuntimeTypeProperties {
  computeProperties?: Expressionable<IntegrationRuntimeComputeProperties>;
  ssisProperties?: Expressionable<IntegrationRuntimeSsisProperties>;
}

export interface MappingDataFlow {
  type: Expressionable<('MappingDataFlow')>;
  typeProperties?: Expressionable<MappingDataFlowTypeProperties>;
}

export interface MappingDataFlowTypeProperties {
  script?: Expressionable<string>;
  sinks?: Expressionable<DataFlowSink[]>;
  sources?: Expressionable<DataFlowSource[]>;
  transformations?: Expressionable<Transformation[]>;
}

export interface MariaDBLinkedService {
  type: Expressionable<('MariaDB')>;
  typeProperties: Expressionable<MariaDBLinkedServiceTypeProperties>;
}

export interface MariaDBLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  pwd?: Expressionable<AzureKeyVaultSecretReference>;
}

export interface MariaDBSource {
  query?: Expressionable<any>;
  type: Expressionable<('MariaDBSource')>;
}

export interface MariaDBTableDataset {
  type: Expressionable<('MariaDBTable')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface MarketoLinkedService {
  type: Expressionable<('Marketo')>;
  typeProperties: Expressionable<MarketoLinkedServiceTypeProperties>;
}

export interface MarketoLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface MarketoObjectDataset {
  type: Expressionable<('MarketoObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface MarketoSource {
  query?: Expressionable<any>;
  type: Expressionable<('MarketoSource')>;
}

export interface MicrosoftAccessLinkedService {
  type: Expressionable<('MicrosoftAccess')>;
  typeProperties: Expressionable<MicrosoftAccessLinkedServiceTypeProperties>;
}

export interface MicrosoftAccessLinkedServiceTypeProperties {
  authenticationType?: Expressionable<any>;
  connectionString: Expressionable<any>;
  credential?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  userName?: Expressionable<any>;
}

export interface MicrosoftAccessSink {
  preCopyScript?: Expressionable<any>;
  type: Expressionable<('MicrosoftAccessSink')>;
}

export interface MicrosoftAccessSource {
  query?: Expressionable<any>;
  type: Expressionable<('MicrosoftAccessSource')>;
}

export interface MicrosoftAccessTableDataset {
  type: Expressionable<('MicrosoftAccessTable')>;
  typeProperties?: Expressionable<MicrosoftAccessTableDatasetTypeProperties>;
}

export interface MicrosoftAccessTableDatasetTypeProperties {
  tableName?: Expressionable<any>;
}

export interface MongoDbCollectionDataset {
  type: Expressionable<('MongoDbCollection')>;
  typeProperties: Expressionable<MongoDbCollectionDatasetTypeProperties>;
}

export interface MongoDbCollectionDatasetTypeProperties {
  collectionName: Expressionable<any>;
}

export interface MongoDbCursorMethodsProperties {
  additionalProperties?: Expressionable<any>;
  limit?: Expressionable<any>;
  project?: Expressionable<any>;
  skip?: Expressionable<any>;
  sort?: Expressionable<any>;
}

export interface MongoDbLinkedService {
  type: Expressionable<('MongoDb')>;
  typeProperties: Expressionable<MongoDbLinkedServiceTypeProperties>;
}

export interface MongoDbLinkedServiceTypeProperties {
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType?: Expressionable<('Basic' | 'Anonymous')>;
  authSource?: Expressionable<any>;
  databaseName: Expressionable<any>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  server: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface MongoDbSource {
  query?: Expressionable<any>;
  type: Expressionable<('MongoDbSource')>;
}

export interface MongoDbV2CollectionDataset {
  type: Expressionable<('MongoDbV2Collection')>;
  typeProperties: Expressionable<MongoDbV2CollectionDatasetTypeProperties>;
}

export interface MongoDbV2CollectionDatasetTypeProperties {
  collection: Expressionable<any>;
}

export interface MongoDbV2LinkedService {
  type: Expressionable<('MongoDbV2')>;
  typeProperties: Expressionable<MongoDbV2LinkedServiceTypeProperties>;
}

export interface MongoDbV2LinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  database: Expressionable<any>;
}

export interface MongoDbV2Source {
  batchSize?: Expressionable<any>;
  cursorMethods?: Expressionable<MongoDbCursorMethodsProperties>;
  filter?: Expressionable<any>;
  queryTimeout?: Expressionable<any>;
  type: Expressionable<('MongoDbV2Source')>;
}

export interface MultiplePipelineTrigger {
  pipelines?: Expressionable<TriggerPipelineReference[]>;
  type: Expressionable<('MultiplePipelineTrigger')>;
}

export interface MySqlLinkedService {
  type: Expressionable<('MySql')>;
  typeProperties: Expressionable<MySqlLinkedServiceTypeProperties>;
}

export interface MySqlLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<AzureKeyVaultSecretReference>;
}

export interface MySqlSource {
  query?: Expressionable<any>;
  type: Expressionable<('MySqlSource')>;
}

export interface MySqlTableDataset {
  type: Expressionable<('MySqlTable')>;
  typeProperties?: Expressionable<MySqlTableDatasetTypeProperties>;
}

export interface MySqlTableDatasetTypeProperties {
  tableName?: Expressionable<any>;
}

export interface NetezzaLinkedService {
  type: Expressionable<('Netezza')>;
  typeProperties: Expressionable<NetezzaLinkedServiceTypeProperties>;
}

export interface NetezzaLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  pwd?: Expressionable<AzureKeyVaultSecretReference>;
}

export interface NetezzaPartitionSettings {
  partitionColumnName?: Expressionable<any>;
  partitionLowerBound?: Expressionable<any>;
  partitionUpperBound?: Expressionable<any>;
}

export interface NetezzaSource {
  partitionOption?: Expressionable<('None' | 'DataSlice' | 'DynamicRange')>;
  partitionSettings?: Expressionable<NetezzaPartitionSettings>;
  query?: Expressionable<any>;
  type: Expressionable<('NetezzaSource')>;
}

export interface NetezzaTableDataset {
  type: Expressionable<('NetezzaTable')>;
  typeProperties?: Expressionable<NetezzaTableDatasetTypeProperties>;
}

export interface NetezzaTableDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface ODataLinkedService {
  type: Expressionable<('OData')>;
  typeProperties: Expressionable<ODataLinkedServiceTypeProperties>;
}

export interface ODataLinkedServiceTypeProperties {
  aadResourceId?: Expressionable<any>;
  aadServicePrincipalCredentialType?: Expressionable<('ServicePrincipalKey' | 'ServicePrincipalCert')>;
  authenticationType?: Expressionable<('Basic' | 'Anonymous' | 'Windows' | 'AadServicePrincipal' | 'ManagedServiceIdentity')>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  servicePrincipalEmbeddedCert?: Expressionable<SecretBase>;
  servicePrincipalEmbeddedCertPassword?: Expressionable<SecretBase>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  tenant?: Expressionable<any>;
  url: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface ODataResourceDataset {
  type: Expressionable<('ODataResource')>;
  typeProperties?: Expressionable<ODataResourceDatasetTypeProperties>;
}

export interface ODataResourceDatasetTypeProperties {
  path?: Expressionable<any>;
}

export interface ODataSource {
  query?: Expressionable<any>;
  type: Expressionable<('ODataSource')>;
}

export interface OdbcLinkedService {
  type: Expressionable<('Odbc')>;
  typeProperties: Expressionable<OdbcLinkedServiceTypeProperties>;
}

export interface OdbcLinkedServiceTypeProperties {
  authenticationType?: Expressionable<any>;
  connectionString: Expressionable<any>;
  credential?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  userName?: Expressionable<any>;
}

export interface OdbcSink {
  preCopyScript?: Expressionable<any>;
  type: Expressionable<('OdbcSink')>;
}

export interface OdbcSource {
  query?: Expressionable<any>;
  type: Expressionable<('OdbcSource')>;
}

export interface OdbcTableDataset {
  type: Expressionable<('OdbcTable')>;
  typeProperties?: Expressionable<OdbcTableDatasetTypeProperties>;
}

export interface OdbcTableDatasetTypeProperties {
  tableName?: Expressionable<any>;
}

export interface Office365Dataset {
  type: Expressionable<('Office365Table')>;
  typeProperties: Expressionable<Office365DatasetTypeProperties>;
}

export interface Office365DatasetTypeProperties {
  predicate?: Expressionable<any>;
  tableName: Expressionable<any>;
}

export interface Office365LinkedService {
  type: Expressionable<('Office365')>;
  typeProperties: Expressionable<Office365LinkedServiceTypeProperties>;
}

export interface Office365LinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  office365TenantId: Expressionable<any>;
  servicePrincipalId: Expressionable<any>;
  servicePrincipalKey: Expressionable<SecretBase>;
  servicePrincipalTenantId: Expressionable<any>;
}

export interface Office365Source {
  allowedGroups?: Expressionable<any>;
  dateFilterColumn?: Expressionable<any>;
  endTime?: Expressionable<any>;
  outputColumns?: Expressionable<any>;
  startTime?: Expressionable<any>;
  type: Expressionable<('Office365Source')>;
  userScopeFilterUri?: Expressionable<any>;
}

export interface OracleLinkedService {
  type: Expressionable<('Oracle')>;
  typeProperties: Expressionable<OracleLinkedServiceTypeProperties>;
}

export interface OracleLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<AzureKeyVaultSecretReference>;
}

export interface OraclePartitionSettings {
  partitionColumnName?: Expressionable<any>;
  partitionLowerBound?: Expressionable<any>;
  partitionNames?: Expressionable<any>;
  partitionUpperBound?: Expressionable<any>;
}

export interface OracleServiceCloudLinkedService {
  type: Expressionable<('OracleServiceCloud')>;
  typeProperties: Expressionable<OracleServiceCloudLinkedServiceTypeProperties>;
}

export interface OracleServiceCloudLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password: Expressionable<SecretBase>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
  username: Expressionable<any>;
}

export interface OracleServiceCloudObjectDataset {
  type: Expressionable<('OracleServiceCloudObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface OracleServiceCloudSource {
  query?: Expressionable<any>;
  type: Expressionable<('OracleServiceCloudSource')>;
}

export interface OracleSink {
  preCopyScript?: Expressionable<any>;
  type: Expressionable<('OracleSink')>;
}

export interface OracleSource {
  oracleReaderQuery?: Expressionable<any>;
  partitionOption?: Expressionable<('None' | 'PhysicalPartitionsOfTable' | 'DynamicRange')>;
  partitionSettings?: Expressionable<OraclePartitionSettings>;
  queryTimeout?: Expressionable<any>;
  type: Expressionable<('OracleSource')>;
}

export interface OracleTableDataset {
  type: Expressionable<('OracleTable')>;
  typeProperties?: Expressionable<OracleTableDatasetTypeProperties>;
}

export interface OracleTableDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface OrcDataset {
  type: Expressionable<('Orc')>;
  typeProperties?: Expressionable<OrcDatasetTypeProperties>;
}

export interface OrcDatasetTypeProperties {
  location: Expressionable<DatasetLocation>;
  orcCompressionCodec?: Expressionable<('none' | 'zlib' | 'snappy')>;
}

export interface OrcFormat {
  type: Expressionable<('OrcFormat')>;
}

export interface OrcSink {
  storeSettings?: Expressionable<StoreWriteSettings>;
  type: Expressionable<('OrcSink')>;
}

export interface OrcSource {
  storeSettings?: Expressionable<StoreReadSettings>;
  type: Expressionable<('OrcSource')>;
}

export interface ParameterSpecification {
  defaultValue?: Expressionable<any>;
  type: Expressionable<('Object' | 'String' | 'Int' | 'Float' | 'Bool' | 'Array' | 'SecureString')>;
}

export interface ParquetDataset {
  type: Expressionable<('Parquet')>;
  typeProperties?: Expressionable<ParquetDatasetTypeProperties>;
}

export interface ParquetDatasetTypeProperties {
  compressionCodec?: Expressionable<('none' | 'gzip' | 'snappy' | 'lzo' | 'bzip2' | 'deflate' | 'zipDeflate' | 'lz4')>;
  location: Expressionable<DatasetLocation>;
}

export interface ParquetFormat {
  type: Expressionable<('ParquetFormat')>;
}

export interface ParquetSink {
  storeSettings?: Expressionable<StoreWriteSettings>;
  type: Expressionable<('ParquetSink')>;
}

export interface ParquetSource {
  storeSettings?: Expressionable<StoreReadSettings>;
  type: Expressionable<('ParquetSource')>;
}

export interface PaypalLinkedService {
  type: Expressionable<('Paypal')>;
  typeProperties: Expressionable<PaypalLinkedServiceTypeProperties>;
}

export interface PaypalLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface PaypalObjectDataset {
  type: Expressionable<('PaypalObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface PaypalSource {
  query?: Expressionable<any>;
  type: Expressionable<('PaypalSource')>;
}

export interface PhoenixDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface PhoenixLinkedService {
  type: Expressionable<('Phoenix')>;
  typeProperties: Expressionable<PhoenixLinkedServiceTypeProperties>;
}

export interface PhoenixLinkedServiceTypeProperties {
  allowHostNameCNMismatch?: Expressionable<any>;
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType: Expressionable<('Anonymous' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService')>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  httpPath?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  trustedCertPath?: Expressionable<any>;
  username?: Expressionable<any>;
  useSystemTrustStore?: Expressionable<any>;
}

export interface PhoenixObjectDataset {
  type: Expressionable<('PhoenixObject')>;
  typeProperties?: Expressionable<PhoenixDatasetTypeProperties>;
}

export interface PhoenixSource {
  query?: Expressionable<any>;
  type: Expressionable<('PhoenixSource')>;
}

export interface Pipeline {
  activities?: Expressionable<Activity[]>;
  annotations?: Expressionable<any[]>;
  concurrency?: Expressionable<number>;
  description?: Expressionable<string>;
  folder?: Expressionable<PipelineFolder>;
  parameters?: Expressionable<any>;
  runDimensions?: Expressionable<any>;
  variables?: Expressionable<any>;
}

export interface PipelineFolder {
  name?: Expressionable<string>;
}

export interface PipelineReference {
  name?: Expressionable<string>;
  referenceName: Expressionable<string>;
  type: Expressionable<('PipelineReference')>;
}

export interface PolybaseSettings {
  additionalProperties?: Expressionable<any>;
  rejectSampleValue?: Expressionable<any>;
  rejectType?: Expressionable<('value' | 'percentage')>;
  rejectValue?: Expressionable<any>;
  useTypeDefault?: Expressionable<any>;
}

export interface PostgreSqlLinkedService {
  type: Expressionable<('PostgreSql')>;
  typeProperties: Expressionable<PostgreSqlLinkedServiceTypeProperties>;
}

export interface PostgreSqlLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<AzureKeyVaultSecretReference>;
}

export interface PostgreSqlSource {
  query?: Expressionable<any>;
  type: Expressionable<('PostgreSqlSource')>;
}

export interface PostgreSqlTableDataset {
  type: Expressionable<('PostgreSqlTable')>;
  typeProperties?: Expressionable<PostgreSqlTableDatasetTypeProperties>;
}

export interface PostgreSqlTableDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface PrestoDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface PrestoLinkedService {
  type: Expressionable<('Presto')>;
  typeProperties: Expressionable<PrestoLinkedServiceTypeProperties>;
}

export interface PrestoLinkedServiceTypeProperties {
  allowHostNameCNMismatch?: Expressionable<any>;
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType: Expressionable<('Anonymous' | 'LDAP')>;
  catalog: Expressionable<any>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  serverVersion: Expressionable<any>;
  timeZoneID?: Expressionable<any>;
  trustedCertPath?: Expressionable<any>;
  username?: Expressionable<any>;
  useSystemTrustStore?: Expressionable<any>;
}

export interface PrestoObjectDataset {
  type: Expressionable<('PrestoObject')>;
  typeProperties?: Expressionable<PrestoDatasetTypeProperties>;
}

export interface PrestoSource {
  query?: Expressionable<any>;
  type: Expressionable<('PrestoSource')>;
}

export interface QuickBooksLinkedService {
  type: Expressionable<('QuickBooks')>;
  typeProperties: Expressionable<QuickBooksLinkedServiceTypeProperties>;
}

export interface QuickBooksLinkedServiceTypeProperties {
  accessToken: Expressionable<SecretBase>;
  accessTokenSecret: Expressionable<SecretBase>;
  companyId: Expressionable<any>;
  consumerKey: Expressionable<any>;
  consumerSecret: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
}

export interface QuickBooksObjectDataset {
  type: Expressionable<('QuickBooksObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface QuickBooksSource {
  query?: Expressionable<any>;
  type: Expressionable<('QuickBooksSource')>;
}

export interface RecurrenceSchedule {
  additionalProperties?: Expressionable<any>;
  hours?: Expressionable<number[]>;
  minutes?: Expressionable<number[]>;
  monthDays?: Expressionable<number[]>;
  monthlyOccurrences?: Expressionable<RecurrenceScheduleOccurrence[]>;
  weekDays?: Expressionable<('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[]>;
}

export interface RecurrenceScheduleOccurrence {
  additionalProperties?: Expressionable<any>;
  day?: Expressionable<('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')>;
  occurrence?: Expressionable<number>;
}

export interface RedirectIncompatibleRowSettings {
  additionalProperties?: Expressionable<any>;
  linkedServiceName: Expressionable<any>;
  path?: Expressionable<any>;
}

export interface RedshiftUnloadSettings {
  bucketName: Expressionable<any>;
  s3LinkedServiceName: Expressionable<LinkedServiceReference>;
}

export interface RelationalSource {
  query?: Expressionable<any>;
  type: Expressionable<('RelationalSource')>;
}

export interface RelationalTableDataset {
  type: Expressionable<('RelationalTable')>;
  typeProperties?: Expressionable<RelationalTableDatasetTypeProperties>;
}

export interface RelationalTableDatasetTypeProperties {
  tableName?: Expressionable<any>;
}

export interface RerunTumblingWindowTrigger {
  type: Expressionable<('RerunTumblingWindowTrigger')>;
  typeProperties: Expressionable<RerunTumblingWindowTriggerTypeProperties>;
}

export interface RerunTumblingWindowTriggerTypeProperties {
  maxConcurrency: Expressionable<number>;
  parentTrigger?: Expressionable<any>;
  requestedEndTime: Expressionable<string>;
  requestedStartTime: Expressionable<string>;
}

export interface ResponsysLinkedService {
  type: Expressionable<('Responsys')>;
  typeProperties: Expressionable<ResponsysLinkedServiceTypeProperties>;
}

export interface ResponsysLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface ResponsysObjectDataset {
  type: Expressionable<('ResponsysObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface ResponsysSource {
  query?: Expressionable<any>;
  type: Expressionable<('ResponsysSource')>;
}

export interface RestResourceDataset {
  type: Expressionable<('RestResource')>;
  typeProperties?: Expressionable<RestResourceDatasetTypeProperties>;
}

export interface RestResourceDatasetTypeProperties {
  additionalHeaders?: Expressionable<any>;
  paginationRules?: Expressionable<any>;
  relativeUrl?: Expressionable<any>;
  requestBody?: Expressionable<any>;
  requestMethod?: Expressionable<any>;
}

export interface RestServiceLinkedService {
  type: Expressionable<('RestService')>;
  typeProperties: Expressionable<RestServiceLinkedServiceTypeProperties>;
}

export interface RestServiceLinkedServiceTypeProperties {
  aadResourceId?: Expressionable<any>;
  authenticationType: Expressionable<('Anonymous' | 'Basic' | 'AadServicePrincipal' | 'ManagedServiceIdentity')>;
  enableServerCertificateValidation?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  tenant?: Expressionable<any>;
  url: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface RestSource {
  additionalHeaders?: Expressionable<any>;
  httpRequestTimeout?: Expressionable<any>;
  paginationRules?: Expressionable<any>;
  requestBody?: Expressionable<any>;
  requestInterval?: Expressionable<any>;
  requestMethod?: Expressionable<any>;
  type: Expressionable<('RestSource')>;
}

export interface RetryPolicy {
  count?: Expressionable<any>;
  intervalInSeconds?: Expressionable<number>;
}

export interface SalesforceLinkedService {
  type: Expressionable<('Salesforce')>;
  typeProperties: Expressionable<SalesforceLinkedServiceTypeProperties>;
}

export interface SalesforceLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  environmentUrl?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  securityToken?: Expressionable<SecretBase>;
  username?: Expressionable<any>;
}

export interface SalesforceMarketingCloudLinkedService {
  type: Expressionable<('SalesforceMarketingCloud')>;
  typeProperties: Expressionable<SalesforceMarketingCloudLinkedServiceTypeProperties>;
}

export interface SalesforceMarketingCloudLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface SalesforceMarketingCloudObjectDataset {
  type: Expressionable<('SalesforceMarketingCloudObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface SalesforceMarketingCloudSource {
  query?: Expressionable<any>;
  type: Expressionable<('SalesforceMarketingCloudSource')>;
}

export interface SalesforceObjectDataset {
  type: Expressionable<('SalesforceObject')>;
  typeProperties?: Expressionable<SalesforceObjectDatasetTypeProperties>;
}

export interface SalesforceObjectDatasetTypeProperties {
  objectApiName?: Expressionable<any>;
}

export interface SalesforceServiceCloudLinkedService {
  type: Expressionable<('SalesforceServiceCloud')>;
  typeProperties: Expressionable<SalesforceServiceCloudLinkedServiceTypeProperties>;
}

export interface SalesforceServiceCloudLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  environmentUrl?: Expressionable<any>;
  extendedProperties?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  securityToken?: Expressionable<SecretBase>;
  username?: Expressionable<any>;
}

export interface SalesforceServiceCloudObjectDataset {
  type: Expressionable<('SalesforceServiceCloudObject')>;
  typeProperties?: Expressionable<SalesforceServiceCloudObjectDatasetTypeProperties>;
}

export interface SalesforceServiceCloudObjectDatasetTypeProperties {
  objectApiName?: Expressionable<any>;
}

export interface SalesforceServiceCloudSink {
  externalIdFieldName?: Expressionable<any>;
  ignoreNullValues?: Expressionable<any>;
  type: Expressionable<('SalesforceServiceCloudSink')>;
  writeBehavior?: Expressionable<('Insert' | 'Upsert')>;
}

export interface SalesforceServiceCloudSource {
  query?: Expressionable<any>;
  readBehavior?: Expressionable<('Query' | 'QueryAll')>;
  type: Expressionable<('SalesforceServiceCloudSource')>;
}

export interface SalesforceSink {
  externalIdFieldName?: Expressionable<any>;
  ignoreNullValues?: Expressionable<any>;
  type: Expressionable<('SalesforceSink')>;
  writeBehavior?: Expressionable<('Insert' | 'Upsert')>;
}

export interface SalesforceSource {
  query?: Expressionable<any>;
  readBehavior?: Expressionable<('Query' | 'QueryAll')>;
  type: Expressionable<('SalesforceSource')>;
}

export interface SapBwCubeDataset {
  type: Expressionable<('SapBwCube')>;
}

export interface SapBWLinkedService {
  type: Expressionable<('SapBW')>;
  typeProperties: Expressionable<SapBWLinkedServiceTypeProperties>;
}

export interface SapBWLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  server: Expressionable<any>;
  systemNumber: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface SapBwSource {
  query?: Expressionable<any>;
  type: Expressionable<('SapBwSource')>;
}

export interface SapCloudForCustomerLinkedService {
  type: Expressionable<('SapCloudForCustomer')>;
  typeProperties: Expressionable<SapCloudForCustomerLinkedServiceTypeProperties>;
}

export interface SapCloudForCustomerLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  url: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface SapCloudForCustomerResourceDataset {
  type: Expressionable<('SapCloudForCustomerResource')>;
  typeProperties: Expressionable<SapCloudForCustomerResourceDatasetTypeProperties>;
}

export interface SapCloudForCustomerResourceDatasetTypeProperties {
  path: Expressionable<any>;
}

export interface SapCloudForCustomerSink {
  type: Expressionable<('SapCloudForCustomerSink')>;
  writeBehavior?: Expressionable<('Insert' | 'Update')>;
}

export interface SapCloudForCustomerSource {
  query?: Expressionable<any>;
  type: Expressionable<('SapCloudForCustomerSource')>;
}

export interface SapEccLinkedService {
  type: Expressionable<('SapEcc')>;
  typeProperties: Expressionable<SapEccLinkedServiceTypeProperties>;
}

export interface SapEccLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<string>;
  password?: Expressionable<SecretBase>;
  url: Expressionable<string>;
  username?: Expressionable<string>;
}

export interface SapEccResourceDataset {
  type: Expressionable<('SapEccResource')>;
  typeProperties: Expressionable<SapEccResourceDatasetTypeProperties>;
}

export interface SapEccResourceDatasetTypeProperties {
  path: Expressionable<any>;
}

export interface SapEccSource {
  query?: Expressionable<any>;
  type: Expressionable<('SapEccSource')>;
}

export interface SapHanaLinkedService {
  type: Expressionable<('SapHana')>;
  typeProperties: Expressionable<SapHanaLinkedServiceProperties>;
}

export interface SapHanaLinkedServiceProperties {
  authenticationType?: Expressionable<('Basic' | 'Windows')>;
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  server: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface SapHanaPartitionSettings {
  partitionColumnName?: Expressionable<any>;
}

export interface SapHanaSource {
  packetSize?: Expressionable<any>;
  partitionOption?: Expressionable<('None' | 'PhysicalPartitionsOfTable' | 'SapHanaDynamicRange')>;
  partitionSettings?: Expressionable<SapHanaPartitionSettings>;
  query?: Expressionable<any>;
  type: Expressionable<('SapHanaSource')>;
}

export interface SapHanaTableDataset {
  type: Expressionable<('SapHanaTable')>;
  typeProperties?: Expressionable<SapHanaTableDatasetTypeProperties>;
}

export interface SapHanaTableDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
}

export interface SapOpenHubLinkedService {
  type: Expressionable<('SapOpenHub')>;
  typeProperties: Expressionable<SapOpenHubLinkedServiceTypeProperties>;
}

export interface SapOpenHubLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  language?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  server: Expressionable<any>;
  systemNumber: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface SapOpenHubSource {
  baseRequestId?: Expressionable<any>;
  excludeLastRequest?: Expressionable<any>;
  type: Expressionable<('SapOpenHubSource')>;
}

export interface SapOpenHubTableDataset {
  type: Expressionable<('SapOpenHubTable')>;
  typeProperties: Expressionable<SapOpenHubTableDatasetTypeProperties>;
}

export interface SapOpenHubTableDatasetTypeProperties {
  baseRequestId?: Expressionable<any>;
  excludeLastRequest?: Expressionable<any>;
  openHubDestinationName: Expressionable<any>;
}

export interface SapTableLinkedService {
  type: Expressionable<('SapTable')>;
  typeProperties: Expressionable<SapTableLinkedServiceTypeProperties>;
}

export interface SapTableLinkedServiceTypeProperties {
  clientId?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  language?: Expressionable<any>;
  logonGroup?: Expressionable<any>;
  messageServer?: Expressionable<any>;
  messageServerService?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  server?: Expressionable<any>;
  sncLibraryPath?: Expressionable<any>;
  sncMode?: Expressionable<any>;
  sncMyName?: Expressionable<any>;
  sncPartnerName?: Expressionable<any>;
  sncQop?: Expressionable<any>;
  systemId?: Expressionable<any>;
  systemNumber?: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface SapTablePartitionSettings {
  maxPartitionsNumber?: Expressionable<any>;
  partitionColumnName?: Expressionable<any>;
  partitionLowerBound?: Expressionable<any>;
  partitionUpperBound?: Expressionable<any>;
}

export interface SapTableResourceDataset {
  type: Expressionable<('SapTableResource')>;
  typeProperties: Expressionable<SapTableResourceDatasetTypeProperties>;
}

export interface SapTableResourceDatasetTypeProperties {
  tableName: Expressionable<any>;
}

export interface SapTableSource {
  batchSize?: Expressionable<any>;
  customRfcReadTableFunctionModule?: Expressionable<any>;
  partitionOption?: Expressionable<('None' | 'PartitionOnInt' | 'PartitionOnCalendarYear' | 'PartitionOnCalendarMonth' | 'PartitionOnCalendarDate' | 'PartitionOnTime')>;
  partitionSettings?: Expressionable<SapTablePartitionSettings>;
  rfcTableFields?: Expressionable<any>;
  rfcTableOptions?: Expressionable<any>;
  rowCount?: Expressionable<any>;
  rowSkips?: Expressionable<any>;
  type: Expressionable<('SapTableSource')>;
}

export interface ScheduleTrigger {
  type: Expressionable<('ScheduleTrigger')>;
  typeProperties: Expressionable<ScheduleTriggerTypeProperties>;
}

export interface ScheduleTriggerRecurrence {
  additionalProperties?: Expressionable<any>;
  endTime?: Expressionable<string>;
  frequency?: Expressionable<('NotSpecified' | 'Minute' | 'Hour' | 'Day' | 'Week' | 'Month' | 'Year')>;
  interval?: Expressionable<number>;
  schedule?: Expressionable<RecurrenceSchedule>;
  startTime?: Expressionable<string>;
  timeZone?: Expressionable<string>;
}

export interface ScheduleTriggerTypeProperties {
  recurrence: Expressionable<ScheduleTriggerRecurrence>;
}

export interface ScriptAction {
  name: Expressionable<string>;
  parameters?: Expressionable<string>;
  roles: Expressionable<any>;
  uri: Expressionable<string>;
}

export interface SecretBase {
}

export interface SecureString {
  type: Expressionable<('SecureString')>;
  value: Expressionable<string>;
}

export interface SelfDependencyTumblingWindowTriggerReference {
  offset: Expressionable<string>;
  size?: Expressionable<string>;
  type: Expressionable<('SelfDependencyTumblingWindowTriggerReference')>;
}

export interface SelfHostedIntegrationRuntime {
  type: Expressionable<('SelfHosted')>;
  typeProperties?: Expressionable<SelfHostedIntegrationRuntimeTypeProperties>;
}

export interface SelfHostedIntegrationRuntimeTypeProperties {
  linkedInfo?: Expressionable<LinkedIntegrationRuntimeType>;
}

export interface ServiceNowLinkedService {
  type: Expressionable<('ServiceNow')>;
  typeProperties: Expressionable<ServiceNowLinkedServiceTypeProperties>;
}

export interface ServiceNowLinkedServiceTypeProperties {
  authenticationType: Expressionable<('Basic' | 'OAuth2')>;
  clientId?: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface ServiceNowObjectDataset {
  type: Expressionable<('ServiceNowObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface ServiceNowSource {
  query?: Expressionable<any>;
  type: Expressionable<('ServiceNowSource')>;
}

export interface SetVariableActivity {
  type: Expressionable<('SetVariable')>;
  typeProperties: Expressionable<SetVariableActivityTypeProperties>;
}

export interface SetVariableActivityTypeProperties {
  value?: Expressionable<any>;
  variableName?: Expressionable<string>;
}

export interface SftpLocation {
  type: Expressionable<('SftpLocation')>;
}

export interface SftpReadSettings {
  modifiedDatetimeEnd?: Expressionable<any>;
  modifiedDatetimeStart?: Expressionable<any>;
  recursive?: Expressionable<any>;
  type: Expressionable<('SftpReadSettings')>;
  wildcardFileName?: Expressionable<any>;
  wildcardFolderPath?: Expressionable<any>;
}

export interface SftpServerLinkedService {
  type: Expressionable<('Sftp')>;
  typeProperties: Expressionable<SftpServerLinkedServiceTypeProperties>;
}

export interface SftpServerLinkedServiceTypeProperties {
  authenticationType?: Expressionable<('Basic' | 'SshPublicKey')>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  hostKeyFingerprint?: Expressionable<any>;
  passPhrase?: Expressionable<SecretBase>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  privateKeyContent?: Expressionable<SecretBase>;
  privateKeyPath?: Expressionable<any>;
  skipHostKeyValidation?: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface SftpWriteSettings {
  operationTimeout?: Expressionable<any>;
  type: Expressionable<('SftpWriteSettings')>;
}

export interface ShopifyLinkedService {
  type: Expressionable<('Shopify')>;
  typeProperties: Expressionable<ShopifyLinkedServiceTypeProperties>;
}

export interface ShopifyLinkedServiceTypeProperties {
  accessToken?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface ShopifyObjectDataset {
  type: Expressionable<('ShopifyObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface ShopifySource {
  query?: Expressionable<any>;
  type: Expressionable<('ShopifySource')>;
}

export interface SparkDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface SparkLinkedService {
  type: Expressionable<('Spark')>;
  typeProperties: Expressionable<SparkLinkedServiceTypeProperties>;
}

export interface SparkLinkedServiceTypeProperties {
  allowHostNameCNMismatch?: Expressionable<any>;
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType: Expressionable<('Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService')>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  httpPath?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port: Expressionable<any>;
  serverType?: Expressionable<('SharkServer' | 'SharkServer2' | 'SparkThriftServer')>;
  thriftTransportProtocol?: Expressionable<('Binary' | 'SASL' | 'HTTP ')>;
  trustedCertPath?: Expressionable<any>;
  username?: Expressionable<any>;
  useSystemTrustStore?: Expressionable<any>;
}

export interface SparkObjectDataset {
  type: Expressionable<('SparkObject')>;
  typeProperties?: Expressionable<SparkDatasetTypeProperties>;
}

export interface SparkSource {
  query?: Expressionable<any>;
  type: Expressionable<('SparkSource')>;
}

export interface SqlDWSink {
  allowCopyCommand?: Expressionable<any>;
  allowPolyBase?: Expressionable<any>;
  copyCommandSettings?: Expressionable<DWCopyCommandSettings>;
  polyBaseSettings?: Expressionable<PolybaseSettings>;
  preCopyScript?: Expressionable<any>;
  tableOption?: Expressionable<any>;
  type: Expressionable<('SqlDWSink')>;
}

export interface SqlDWSource {
  sqlReaderQuery?: Expressionable<any>;
  sqlReaderStoredProcedureName?: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
  type: Expressionable<('SqlDWSource')>;
}

export interface SqlMISink {
  preCopyScript?: Expressionable<any>;
  sqlWriterStoredProcedureName?: Expressionable<any>;
  sqlWriterTableType?: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
  storedProcedureTableTypeParameterName?: Expressionable<any>;
  tableOption?: Expressionable<any>;
  type: Expressionable<('SqlMISink')>;
}

export interface SqlMISource {
  produceAdditionalTypes?: Expressionable<any>;
  sqlReaderQuery?: Expressionable<any>;
  sqlReaderStoredProcedureName?: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
  type: Expressionable<('SqlMISource')>;
}

export interface SqlServerLinkedService {
  type: Expressionable<('SqlServer')>;
  typeProperties: Expressionable<SqlServerLinkedServiceTypeProperties>;
}

export interface SqlServerLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  userName?: Expressionable<any>;
}

export interface SqlServerSink {
  preCopyScript?: Expressionable<any>;
  sqlWriterStoredProcedureName?: Expressionable<any>;
  sqlWriterTableType?: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
  storedProcedureTableTypeParameterName?: Expressionable<any>;
  tableOption?: Expressionable<any>;
  type: Expressionable<('SqlServerSink')>;
}

export interface SqlServerSource {
  produceAdditionalTypes?: Expressionable<any>;
  sqlReaderQuery?: Expressionable<any>;
  sqlReaderStoredProcedureName?: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
  type: Expressionable<('SqlServerSource')>;
}

export interface SqlServerStoredProcedureActivity {
  type: Expressionable<('SqlServerStoredProcedure')>;
  typeProperties: Expressionable<SqlServerStoredProcedureActivityTypeProperties>;
}

export interface SqlServerStoredProcedureActivityTypeProperties {
  storedProcedureName: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
}

export interface SqlServerTableDataset {
  type: Expressionable<('SqlServerTable')>;
  typeProperties?: Expressionable<SqlServerTableDatasetTypeProperties>;
}

export interface SqlServerTableDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface SqlSink {
  preCopyScript?: Expressionable<any>;
  sqlWriterStoredProcedureName?: Expressionable<any>;
  sqlWriterTableType?: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
  storedProcedureTableTypeParameterName?: Expressionable<any>;
  tableOption?: Expressionable<any>;
  type: Expressionable<('SqlSink')>;
}

export interface SqlSource {
  sqlReaderQuery?: Expressionable<any>;
  sqlReaderStoredProcedureName?: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
  type: Expressionable<('SqlSource')>;
}

export interface SquareLinkedService {
  type: Expressionable<('Square')>;
  typeProperties: Expressionable<SquareLinkedServiceTypeProperties>;
}

export interface SquareLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  redirectUri: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface SquareObjectDataset {
  type: Expressionable<('SquareObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface SquareSource {
  query?: Expressionable<any>;
  type: Expressionable<('SquareSource')>;
}

export interface SSISAccessCredential {
  domain: Expressionable<any>;
  password: Expressionable<SecretBase>;
  userName: Expressionable<any>;
}

export interface SSISChildPackage {
  packageContent: Expressionable<any>;
  packageLastModifiedDate?: Expressionable<string>;
  packageName?: Expressionable<string>;
  packagePath: Expressionable<any>;
}

export interface SSISExecutionCredential {
  domain: Expressionable<any>;
  password: Expressionable<SecureString>;
  userName: Expressionable<any>;
}

export interface SSISExecutionParameter {
  value: Expressionable<any>;
}

export interface SSISLogLocation {
  logPath: Expressionable<any>;
  type: Expressionable<('File')>;
  typeProperties: Expressionable<SSISLogLocationTypeProperties>;
}

export interface SSISLogLocationTypeProperties {
  accessCredential?: Expressionable<SSISAccessCredential>;
  logRefreshInterval?: Expressionable<any>;
}

export interface SSISPackageLocation {
  packagePath?: Expressionable<any>;
  type?: Expressionable<('SSISDB' | 'File' | 'InlinePackage')>;
  typeProperties?: Expressionable<SSISPackageLocationTypeProperties>;
}

export interface SSISPackageLocationTypeProperties {
  accessCredential?: Expressionable<SSISAccessCredential>;
  childPackages?: Expressionable<SSISChildPackage[]>;
  configurationPath?: Expressionable<any>;
  packageContent?: Expressionable<any>;
  packageLastModifiedDate?: Expressionable<string>;
  packageName?: Expressionable<string>;
  packagePassword?: Expressionable<SecretBase>;
}

export interface SSISPropertyOverride {
  isSensitive?: Expressionable<boolean>;
  value: Expressionable<any>;
}

export interface StagingSettings {
  additionalProperties?: Expressionable<any>;
  enableCompression?: Expressionable<any>;
  linkedServiceName: Expressionable<LinkedServiceReference>;
  path?: Expressionable<any>;
}

export interface StoredProcedureParameter {
  type?: Expressionable<('String' | 'Int' | 'Int64' | 'Decimal' | 'Guid' | 'Boolean' | 'Date')>;
  value?: Expressionable<any>;
}

export interface StoreReadSettings {
  additionalProperties?: Expressionable<any>;
  maxConcurrentConnections?: Expressionable<any>;
}

export interface StoreWriteSettings {
  additionalProperties?: Expressionable<any>;
  copyBehavior?: Expressionable<any>;
  maxConcurrentConnections?: Expressionable<any>;
}

export interface SwitchActivity {
  type: Expressionable<('Switch')>;
  typeProperties: Expressionable<SwitchActivityTypeProperties>;
}

export interface SwitchActivityTypeProperties {
  cases?: Expressionable<SwitchCase[]>;
  defaultActivities?: Expressionable<Activity[]>;
  on: Expressionable<Expression>;
}

export interface SwitchCase {
  activities?: Expressionable<Activity[]>;
  value?: Expressionable<string>;
}

export interface SybaseLinkedService {
  type: Expressionable<('Sybase')>;
  typeProperties: Expressionable<SybaseLinkedServiceTypeProperties>;
}

export interface SybaseLinkedServiceTypeProperties {
  authenticationType?: Expressionable<('Basic' | 'Windows')>;
  database: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  schema?: Expressionable<any>;
  server: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface SybaseSource {
  query?: Expressionable<any>;
  type: Expressionable<('SybaseSource')>;
}

export interface SybaseTableDataset {
  type: Expressionable<('SybaseTable')>;
  typeProperties?: Expressionable<SybaseTableDatasetTypeProperties>;
}

export interface SybaseTableDatasetTypeProperties {
  tableName?: Expressionable<any>;
}

export interface TabularSource {
  queryTimeout?: Expressionable<any>;
  type: Expressionable<('TabularSource')>;
}

export interface TeradataLinkedService {
  type: Expressionable<('Teradata')>;
  typeProperties: Expressionable<TeradataLinkedServiceTypeProperties>;
}

export interface TeradataLinkedServiceTypeProperties {
  authenticationType?: Expressionable<('Basic' | 'Windows')>;
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  server?: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface TeradataPartitionSettings {
  partitionColumnName?: Expressionable<any>;
  partitionLowerBound?: Expressionable<any>;
  partitionUpperBound?: Expressionable<any>;
}

export interface TeradataSource {
  partitionOption?: Expressionable<('None' | 'Hash' | 'DynamicRange')>;
  partitionSettings?: Expressionable<TeradataPartitionSettings>;
  query?: Expressionable<any>;
  type: Expressionable<('TeradataSource')>;
}

export interface TeradataTableDataset {
  type: Expressionable<('TeradataTable')>;
  typeProperties?: Expressionable<TeradataTableDatasetTypeProperties>;
}

export interface TeradataTableDatasetTypeProperties {
  database?: Expressionable<any>;
  table?: Expressionable<any>;
}

export interface TextFormat {
  columnDelimiter?: Expressionable<any>;
  encodingName?: Expressionable<any>;
  escapeChar?: Expressionable<any>;
  firstRowAsHeader?: Expressionable<any>;
  nullValue?: Expressionable<any>;
  quoteChar?: Expressionable<any>;
  rowDelimiter?: Expressionable<any>;
  skipLineCount?: Expressionable<any>;
  treatEmptyAsNull?: Expressionable<any>;
  type: Expressionable<('TextFormat')>;
}

export interface Transformation {
  description?: Expressionable<string>;
  name: Expressionable<string>;
}

export interface Trigger {
  additionalProperties?: Expressionable<any>;
  annotations?: Expressionable<any[]>;
  description?: Expressionable<string>;
}

export interface TriggerDependencyReference {
  referenceTrigger: Expressionable<TriggerReference>;
  type: Expressionable<('TriggerDependencyReference')>;
}

export interface TriggerPipelineReference {
  parameters?: Expressionable<any>;
  pipelineReference?: Expressionable<PipelineReference>;
}

export interface TriggerReference {
  referenceName: Expressionable<string>;
  type: Expressionable<('TriggerReference')>;
}

export interface TumblingWindowTrigger {
  pipeline: Expressionable<TriggerPipelineReference>;
  type: Expressionable<('TumblingWindowTrigger')>;
  typeProperties: Expressionable<TumblingWindowTriggerTypeProperties>;
}

export interface TumblingWindowTriggerDependencyReference {
  offset?: Expressionable<string>;
  size?: Expressionable<string>;
  type: Expressionable<('TumblingWindowTriggerDependencyReference')>;
}

export interface TumblingWindowTriggerTypeProperties {
  delay?: Expressionable<any>;
  dependsOn?: Expressionable<DependencyReference[]>;
  endTime?: Expressionable<string>;
  frequency: Expressionable<('Minute' | 'Hour')>;
  interval: Expressionable<number>;
  maxConcurrency: Expressionable<number>;
  retryPolicy?: Expressionable<RetryPolicy>;
  startTime: Expressionable<string>;
}

export interface UntilActivity {
  type: Expressionable<('Until')>;
  typeProperties: Expressionable<UntilActivityTypeProperties>;
}

export interface UntilActivityTypeProperties {
  activities: Expressionable<Activity[]>;
  expression: Expressionable<Expression>;
  timeout?: Expressionable<any>;
}

export interface UserProperty {
  name: Expressionable<string>;
  value: Expressionable<any>;
}

export interface ValidationActivity {
  type: Expressionable<('Validation')>;
  typeProperties: Expressionable<ValidationActivityTypeProperties>;
}

export interface ValidationActivityTypeProperties {
  childItems?: Expressionable<any>;
  dataset: Expressionable<DatasetReference>;
  minimumSize?: Expressionable<any>;
  sleep?: Expressionable<any>;
  timeout?: Expressionable<any>;
}

export interface VariableSpecification {
  defaultValue?: Expressionable<any>;
  type: Expressionable<('String' | 'Bool' | 'Array')>;
}

export interface VerticaDatasetTypeProperties {
  schema?: Expressionable<any>;
  table?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface VerticaLinkedService {
  type: Expressionable<('Vertica')>;
  typeProperties: Expressionable<VerticaLinkedServiceTypeProperties>;
}

export interface VerticaLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  pwd?: Expressionable<AzureKeyVaultSecretReference>;
}

export interface VerticaSource {
  query?: Expressionable<any>;
  type: Expressionable<('VerticaSource')>;
}

export interface VerticaTableDataset {
  type: Expressionable<('VerticaTable')>;
  typeProperties?: Expressionable<VerticaDatasetTypeProperties>;
}

export interface WaitActivity {
  type: Expressionable<('Wait')>;
  typeProperties: Expressionable<WaitActivityTypeProperties>;
}

export interface WaitActivityTypeProperties {
  waitTimeInSeconds: Expressionable<number>;
}

export interface WebActivity {
  type: Expressionable<('WebActivity')>;
  typeProperties: Expressionable<WebActivityTypeProperties>;
}

export interface WebActivityAuthentication {
  password?: Expressionable<SecretBase>;
  pfx?: Expressionable<SecretBase>;
  resource?: Expressionable<string>;
  type: Expressionable<string>;
  username?: Expressionable<string>;
}

export interface WebActivityTypeProperties {
  authentication?: Expressionable<WebActivityAuthentication>;
  body?: Expressionable<any>;
  connectVia?: Expressionable<IntegrationRuntimeReference>;
  datasets?: Expressionable<DatasetReference[]>;
  headers?: Expressionable<any>;
  linkedServices?: Expressionable<LinkedServiceReference[]>;
  method: Expressionable<('GET' | 'POST' | 'PUT' | 'DELETE')>;
  url: Expressionable<any>;
}

export interface WebAnonymousAuthentication {
  authenticationType: Expressionable<('Anonymous')>;
}

export interface WebBasicAuthentication {
  authenticationType: Expressionable<('Basic')>;
  password: Expressionable<SecretBase>;
  username: Expressionable<any>;
}

export interface WebClientCertificateAuthentication {
  authenticationType: Expressionable<('ClientCertificate')>;
  password: Expressionable<SecretBase>;
  pfx: Expressionable<SecretBase>;
}

export interface WebHookActivity {
  type: Expressionable<('WebHook')>;
  typeProperties: Expressionable<WebHookActivityTypeProperties>;
}

export interface WebHookActivityTypeProperties {
  authentication?: Expressionable<WebActivityAuthentication>;
  body?: Expressionable<any>;
  headers?: Expressionable<any>;
  method: Expressionable<('POST')>;
  reportStatusOnCallBack?: Expressionable<any>;
  timeout?: Expressionable<string>;
  url: Expressionable<any>;
}

export interface WebLinkedService {
  type: Expressionable<('Web')>;
  typeProperties: Expressionable<WebLinkedServiceTypeProperties>;
}

export interface WebLinkedServiceTypeProperties {
  url: Expressionable<any>;
}

export interface WebSource {
  type: Expressionable<('WebSource')>;
}

export interface WebTableDataset {
  type: Expressionable<('WebTable')>;
  typeProperties: Expressionable<WebTableDatasetTypeProperties>;
}

export interface WebTableDatasetTypeProperties {
  index: Expressionable<any>;
  path?: Expressionable<any>;
}

export interface XeroLinkedService {
  type: Expressionable<('Xero')>;
  typeProperties: Expressionable<XeroLinkedServiceTypeProperties>;
}

export interface XeroLinkedServiceTypeProperties {
  consumerKey?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  privateKey?: Expressionable<SecretBase>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface XeroObjectDataset {
  type: Expressionable<('XeroObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface XeroSource {
  query?: Expressionable<any>;
  type: Expressionable<('XeroSource')>;
}

export interface ZohoLinkedService {
  type: Expressionable<('Zoho')>;
  typeProperties: Expressionable<ZohoLinkedServiceTypeProperties>;
}

export interface ZohoLinkedServiceTypeProperties {
  accessToken?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface ZohoObjectDataset {
  type: Expressionable<('ZohoObject')>;
  typeProperties?: Expressionable<GenericDatasetTypeProperties>;
}

export interface ZohoSource {
  query?: Expressionable<any>;
  type: Expressionable<('ZohoSource')>;
}

export namespace factories {
  export function create(name: Expressionable<string>, properties: FactoryProperties, location: Expressionable<string>): ResourceDefinition<FactoryProperties> {
    return {
      type: 'Microsoft.DataFactory/factories',
      apiVersion: '2018-06-01',
      name,
      location,
      properties,
    };
  }
}
export namespace factories {
  export namespace dataflows {
    export function create(name: Expressionable<string>, properties: DataFlow, location: Expressionable<string>): ResourceDefinition<DataFlow> {
      return {
        type: 'Microsoft.DataFactory/factories/dataflows',
        apiVersion: '2018-06-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace factories {
  export namespace datasets {
    export function create(name: Expressionable<string>, properties: Dataset, location: Expressionable<string>): ResourceDefinition<Dataset> {
      return {
        type: 'Microsoft.DataFactory/factories/datasets',
        apiVersion: '2018-06-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace factories {
  export namespace integrationRuntimes {
    export function create(name: Expressionable<string>, properties: IntegrationRuntime, location: Expressionable<string>): ResourceDefinition<IntegrationRuntime> {
      return {
        type: 'Microsoft.DataFactory/factories/integrationRuntimes',
        apiVersion: '2018-06-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace factories {
  export namespace linkedservices {
    export function create(name: Expressionable<string>, properties: LinkedService, location: Expressionable<string>): ResourceDefinition<LinkedService> {
      return {
        type: 'Microsoft.DataFactory/factories/linkedservices',
        apiVersion: '2018-06-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace factories {
  export namespace pipelines {
    export function create(name: Expressionable<string>, properties: Pipeline, location: Expressionable<string>): ResourceDefinition<Pipeline> {
      return {
        type: 'Microsoft.DataFactory/factories/pipelines',
        apiVersion: '2018-06-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace factories {
  export namespace triggers {
    export function create(name: Expressionable<string>, properties: Trigger, location: Expressionable<string>): ResourceDefinition<Trigger> {
      return {
        type: 'Microsoft.DataFactory/factories/triggers',
        apiVersion: '2018-06-01',
        name,
        location,
        properties,
      };
    }
  }
}
export namespace factories {
  export namespace triggers {
    export namespace rerunTriggers {
      export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
        return {
          type: 'Microsoft.DataFactory/factories/triggers/rerunTriggers',
          apiVersion: '2018-06-01',
          name,
          location,
          properties,
        };
      }
    }
  }
}
