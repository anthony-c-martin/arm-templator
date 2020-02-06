// Generated using 'npm run schema /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2019-01-01/Microsoft.ApiManagement.json'
import { Expressionable, ResourceDefinition } from '../common';

export interface AdditionalLocation {
  location: Expressionable<string>;
  sku: Expressionable<ApiManagementServiceSkuProperties>;
  virtualNetworkConfiguration?: Expressionable<VirtualNetworkConfiguration>;
}

export interface ApiCreateOrUpdateProperties {
  description?: Expressionable<string>;
  authenticationSettings?: Expressionable<AuthenticationSettingsContract>;
  subscriptionKeyParameterNames?: Expressionable<SubscriptionKeyParameterNamesContract>;
  type?: Expressionable<('http' | 'soap')>;
  apiRevision?: Expressionable<string>;
  apiVersion?: Expressionable<string>;
  isCurrent?: Expressionable<boolean>;
  apiRevisionDescription?: Expressionable<string>;
  apiVersionDescription?: Expressionable<string>;
  apiVersionSetId?: Expressionable<string>;
  subscriptionRequired?: Expressionable<boolean>;
  sourceApiId?: Expressionable<string>;
  displayName?: Expressionable<string>;
  serviceUrl?: Expressionable<string>;
  path: Expressionable<string>;
  protocols?: Expressionable<('http' | 'https')[]>;
  apiVersionSet?: Expressionable<ApiVersionSetContractDetails>;
  value?: Expressionable<string>;
  format?: Expressionable<('wadl-xml' | 'wadl-link-json' | 'swagger-json' | 'swagger-link-json' | 'wsdl' | 'wsdl-link' | 'openapi' | 'openapi+json' | 'openapi-link')>;
  wsdlSelector?: Expressionable<ApiCreateOrUpdatePropertiesWsdlSelector>;
  apiType?: Expressionable<('http' | 'soap')>;
}

export interface ApiCreateOrUpdatePropertiesWsdlSelector {
  wsdlServiceName?: Expressionable<string>;
  wsdlEndpointName?: Expressionable<string>;
}

export interface ApiManagementServiceIdentity {
  type: Expressionable<('SystemAssigned')>;
}

export interface ApiManagementServiceProperties {
  notificationSenderEmail?: Expressionable<string>;
  hostnameConfigurations?: Expressionable<HostnameConfiguration[]>;
  virtualNetworkConfiguration?: Expressionable<VirtualNetworkConfiguration>;
  additionalLocations?: Expressionable<AdditionalLocation[]>;
  certificates?: Expressionable<CertificateConfiguration[]>;
  enableClientCertificate?: Expressionable<boolean>;
  virtualNetworkType?: Expressionable<('None' | 'External' | 'Internal')>;
  publisherEmail: Expressionable<string>;
  publisherName: Expressionable<string>;
}

export interface ApiManagementServiceSkuProperties {
  name: Expressionable<('Developer' | 'Standard' | 'Premium' | 'Basic' | 'Consumption')>;
  capacity?: Expressionable<number>;
}

export interface ApiReleaseContractProperties {
  apiId?: Expressionable<string>;
  notes?: Expressionable<string>;
}

export interface ApiVersionSetContractDetails {
  id?: Expressionable<string>;
  name?: Expressionable<string>;
  description?: Expressionable<string>;
  versioningScheme?: Expressionable<('Segment' | 'Query' | 'Header')>;
  versionQueryName?: Expressionable<string>;
  versionHeaderName?: Expressionable<string>;
}

export interface ApiVersionSetContractProperties {
  description?: Expressionable<string>;
  versionQueryName?: Expressionable<string>;
  versionHeaderName?: Expressionable<string>;
  displayName: Expressionable<string>;
  versioningScheme: Expressionable<('Segment' | 'Query' | 'Header')>;
}

export interface AuthenticationSettingsContract {
  oAuth2?: Expressionable<OAuth2AuthenticationSettingsContract>;
  openid?: Expressionable<OpenIdAuthenticationSettingsContract>;
  subscriptionKeyRequired?: Expressionable<boolean>;
}

