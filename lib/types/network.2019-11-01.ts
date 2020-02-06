// Generated using 'npm run schema /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2019-11-01/Microsoft.Network.json'
import { Expressionable, ResourceDefinition } from '../common';

export interface AadAuthenticationParameters {
  aadTenant?: Expressionable<string>;
  aadAudience?: Expressionable<string>;
  aadIssuer?: Expressionable<string>;
}

export interface AddressSpace {
  addressPrefixes: Expressionable<string[]>;
}

export interface ApplicationGatewayAuthenticationCertificate {
  properties?: Expressionable<ApplicationGatewayAuthenticationCertificatePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayAuthenticationCertificatePropertiesFormat {
  data?: Expressionable<string>;
}

export interface ApplicationGatewayAutoscaleConfiguration {
  minCapacity: Expressionable<number>;
  maxCapacity?: Expressionable<number>;
}

export interface ApplicationGatewayBackendAddress {
  fqdn?: Expressionable<string>;
  ipAddress?: Expressionable<string>;
}

export interface ApplicationGatewayBackendAddressPool {
  properties?: Expressionable<ApplicationGatewayBackendAddressPoolPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayBackendAddressPoolPropertiesFormat {
  backendAddresses?: Expressionable<ApplicationGatewayBackendAddress[]>;
}

export interface ApplicationGatewayBackendHttpSettings {
  properties?: Expressionable<ApplicationGatewayBackendHttpSettingsPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayBackendHttpSettingsPropertiesFormat {
  port?: Expressionable<number>;
  protocol?: Expressionable<('Http' | 'Https')>;
  cookieBasedAffinity?: Expressionable<('Enabled' | 'Disabled')>;
  requestTimeout?: Expressionable<number>;
  probe?: Expressionable<SubResource>;
  authenticationCertificates?: Expressionable<SubResource[]>;
  trustedRootCertificates?: Expressionable<SubResource[]>;
  connectionDraining?: Expressionable<ApplicationGatewayConnectionDraining>;
  hostName?: Expressionable<string>;
  pickHostNameFromBackendAddress?: Expressionable<boolean>;
  affinityCookieName?: Expressionable<string>;
  probeEnabled?: Expressionable<boolean>;
  path?: Expressionable<string>;
}

export interface ApplicationGatewayConnectionDraining {
  enabled: Expressionable<boolean>;
  drainTimeoutInSec: Expressionable<number>;
}

export interface ApplicationGatewayCustomError {
  statusCode?: Expressionable<('HttpStatus403' | 'HttpStatus502')>;
  customErrorPageUrl?: Expressionable<string>;
}

export interface ApplicationGatewayFirewallDisabledRuleGroup {
  ruleGroupName: Expressionable<string>;
  rules?: Expressionable<number[]>;
}

export interface ApplicationGatewayFirewallExclusion {
  matchVariable: Expressionable<string>;
  selectorMatchOperator: Expressionable<string>;
  selector: Expressionable<string>;
}

export interface ApplicationGatewayFrontendIPConfiguration {
  properties?: Expressionable<ApplicationGatewayFrontendIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayFrontendIPConfigurationPropertiesFormat {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
}

export interface ApplicationGatewayFrontendPort {
  properties?: Expressionable<ApplicationGatewayFrontendPortPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayFrontendPortPropertiesFormat {
  port?: Expressionable<number>;
}

export interface ApplicationGatewayHeaderConfiguration {
  headerName?: Expressionable<string>;
  headerValue?: Expressionable<string>;
}

export interface ApplicationGatewayHttpListener {
  properties?: Expressionable<ApplicationGatewayHttpListenerPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayHttpListenerPropertiesFormat {
  frontendIPConfiguration?: Expressionable<SubResource>;
  frontendPort?: Expressionable<SubResource>;
  protocol?: Expressionable<('Http' | 'Https')>;
  hostName?: Expressionable<string>;
  sslCertificate?: Expressionable<SubResource>;
  requireServerNameIndication?: Expressionable<boolean>;
  customErrorConfigurations?: Expressionable<ApplicationGatewayCustomError[]>;
  firewallPolicy?: Expressionable<SubResource>;
  hostnames?: Expressionable<string[]>;
}

export interface ApplicationGatewayIPConfiguration {
  properties?: Expressionable<ApplicationGatewayIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayIPConfigurationPropertiesFormat {
  subnet?: Expressionable<SubResource>;
}

export interface ApplicationGatewayPathRule {
  properties?: Expressionable<ApplicationGatewayPathRulePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayPathRulePropertiesFormat {
  paths?: Expressionable<string[]>;
  backendAddressPool?: Expressionable<SubResource>;
  backendHttpSettings?: Expressionable<SubResource>;
  redirectConfiguration?: Expressionable<SubResource>;
  rewriteRuleSet?: Expressionable<SubResource>;
  firewallPolicy?: Expressionable<SubResource>;
}

export interface ApplicationGatewayProbe {
  properties?: Expressionable<ApplicationGatewayProbePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayProbeHealthResponseMatch {
  body?: Expressionable<string>;
  statusCodes?: Expressionable<string[]>;
}

export interface ApplicationGatewayProbePropertiesFormat {
  protocol?: Expressionable<('Http' | 'Https')>;
  host?: Expressionable<string>;
  path?: Expressionable<string>;
  interval?: Expressionable<number>;
  timeout?: Expressionable<number>;
  unhealthyThreshold?: Expressionable<number>;
  pickHostNameFromBackendHttpSettings?: Expressionable<boolean>;
  minServers?: Expressionable<number>;
  match?: Expressionable<ApplicationGatewayProbeHealthResponseMatch>;
  port?: Expressionable<number>;
}

export interface ApplicationGatewayPropertiesFormat {
  sku?: Expressionable<ApplicationGatewaySku>;
  sslPolicy?: Expressionable<ApplicationGatewaySslPolicy>;
  gatewayIPConfigurations?: Expressionable<ApplicationGatewayIPConfiguration[]>;
  authenticationCertificates?: Expressionable<ApplicationGatewayAuthenticationCertificate[]>;
  trustedRootCertificates?: Expressionable<ApplicationGatewayTrustedRootCertificate[]>;
  sslCertificates?: Expressionable<ApplicationGatewaySslCertificate[]>;
  frontendIPConfigurations?: Expressionable<ApplicationGatewayFrontendIPConfiguration[]>;
  frontendPorts?: Expressionable<ApplicationGatewayFrontendPort[]>;
  probes?: Expressionable<ApplicationGatewayProbe[]>;
  backendAddressPools?: Expressionable<ApplicationGatewayBackendAddressPool[]>;
  backendHttpSettingsCollection?: Expressionable<ApplicationGatewayBackendHttpSettings[]>;
  httpListeners?: Expressionable<ApplicationGatewayHttpListener[]>;
  urlPathMaps?: Expressionable<ApplicationGatewayUrlPathMap[]>;
  requestRoutingRules?: Expressionable<ApplicationGatewayRequestRoutingRule[]>;
  rewriteRuleSets?: Expressionable<ApplicationGatewayRewriteRuleSet[]>;
  redirectConfigurations?: Expressionable<ApplicationGatewayRedirectConfiguration[]>;
  webApplicationFirewallConfiguration?: Expressionable<ApplicationGatewayWebApplicationFirewallConfiguration>;
  firewallPolicy?: Expressionable<SubResource>;
  enableHttp2?: Expressionable<boolean>;
  enableFips?: Expressionable<boolean>;
  autoscaleConfiguration?: Expressionable<ApplicationGatewayAutoscaleConfiguration>;
  customErrorConfigurations?: Expressionable<ApplicationGatewayCustomError[]>;
}

export interface ApplicationGatewayRedirectConfiguration {
  properties?: Expressionable<ApplicationGatewayRedirectConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayRedirectConfigurationPropertiesFormat {
  redirectType?: Expressionable<('Permanent' | 'Found' | 'SeeOther' | 'Temporary')>;
  targetListener?: Expressionable<SubResource>;
  targetUrl?: Expressionable<string>;
  includePath?: Expressionable<boolean>;
  includeQueryString?: Expressionable<boolean>;
  requestRoutingRules?: Expressionable<SubResource[]>;
  urlPathMaps?: Expressionable<SubResource[]>;
  pathRules?: Expressionable<SubResource[]>;
}

export interface ApplicationGatewayRequestRoutingRule {
  properties?: Expressionable<ApplicationGatewayRequestRoutingRulePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayRequestRoutingRulePropertiesFormat {
  ruleType?: Expressionable<('Basic' | 'PathBasedRouting')>;
  priority?: Expressionable<number>;
  backendAddressPool?: Expressionable<SubResource>;
  backendHttpSettings?: Expressionable<SubResource>;
  httpListener?: Expressionable<SubResource>;
  urlPathMap?: Expressionable<SubResource>;
  rewriteRuleSet?: Expressionable<SubResource>;
  redirectConfiguration?: Expressionable<SubResource>;
}

export interface ApplicationGatewayRewriteRule {
  name?: Expressionable<string>;
  ruleSequence?: Expressionable<number>;
  conditions?: Expressionable<ApplicationGatewayRewriteRuleCondition[]>;
  actionSet?: Expressionable<ApplicationGatewayRewriteRuleActionSet>;
}

export interface ApplicationGatewayRewriteRuleActionSet {
  requestHeaderConfigurations?: Expressionable<ApplicationGatewayHeaderConfiguration[]>;
  responseHeaderConfigurations?: Expressionable<ApplicationGatewayHeaderConfiguration[]>;
  urlConfiguration?: Expressionable<ApplicationGatewayUrlConfiguration>;
}

export interface ApplicationGatewayRewriteRuleCondition {
  variable?: Expressionable<string>;
  pattern?: Expressionable<string>;
  ignoreCase?: Expressionable<boolean>;
  negate?: Expressionable<boolean>;
}

export interface ApplicationGatewayRewriteRuleSet {
  properties?: Expressionable<ApplicationGatewayRewriteRuleSetPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayRewriteRuleSetPropertiesFormat {
  rewriteRules?: Expressionable<ApplicationGatewayRewriteRule[]>;
}

export interface ApplicationGatewaySku {
  name?: Expressionable<('Standard_Small' | 'Standard_Medium' | 'Standard_Large' | 'WAF_Medium' | 'WAF_Large' | 'Standard_v2' | 'WAF_v2')>;
  tier?: Expressionable<('Standard' | 'WAF' | 'Standard_v2' | 'WAF_v2')>;
  capacity?: Expressionable<number>;
}

export interface ApplicationGatewaySslCertificate {
  properties?: Expressionable<ApplicationGatewaySslCertificatePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewaySslCertificatePropertiesFormat {
  data?: Expressionable<string>;
  password?: Expressionable<string>;
  keyVaultSecretId?: Expressionable<string>;
}

export interface ApplicationGatewaySslPolicy {
  disabledSslProtocols?: Expressionable<('TLSv1_0' | 'TLSv1_1' | 'TLSv1_2')[]>;
  policyType?: Expressionable<('Predefined' | 'Custom')>;
  policyName?: Expressionable<('AppGwSslPolicy20150501' | 'AppGwSslPolicy20170401' | 'AppGwSslPolicy20170401S')>;
  cipherSuites?: Expressionable<('TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA256' | 'TLS_RSA_WITH_AES_128_CBC_SHA256' | 'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256' | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256' | 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA' | 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA' | 'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384')[]>;
  minProtocolVersion?: Expressionable<('TLSv1_0' | 'TLSv1_1' | 'TLSv1_2')>;
}

export interface ApplicationGatewayTrustedRootCertificate {
  properties?: Expressionable<ApplicationGatewayTrustedRootCertificatePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayTrustedRootCertificatePropertiesFormat {
  data?: Expressionable<string>;
  keyVaultSecretId?: Expressionable<string>;
}

export interface ApplicationGatewayUrlConfiguration {
  modifiedPath?: Expressionable<string>;
  modifiedQueryString?: Expressionable<string>;
  reroute?: Expressionable<boolean>;
}

export interface ApplicationGatewayUrlPathMap {
  properties?: Expressionable<ApplicationGatewayUrlPathMapPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ApplicationGatewayUrlPathMapPropertiesFormat {
  defaultBackendAddressPool?: Expressionable<SubResource>;
  defaultBackendHttpSettings?: Expressionable<SubResource>;
  defaultRewriteRuleSet?: Expressionable<SubResource>;
  defaultRedirectConfiguration?: Expressionable<SubResource>;
  pathRules?: Expressionable<ApplicationGatewayPathRule[]>;
}

export interface ApplicationGatewayWebApplicationFirewallConfiguration {
  enabled: Expressionable<boolean>;
  firewallMode: Expressionable<('Detection' | 'Prevention')>;
  ruleSetType: Expressionable<string>;
  ruleSetVersion: Expressionable<string>;
  disabledRuleGroups?: Expressionable<ApplicationGatewayFirewallDisabledRuleGroup[]>;
  requestBodyCheck?: Expressionable<boolean>;
  maxRequestBodySize?: Expressionable<number>;
  maxRequestBodySizeInKb?: Expressionable<number>;
  fileUploadLimitInMb?: Expressionable<number>;
  exclusions?: Expressionable<ApplicationGatewayFirewallExclusion[]>;
}

export interface ApplicationRuleCondition {
  sourceAddresses?: Expressionable<string[]>;
  destinationAddresses?: Expressionable<string[]>;
  protocols?: Expressionable<FirewallPolicyRuleConditionApplicationProtocol[]>;
  targetFqdns?: Expressionable<string[]>;
  fqdnTags?: Expressionable<string[]>;
  ruleConditionType: Expressionable<string>;
}

export interface ApplicationSecurityGroupPropertiesFormat {
}

export interface AuthorizationPropertiesFormat {
}

export interface AzureFirewallApplicationRule {
  name?: Expressionable<string>;
  description?: Expressionable<string>;
  sourceAddresses?: Expressionable<string[]>;
  protocols?: Expressionable<AzureFirewallApplicationRuleProtocol[]>;
  targetFqdns?: Expressionable<string[]>;
  fqdnTags?: Expressionable<string[]>;
  sourceIpGroups?: Expressionable<string[]>;
}

export interface AzureFirewallApplicationRuleCollection {
  properties?: Expressionable<AzureFirewallApplicationRuleCollectionPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface AzureFirewallApplicationRuleCollectionPropertiesFormat {
  priority?: Expressionable<number>;
  action?: Expressionable<AzureFirewallRCAction>;
  rules?: Expressionable<AzureFirewallApplicationRule[]>;
}

export interface AzureFirewallApplicationRuleProtocol {
  protocolType?: Expressionable<('Http' | 'Https' | 'Mssql')>;
  port?: Expressionable<number>;
}

export interface AzureFirewallIPConfiguration {
  properties?: Expressionable<AzureFirewallIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface AzureFirewallIPConfigurationPropertiesFormat {
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
}

export interface AzureFirewallNatRCAction {
  type?: Expressionable<('Snat' | 'Dnat')>;
}

export interface AzureFirewallNatRule {
  name?: Expressionable<string>;
  description?: Expressionable<string>;
  sourceAddresses?: Expressionable<string[]>;
  destinationAddresses?: Expressionable<string[]>;
  destinationPorts?: Expressionable<string[]>;
  protocols?: Expressionable<('TCP' | 'UDP' | 'Any' | 'ICMP')[]>;
  translatedAddress?: Expressionable<string>;
  translatedPort?: Expressionable<string>;
  translatedFqdn?: Expressionable<string>;
  sourceIpGroups?: Expressionable<string[]>;
}

export interface AzureFirewallNatRuleCollection {
  properties?: Expressionable<AzureFirewallNatRuleCollectionProperties>;
  name?: Expressionable<string>;
}

export interface AzureFirewallNatRuleCollectionProperties {
  priority?: Expressionable<number>;
  action?: Expressionable<AzureFirewallNatRCAction>;
  rules?: Expressionable<AzureFirewallNatRule[]>;
}

export interface AzureFirewallNetworkRule {
  name?: Expressionable<string>;
  description?: Expressionable<string>;
  protocols?: Expressionable<('TCP' | 'UDP' | 'Any' | 'ICMP')[]>;
  sourceAddresses?: Expressionable<string[]>;
  destinationAddresses?: Expressionable<string[]>;
  destinationPorts?: Expressionable<string[]>;
  destinationFqdns?: Expressionable<string[]>;
  sourceIpGroups?: Expressionable<string[]>;
  destinationIpGroups?: Expressionable<string[]>;
}

export interface AzureFirewallNetworkRuleCollection {
  properties?: Expressionable<AzureFirewallNetworkRuleCollectionPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface AzureFirewallNetworkRuleCollectionPropertiesFormat {
  priority?: Expressionable<number>;
  action?: Expressionable<AzureFirewallRCAction>;
  rules?: Expressionable<AzureFirewallNetworkRule[]>;
}

export interface AzureFirewallPropertiesFormat {
  applicationRuleCollections?: Expressionable<AzureFirewallApplicationRuleCollection[]>;
  natRuleCollections?: Expressionable<AzureFirewallNatRuleCollection[]>;
  networkRuleCollections?: Expressionable<AzureFirewallNetworkRuleCollection[]>;
  ipConfigurations?: Expressionable<AzureFirewallIPConfiguration[]>;
  managementIpConfiguration?: Expressionable<AzureFirewallIPConfiguration>;
  threatIntelMode?: Expressionable<('Alert' | 'Deny' | 'Off')>;
  virtualHub?: Expressionable<SubResource>;
  firewallPolicy?: Expressionable<SubResource>;
  sku?: Expressionable<AzureFirewallSku>;
}

export interface AzureFirewallRCAction {
  type?: Expressionable<('Allow' | 'Deny')>;
}

export interface AzureFirewallSku {
  name?: Expressionable<('AZFW_VNet' | 'AZFW_Hub')>;
  tier?: Expressionable<('Standard')>;
}

export interface BackendAddressPool {
  properties?: Expressionable<BackendAddressPoolPropertiesFormat>;
  name: Expressionable<string>;
}

export interface BackendAddressPoolPropertiesFormat {
}

export interface BastionHostIPConfiguration {
  properties?: Expressionable<BastionHostIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface BastionHostIPConfigurationPropertiesFormat {
  subnet: Expressionable<SubResource>;
  publicIPAddress: Expressionable<SubResource>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
}

export interface BastionHostPropertiesFormat {
  ipConfigurations?: Expressionable<BastionHostIPConfiguration[]>;
  dnsName?: Expressionable<string>;
}

export interface BgpSettings {
  asn?: Expressionable<number>;
  bgpPeeringAddress?: Expressionable<string>;
  peerWeight?: Expressionable<number>;
}

export interface ConnectionMonitorDestination {
  resourceId?: Expressionable<string>;
  address?: Expressionable<string>;
  port?: Expressionable<number>;
}

export interface ConnectionMonitorEndpoint {
  name: Expressionable<string>;
  resourceId?: Expressionable<string>;
  address?: Expressionable<string>;
  filter?: Expressionable<ConnectionMonitorEndpointFilter>;
}

export interface ConnectionMonitorEndpointFilter {
  type?: Expressionable<('Include')>;
  items?: Expressionable<ConnectionMonitorEndpointFilterItem[]>;
}

export interface ConnectionMonitorEndpointFilterItem {
  type?: Expressionable<('AgentAddress')>;
  address?: Expressionable<string>;
}

export interface ConnectionMonitorHttpConfiguration {
  port?: Expressionable<number>;
  method?: Expressionable<('Get' | 'Post')>;
  path?: Expressionable<string>;
  requestHeaders?: Expressionable<HTTPHeader[]>;
  validStatusCodeRanges?: Expressionable<string[]>;
  preferHTTPS?: Expressionable<boolean>;
}

export interface ConnectionMonitorIcmpConfiguration {
  disableTraceRoute?: Expressionable<boolean>;
}

export interface ConnectionMonitorOutput {
  type?: Expressionable<('Workspace')>;
  workspaceSettings?: Expressionable<ConnectionMonitorWorkspaceSettings>;
}

export interface ConnectionMonitorParameters {
  source?: Expressionable<ConnectionMonitorSource>;
  destination?: Expressionable<ConnectionMonitorDestination>;
  autoStart?: Expressionable<boolean>;
  monitoringIntervalInSeconds?: Expressionable<number>;
  endpoints?: Expressionable<ConnectionMonitorEndpoint[]>;
  testConfigurations?: Expressionable<ConnectionMonitorTestConfiguration[]>;
  testGroups?: Expressionable<ConnectionMonitorTestGroup[]>;
  outputs?: Expressionable<ConnectionMonitorOutput[]>;
  notes?: Expressionable<string>;
}

export interface ConnectionMonitorSource {
  resourceId: Expressionable<string>;
  port?: Expressionable<number>;
}

export interface ConnectionMonitorSuccessThreshold {
  checksFailedPercent?: Expressionable<number>;
  roundTripTimeMs?: Expressionable<number>;
}

export interface ConnectionMonitorTcpConfiguration {
  port?: Expressionable<number>;
  disableTraceRoute?: Expressionable<boolean>;
}

export interface ConnectionMonitorTestConfiguration {
  name: Expressionable<string>;
  testFrequencySec?: Expressionable<number>;
  protocol: Expressionable<('Tcp' | 'Http' | 'Icmp')>;
  preferredIPVersion?: Expressionable<('IPv4' | 'IPv6')>;
  httpConfiguration?: Expressionable<ConnectionMonitorHttpConfiguration>;
  tcpConfiguration?: Expressionable<ConnectionMonitorTcpConfiguration>;
  icmpConfiguration?: Expressionable<ConnectionMonitorIcmpConfiguration>;
  successThreshold?: Expressionable<ConnectionMonitorSuccessThreshold>;
}

export interface ConnectionMonitorTestGroup {
  name: Expressionable<string>;
  disable?: Expressionable<boolean>;
  testConfigurations: Expressionable<string[]>;
  sources: Expressionable<string[]>;
  destinations: Expressionable<string[]>;
}

export interface ConnectionMonitorWorkspaceSettings {
  workspaceResourceId?: Expressionable<string>;
}

export interface ContainerNetworkInterfaceConfiguration {
  properties?: Expressionable<ContainerNetworkInterfaceConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ContainerNetworkInterfaceConfigurationPropertiesFormat {
  ipConfigurations?: Expressionable<IPConfigurationProfile[]>;
  containerNetworkInterfaces?: Expressionable<SubResource[]>;
}

export interface DdosCustomPolicyPropertiesFormat {
  protocolCustomSettings?: Expressionable<ProtocolCustomSettingsFormat[]>;
}

export interface DdosProtectionPlanPropertiesFormat {
}

export interface DdosSettings {
  ddosCustomPolicy?: Expressionable<SubResource>;
  protectionCoverage?: Expressionable<('Basic' | 'Standard')>;
  protectedIP?: Expressionable<boolean>;
}

export interface Delegation {
  properties?: Expressionable<ServiceDelegationPropertiesFormat>;
  name: Expressionable<string>;
}

export interface DeviceProperties {
  deviceVendor?: Expressionable<string>;
  deviceModel?: Expressionable<string>;
  linkSpeedInMbps?: Expressionable<number>;
}

export interface DhcpOptions {
  dnsServers: Expressionable<string[]>;
}

export interface ExpressRouteCircuitAuthorization {
  properties?: Expressionable<AuthorizationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ExpressRouteCircuitConnectionPropertiesFormat {
  expressRouteCircuitPeering?: Expressionable<SubResource>;
  peerExpressRouteCircuitPeering?: Expressionable<SubResource>;
  addressPrefix?: Expressionable<string>;
  authorizationKey?: Expressionable<string>;
}

export interface ExpressRouteCircuitPeering {
  properties?: Expressionable<ExpressRouteCircuitPeeringPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ExpressRouteCircuitPeeringConfig {
  advertisedPublicPrefixes?: Expressionable<string[]>;
  advertisedCommunities?: Expressionable<string[]>;
  legacyMode?: Expressionable<number>;
  customerASN?: Expressionable<number>;
  routingRegistryName?: Expressionable<string>;
}

export interface ExpressRouteCircuitPeeringPropertiesFormat {
  peeringType?: Expressionable<('AzurePublicPeering' | 'AzurePrivatePeering' | 'MicrosoftPeering')>;
  state?: Expressionable<('Disabled' | 'Enabled')>;
  peerASN?: Expressionable<number>;
  primaryPeerAddressPrefix?: Expressionable<string>;
  secondaryPeerAddressPrefix?: Expressionable<string>;
  sharedKey?: Expressionable<string>;
  vlanId?: Expressionable<number>;
  microsoftPeeringConfig?: Expressionable<ExpressRouteCircuitPeeringConfig>;
  stats?: Expressionable<ExpressRouteCircuitStats>;
  gatewayManagerEtag?: Expressionable<string>;
  routeFilter?: Expressionable<SubResource>;
  ipv6PeeringConfig?: Expressionable<Ipv6ExpressRouteCircuitPeeringConfig>;
  expressRouteConnection?: Expressionable<SubResource>;
}

export interface ExpressRouteCircuitPropertiesFormat {
  allowClassicOperations?: Expressionable<boolean>;
  authorizations?: Expressionable<ExpressRouteCircuitAuthorization[]>;
  peerings?: Expressionable<ExpressRouteCircuitPeering[]>;
  serviceProviderNotes?: Expressionable<string>;
  serviceProviderProperties?: Expressionable<ExpressRouteCircuitServiceProviderProperties>;
  expressRoutePort?: Expressionable<SubResource>;
  bandwidthInGbps?: Expressionable<number>;
  gatewayManagerEtag?: Expressionable<string>;
}

export interface expressRouteCircuits_authorizations_childResource {
  name: Expressionable<string>;
  type: Expressionable<('authorizations')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<AuthorizationPropertiesFormat>;
}

export interface expressRouteCircuits_peerings_childResource {
  name: Expressionable<string>;
  type: Expressionable<('peerings')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<ExpressRouteCircuitPeeringPropertiesFormat>;
  resources?: Expressionable<expressRouteCircuits_peerings_connections_childResource[]>;
}

export interface expressRouteCircuits_peerings_connections_childResource {
  name: Expressionable<string>;
  type: Expressionable<('connections')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<ExpressRouteCircuitConnectionPropertiesFormat>;
}

export interface ExpressRouteCircuitServiceProviderProperties {
  serviceProviderName?: Expressionable<string>;
  peeringLocation?: Expressionable<string>;
  bandwidthInMbps?: Expressionable<number>;
}

export interface ExpressRouteCircuitSku {
  name?: Expressionable<string>;
  tier?: Expressionable<('Standard' | 'Premium' | 'Basic' | 'Local')>;
  family?: Expressionable<('UnlimitedData' | 'MeteredData')>;
}

export interface ExpressRouteCircuitStats {
  primarybytesIn?: Expressionable<number>;
  primarybytesOut?: Expressionable<number>;
  secondarybytesIn?: Expressionable<number>;
  secondarybytesOut?: Expressionable<number>;
}

export interface ExpressRouteConnectionProperties {
  expressRouteCircuitPeering: Expressionable<SubResource>;
  authorizationKey?: Expressionable<string>;
  routingWeight?: Expressionable<number>;
  enableInternetSecurity?: Expressionable<boolean>;
}

export interface ExpressRouteCrossConnectionPeering {
  properties?: Expressionable<ExpressRouteCrossConnectionPeeringProperties>;
  name?: Expressionable<string>;
}

export interface ExpressRouteCrossConnectionPeeringProperties {
  peeringType?: Expressionable<('AzurePublicPeering' | 'AzurePrivatePeering' | 'MicrosoftPeering')>;
  state?: Expressionable<('Disabled' | 'Enabled')>;
  peerASN?: Expressionable<number>;
  primaryPeerAddressPrefix?: Expressionable<string>;
  secondaryPeerAddressPrefix?: Expressionable<string>;
  sharedKey?: Expressionable<string>;
  vlanId?: Expressionable<number>;
  microsoftPeeringConfig?: Expressionable<ExpressRouteCircuitPeeringConfig>;
  gatewayManagerEtag?: Expressionable<string>;
  ipv6PeeringConfig?: Expressionable<Ipv6ExpressRouteCircuitPeeringConfig>;
}

export interface ExpressRouteCrossConnectionProperties {
  peeringLocation?: Expressionable<string>;
  bandwidthInMbps?: Expressionable<number>;
  expressRouteCircuit?: Expressionable<SubResource>;
  serviceProviderProvisioningState?: Expressionable<('NotProvisioned' | 'Provisioning' | 'Provisioned' | 'Deprovisioning')>;
  serviceProviderNotes?: Expressionable<string>;
  peerings?: Expressionable<ExpressRouteCrossConnectionPeering[]>;
}

export interface expressRouteCrossConnections_peerings_childResource {
  name: Expressionable<string>;
  type: Expressionable<('peerings')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<ExpressRouteCrossConnectionPeeringProperties>;
}

export interface ExpressRouteGatewayProperties {
  autoScaleConfiguration?: Expressionable<ExpressRouteGatewayPropertiesAutoScaleConfiguration>;
  virtualHub: Expressionable<SubResource>;
}

export interface ExpressRouteGatewayPropertiesAutoScaleConfiguration {
  bounds?: Expressionable<ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds>;
}

export interface ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds {
  min?: Expressionable<number>;
  max?: Expressionable<number>;
}

export interface expressRouteGateways_expressRouteConnections_childResource {
  name: Expressionable<string>;
  type: Expressionable<('expressRouteConnections')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<ExpressRouteConnectionProperties>;
}

export interface ExpressRouteLink {
  properties?: Expressionable<ExpressRouteLinkPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ExpressRouteLinkMacSecConfig {
  cknSecretIdentifier?: Expressionable<string>;
  cakSecretIdentifier?: Expressionable<string>;
  cipher?: Expressionable<('gcm-aes-128' | 'gcm-aes-256')>;
}

export interface ExpressRouteLinkPropertiesFormat {
  adminState?: Expressionable<('Enabled' | 'Disabled')>;
  macSecConfig?: Expressionable<ExpressRouteLinkMacSecConfig>;
}

export interface ExpressRoutePortPropertiesFormat {
  peeringLocation?: Expressionable<string>;
  bandwidthInGbps?: Expressionable<number>;
  encapsulation?: Expressionable<('Dot1Q' | 'QinQ')>;
  links?: Expressionable<ExpressRouteLink[]>;
}

export interface firewallPolicies_ruleGroups_childResource {
  name: Expressionable<string>;
  type: Expressionable<('ruleGroups')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<FirewallPolicyRuleGroupProperties>;
}

export interface FirewallPolicyFilterRule {
  action?: Expressionable<FirewallPolicyFilterRuleAction>;
  ruleConditions?: Expressionable<FirewallPolicyRuleCondition[]>;
  ruleType: Expressionable<string>;
}

export interface FirewallPolicyFilterRuleAction {
  type?: Expressionable<('Allow' | 'Deny')>;
}

export interface FirewallPolicyNatRule {
  action?: Expressionable<FirewallPolicyNatRuleAction>;
  translatedAddress?: Expressionable<string>;
  translatedPort?: Expressionable<string>;
  ruleCondition?: Expressionable<FirewallPolicyRuleCondition>;
  ruleType: Expressionable<string>;
}

export interface FirewallPolicyNatRuleAction {
  type?: Expressionable<('DNAT')>;
}

export interface FirewallPolicyPropertiesFormat {
  basePolicy?: Expressionable<SubResource>;
  threatIntelMode?: Expressionable<('Alert' | 'Deny' | 'Off')>;
}

export interface FirewallPolicyRule {
  name?: Expressionable<string>;
  priority?: Expressionable<number>;
  ruleType: Expressionable<string>;
}

export interface FirewallPolicyRuleCondition {
  name?: Expressionable<string>;
  description?: Expressionable<string>;
  ruleConditionType: Expressionable<string>;
}

export interface FirewallPolicyRuleConditionApplicationProtocol {
  protocolType?: Expressionable<('Http' | 'Https')>;
  port?: Expressionable<number>;
}

export interface FirewallPolicyRuleGroupProperties {
  priority?: Expressionable<number>;
  rules?: Expressionable<FirewallPolicyRule[]>;
}

export interface FlowLogFormatParameters {
  type?: Expressionable<('JSON')>;
  version?: Expressionable<number>;
}

export interface FlowLogPropertiesFormat {
  targetResourceId: Expressionable<string>;
  storageId: Expressionable<string>;
  enabled?: Expressionable<boolean>;
  retentionPolicy?: Expressionable<RetentionPolicyParameters>;
  format?: Expressionable<FlowLogFormatParameters>;
  flowAnalyticsConfiguration?: Expressionable<TrafficAnalyticsProperties>;
}

export interface FrontendIPConfiguration {
  properties?: Expressionable<FrontendIPConfigurationPropertiesFormat>;
  name: Expressionable<string>;
  zones?: Expressionable<string[]>;
}

export interface FrontendIPConfigurationPropertiesFormat {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  privateIPAddressVersion?: Expressionable<('IPv4' | 'IPv6')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
  publicIPPrefix?: Expressionable<SubResource>;
}

export interface HTTPHeader {
  name?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface HubVirtualNetworkConnection {
  properties?: Expressionable<HubVirtualNetworkConnectionProperties>;
  name?: Expressionable<string>;
}

export interface HubVirtualNetworkConnectionProperties {
  remoteVirtualNetwork?: Expressionable<SubResource>;
  allowHubToRemoteVnetTransit?: Expressionable<boolean>;
  allowRemoteVnetToUseHubVnetGateways?: Expressionable<boolean>;
  enableInternetSecurity?: Expressionable<boolean>;
}

export interface InboundNatPool {
  properties?: Expressionable<InboundNatPoolPropertiesFormat>;
  name: Expressionable<string>;
}

export interface InboundNatPoolPropertiesFormat {
  frontendIPConfiguration: Expressionable<SubResource>;
  protocol: Expressionable<('Udp' | 'Tcp' | 'All')>;
  frontendPortRangeStart: Expressionable<number>;
  frontendPortRangeEnd: Expressionable<number>;
  backendPort: Expressionable<number>;
  idleTimeoutInMinutes?: Expressionable<number>;
  enableFloatingIP?: Expressionable<boolean>;
  enableTcpReset?: Expressionable<boolean>;
}

export interface InboundNatRule {
  properties?: Expressionable<InboundNatRulePropertiesFormat>;
  name: Expressionable<string>;
}

export interface InboundNatRulePropertiesFormat {
  frontendIPConfiguration: Expressionable<SubResource>;
  protocol: Expressionable<('Udp' | 'Tcp' | 'All')>;
  frontendPort: Expressionable<number>;
  backendPort: Expressionable<number>;
  idleTimeoutInMinutes?: Expressionable<number>;
  enableFloatingIP?: Expressionable<boolean>;
  enableTcpReset?: Expressionable<boolean>;
}

export interface IPConfigurationProfile {
  properties?: Expressionable<IPConfigurationProfilePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface IPConfigurationProfilePropertiesFormat {
  subnet?: Expressionable<SubResource>;
}

export interface IpGroupPropertiesFormat {
  ipAddresses?: Expressionable<string[]>;
}

export interface IpsecPolicy {
  saLifeTimeSeconds: Expressionable<number>;
  saDataSizeKilobytes: Expressionable<number>;
  ipsecEncryption: Expressionable<('None' | 'DES' | 'DES3' | 'AES128' | 'AES192' | 'AES256' | 'GCMAES128' | 'GCMAES192' | 'GCMAES256')>;
  ipsecIntegrity: Expressionable<('MD5' | 'SHA1' | 'SHA256' | 'GCMAES128' | 'GCMAES192' | 'GCMAES256')>;
  ikeEncryption: Expressionable<('DES' | 'DES3' | 'AES128' | 'AES192' | 'AES256' | 'GCMAES256' | 'GCMAES128')>;
  ikeIntegrity: Expressionable<('MD5' | 'SHA1' | 'SHA256' | 'SHA384' | 'GCMAES256' | 'GCMAES128')>;
  dhGroup: Expressionable<('None' | 'DHGroup1' | 'DHGroup2' | 'DHGroup14' | 'DHGroup2048' | 'ECP256' | 'ECP384' | 'DHGroup24')>;
  pfsGroup: Expressionable<('None' | 'PFS1' | 'PFS2' | 'PFS2048' | 'ECP256' | 'ECP384' | 'PFS24' | 'PFS14' | 'PFSMM')>;
}

export interface IpTag {
  ipTagType?: Expressionable<string>;
  tag?: Expressionable<string>;
}

export interface Ipv6ExpressRouteCircuitPeeringConfig {
  primaryPeerAddressPrefix?: Expressionable<string>;
  secondaryPeerAddressPrefix?: Expressionable<string>;
  microsoftPeeringConfig?: Expressionable<ExpressRouteCircuitPeeringConfig>;
  routeFilter?: Expressionable<SubResource>;
  state?: Expressionable<('Disabled' | 'Enabled')>;
}

export interface LoadBalancerPropertiesFormat {
  frontendIPConfigurations?: Expressionable<FrontendIPConfiguration[]>;
  backendAddressPools?: Expressionable<BackendAddressPool[]>;
  loadBalancingRules?: Expressionable<LoadBalancingRule[]>;
  probes?: Expressionable<Probe[]>;
  inboundNatRules?: Expressionable<InboundNatRule[]>;
  inboundNatPools?: Expressionable<InboundNatPool[]>;
  outboundRules?: Expressionable<OutboundRule[]>;
}

export interface loadBalancers_inboundNatRules_childResource {
  name: Expressionable<string>;
  type: Expressionable<('inboundNatRules')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<InboundNatRulePropertiesFormat>;
}

export interface LoadBalancerSku {
  name?: Expressionable<('Basic' | 'Standard')>;
}

export interface LoadBalancingRule {
  properties?: Expressionable<LoadBalancingRulePropertiesFormat>;
  name: Expressionable<string>;
}

export interface LoadBalancingRulePropertiesFormat {
  frontendIPConfiguration: Expressionable<SubResource>;
  backendAddressPool?: Expressionable<SubResource>;
  probe?: Expressionable<SubResource>;
  protocol: Expressionable<('Udp' | 'Tcp' | 'All')>;
  loadDistribution?: Expressionable<('Default' | 'SourceIP' | 'SourceIPProtocol')>;
  frontendPort: Expressionable<number>;
  backendPort: Expressionable<number>;
  idleTimeoutInMinutes?: Expressionable<number>;
  enableFloatingIP?: Expressionable<boolean>;
  enableTcpReset?: Expressionable<boolean>;
  disableOutboundSnat?: Expressionable<boolean>;
}

export interface LocalNetworkGatewayPropertiesFormat {
  localNetworkAddressSpace?: Expressionable<AddressSpace>;
  gatewayIpAddress?: Expressionable<string>;
  bgpSettings?: Expressionable<BgpSettings>;
}

export interface ManagedRuleGroupOverride {
  ruleGroupName: Expressionable<string>;
  rules?: Expressionable<ManagedRuleOverride[]>;
}

export interface ManagedRuleOverride {
  ruleId: Expressionable<string>;
  state?: Expressionable<('Disabled')>;
}

export interface ManagedRulesDefinition {
  exclusions?: Expressionable<OwaspCrsExclusionEntry[]>;
  managedRuleSets: Expressionable<ManagedRuleSet[]>;
}

export interface ManagedRuleSet {
  ruleSetType: Expressionable<string>;
  ruleSetVersion: Expressionable<string>;
  ruleGroupOverrides?: Expressionable<ManagedRuleGroupOverride[]>;
}

export interface ManagedServiceIdentity {
  type?: Expressionable<('SystemAssigned' | 'UserAssigned' | 'SystemAssigned, UserAssigned' | 'None')>;
}

export interface ManagedServiceIdentityUserAssignedIdentitiesValue {
}

export interface MatchCondition {
  matchVariables: Expressionable<MatchVariable[]>;
  operator: Expressionable<('IPMatch' | 'Equal' | 'Contains' | 'LessThan' | 'GreaterThan' | 'LessThanOrEqual' | 'GreaterThanOrEqual' | 'BeginsWith' | 'EndsWith' | 'Regex' | 'GeoMatch')>;
  negationConditon?: Expressionable<boolean>;
  matchValues: Expressionable<string[]>;
  transforms?: Expressionable<('Lowercase' | 'Trim' | 'UrlDecode' | 'UrlEncode' | 'RemoveNulls' | 'HtmlEntityDecode')[]>;
}

export interface MatchVariable {
  variableName: Expressionable<('RemoteAddr' | 'RequestMethod' | 'QueryString' | 'PostArgs' | 'RequestUri' | 'RequestHeaders' | 'RequestBody' | 'RequestCookies')>;
  selector?: Expressionable<string>;
}

export interface NatGatewayPropertiesFormat {
  idleTimeoutInMinutes?: Expressionable<number>;
  publicIpAddresses?: Expressionable<SubResource[]>;
  publicIpPrefixes?: Expressionable<SubResource[]>;
}

export interface NatGatewaySku {
  name?: Expressionable<('Standard')>;
}

export interface NetworkInterfaceDnsSettings {
  dnsServers?: Expressionable<string[]>;
  internalDnsNameLabel?: Expressionable<string>;
}

export interface NetworkInterfaceIPConfiguration {
  properties?: Expressionable<NetworkInterfaceIPConfigurationPropertiesFormat>;
  name: Expressionable<string>;
}

export interface NetworkInterfaceIPConfigurationPropertiesFormat {
  virtualNetworkTaps?: Expressionable<SubResource[]>;
  applicationGatewayBackendAddressPools?: Expressionable<SubResource[]>;
  loadBalancerBackendAddressPools?: Expressionable<SubResource[]>;
  loadBalancerInboundNatRules?: Expressionable<SubResource[]>;
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  privateIPAddressVersion?: Expressionable<('IPv4' | 'IPv6')>;
  subnet?: Expressionable<SubResource>;
  primary?: Expressionable<boolean>;
  publicIPAddress?: Expressionable<SubResource>;
  applicationSecurityGroups?: Expressionable<SubResource[]>;
}

export interface NetworkInterfacePropertiesFormat {
  networkSecurityGroup?: Expressionable<SubResource>;
  ipConfigurations: Expressionable<NetworkInterfaceIPConfiguration[]>;
  dnsSettings?: Expressionable<NetworkInterfaceDnsSettings>;
  enableAcceleratedNetworking?: Expressionable<boolean>;
  enableIPForwarding?: Expressionable<boolean>;
}

export interface networkInterfaces_tapConfigurations_childResource {
  name: Expressionable<string>;
  type: Expressionable<('tapConfigurations')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<NetworkInterfaceTapConfigurationPropertiesFormat>;
}

export interface NetworkInterfaceTapConfigurationPropertiesFormat {
  virtualNetworkTap?: Expressionable<SubResource>;
}

export interface NetworkProfilePropertiesFormat {
  containerNetworkInterfaceConfigurations?: Expressionable<ContainerNetworkInterfaceConfiguration[]>;
}

export interface NetworkRuleCondition {
  ipProtocols?: Expressionable<('TCP' | 'UDP' | 'Any' | 'ICMP')[]>;
  sourceAddresses?: Expressionable<string[]>;
  destinationAddresses?: Expressionable<string[]>;
  destinationPorts?: Expressionable<string[]>;
  ruleConditionType: Expressionable<string>;
}

export interface NetworkSecurityGroupPropertiesFormat {
  securityRules?: Expressionable<SecurityRule[]>;
}

export interface networkSecurityGroups_securityRules_childResource {
  name: Expressionable<string>;
  type: Expressionable<('securityRules')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<SecurityRulePropertiesFormat>;
}

export interface NetworkWatcherPropertiesFormat {
}

export interface networkWatchers_connectionMonitors_childResource {
  name: Expressionable<string>;
  type: Expressionable<('connectionMonitors')>;
  apiVersion: Expressionable<('2019-11-01')>;
  location?: Expressionable<string>;
  properties: Expressionable<ConnectionMonitorParameters>;
}

export interface networkWatchers_flowLogs_childResource {
  name: Expressionable<string>;
  type: Expressionable<('flowLogs')>;
  apiVersion: Expressionable<('2019-11-01')>;
  location: Expressionable<string>;
  properties: Expressionable<FlowLogPropertiesFormat>;
}

export interface networkWatchers_packetCaptures_childResource {
  name: Expressionable<string>;
  type: Expressionable<('packetCaptures')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<PacketCaptureParameters>;
}

export interface OutboundRule {
  properties?: Expressionable<OutboundRulePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface OutboundRulePropertiesFormat {
  allocatedOutboundPorts?: Expressionable<number>;
  frontendIPConfigurations: Expressionable<SubResource[]>;
  backendAddressPool: Expressionable<SubResource>;
  protocol: Expressionable<('Tcp' | 'Udp' | 'All')>;
  enableTcpReset?: Expressionable<boolean>;
  idleTimeoutInMinutes?: Expressionable<number>;
}

export interface OwaspCrsExclusionEntry {
  matchVariable: Expressionable<('RequestHeaderNames' | 'RequestCookieNames' | 'RequestArgNames')>;
  selectorMatchOperator: Expressionable<('Equals' | 'Contains' | 'StartsWith' | 'EndsWith' | 'EqualsAny')>;
  selector: Expressionable<string>;
}

export interface P2SConnectionConfiguration {
  properties?: Expressionable<P2SConnectionConfigurationProperties>;
  name?: Expressionable<string>;
}

export interface P2SConnectionConfigurationProperties {
  vpnClientAddressPool?: Expressionable<AddressSpace>;
}

export interface P2SVpnGatewayProperties {
  virtualHub?: Expressionable<SubResource>;
  p2SConnectionConfigurations?: Expressionable<P2SConnectionConfiguration[]>;
  vpnGatewayScaleUnit?: Expressionable<number>;
  vpnServerConfiguration?: Expressionable<SubResource>;
}

export interface PacketCaptureFilter {
  protocol?: Expressionable<('TCP' | 'UDP' | 'Any')>;
  localIPAddress?: Expressionable<string>;
  remoteIPAddress?: Expressionable<string>;
  localPort?: Expressionable<string>;
  remotePort?: Expressionable<string>;
}

export interface PacketCaptureParameters {
  target: Expressionable<string>;
  bytesToCapturePerPacket?: Expressionable<number>;
  totalBytesPerSession?: Expressionable<number>;
  timeLimitInSeconds?: Expressionable<number>;
  storageLocation: Expressionable<PacketCaptureStorageLocation>;
  filters?: Expressionable<PacketCaptureFilter[]>;
}

export interface PacketCaptureStorageLocation {
  storageId?: Expressionable<string>;
  storagePath?: Expressionable<string>;
  filePath?: Expressionable<string>;
}

export interface PolicySettings {
  state?: Expressionable<('Disabled' | 'Enabled')>;
  mode?: Expressionable<('Prevention' | 'Detection')>;
  requestBodyCheck?: Expressionable<boolean>;
  maxRequestBodySizeInKb?: Expressionable<number>;
  fileUploadLimitInMb?: Expressionable<number>;
}

export interface PrivateEndpointConnectionProperties {
  privateLinkServiceConnectionState?: Expressionable<PrivateLinkServiceConnectionState>;
}

export interface PrivateEndpointProperties {
  subnet?: Expressionable<SubResource>;
  privateLinkServiceConnections?: Expressionable<PrivateLinkServiceConnection[]>;
  manualPrivateLinkServiceConnections?: Expressionable<PrivateLinkServiceConnection[]>;
}

export interface PrivateLinkServiceConnection {
  properties?: Expressionable<PrivateLinkServiceConnectionProperties>;
  name?: Expressionable<string>;
}

export interface PrivateLinkServiceConnectionProperties {
  privateLinkServiceId?: Expressionable<string>;
  groupIds?: Expressionable<string[]>;
  requestMessage?: Expressionable<string>;
  privateLinkServiceConnectionState?: Expressionable<PrivateLinkServiceConnectionState>;
}

export interface PrivateLinkServiceConnectionState {
  status?: Expressionable<string>;
  description?: Expressionable<string>;
  actionsRequired?: Expressionable<string>;
}

export interface PrivateLinkServiceIpConfiguration {
  properties?: Expressionable<PrivateLinkServiceIpConfigurationProperties>;
  name?: Expressionable<string>;
}

export interface PrivateLinkServiceIpConfigurationProperties {
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  primary?: Expressionable<boolean>;
  privateIPAddressVersion?: Expressionable<('IPv4' | 'IPv6')>;
}

export interface PrivateLinkServiceProperties {
  loadBalancerFrontendIpConfigurations?: Expressionable<SubResource[]>;
  ipConfigurations?: Expressionable<PrivateLinkServiceIpConfiguration[]>;
  visibility?: Expressionable<PrivateLinkServicePropertiesVisibility>;
  autoApproval?: Expressionable<PrivateLinkServicePropertiesAutoApproval>;
  fqdns?: Expressionable<string[]>;
  enableProxyProtocol?: Expressionable<boolean>;
}

export interface PrivateLinkServicePropertiesAutoApproval {
  subscriptions?: Expressionable<string[]>;
}

export interface PrivateLinkServicePropertiesVisibility {
  subscriptions?: Expressionable<string[]>;
}

export interface privateLinkServices_privateEndpointConnections_childResource {
  name: Expressionable<string>;
  type: Expressionable<('privateEndpointConnections')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<PrivateEndpointConnectionProperties>;
}

export interface Probe {
  properties?: Expressionable<ProbePropertiesFormat>;
  name: Expressionable<string>;
}

export interface ProbePropertiesFormat {
  protocol: Expressionable<('Http' | 'Tcp' | 'Https')>;
  port: Expressionable<number>;
  intervalInSeconds?: Expressionable<number>;
  numberOfProbes: Expressionable<number>;
  requestPath?: Expressionable<string>;
}

export interface ProtocolCustomSettingsFormat {
  protocol?: Expressionable<('Tcp' | 'Udp' | 'Syn')>;
  triggerRateOverride?: Expressionable<string>;
  sourceRateOverride?: Expressionable<string>;
  triggerSensitivityOverride?: Expressionable<('Relaxed' | 'Low' | 'Default' | 'High')>;
}

export interface PublicIPAddressDnsSettings {
  domainNameLabel: Expressionable<string>;
  fqdn?: Expressionable<string>;
  reverseFqdn?: Expressionable<string>;
}

export interface PublicIPAddressPropertiesFormat {
  publicIPAllocationMethod: Expressionable<('Static' | 'Dynamic')>;
  publicIPAddressVersion?: Expressionable<('IPv4' | 'IPv6')>;
  dnsSettings?: Expressionable<PublicIPAddressDnsSettings>;
  ddosSettings?: Expressionable<DdosSettings>;
  ipTags?: Expressionable<IpTag[]>;
  ipAddress?: Expressionable<string>;
  publicIPPrefix?: Expressionable<SubResource>;
  idleTimeoutInMinutes?: Expressionable<number>;
}

export interface PublicIPAddressSku {
  name?: Expressionable<('Basic' | 'Standard')>;
}

export interface PublicIPPrefixPropertiesFormat {
  publicIPAddressVersion?: Expressionable<('IPv4' | 'IPv6')>;
  ipTags?: Expressionable<IpTag[]>;
  prefixLength?: Expressionable<number>;
}

export interface PublicIPPrefixSku {
  name?: Expressionable<('Standard')>;
}

export interface RetentionPolicyParameters {
  days?: Expressionable<number>;
  enabled?: Expressionable<boolean>;
}

export interface Route {
  properties?: Expressionable<RoutePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface RouteFilterPropertiesFormat {
  rules?: Expressionable<RouteFilterRule[]>;
}

export interface RouteFilterRule {
  properties?: Expressionable<RouteFilterRulePropertiesFormat>;
  name?: Expressionable<string>;
  location?: Expressionable<string>;
}

export interface RouteFilterRulePropertiesFormat {
  access: Expressionable<('Allow' | 'Deny')>;
  routeFilterRuleType: Expressionable<('Community')>;
  communities: Expressionable<string[]>;
}

export interface routeFilters_routeFilterRules_childResource {
  name: Expressionable<string>;
  type: Expressionable<('routeFilterRules')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<RouteFilterRulePropertiesFormat>;
  location?: Expressionable<string>;
}

export interface RoutePropertiesFormat {
  addressPrefix: Expressionable<string>;
  nextHopType: Expressionable<('VirtualNetworkGateway' | 'VnetLocal' | 'Internet' | 'VirtualAppliance' | 'None')>;
  nextHopIpAddress?: Expressionable<string>;
}

export interface RouteTablePropertiesFormat {
  routes?: Expressionable<Route[]>;
  disableBgpRoutePropagation?: Expressionable<boolean>;
}

export interface routeTables_routes_childResource {
  name: Expressionable<string>;
  type: Expressionable<('routes')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<RoutePropertiesFormat>;
}

export interface SecurityRule {
  properties?: Expressionable<SecurityRulePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface SecurityRulePropertiesFormat {
  description?: Expressionable<string>;
  protocol: Expressionable<('Tcp' | 'Udp' | 'Icmp' | 'Esp' | '*' | 'Ah')>;
  sourcePortRange?: Expressionable<string>;
  destinationPortRange?: Expressionable<string>;
  sourceAddressPrefix?: Expressionable<string>;
  sourceAddressPrefixes?: Expressionable<string[]>;
  sourceApplicationSecurityGroups?: Expressionable<SubResource[]>;
  destinationAddressPrefix?: Expressionable<string>;
  destinationAddressPrefixes?: Expressionable<string[]>;
  destinationApplicationSecurityGroups?: Expressionable<SubResource[]>;
  sourcePortRanges?: Expressionable<string[]>;
  destinationPortRanges?: Expressionable<string[]>;
  access: Expressionable<('Allow' | 'Deny')>;
  priority: Expressionable<number>;
  direction: Expressionable<('Inbound' | 'Outbound')>;
}

export interface ServiceDelegationPropertiesFormat {
  serviceName?: Expressionable<string>;
}

export interface serviceEndpointPolicies_serviceEndpointPolicyDefinitions_childResource {
  name: Expressionable<string>;
  type: Expressionable<('serviceEndpointPolicyDefinitions')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<ServiceEndpointPolicyDefinitionPropertiesFormat>;
}

export interface ServiceEndpointPolicyDefinition {
  properties?: Expressionable<ServiceEndpointPolicyDefinitionPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface ServiceEndpointPolicyDefinitionPropertiesFormat {
  description?: Expressionable<string>;
  service?: Expressionable<string>;
  serviceResources?: Expressionable<string[]>;
}

export interface ServiceEndpointPolicyPropertiesFormat {
  serviceEndpointPolicyDefinitions?: Expressionable<ServiceEndpointPolicyDefinition[]>;
}

export interface ServiceEndpointPropertiesFormat {
  service?: Expressionable<string>;
  locations?: Expressionable<string[]>;
}

export interface Subnet {
  properties?: Expressionable<SubnetPropertiesFormat>;
  name: Expressionable<string>;
}

export interface SubnetPropertiesFormat {
  addressPrefix: Expressionable<string>;
  addressPrefixes?: Expressionable<string[]>;
  networkSecurityGroup?: Expressionable<SubResource>;
  routeTable?: Expressionable<SubResource>;
  natGateway?: Expressionable<SubResource>;
  serviceEndpoints?: Expressionable<ServiceEndpointPropertiesFormat[]>;
  serviceEndpointPolicies?: Expressionable<SubResource[]>;
  delegations?: Expressionable<Delegation[]>;
  privateEndpointNetworkPolicies?: Expressionable<string>;
  privateLinkServiceNetworkPolicies?: Expressionable<string>;
}

export interface SubResource {
  id: Expressionable<string>;
}

export interface TrafficAnalyticsConfigurationProperties {
  enabled?: Expressionable<boolean>;
  workspaceId?: Expressionable<string>;
  workspaceRegion?: Expressionable<string>;
  workspaceResourceId?: Expressionable<string>;
  trafficAnalyticsInterval?: Expressionable<number>;
}

export interface TrafficAnalyticsProperties {
  networkWatcherFlowAnalyticsConfiguration?: Expressionable<TrafficAnalyticsConfigurationProperties>;
}

export interface TrafficSelectorPolicy {
  localAddressRanges: Expressionable<string[]>;
  remoteAddressRanges: Expressionable<string[]>;
}

export interface VirtualHubProperties {
  virtualWan?: Expressionable<SubResource>;
  vpnGateway?: Expressionable<SubResource>;
  p2SVpnGateway?: Expressionable<SubResource>;
  expressRouteGateway?: Expressionable<SubResource>;
  azureFirewall?: Expressionable<SubResource>;
  virtualNetworkConnections?: Expressionable<HubVirtualNetworkConnection[]>;
  addressPrefix?: Expressionable<string>;
  routeTable?: Expressionable<VirtualHubRouteTable>;
  securityProviderName?: Expressionable<string>;
  virtualHubRouteTableV2s?: Expressionable<VirtualHubRouteTableV2[]>;
  sku?: Expressionable<string>;
}

export interface VirtualHubRoute {
  addressPrefixes?: Expressionable<string[]>;
  nextHopIpAddress?: Expressionable<string>;
}

export interface VirtualHubRouteTable {
  routes?: Expressionable<VirtualHubRoute[]>;
}

export interface VirtualHubRouteTableV2 {
  properties?: Expressionable<VirtualHubRouteTableV2Properties>;
  name?: Expressionable<string>;
}

export interface VirtualHubRouteTableV2Properties {
  routes?: Expressionable<VirtualHubRouteV2[]>;
  attachedConnections?: Expressionable<string[]>;
}

export interface VirtualHubRouteV2 {
  destinationType?: Expressionable<string>;
  destinations?: Expressionable<string[]>;
  nextHopType?: Expressionable<string>;
  nextHops?: Expressionable<string[]>;
}

export interface virtualHubs_routeTables_childResource {
  name: Expressionable<string>;
  type: Expressionable<('routeTables')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<VirtualHubRouteTableV2Properties>;
}

export interface VirtualNetworkBgpCommunities {
  virtualNetworkCommunity: Expressionable<string>;
}

export interface VirtualNetworkGatewayConnectionPropertiesFormat {
  authorizationKey?: Expressionable<string>;
  virtualNetworkGateway1: Expressionable<SubResource>;
  virtualNetworkGateway2?: Expressionable<SubResource>;
  localNetworkGateway2?: Expressionable<SubResource>;
  connectionType: Expressionable<('IPsec' | 'Vnet2Vnet' | 'ExpressRoute' | 'VPNClient')>;
  connectionProtocol?: Expressionable<('IKEv2' | 'IKEv1')>;
  routingWeight?: Expressionable<number>;
  sharedKey?: Expressionable<string>;
  peer?: Expressionable<SubResource>;
  enableBgp?: Expressionable<boolean>;
  usePolicyBasedTrafficSelectors?: Expressionable<boolean>;
  ipsecPolicies?: Expressionable<IpsecPolicy[]>;
  trafficSelectorPolicies?: Expressionable<TrafficSelectorPolicy[]>;
  expressRouteGatewayBypass?: Expressionable<boolean>;
}

export interface VirtualNetworkGatewayIPConfiguration {
  properties?: Expressionable<VirtualNetworkGatewayIPConfigurationPropertiesFormat>;
  name?: Expressionable<string>;
}

export interface VirtualNetworkGatewayIPConfigurationPropertiesFormat {
  privateIPAllocationMethod?: Expressionable<('Static' | 'Dynamic')>;
  subnet?: Expressionable<SubResource>;
  publicIPAddress?: Expressionable<SubResource>;
}

export interface VirtualNetworkGatewayPropertiesFormat {
  ipConfigurations?: Expressionable<VirtualNetworkGatewayIPConfiguration[]>;
  gatewayType?: Expressionable<('Vpn' | 'ExpressRoute' | 'HyperNet')>;
  vpnType?: Expressionable<('PolicyBased' | 'RouteBased')>;
  vpnGatewayGeneration?: Expressionable<('None' | 'Generation1' | 'Generation2')>;
  enableBgp?: Expressionable<boolean>;
  activeActive?: Expressionable<boolean>;
  gatewayDefaultSite?: Expressionable<SubResource>;
  sku?: Expressionable<VirtualNetworkGatewaySku>;
  vpnClientConfiguration?: Expressionable<VpnClientConfiguration>;
  bgpSettings?: Expressionable<BgpSettings>;
  customRoutes?: Expressionable<AddressSpace>;
  enableDnsForwarding?: Expressionable<boolean>;
}

export interface VirtualNetworkGatewaySku {
  name?: Expressionable<('Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw2' | 'VpnGw3' | 'VpnGw4' | 'VpnGw5' | 'VpnGw1AZ' | 'VpnGw2AZ' | 'VpnGw3AZ' | 'VpnGw4AZ' | 'VpnGw5AZ' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ')>;
  tier?: Expressionable<('Basic' | 'HighPerformance' | 'Standard' | 'UltraPerformance' | 'VpnGw1' | 'VpnGw2' | 'VpnGw3' | 'VpnGw4' | 'VpnGw5' | 'VpnGw1AZ' | 'VpnGw2AZ' | 'VpnGw3AZ' | 'VpnGw4AZ' | 'VpnGw5AZ' | 'ErGw1AZ' | 'ErGw2AZ' | 'ErGw3AZ')>;
}

export interface VirtualNetworkPeering {
  properties?: Expressionable<VirtualNetworkPeeringPropertiesFormat>;
  name: Expressionable<string>;
}

export interface VirtualNetworkPeeringPropertiesFormat {
  allowVirtualNetworkAccess?: Expressionable<boolean>;
  allowForwardedTraffic?: Expressionable<boolean>;
  allowGatewayTransit?: Expressionable<boolean>;
  useRemoteGateways?: Expressionable<boolean>;
  remoteVirtualNetwork: Expressionable<SubResource>;
  remoteAddressSpace?: Expressionable<AddressSpace>;
  peeringState?: Expressionable<('Initiated' | 'Connected' | 'Disconnected')>;
}

export interface VirtualNetworkPropertiesFormat {
  addressSpace: Expressionable<AddressSpace>;
  dhcpOptions?: Expressionable<DhcpOptions>;
  subnets?: Expressionable<Subnet[]>;
  virtualNetworkPeerings?: Expressionable<VirtualNetworkPeering[]>;
  enableDdosProtection?: Expressionable<boolean>;
  enableVmProtection?: Expressionable<boolean>;
  ddosProtectionPlan?: Expressionable<SubResource>;
  bgpCommunities?: Expressionable<VirtualNetworkBgpCommunities>;
}

export interface virtualNetworks_subnets_childResource {
  name: Expressionable<string>;
  type: Expressionable<('subnets')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<SubnetPropertiesFormat>;
}

export interface virtualNetworks_virtualNetworkPeerings_childResource {
  name: Expressionable<string>;
  type: Expressionable<('virtualNetworkPeerings')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<VirtualNetworkPeeringPropertiesFormat>;
}

export interface VirtualNetworkTapPropertiesFormat {
  destinationNetworkInterfaceIPConfiguration?: Expressionable<SubResource>;
  destinationLoadBalancerFrontEndIPConfiguration?: Expressionable<SubResource>;
  destinationPort?: Expressionable<number>;
}

export interface VirtualRouterPeeringProperties {
  peerAsn?: Expressionable<number>;
  peerIp?: Expressionable<string>;
}

export interface VirtualRouterPropertiesFormat {
  virtualRouterAsn?: Expressionable<number>;
  virtualRouterIps?: Expressionable<string[]>;
  hostedSubnet?: Expressionable<SubResource>;
  hostedGateway?: Expressionable<SubResource>;
}

export interface virtualRouters_peerings_childResource {
  name: Expressionable<string>;
  type: Expressionable<('peerings')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<VirtualRouterPeeringProperties>;
}

export interface VirtualWanProperties {
  disableVpnEncryption?: Expressionable<boolean>;
  allowBranchToBranchTraffic?: Expressionable<boolean>;
  allowVnetToVnetTraffic?: Expressionable<boolean>;
  office365LocalBreakoutCategory?: Expressionable<('Optimize' | 'OptimizeAndAllow' | 'All' | 'None')>;
  type?: Expressionable<string>;
}

export interface VpnClientConfiguration {
  vpnClientAddressPool?: Expressionable<AddressSpace>;
  vpnClientRootCertificates?: Expressionable<VpnClientRootCertificate[]>;
  vpnClientRevokedCertificates?: Expressionable<VpnClientRevokedCertificate[]>;
  vpnClientProtocols?: Expressionable<('IkeV2' | 'SSTP' | 'OpenVPN')[]>;
  vpnClientIpsecPolicies?: Expressionable<IpsecPolicy[]>;
  radiusServerAddress?: Expressionable<string>;
  radiusServerSecret?: Expressionable<string>;
  aadTenant?: Expressionable<string>;
  aadAudience?: Expressionable<string>;
  aadIssuer?: Expressionable<string>;
}

export interface VpnClientRevokedCertificate {
  properties?: Expressionable<VpnClientRevokedCertificatePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface VpnClientRevokedCertificatePropertiesFormat {
  thumbprint?: Expressionable<string>;
}

export interface VpnClientRootCertificate {
  properties: Expressionable<VpnClientRootCertificatePropertiesFormat>;
  name?: Expressionable<string>;
}

export interface VpnClientRootCertificatePropertiesFormat {
  publicCertData: Expressionable<string>;
}

export interface VpnConnection {
  properties?: Expressionable<VpnConnectionProperties>;
  name?: Expressionable<string>;
}

export interface VpnConnectionProperties {
  remoteVpnSite?: Expressionable<SubResource>;
  routingWeight?: Expressionable<number>;
  connectionStatus?: Expressionable<('Unknown' | 'Connecting' | 'Connected' | 'NotConnected')>;
  vpnConnectionProtocolType?: Expressionable<('IKEv2' | 'IKEv1')>;
  connectionBandwidth?: Expressionable<number>;
  sharedKey?: Expressionable<string>;
  enableBgp?: Expressionable<boolean>;
  usePolicyBasedTrafficSelectors?: Expressionable<boolean>;
  ipsecPolicies?: Expressionable<IpsecPolicy[]>;
  enableRateLimiting?: Expressionable<boolean>;
  enableInternetSecurity?: Expressionable<boolean>;
  useLocalAzureIpAddress?: Expressionable<boolean>;
  vpnLinkConnections?: Expressionable<VpnSiteLinkConnection[]>;
}

export interface VpnGatewayProperties {
  virtualHub?: Expressionable<SubResource>;
  connections?: Expressionable<VpnConnection[]>;
  bgpSettings?: Expressionable<BgpSettings>;
  vpnGatewayScaleUnit?: Expressionable<number>;
}

export interface vpnGateways_vpnConnections_childResource {
  name: Expressionable<string>;
  type: Expressionable<('vpnConnections')>;
  apiVersion: Expressionable<('2019-11-01')>;
  properties: Expressionable<VpnConnectionProperties>;
}

export interface VpnLinkBgpSettings {
  asn?: Expressionable<number>;
  bgpPeeringAddress?: Expressionable<string>;
}

export interface VpnLinkProviderProperties {
  linkProviderName?: Expressionable<string>;
  linkSpeedInMbps?: Expressionable<number>;
}

export interface VpnServerConfigRadiusClientRootCertificate {
  name?: Expressionable<string>;
  thumbprint?: Expressionable<string>;
}

export interface VpnServerConfigRadiusServerRootCertificate {
  name?: Expressionable<string>;
  publicCertData?: Expressionable<string>;
}

export interface VpnServerConfigurationProperties {
  name?: Expressionable<string>;
  vpnProtocols?: Expressionable<('IkeV2' | 'OpenVPN')[]>;
  vpnAuthenticationTypes?: Expressionable<('Certificate' | 'Radius' | 'AAD')[]>;
  vpnClientRootCertificates?: Expressionable<VpnServerConfigVpnClientRootCertificate[]>;
  vpnClientRevokedCertificates?: Expressionable<VpnServerConfigVpnClientRevokedCertificate[]>;
  radiusServerRootCertificates?: Expressionable<VpnServerConfigRadiusServerRootCertificate[]>;
  radiusClientRootCertificates?: Expressionable<VpnServerConfigRadiusClientRootCertificate[]>;
  vpnClientIpsecPolicies?: Expressionable<IpsecPolicy[]>;
  radiusServerAddress?: Expressionable<string>;
  radiusServerSecret?: Expressionable<string>;
  aadAuthenticationParameters?: Expressionable<AadAuthenticationParameters>;
}

export interface VpnServerConfigVpnClientRevokedCertificate {
  name?: Expressionable<string>;
  thumbprint?: Expressionable<string>;
}

export interface VpnServerConfigVpnClientRootCertificate {
  name?: Expressionable<string>;
  publicCertData?: Expressionable<string>;
}

export interface VpnSiteLink {
  properties?: Expressionable<VpnSiteLinkProperties>;
  name?: Expressionable<string>;
}

export interface VpnSiteLinkConnection {
  properties?: Expressionable<VpnSiteLinkConnectionProperties>;
  name?: Expressionable<string>;
}

export interface VpnSiteLinkConnectionProperties {
  vpnSiteLink?: Expressionable<SubResource>;
  routingWeight?: Expressionable<number>;
  connectionStatus?: Expressionable<('Unknown' | 'Connecting' | 'Connected' | 'NotConnected')>;
  vpnConnectionProtocolType?: Expressionable<('IKEv2' | 'IKEv1')>;
  connectionBandwidth?: Expressionable<number>;
  sharedKey?: Expressionable<string>;
  enableBgp?: Expressionable<boolean>;
  usePolicyBasedTrafficSelectors?: Expressionable<boolean>;
  ipsecPolicies?: Expressionable<IpsecPolicy[]>;
  enableRateLimiting?: Expressionable<boolean>;
  useLocalAzureIpAddress?: Expressionable<boolean>;
}

export interface VpnSiteLinkProperties {
  linkProperties?: Expressionable<VpnLinkProviderProperties>;
  ipAddress?: Expressionable<string>;
  bgpProperties?: Expressionable<VpnLinkBgpSettings>;
}

export interface VpnSiteProperties {
  virtualWan?: Expressionable<SubResource>;
  deviceProperties?: Expressionable<DeviceProperties>;
  ipAddress?: Expressionable<string>;
  siteKey?: Expressionable<string>;
  addressSpace?: Expressionable<AddressSpace>;
  bgpProperties?: Expressionable<BgpSettings>;
  isSecuritySite?: Expressionable<boolean>;
  vpnSiteLinks?: Expressionable<VpnSiteLink[]>;
}

export interface WebApplicationFirewallCustomRule {
  name?: Expressionable<string>;
  priority: Expressionable<number>;
  ruleType: Expressionable<('MatchRule' | 'Invalid')>;
  matchConditions: Expressionable<MatchCondition[]>;
  action: Expressionable<('Allow' | 'Block' | 'Log')>;
}

export interface WebApplicationFirewallPolicyPropertiesFormat {
  policySettings?: Expressionable<PolicySettings>;
  customRules?: Expressionable<WebApplicationFirewallCustomRule[]>;
  managedRules: Expressionable<ManagedRulesDefinition>;
}

export class NetworkBuilder {
  public static applicationGateways(name: Expressionable<string>, properties: ApplicationGatewayPropertiesFormat, location: Expressionable<string>): ResourceDefinition<ApplicationGatewayPropertiesFormat> {
    return {
      type: 'Microsoft.Network/applicationGateways',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static ApplicationGatewayWebApplicationFirewallPolicies(name: Expressionable<string>, properties: WebApplicationFirewallPolicyPropertiesFormat, location: Expressionable<string>): ResourceDefinition<WebApplicationFirewallPolicyPropertiesFormat> {
    return {
      type: 'Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static applicationSecurityGroups(name: Expressionable<string>, properties: ApplicationSecurityGroupPropertiesFormat, location: Expressionable<string>): ResourceDefinition<ApplicationSecurityGroupPropertiesFormat> {
    return {
      type: 'Microsoft.Network/applicationSecurityGroups',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static azureFirewalls(name: Expressionable<string>, properties: AzureFirewallPropertiesFormat, location: Expressionable<string>): ResourceDefinition<AzureFirewallPropertiesFormat> {
    return {
      type: 'Microsoft.Network/azureFirewalls',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static bastionHosts(name: Expressionable<string>, properties: BastionHostPropertiesFormat, location: Expressionable<string>): ResourceDefinition<BastionHostPropertiesFormat> {
    return {
      type: 'Microsoft.Network/bastionHosts',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static connections(name: Expressionable<string>, properties: VirtualNetworkGatewayConnectionPropertiesFormat, location: Expressionable<string>): ResourceDefinition<VirtualNetworkGatewayConnectionPropertiesFormat> {
    return {
      type: 'Microsoft.Network/connections',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static ddosCustomPolicies(name: Expressionable<string>, properties: DdosCustomPolicyPropertiesFormat, location: Expressionable<string>): ResourceDefinition<DdosCustomPolicyPropertiesFormat> {
    return {
      type: 'Microsoft.Network/ddosCustomPolicies',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static ddosProtectionPlans(name: Expressionable<string>, properties: DdosProtectionPlanPropertiesFormat, location: Expressionable<string>): ResourceDefinition<DdosProtectionPlanPropertiesFormat> {
    return {
      type: 'Microsoft.Network/ddosProtectionPlans',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static expressRouteCircuits(name: Expressionable<string>, properties: ExpressRouteCircuitPropertiesFormat, location: Expressionable<string>): ResourceDefinition<ExpressRouteCircuitPropertiesFormat> {
    return {
      type: 'Microsoft.Network/expressRouteCircuits',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static expressRouteCircuits_authorizations(name: Expressionable<string>, properties: AuthorizationPropertiesFormat, location: Expressionable<string>): ResourceDefinition<AuthorizationPropertiesFormat> {
    return {
      type: 'Microsoft.Network/expressRouteCircuits/authorizations',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static expressRouteCircuits_peerings(name: Expressionable<string>, properties: ExpressRouteCircuitPeeringPropertiesFormat, location: Expressionable<string>): ResourceDefinition<ExpressRouteCircuitPeeringPropertiesFormat> {
    return {
      type: 'Microsoft.Network/expressRouteCircuits/peerings',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static expressRouteCircuits_peerings_connections(name: Expressionable<string>, properties: ExpressRouteCircuitConnectionPropertiesFormat, location: Expressionable<string>): ResourceDefinition<ExpressRouteCircuitConnectionPropertiesFormat> {
    return {
      type: 'Microsoft.Network/expressRouteCircuits/peerings/connections',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static expressRouteCrossConnections(name: Expressionable<string>, properties: ExpressRouteCrossConnectionProperties, location: Expressionable<string>): ResourceDefinition<ExpressRouteCrossConnectionProperties> {
    return {
      type: 'Microsoft.Network/expressRouteCrossConnections',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static expressRouteCrossConnections_peerings(name: Expressionable<string>, properties: ExpressRouteCrossConnectionPeeringProperties, location: Expressionable<string>): ResourceDefinition<ExpressRouteCrossConnectionPeeringProperties> {
    return {
      type: 'Microsoft.Network/expressRouteCrossConnections/peerings',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static expressRouteGateways(name: Expressionable<string>, properties: ExpressRouteGatewayProperties, location: Expressionable<string>): ResourceDefinition<ExpressRouteGatewayProperties> {
    return {
      type: 'Microsoft.Network/expressRouteGateways',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static expressRouteGateways_expressRouteConnections(name: Expressionable<string>, properties: ExpressRouteConnectionProperties, location: Expressionable<string>): ResourceDefinition<ExpressRouteConnectionProperties> {
    return {
      type: 'Microsoft.Network/expressRouteGateways/expressRouteConnections',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static ExpressRoutePorts(name: Expressionable<string>, properties: ExpressRoutePortPropertiesFormat, location: Expressionable<string>): ResourceDefinition<ExpressRoutePortPropertiesFormat> {
    return {
      type: 'Microsoft.Network/ExpressRoutePorts',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static firewallPolicies(name: Expressionable<string>, properties: FirewallPolicyPropertiesFormat, location: Expressionable<string>): ResourceDefinition<FirewallPolicyPropertiesFormat> {
    return {
      type: 'Microsoft.Network/firewallPolicies',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static firewallPolicies_ruleGroups(name: Expressionable<string>, properties: FirewallPolicyRuleGroupProperties, location: Expressionable<string>): ResourceDefinition<FirewallPolicyRuleGroupProperties> {
    return {
      type: 'Microsoft.Network/firewallPolicies/ruleGroups',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static ipGroups(name: Expressionable<string>, properties: IpGroupPropertiesFormat, location: Expressionable<string>): ResourceDefinition<IpGroupPropertiesFormat> {
    return {
      type: 'Microsoft.Network/ipGroups',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static loadBalancers(name: Expressionable<string>, properties: LoadBalancerPropertiesFormat, location: Expressionable<string>): ResourceDefinition<LoadBalancerPropertiesFormat> {
    return {
      type: 'Microsoft.Network/loadBalancers',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static loadBalancers_inboundNatRules(name: Expressionable<string>, properties: InboundNatRulePropertiesFormat, location: Expressionable<string>): ResourceDefinition<InboundNatRulePropertiesFormat> {
    return {
      type: 'Microsoft.Network/loadBalancers/inboundNatRules',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static localNetworkGateways(name: Expressionable<string>, properties: LocalNetworkGatewayPropertiesFormat, location: Expressionable<string>): ResourceDefinition<LocalNetworkGatewayPropertiesFormat> {
    return {
      type: 'Microsoft.Network/localNetworkGateways',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static natGateways(name: Expressionable<string>, properties: NatGatewayPropertiesFormat, location: Expressionable<string>): ResourceDefinition<NatGatewayPropertiesFormat> {
    return {
      type: 'Microsoft.Network/natGateways',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static networkInterfaces(name: Expressionable<string>, properties: NetworkInterfacePropertiesFormat, location: Expressionable<string>): ResourceDefinition<NetworkInterfacePropertiesFormat> {
    return {
      type: 'Microsoft.Network/networkInterfaces',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static networkInterfaces_tapConfigurations(name: Expressionable<string>, properties: NetworkInterfaceTapConfigurationPropertiesFormat, location: Expressionable<string>): ResourceDefinition<NetworkInterfaceTapConfigurationPropertiesFormat> {
    return {
      type: 'Microsoft.Network/networkInterfaces/tapConfigurations',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static networkProfiles(name: Expressionable<string>, properties: NetworkProfilePropertiesFormat, location: Expressionable<string>): ResourceDefinition<NetworkProfilePropertiesFormat> {
    return {
      type: 'Microsoft.Network/networkProfiles',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static networkSecurityGroups(name: Expressionable<string>, properties: NetworkSecurityGroupPropertiesFormat, location: Expressionable<string>): ResourceDefinition<NetworkSecurityGroupPropertiesFormat> {
    return {
      type: 'Microsoft.Network/networkSecurityGroups',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static networkSecurityGroups_securityRules(name: Expressionable<string>, properties: SecurityRulePropertiesFormat, location: Expressionable<string>): ResourceDefinition<SecurityRulePropertiesFormat> {
    return {
      type: 'Microsoft.Network/networkSecurityGroups/securityRules',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static networkWatchers(name: Expressionable<string>, properties: NetworkWatcherPropertiesFormat, location: Expressionable<string>): ResourceDefinition<NetworkWatcherPropertiesFormat> {
    return {
      type: 'Microsoft.Network/networkWatchers',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static networkWatchers_connectionMonitors(name: Expressionable<string>, properties: ConnectionMonitorParameters, location: Expressionable<string>): ResourceDefinition<ConnectionMonitorParameters> {
    return {
      type: 'Microsoft.Network/networkWatchers/connectionMonitors',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static networkWatchers_flowLogs(name: Expressionable<string>, properties: FlowLogPropertiesFormat, location: Expressionable<string>): ResourceDefinition<FlowLogPropertiesFormat> {
    return {
      type: 'Microsoft.Network/networkWatchers/flowLogs',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static networkWatchers_packetCaptures(name: Expressionable<string>, properties: PacketCaptureParameters, location: Expressionable<string>): ResourceDefinition<PacketCaptureParameters> {
    return {
      type: 'Microsoft.Network/networkWatchers/packetCaptures',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static p2svpnGateways(name: Expressionable<string>, properties: P2SVpnGatewayProperties, location: Expressionable<string>): ResourceDefinition<P2SVpnGatewayProperties> {
    return {
      type: 'Microsoft.Network/p2svpnGateways',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static privateEndpoints(name: Expressionable<string>, properties: PrivateEndpointProperties, location: Expressionable<string>): ResourceDefinition<PrivateEndpointProperties> {
    return {
      type: 'Microsoft.Network/privateEndpoints',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static privateLinkServices(name: Expressionable<string>, properties: PrivateLinkServiceProperties, location: Expressionable<string>): ResourceDefinition<PrivateLinkServiceProperties> {
    return {
      type: 'Microsoft.Network/privateLinkServices',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static privateLinkServices_privateEndpointConnections(name: Expressionable<string>, properties: PrivateEndpointConnectionProperties, location: Expressionable<string>): ResourceDefinition<PrivateEndpointConnectionProperties> {
    return {
      type: 'Microsoft.Network/privateLinkServices/privateEndpointConnections',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static publicIPAddresses(name: Expressionable<string>, properties: PublicIPAddressPropertiesFormat, location: Expressionable<string>): ResourceDefinition<PublicIPAddressPropertiesFormat> {
    return {
      type: 'Microsoft.Network/publicIPAddresses',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static publicIPPrefixes(name: Expressionable<string>, properties: PublicIPPrefixPropertiesFormat, location: Expressionable<string>): ResourceDefinition<PublicIPPrefixPropertiesFormat> {
    return {
      type: 'Microsoft.Network/publicIPPrefixes',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static routeFilters(name: Expressionable<string>, properties: RouteFilterPropertiesFormat, location: Expressionable<string>): ResourceDefinition<RouteFilterPropertiesFormat> {
    return {
      type: 'Microsoft.Network/routeFilters',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static routeFilters_routeFilterRules(name: Expressionable<string>, properties: RouteFilterRulePropertiesFormat, location: Expressionable<string>): ResourceDefinition<RouteFilterRulePropertiesFormat> {
    return {
      type: 'Microsoft.Network/routeFilters/routeFilterRules',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static routeTables(name: Expressionable<string>, properties: RouteTablePropertiesFormat, location: Expressionable<string>): ResourceDefinition<RouteTablePropertiesFormat> {
    return {
      type: 'Microsoft.Network/routeTables',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static routeTables_routes(name: Expressionable<string>, properties: RoutePropertiesFormat, location: Expressionable<string>): ResourceDefinition<RoutePropertiesFormat> {
    return {
      type: 'Microsoft.Network/routeTables/routes',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static serviceEndpointPolicies(name: Expressionable<string>, properties: ServiceEndpointPolicyPropertiesFormat, location: Expressionable<string>): ResourceDefinition<ServiceEndpointPolicyPropertiesFormat> {
    return {
      type: 'Microsoft.Network/serviceEndpointPolicies',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static serviceEndpointPolicies_serviceEndpointPolicyDefinitions(name: Expressionable<string>, properties: ServiceEndpointPolicyDefinitionPropertiesFormat, location: Expressionable<string>): ResourceDefinition<ServiceEndpointPolicyDefinitionPropertiesFormat> {
    return {
      type: 'Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static virtualHubs(name: Expressionable<string>, properties: VirtualHubProperties, location: Expressionable<string>): ResourceDefinition<VirtualHubProperties> {
    return {
      type: 'Microsoft.Network/virtualHubs',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static virtualHubs_routeTables(name: Expressionable<string>, properties: VirtualHubRouteTableV2Properties, location: Expressionable<string>): ResourceDefinition<VirtualHubRouteTableV2Properties> {
    return {
      type: 'Microsoft.Network/virtualHubs/routeTables',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static virtualNetworkGateways(name: Expressionable<string>, properties: VirtualNetworkGatewayPropertiesFormat, location: Expressionable<string>): ResourceDefinition<VirtualNetworkGatewayPropertiesFormat> {
    return {
      type: 'Microsoft.Network/virtualNetworkGateways',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static virtualNetworks(name: Expressionable<string>, properties: VirtualNetworkPropertiesFormat, location: Expressionable<string>): ResourceDefinition<VirtualNetworkPropertiesFormat> {
    return {
      type: 'Microsoft.Network/virtualNetworks',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static virtualNetworks_subnets(name: Expressionable<string>, properties: SubnetPropertiesFormat, location: Expressionable<string>): ResourceDefinition<SubnetPropertiesFormat> {
    return {
      type: 'Microsoft.Network/virtualNetworks/subnets',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static virtualNetworks_virtualNetworkPeerings(name: Expressionable<string>, properties: VirtualNetworkPeeringPropertiesFormat, location: Expressionable<string>): ResourceDefinition<VirtualNetworkPeeringPropertiesFormat> {
    return {
      type: 'Microsoft.Network/virtualNetworks/virtualNetworkPeerings',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static virtualNetworkTaps(name: Expressionable<string>, properties: VirtualNetworkTapPropertiesFormat, location: Expressionable<string>): ResourceDefinition<VirtualNetworkTapPropertiesFormat> {
    return {
      type: 'Microsoft.Network/virtualNetworkTaps',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static virtualRouters(name: Expressionable<string>, properties: VirtualRouterPropertiesFormat, location: Expressionable<string>): ResourceDefinition<VirtualRouterPropertiesFormat> {
    return {
      type: 'Microsoft.Network/virtualRouters',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static virtualRouters_peerings(name: Expressionable<string>, properties: VirtualRouterPeeringProperties, location: Expressionable<string>): ResourceDefinition<VirtualRouterPeeringProperties> {
    return {
      type: 'Microsoft.Network/virtualRouters/peerings',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static virtualWans(name: Expressionable<string>, properties: VirtualWanProperties, location: Expressionable<string>): ResourceDefinition<VirtualWanProperties> {
    return {
      type: 'Microsoft.Network/virtualWans',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static vpnGateways(name: Expressionable<string>, properties: VpnGatewayProperties, location: Expressionable<string>): ResourceDefinition<VpnGatewayProperties> {
    return {
      type: 'Microsoft.Network/vpnGateways',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static vpnGateways_vpnConnections(name: Expressionable<string>, properties: VpnConnectionProperties, location: Expressionable<string>): ResourceDefinition<VpnConnectionProperties> {
    return {
      type: 'Microsoft.Network/vpnGateways/vpnConnections',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static vpnServerConfigurations(name: Expressionable<string>, properties: VpnServerConfigurationProperties, location: Expressionable<string>): ResourceDefinition<VpnServerConfigurationProperties> {
    return {
      type: 'Microsoft.Network/vpnServerConfigurations',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
  public static vpnSites(name: Expressionable<string>, properties: VpnSiteProperties, location: Expressionable<string>): ResourceDefinition<VpnSiteProperties> {
    return {
      type: 'Microsoft.Network/vpnSites',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
}