export interface AuthorizationServerContractProperties {
  description?: Expressionable<string>;
  authorizationMethods?: Expressionable<('HEAD' | 'OPTIONS' | 'TRACE' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE')[]>;
  clientAuthenticationMethod?: Expressionable<('Basic' | 'Body')[]>;
  tokenBodyParameters?: Expressionable<TokenBodyParameterContract[]>;
  tokenEndpoint?: Expressionable<string>;
  supportState?: Expressionable<boolean>;
  defaultScope?: Expressionable<string>;
  bearerTokenSendingMethods?: Expressionable<('authorizationHeader' | 'query')[]>;
  clientSecret?: Expressionable<string>;
  resourceOwnerUsername?: Expressionable<string>;
  resourceOwnerPassword?: Expressionable<string>;
  displayName: Expressionable<string>;
  clientRegistrationEndpoint: Expressionable<string>;
  authorizationEndpoint: Expressionable<string>;
  grantTypes: Expressionable<('authorizationCode' | 'implicit' | 'resourceOwnerPassword' | 'clientCredentials')[]>;
  clientId: Expressionable<string>;
}

export interface BackendAuthorizationHeaderCredentials {
  scheme: Expressionable<string>;
  parameter: Expressionable<string>;
}

export interface BackendContractProperties {
  title?: Expressionable<string>;
  description?: Expressionable<string>;
  resourceId?: Expressionable<string>;
  properties?: Expressionable<BackendProperties>;
  credentials?: Expressionable<BackendCredentialsContract>;
  proxy?: Expressionable<BackendProxyContract>;
  tls?: Expressionable<BackendTlsProperties>;
  url: Expressionable<string>;
  protocol: Expressionable<('http' | 'soap')>;
}

export interface BackendCredentialsContract {
  certificate?: Expressionable<string[]>;
  authorization?: Expressionable<BackendAuthorizationHeaderCredentials>;
}

export interface BackendProperties {
  serviceFabricCluster?: Expressionable<BackendServiceFabricClusterProperties>;
}

export interface BackendProxyContract {
  url: Expressionable<string>;
  username?: Expressionable<string>;
  password?: Expressionable<string>;
}

export interface BackendServiceFabricClusterProperties {
  clientCertificatethumbprint: Expressionable<string>;
  maxPartitionResolutionRetries?: Expressionable<number>;
  managementEndpoints: Expressionable<string[]>;
  serverCertificateThumbprints?: Expressionable<string[]>;
  serverX509Names?: Expressionable<X509CertificateName[]>;
}

export interface BackendTlsProperties {
  validateCertificateChain?: Expressionable<boolean>;
  validateCertificateName?: Expressionable<boolean>;
}

export interface BodyDiagnosticSettings {
  bytes?: Expressionable<number>;
}

export interface CacheContractProperties {
  description?: Expressionable<string>;
  connectionString: Expressionable<string>;
  resourceId?: Expressionable<string>;
}

export interface CertificateConfiguration {
  encodedCertificate?: Expressionable<string>;
  certificatePassword?: Expressionable<string>;
  storeName: Expressionable<('CertificateAuthority' | 'Root')>;
  certificate?: Expressionable<CertificateInformation>;
}

export interface CertificateCreateOrUpdateProperties {
  data: Expressionable<string>;
  password: Expressionable<string>;
}

export interface CertificateInformation {
  expiry: Expressionable<string>;
  thumbprint: Expressionable<string>;
  subject: Expressionable<string>;
}

export interface DiagnosticContractProperties {
  alwaysLog?: Expressionable<('allErrors')>;
  loggerId: Expressionable<string>;
  sampling?: Expressionable<SamplingSettings>;
  frontend?: Expressionable<PipelineDiagnosticSettings>;
  backend?: Expressionable<PipelineDiagnosticSettings>;
  enableHttpCorrelationHeaders?: Expressionable<boolean>;
}

export interface EmailTemplateParametersContractProperties {
  name?: Expressionable<string>;
  title?: Expressionable<string>;
  description?: Expressionable<string>;
}

export interface EmailTemplateUpdateParameterProperties {
  subject?: Expressionable<string>;
  title?: Expressionable<string>;
  description?: Expressionable<string>;
  body?: Expressionable<string>;
  parameters?: Expressionable<EmailTemplateParametersContractProperties[]>;
}

export interface GroupCreateParametersProperties {
  displayName: Expressionable<string>;
  description?: Expressionable<string>;
  type?: Expressionable<('custom' | 'system' | 'external')>;
  externalId?: Expressionable<string>;
}

export interface HostnameConfiguration {
  type: Expressionable<('Proxy' | 'Portal' | 'Management' | 'Scm' | 'DeveloperPortal')>;
  hostName: Expressionable<string>;
  keyVaultId?: Expressionable<string>;
  encodedCertificate?: Expressionable<string>;
  certificatePassword?: Expressionable<string>;
  defaultSslBinding?: Expressionable<boolean>;
  negotiateClientCertificate?: Expressionable<boolean>;
  certificate?: Expressionable<CertificateInformation>;
}

export interface HttpMessageDiagnostic {
  headers?: Expressionable<string[]>;
  body?: Expressionable<BodyDiagnosticSettings>;
}

export interface IdentityProviderContractProperties {
  type?: Expressionable<('facebook' | 'google' | 'microsoft' | 'twitter' | 'aad' | 'aadB2C')>;
  allowedTenants?: Expressionable<string[]>;
  authority?: Expressionable<string>;
  signupPolicyName?: Expressionable<string>;
  signinPolicyName?: Expressionable<string>;
  profileEditingPolicyName?: Expressionable<string>;
  passwordResetPolicyName?: Expressionable<string>;
  clientId: Expressionable<string>;
  clientSecret: Expressionable<string>;
}

export interface IssueAttachmentContractProperties {
  title: Expressionable<string>;
  contentFormat: Expressionable<string>;
  content: Expressionable<string>;
}

export interface IssueCommentContractProperties {
  text: Expressionable<string>;
  createdDate?: Expressionable<string>;
  userId: Expressionable<string>;
}

export interface IssueContractProperties {
  createdDate?: Expressionable<string>;
  state?: Expressionable<('proposed' | 'open' | 'removed' | 'resolved' | 'closed')>;
  apiId?: Expressionable<string>;
  title: Expressionable<string>;
  description: Expressionable<string>;
  userId: Expressionable<string>;
}

export interface LoggerContractProperties {
  loggerType: Expressionable<('azureEventHub' | 'applicationInsights')>;
  description?: Expressionable<string>;
  isBuffered?: Expressionable<boolean>;
  resourceId?: Expressionable<string>;
}

export interface OAuth2AuthenticationSettingsContract {
  authorizationServerId?: Expressionable<string>;
  scope?: Expressionable<string>;
}

export interface OpenIdAuthenticationSettingsContract {
  openidProviderId?: Expressionable<string>;
  bearerTokenSendingMethods?: Expressionable<('authorizationHeader' | 'query')[]>;
}

export interface OpenidConnectProviderContractProperties {
  displayName: Expressionable<string>;
  description?: Expressionable<string>;
  metadataEndpoint: Expressionable<string>;
  clientId: Expressionable<string>;
  clientSecret?: Expressionable<string>;
}

export interface OperationContractProperties {
  templateParameters?: Expressionable<ParameterContract[]>;
  description?: Expressionable<string>;
  request?: Expressionable<RequestContract>;
  responses?: Expressionable<ResponseContract[]>;
  policies?: Expressionable<string>;
  displayName: Expressionable<string>;
  method: Expressionable<string>;
  urlTemplate: Expressionable<string>;
}

export interface ParameterContract {
  name: Expressionable<string>;
  description?: Expressionable<string>;
  type: Expressionable<string>;
  defaultValue?: Expressionable<string>;
  required?: Expressionable<boolean>;
  values?: Expressionable<string[]>;
}

export interface PipelineDiagnosticSettings {
  request?: Expressionable<HttpMessageDiagnostic>;
  response?: Expressionable<HttpMessageDiagnostic>;
}

export interface PolicyContractProperties {
  value: Expressionable<string>;
  format?: Expressionable<('xml' | 'xml-link' | 'rawxml' | 'rawxml-link')>;
}

export interface ProductContractProperties {
  description?: Expressionable<string>;
  terms?: Expressionable<string>;
  subscriptionRequired?: Expressionable<boolean>;
  approvalRequired?: Expressionable<boolean>;
  subscriptionsLimit?: Expressionable<number>;
  state?: Expressionable<('notPublished' | 'published')>;
  displayName: Expressionable<string>;
}

export interface PropertyContractProperties {
  tags?: Expressionable<string[]>;
  secret?: Expressionable<boolean>;
  displayName: Expressionable<string>;
  value: Expressionable<string>;
}

export interface RepresentationContract {
  contentType: Expressionable<string>;
  sample?: Expressionable<string>;
  schemaId?: Expressionable<string>;
  typeName?: Expressionable<string>;
  formParameters?: Expressionable<ParameterContract[]>;
}

export interface RequestContract {
  description?: Expressionable<string>;
  queryParameters?: Expressionable<ParameterContract[]>;
  headers?: Expressionable<ParameterContract[]>;
  representations?: Expressionable<RepresentationContract[]>;
}

export interface ResponseContract {
  statusCode: Expressionable<number>;
  description?: Expressionable<string>;
  representations?: Expressionable<RepresentationContract[]>;
  headers?: Expressionable<ParameterContract[]>;
}

export interface SamplingSettings {
  samplingType?: Expressionable<('fixed')>;
  percentage?: Expressionable<number>;
}

export interface SchemaContractProperties {
  contentType: Expressionable<string>;
  document?: Expressionable<SchemaDocumentProperties>;
}

export interface SchemaDocumentProperties {
  value?: Expressionable<string>;
}

export interface service_apis_childResource {
  name: Expressionable<string>;
  type: Expressionable<('apis')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<ApiCreateOrUpdateProperties>;
  resources?: Expressionable<service_apis_tagDescriptions_childResource | service_apis_issues_childResource | service_apis_diagnostics_childResource | service_apis_schemas_childResource | service_apis_policies_childResource | service_apis_tags_childResource | service_apis_operations_childResource | service_apis_releases_childResource[]>;
}

export interface service_apis_diagnostics_childResource {
  name: Expressionable<string>;
  type: Expressionable<('diagnostics')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<DiagnosticContractProperties>;
}

export interface service_apis_issues_attachments_childResource {
  name: Expressionable<string>;
  type: Expressionable<('attachments')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<IssueAttachmentContractProperties>;
}

export interface service_apis_issues_childResource {
  name: Expressionable<string>;
  type: Expressionable<('issues')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<IssueContractProperties>;
  resources?: Expressionable<service_apis_issues_attachments_childResource | service_apis_issues_comments_childResource[]>;
}

export interface service_apis_issues_comments_childResource {
  name: Expressionable<string>;
  type: Expressionable<('comments')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<IssueCommentContractProperties>;
}

export interface service_apis_operations_childResource {
  name: Expressionable<string>;
  type: Expressionable<('operations')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<OperationContractProperties>;
  resources?: Expressionable<service_apis_operations_tags_childResource | service_apis_operations_policies_childResource[]>;
}

export interface service_apis_operations_policies_childResource {
  name: Expressionable<('policy')>;
  type: Expressionable<('policies')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<PolicyContractProperties>;
}

export interface service_apis_operations_tags_childResource {
  name: Expressionable<string>;
  type: Expressionable<('tags')>;
  apiVersion: Expressionable<('2019-01-01')>;
}

export interface service_apis_policies_childResource {
  name: Expressionable<('policy')>;
  type: Expressionable<('policies')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<PolicyContractProperties>;
}

export interface service_apis_releases_childResource {
  name: Expressionable<string>;
  type: Expressionable<('releases')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<ApiReleaseContractProperties>;
}

export interface service_apis_schemas_childResource {
  name: Expressionable<string>;
  type: Expressionable<('schemas')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<SchemaContractProperties>;
}

export interface service_apis_tagDescriptions_childResource {
  name: Expressionable<string>;
  type: Expressionable<('tagDescriptions')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<TagDescriptionBaseProperties>;
}

export interface service_apis_tags_childResource {
  name: Expressionable<string>;
  type: Expressionable<('tags')>;
  apiVersion: Expressionable<('2019-01-01')>;
}

export interface service_apiVersionSets_childResource {
  name: Expressionable<string>;
  type: Expressionable<('apiVersionSets')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<ApiVersionSetContractProperties>;
}

export interface service_authorizationServers_childResource {
  name: Expressionable<string>;
  type: Expressionable<('authorizationServers')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<AuthorizationServerContractProperties>;
}

export interface service_backends_childResource {
  name: Expressionable<string>;
  type: Expressionable<('backends')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<BackendContractProperties>;
}

export interface service_caches_childResource {
  name: Expressionable<string>;
  type: Expressionable<('caches')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<CacheContractProperties>;
}

export interface service_certificates_childResource {
  name: Expressionable<string>;
  type: Expressionable<('certificates')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<CertificateCreateOrUpdateProperties>;
}

export interface service_diagnostics_childResource {
  name: Expressionable<string>;
  type: Expressionable<('diagnostics')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<DiagnosticContractProperties>;
}

export interface service_groups_childResource {
  name: Expressionable<string>;
  type: Expressionable<('groups')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<GroupCreateParametersProperties>;
  resources?: Expressionable<service_groups_users_childResource[]>;
}

export interface service_groups_users_childResource {
  name: Expressionable<string>;
  type: Expressionable<('users')>;
  apiVersion: Expressionable<('2019-01-01')>;
}

export interface service_identityProviders_childResource {
  name: Expressionable<('facebook' | 'google' | 'microsoft' | 'twitter' | 'aad' | 'aadB2C')>;
  type: Expressionable<('identityProviders')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<IdentityProviderContractProperties>;
}

export interface service_loggers_childResource {
  name: Expressionable<string>;
  type: Expressionable<('loggers')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<LoggerContractProperties>;
}

export interface service_notifications_childResource {
  name: Expressionable<('RequestPublisherNotificationMessage' | 'PurchasePublisherNotificationMessage' | 'NewApplicationNotificationMessage' | 'BCC' | 'NewIssuePublisherNotificationMessage' | 'AccountClosedPublisher' | 'QuotaLimitApproachingPublisherNotificationMessage')>;
  type: Expressionable<('notifications')>;
  apiVersion: Expressionable<('2019-01-01')>;
  resources?: Expressionable<service_notifications_recipientEmails_childResource | service_notifications_recipientUsers_childResource[]>;
}

export interface service_notifications_recipientEmails_childResource {
  name: Expressionable<string>;
  type: Expressionable<('recipientEmails')>;
  apiVersion: Expressionable<('2019-01-01')>;
}

export interface service_notifications_recipientUsers_childResource {
  name: Expressionable<string>;
  type: Expressionable<('recipientUsers')>;
  apiVersion: Expressionable<('2019-01-01')>;
}

export interface service_openidConnectProviders_childResource {
  name: Expressionable<string>;
  type: Expressionable<('openidConnectProviders')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<OpenidConnectProviderContractProperties>;
}

export interface service_policies_childResource {
  name: Expressionable<('policy')>;
  type: Expressionable<('policies')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<PolicyContractProperties>;
}

export interface service_products_apis_childResource {
  name: Expressionable<string>;
  type: Expressionable<('apis')>;
  apiVersion: Expressionable<('2019-01-01')>;
}

export interface service_products_childResource {
  name: Expressionable<string>;
  type: Expressionable<('products')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<ProductContractProperties>;
  resources?: Expressionable<service_products_policies_childResource | service_products_groups_childResource | service_products_apis_childResource[]>;
}

export interface service_products_groups_childResource {
  name: Expressionable<string>;
  type: Expressionable<('groups')>;
  apiVersion: Expressionable<('2019-01-01')>;
}

export interface service_products_policies_childResource {
  name: Expressionable<('policy')>;
  type: Expressionable<('policies')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<PolicyContractProperties>;
}

export interface service_products_tags_childResource {
  name: Expressionable<string>;
  type: Expressionable<('tags')>;
  apiVersion: Expressionable<('2019-01-01')>;
}

export interface service_properties_childResource {
  name: Expressionable<string>;
  type: Expressionable<('properties')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<PropertyContractProperties>;
}

export interface service_subscriptions_childResource {
  name: Expressionable<string>;
  type: Expressionable<('subscriptions')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<SubscriptionCreateParameterProperties>;
}

export interface service_tags_childResource {
  name: Expressionable<string>;
  type: Expressionable<('tags')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<TagContractProperties>;
}

export interface service_templates_childResource {
  name: Expressionable<('applicationApprovedNotificationMessage' | 'accountClosedDeveloper' | 'quotaLimitApproachingDeveloperNotificationMessage' | 'newDeveloperNotificationMessage' | 'emailChangeIdentityDefault' | 'inviteUserNotificationMessage' | 'newCommentNotificationMessage' | 'confirmSignUpIdentityDefault' | 'newIssueNotificationMessage' | 'purchaseDeveloperNotificationMessage' | 'passwordResetIdentityDefault' | 'passwordResetByAdminNotificationMessage' | 'rejectDeveloperNotificationMessage' | 'requestDeveloperNotificationMessage')>;
  type: Expressionable<('templates')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<EmailTemplateUpdateParameterProperties>;
}

export interface service_users_childResource {
  name: Expressionable<string>;
  type: Expressionable<('users')>;
  apiVersion: Expressionable<('2019-01-01')>;
  properties: Expressionable<UserCreateParameterProperties>;
}

export interface SubscriptionCreateParameterProperties {
  ownerId?: Expressionable<string>;
  scope: Expressionable<string>;
  displayName: Expressionable<string>;
  primaryKey?: Expressionable<string>;
  secondaryKey?: Expressionable<string>;
  state?: Expressionable<('suspended' | 'active' | 'expired' | 'submitted' | 'rejected' | 'cancelled')>;
  allowTracing?: Expressionable<boolean>;
}

export interface SubscriptionKeyParameterNamesContract {
  header?: Expressionable<string>;
  query?: Expressionable<string>;
}

export interface TagContractProperties {
  displayName: Expressionable<string>;
}

export interface TagDescriptionBaseProperties {
  description?: Expressionable<string>;
  externalDocsUrl?: Expressionable<string>;
  externalDocsDescription?: Expressionable<string>;
}

export interface TokenBodyParameterContract {
  name: Expressionable<string>;
  value: Expressionable<string>;
}

export interface UserCreateParameterProperties {
  state?: Expressionable<('active' | 'blocked' | 'pending' | 'deleted')>;
  note?: Expressionable<string>;
  identities?: Expressionable<UserIdentityContract[]>;
  email: Expressionable<string>;
  firstName: Expressionable<string>;
  lastName: Expressionable<string>;
  password?: Expressionable<string>;
  confirmation?: Expressionable<('signup' | 'invite')>;
}

export interface UserIdentityContract {
  provider?: Expressionable<string>;
  id?: Expressionable<string>;
}

export interface VirtualNetworkConfiguration {
  subnetResourceId?: Expressionable<string>;
}

export interface X509CertificateName {
  name?: Expressionable<string>;
  issuerCertificateThumbprint?: Expressionable<string>;
}

export class ApiManagementBuilder {
  public static service(name: Expressionable<string>, properties: ApiManagementServiceProperties, location: Expressionable<string>): ResourceDefinition<ApiManagementServiceProperties> {
    return {
      type: 'Microsoft.ApiManagement/service',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apis(name: Expressionable<string>, properties: ApiCreateOrUpdateProperties, location: Expressionable<string>): ResourceDefinition<ApiCreateOrUpdateProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/apis',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apis_diagnostics(name: Expressionable<string>, properties: DiagnosticContractProperties, location: Expressionable<string>): ResourceDefinition<DiagnosticContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/apis/diagnostics',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apis_issues(name: Expressionable<string>, properties: IssueContractProperties, location: Expressionable<string>): ResourceDefinition<IssueContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/apis/issues',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apis_issues_attachments(name: Expressionable<string>, properties: IssueAttachmentContractProperties, location: Expressionable<string>): ResourceDefinition<IssueAttachmentContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/apis/issues/attachments',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apis_issues_comments(name: Expressionable<string>, properties: IssueCommentContractProperties, location: Expressionable<string>): ResourceDefinition<IssueCommentContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/apis/issues/comments',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apis_operations(name: Expressionable<string>, properties: OperationContractProperties, location: Expressionable<string>): ResourceDefinition<OperationContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/apis/operations',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apis_operations_policies(name: Expressionable<string>, properties: PolicyContractProperties, location: Expressionable<string>): ResourceDefinition<PolicyContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/apis/operations/policies',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apis_operations_tags(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.ApiManagement/service/apis/operations/tags',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apis_policies(name: Expressionable<string>, properties: PolicyContractProperties, location: Expressionable<string>): ResourceDefinition<PolicyContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/apis/policies',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apis_releases(name: Expressionable<string>, properties: ApiReleaseContractProperties, location: Expressionable<string>): ResourceDefinition<ApiReleaseContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/apis/releases',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apis_schemas(name: Expressionable<string>, properties: SchemaContractProperties, location: Expressionable<string>): ResourceDefinition<SchemaContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/apis/schemas',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apis_tagDescriptions(name: Expressionable<string>, properties: TagDescriptionBaseProperties, location: Expressionable<string>): ResourceDefinition<TagDescriptionBaseProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/apis/tagDescriptions',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apis_tags(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.ApiManagement/service/apis/tags',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_apiVersionSets(name: Expressionable<string>, properties: ApiVersionSetContractProperties, location: Expressionable<string>): ResourceDefinition<ApiVersionSetContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/apiVersionSets',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_authorizationServers(name: Expressionable<string>, properties: AuthorizationServerContractProperties, location: Expressionable<string>): ResourceDefinition<AuthorizationServerContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/authorizationServers',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_backends(name: Expressionable<string>, properties: BackendContractProperties, location: Expressionable<string>): ResourceDefinition<BackendContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/backends',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_caches(name: Expressionable<string>, properties: CacheContractProperties, location: Expressionable<string>): ResourceDefinition<CacheContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/caches',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_certificates(name: Expressionable<string>, properties: CertificateCreateOrUpdateProperties, location: Expressionable<string>): ResourceDefinition<CertificateCreateOrUpdateProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/certificates',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_diagnostics(name: Expressionable<string>, properties: DiagnosticContractProperties, location: Expressionable<string>): ResourceDefinition<DiagnosticContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/diagnostics',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_groups(name: Expressionable<string>, properties: GroupCreateParametersProperties, location: Expressionable<string>): ResourceDefinition<GroupCreateParametersProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/groups',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_groups_users(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.ApiManagement/service/groups/users',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_identityProviders(name: Expressionable<string>, properties: IdentityProviderContractProperties, location: Expressionable<string>): ResourceDefinition<IdentityProviderContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/identityProviders',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_loggers(name: Expressionable<string>, properties: LoggerContractProperties, location: Expressionable<string>): ResourceDefinition<LoggerContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/loggers',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_notifications(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.ApiManagement/service/notifications',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_notifications_recipientEmails(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.ApiManagement/service/notifications/recipientEmails',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_notifications_recipientUsers(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.ApiManagement/service/notifications/recipientUsers',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_openidConnectProviders(name: Expressionable<string>, properties: OpenidConnectProviderContractProperties, location: Expressionable<string>): ResourceDefinition<OpenidConnectProviderContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/openidConnectProviders',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_policies(name: Expressionable<string>, properties: PolicyContractProperties, location: Expressionable<string>): ResourceDefinition<PolicyContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/policies',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_products(name: Expressionable<string>, properties: ProductContractProperties, location: Expressionable<string>): ResourceDefinition<ProductContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/products',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_products_apis(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.ApiManagement/service/products/apis',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_products_groups(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.ApiManagement/service/products/groups',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_products_policies(name: Expressionable<string>, properties: PolicyContractProperties, location: Expressionable<string>): ResourceDefinition<PolicyContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/products/policies',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_products_tags(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.ApiManagement/service/products/tags',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_properties(name: Expressionable<string>, properties: PropertyContractProperties, location: Expressionable<string>): ResourceDefinition<PropertyContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/properties',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_subscriptions(name: Expressionable<string>, properties: SubscriptionCreateParameterProperties, location: Expressionable<string>): ResourceDefinition<SubscriptionCreateParameterProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/subscriptions',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_tags(name: Expressionable<string>, properties: TagContractProperties, location: Expressionable<string>): ResourceDefinition<TagContractProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/tags',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_templates(name: Expressionable<string>, properties: EmailTemplateUpdateParameterProperties, location: Expressionable<string>): ResourceDefinition<EmailTemplateUpdateParameterProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/templates',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
  public static service_users(name: Expressionable<string>, properties: UserCreateParameterProperties, location: Expressionable<string>): ResourceDefinition<UserCreateParameterProperties> {
    return {
      type: 'Microsoft.ApiManagement/service/users',
      apiVersion: '2019-01-01',
      name,
      location,
      properties,
    };
  }
}
