// Generated using 'npm run schema /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2019-07-01/Microsoft.Compute.json'
import { Expressionable, ResourceDefinition } from '../lib/common';

export interface AdditionalCapabilities {
  ultraSSDEnabled?: Expressionable<boolean>;
}

export interface AdditionalUnattendContent {
  passName?: Expressionable<'OobeSystem'>;
  componentName?: Expressionable<'Microsoft-Windows-Shell-Setup'>;
  settingName?: Expressionable<'AutoLogon' | 'FirstLogonCommands'>;
  content?: Expressionable<string>;
}

export interface ApiEntityReference {
  id?: Expressionable<string>;
}

export interface AutomaticOSUpgradePolicy {
  enableAutomaticOSUpgrade?: Expressionable<boolean>;
  disableAutomaticRollback?: Expressionable<boolean>;
}

export interface AutomaticRepairsPolicy {
  enabled?: Expressionable<boolean>;
  gracePeriod?: Expressionable<string>;
  maxInstanceRepairsPercent?: Expressionable<number>;
}

export interface AvailabilitySetProperties {
  platformUpdateDomainCount?: Expressionable<number>;
  platformFaultDomainCount?: Expressionable<number>;
  virtualMachines?: Expressionable<SubResource[]>;
  proximityPlacementGroup?: Expressionable<SubResource>;
}

export interface BillingProfile {
  maxPrice?: Expressionable<number>;
}

export interface BootDiagnostics {
  enabled?: Expressionable<boolean>;
  storageUri?: Expressionable<string>;
}

export interface CreationData {
  createOption: Expressionable<'Empty' | 'Attach' | 'FromImage' | 'Import' | 'Copy' | 'Restore' | 'Upload'>;
  storageAccountId?: Expressionable<string>;
  imageReference?: Expressionable<ImageDiskReference>;
  sourceUri?: Expressionable<string>;
  sourceResourceId?: Expressionable<string>;
  uploadSizeBytes?: Expressionable<number>;
}

export interface DataDisk {
  lun: Expressionable<number>;
  name?: Expressionable<string>;
  vhd?: Expressionable<VirtualHardDisk>;
  image?: Expressionable<VirtualHardDisk>;
  caching?: Expressionable<'None' | 'ReadOnly' | 'ReadWrite'>;
  writeAcceleratorEnabled?: Expressionable<boolean>;
  createOption: Expressionable<'FromImage' | 'Empty' | 'Attach'>;
  diskSizeGB?: Expressionable<number>;
  managedDisk?: Expressionable<ManagedDiskParameters>;
  toBeDetached?: Expressionable<boolean>;
}

export interface DedicatedHostGroupProperties {
  platformFaultDomainCount: Expressionable<number>;
}

export interface DedicatedHostProperties {
  platformFaultDomain?: Expressionable<number>;
  autoReplaceOnFailure?: Expressionable<boolean>;
  licenseType?: Expressionable<'None' | 'Windows_Server_Hybrid' | 'Windows_Server_Perpetual'>;
}

export interface DiagnosticsProfile {
  bootDiagnostics?: Expressionable<BootDiagnostics>;
}

export interface DiffDiskSettings {
  option?: Expressionable<'Local'>;
}

export interface Disallowed {
  diskTypes?: Expressionable<string[]>;
}

export interface DiskEncryptionSetParameters {
  id?: Expressionable<string>;
}

export interface DiskEncryptionSettings {
  diskEncryptionKey?: Expressionable<KeyVaultSecretReference>;
  keyEncryptionKey?: Expressionable<KeyVaultKeyReference>;
  enabled?: Expressionable<boolean>;
}

export interface DiskProperties {
  osType?: Expressionable<'Windows' | 'Linux'>;
  hyperVGeneration?: Expressionable<'V1' | 'V2'>;
  creationData: Expressionable<CreationData>;
  diskSizeGB?: Expressionable<number>;
  encryptionSettingsCollection?: Expressionable<EncryptionSettingsCollection>;
  diskIOPSReadWrite?: Expressionable<number>;
  diskMBpsReadWrite?: Expressionable<number>;
  encryption?: Expressionable<Encryption>;
}

export interface DiskSku {
  name?: Expressionable<'Standard_LRS' | 'Premium_LRS' | 'StandardSSD_LRS' | 'UltraSSD_LRS'>;
}

export interface Encryption {
  diskEncryptionSetId?: Expressionable<string>;
  type: Expressionable<'EncryptionAtRestWithPlatformKey' | 'EncryptionAtRestWithCustomerKey'>;
}

export interface EncryptionSetIdentity {
  type?: Expressionable<'SystemAssigned'>;
}

export interface EncryptionSetProperties {
  activeKey?: Expressionable<KeyVaultAndKeyReference>;
}

export interface EncryptionSettingsCollection {
  enabled: Expressionable<boolean>;
  encryptionSettings?: Expressionable<EncryptionSettingsElement[]>;
  encryptionSettingsVersion?: Expressionable<string>;
}

export interface EncryptionSettingsElement {
  diskEncryptionKey?: Expressionable<KeyVaultAndSecretReference>;
  keyEncryptionKey?: Expressionable<KeyVaultAndKeyReference>;
}

export interface galleries_applications_childResource {
  name: Expressionable<string>;
  type: Expressionable<'applications'>;
  apiVersion: Expressionable<'2019-07-01'>;
  location: Expressionable<string>;
  properties: Expressionable<GalleryApplicationProperties>;
  resources?: Expressionable<galleries_applications_versions_childResource[]>;
}

export interface galleries_applications_versions_childResource {
  name: Expressionable<string>;
  type: Expressionable<'versions'>;
  apiVersion: Expressionable<'2019-07-01'>;
  location: Expressionable<string>;
  properties: Expressionable<GalleryApplicationVersionProperties>;
}

export interface galleries_images_childResource {
  name: Expressionable<string>;
  type: Expressionable<'images'>;
  apiVersion: Expressionable<'2019-07-01'>;
  location: Expressionable<string>;
  properties: Expressionable<GalleryImageProperties>;
  resources?: Expressionable<galleries_images_versions_childResource[]>;
}

export interface galleries_images_versions_childResource {
  name: Expressionable<string>;
  type: Expressionable<'versions'>;
  apiVersion: Expressionable<'2019-07-01'>;
  location: Expressionable<string>;
  properties: Expressionable<GalleryImageVersionProperties>;
}

export interface GalleryApplicationProperties {
  description?: Expressionable<string>;
  eula?: Expressionable<string>;
  privacyStatementUri?: Expressionable<string>;
  releaseNoteUri?: Expressionable<string>;
  endOfLifeDate?: Expressionable<string>;
  supportedOSType: Expressionable<'Windows' | 'Linux'>;
}

export interface GalleryApplicationVersionProperties {
  publishingProfile: Expressionable<GalleryApplicationVersionPublishingProfile>;
}

export interface GalleryApplicationVersionPublishingProfile {
  targetRegions?: Expressionable<TargetRegion[]>;
  replicaCount?: Expressionable<number>;
  excludeFromLatest?: Expressionable<boolean>;
  endOfLifeDate?: Expressionable<string>;
  storageAccountType?: Expressionable<'Standard_LRS' | 'Standard_ZRS'>;
  source: Expressionable<UserArtifactSource>;
  contentType?: Expressionable<string>;
  enableHealthCheck?: Expressionable<boolean>;
}

export interface GalleryArtifactVersionSource {
  id: Expressionable<string>;
}

export interface GalleryDataDiskImage {
  hostCaching?: Expressionable<'None' | 'ReadOnly' | 'ReadWrite'>;
  source?: Expressionable<GalleryArtifactVersionSource>;
  lun: Expressionable<number>;
}

export interface GalleryIdentifier {
}

export interface GalleryImageIdentifier {
  publisher: Expressionable<string>;
  offer: Expressionable<string>;
  sku: Expressionable<string>;
}

export interface GalleryImageProperties {
  description?: Expressionable<string>;
  eula?: Expressionable<string>;
  privacyStatementUri?: Expressionable<string>;
  releaseNoteUri?: Expressionable<string>;
  osType: Expressionable<'Windows' | 'Linux'>;
  osState: Expressionable<'Generalized' | 'Specialized'>;
  hyperVGeneration?: Expressionable<'V1' | 'V2'>;
  endOfLifeDate?: Expressionable<string>;
  identifier: Expressionable<GalleryImageIdentifier>;
  recommended?: Expressionable<RecommendedMachineConfiguration>;
  disallowed?: Expressionable<Disallowed>;
  purchasePlan?: Expressionable<ImagePurchasePlan>;
}

export interface GalleryImageVersionProperties {
  publishingProfile?: Expressionable<GalleryImageVersionPublishingProfile>;
  storageProfile: Expressionable<GalleryImageVersionStorageProfile>;
}

export interface GalleryImageVersionPublishingProfile {
  targetRegions?: Expressionable<TargetRegion[]>;
  replicaCount?: Expressionable<number>;
  excludeFromLatest?: Expressionable<boolean>;
  endOfLifeDate?: Expressionable<string>;
  storageAccountType?: Expressionable<'Standard_LRS' | 'Standard_ZRS'>;
}

export interface GalleryImageVersionStorageProfile {
  source?: Expressionable<GalleryArtifactVersionSource>;
  osDiskImage?: Expressionable<GalleryOSDiskImage>;
  dataDiskImages?: Expressionable<GalleryDataDiskImage[]>;
}

export interface GalleryOSDiskImage {
  hostCaching?: Expressionable<'None' | 'ReadOnly' | 'ReadWrite'>;
  source?: Expressionable<GalleryArtifactVersionSource>;
}

export interface GalleryProperties {
  description?: Expressionable<string>;
  identifier?: Expressionable<GalleryIdentifier>;
}

export interface HardwareProfile {
  vmSize?: Expressionable<'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2_v2' | 'Standard_A4_v2' | 'Standard_A8_v2' | 'Standard_A2m_v2' | 'Standard_A4m_v2' | 'Standard_A8m_v2' | 'Standard_B1s' | 'Standard_B1ms' | 'Standard_B2s' | 'Standard_B2ms' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D2' | 'Standard_D3' | 'Standard_D4' | 'Standard_D11' | 'Standard_D12' | 'Standard_D13' | 'Standard_D14' | 'Standard_D1_v2' | 'Standard_D2_v2' | 'Standard_D3_v2' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_D2_v3' | 'Standard_D4_v3' | 'Standard_D8_v3' | 'Standard_D16_v3' | 'Standard_D32_v3' | 'Standard_D64_v3' | 'Standard_D2s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3' | 'Standard_D16s_v3' | 'Standard_D32s_v3' | 'Standard_D64s_v3' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_DS1' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_DS1_v2' | 'Standard_DS2_v2' | 'Standard_DS3_v2' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_DS11_v2' | 'Standard_DS12_v2' | 'Standard_DS13_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13-2_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14-4_v2' | 'Standard_E2_v3' | 'Standard_E4_v3' | 'Standard_E8_v3' | 'Standard_E16_v3' | 'Standard_E32_v3' | 'Standard_E64_v3' | 'Standard_E2s_v3' | 'Standard_E4s_v3' | 'Standard_E8s_v3' | 'Standard_E16s_v3' | 'Standard_E32s_v3' | 'Standard_E64s_v3' | 'Standard_E32-16_v3' | 'Standard_E32-8s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64-16s_v3' | 'Standard_F1' | 'Standard_F2' | 'Standard_F4' | 'Standard_F8' | 'Standard_F16' | 'Standard_F1s' | 'Standard_F2s' | 'Standard_F4s' | 'Standard_F8s' | 'Standard_F16s' | 'Standard_F2s_v2' | 'Standard_F4s_v2' | 'Standard_F8s_v2' | 'Standard_F16s_v2' | 'Standard_F32s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | 'Standard_GS4-8' | 'Standard_GS4-4' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H8' | 'Standard_H16' | 'Standard_H8m' | 'Standard_H16m' | 'Standard_H16r' | 'Standard_H16mr' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_M64s' | 'Standard_M64ms' | 'Standard_M128s' | 'Standard_M128ms' | 'Standard_M64-32ms' | 'Standard_M64-16ms' | 'Standard_M128-64ms' | 'Standard_M128-32ms' | 'Standard_NC6' | 'Standard_NC12' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC6s_v2' | 'Standard_NC12s_v2' | 'Standard_NC24s_v2' | 'Standard_NC24rs_v2' | 'Standard_NC6s_v3' | 'Standard_NC12s_v3' | 'Standard_NC24s_v3' | 'Standard_NC24rs_v3' | 'Standard_ND6s' | 'Standard_ND12s' | 'Standard_ND24s' | 'Standard_ND24rs' | 'Standard_NV6' | 'Standard_NV12' | 'Standard_NV24'>;
}

export interface hostGroups_hosts_childResource {
  name: Expressionable<string>;
  type: Expressionable<'hosts'>;
  apiVersion: Expressionable<'2019-07-01'>;
  location: Expressionable<string>;
  properties: Expressionable<DedicatedHostProperties>;
  sku: Expressionable<Sku>;
}

export interface ImageDataDisk {
  snapshot?: Expressionable<SubResource>;
  managedDisk?: Expressionable<SubResource>;
  blobUri?: Expressionable<string>;
  caching?: Expressionable<'None' | 'ReadOnly' | 'ReadWrite'>;
  diskSizeGB?: Expressionable<number>;
  storageAccountType?: Expressionable<'Standard_LRS' | 'Premium_LRS' | 'StandardSSD_LRS' | 'UltraSSD_LRS'>;
  diskEncryptionSet?: Expressionable<DiskEncryptionSetParameters>;
  lun: Expressionable<number>;
}

export interface ImageDiskReference {
  id: Expressionable<string>;
  lun?: Expressionable<number>;
}

export interface ImageOSDisk {
  snapshot?: Expressionable<SubResource>;
  managedDisk?: Expressionable<SubResource>;
  blobUri?: Expressionable<string>;
  caching?: Expressionable<'None' | 'ReadOnly' | 'ReadWrite'>;
  diskSizeGB?: Expressionable<number>;
  storageAccountType?: Expressionable<'Standard_LRS' | 'Premium_LRS' | 'StandardSSD_LRS' | 'UltraSSD_LRS'>;
  diskEncryptionSet?: Expressionable<DiskEncryptionSetParameters>;
  osType: Expressionable<'Windows' | 'Linux'>;
  osState: Expressionable<'Generalized' | 'Specialized'>;
}

export interface ImageProperties {
  sourceVirtualMachine?: Expressionable<SubResource>;
  storageProfile?: Expressionable<ImageStorageProfile>;
  hyperVGeneration?: Expressionable<'V1' | 'V2'>;
}

export interface ImagePurchasePlan {
  name?: Expressionable<string>;
  publisher?: Expressionable<string>;
  product?: Expressionable<string>;
}

export interface ImageReference {
  id?: Expressionable<string>;
  publisher?: Expressionable<string>;
  offer?: Expressionable<string>;
  sku?: Expressionable<string>;
  version?: Expressionable<string>;
}

export interface ImageStorageProfile {
  osDisk?: Expressionable<ImageOSDisk>;
  dataDisks?: Expressionable<ImageDataDisk[]>;
  zoneResilient?: Expressionable<boolean>;
}

export interface InstanceViewStatus {
  code?: Expressionable<string>;
  level?: Expressionable<'Info' | 'Warning' | 'Error'>;
  displayStatus?: Expressionable<string>;
  message?: Expressionable<string>;
  time?: Expressionable<string>;
}

export interface KeyVaultAndKeyReference {
  sourceVault: Expressionable<SourceVault>;
  keyUrl: Expressionable<string>;
}

export interface KeyVaultAndSecretReference {
  sourceVault: Expressionable<SourceVault>;
  secretUrl: Expressionable<string>;
}

export interface KeyVaultKeyReference {
  keyUrl: Expressionable<string>;
  sourceVault: Expressionable<SubResource>;
}

export interface KeyVaultSecretReference {
  secretUrl: Expressionable<string>;
  sourceVault: Expressionable<SubResource>;
}

export interface LinuxConfiguration {
  disablePasswordAuthentication?: Expressionable<boolean>;
  ssh?: Expressionable<SshConfiguration>;
  provisionVMAgent?: Expressionable<boolean>;
}

export interface ManagedDiskParameters {
  id?: Expressionable<string>;
  storageAccountType?: Expressionable<'Standard_LRS' | 'Premium_LRS' | 'StandardSSD_LRS' | 'UltraSSD_LRS'>;
  diskEncryptionSet?: Expressionable<DiskEncryptionSetParameters>;
}

export interface NetworkInterfaceReference {
  id?: Expressionable<string>;
  properties?: Expressionable<NetworkInterfaceReferenceProperties>;
}

export interface NetworkInterfaceReferenceProperties {
  primary?: Expressionable<boolean>;
}

export interface NetworkProfile {
  networkInterfaces?: Expressionable<NetworkInterfaceReference[]>;
}

export interface OSDisk {
  osType?: Expressionable<'Windows' | 'Linux'>;
  encryptionSettings?: Expressionable<DiskEncryptionSettings>;
  name?: Expressionable<string>;
  vhd?: Expressionable<VirtualHardDisk>;
  image?: Expressionable<VirtualHardDisk>;
  caching?: Expressionable<'None' | 'ReadOnly' | 'ReadWrite'>;
  writeAcceleratorEnabled?: Expressionable<boolean>;
  diffDiskSettings?: Expressionable<DiffDiskSettings>;
  createOption: Expressionable<'FromImage' | 'Empty' | 'Attach'>;
  diskSizeGB?: Expressionable<number>;
  managedDisk?: Expressionable<ManagedDiskParameters>;
}

export interface OSProfile {
  computerName?: Expressionable<string>;
  adminUsername?: Expressionable<string>;
  adminPassword?: Expressionable<string>;
  customData?: Expressionable<string>;
  windowsConfiguration?: Expressionable<WindowsConfiguration>;
  linuxConfiguration?: Expressionable<LinuxConfiguration>;
  secrets?: Expressionable<VaultSecretGroup[]>;
  allowExtensionOperations?: Expressionable<boolean>;
  requireGuestProvisionSignal?: Expressionable<boolean>;
}

export interface Plan {
  name?: Expressionable<string>;
  publisher?: Expressionable<string>;
  product?: Expressionable<string>;
  promotionCode?: Expressionable<string>;
}

export interface ProximityPlacementGroupProperties {
  proximityPlacementGroupType?: Expressionable<'Standard' | 'Ultra'>;
}

export interface RecommendedMachineConfiguration {
  vCPUs?: Expressionable<ResourceRange>;
  memory?: Expressionable<ResourceRange>;
}

export interface ResourceRange {
  min?: Expressionable<number>;
  max?: Expressionable<number>;
}

export interface RollingUpgradePolicy {
  maxBatchInstancePercent?: Expressionable<number>;
  maxUnhealthyInstancePercent?: Expressionable<number>;
  maxUnhealthyUpgradedInstancePercent?: Expressionable<number>;
  pauseTimeBetweenBatches?: Expressionable<string>;
}

export interface ScaleInPolicy {
  rules?: Expressionable<'Default' | 'OldestVM' | 'NewestVM'[]>;
}

export interface ScheduledEventsProfile {
  terminateNotificationProfile?: Expressionable<TerminateNotificationProfile>;
}

export interface Sku {
  name?: Expressionable<string>;
  tier?: Expressionable<string>;
  capacity?: Expressionable<number>;
}

export interface SnapshotProperties {
  osType?: Expressionable<'Windows' | 'Linux'>;
  hyperVGeneration?: Expressionable<'V1' | 'V2'>;
  creationData: Expressionable<CreationData>;
  diskSizeGB?: Expressionable<number>;
  encryptionSettingsCollection?: Expressionable<EncryptionSettingsCollection>;
  incremental?: Expressionable<boolean>;
  encryption?: Expressionable<Encryption>;
}

export interface SnapshotSku {
  name?: Expressionable<'Standard_LRS' | 'Premium_LRS' | 'Standard_ZRS'>;
}

export interface SourceVault {
  id?: Expressionable<string>;
}

export interface SshConfiguration {
  publicKeys?: Expressionable<SshPublicKey[]>;
}

export interface SshPublicKey {
  path?: Expressionable<string>;
  keyData?: Expressionable<string>;
}

export interface StorageProfile {
  imageReference?: Expressionable<ImageReference>;
  osDisk?: Expressionable<OSDisk>;
  dataDisks?: Expressionable<DataDisk[]>;
}

export interface SubResource {
  id?: Expressionable<string>;
}

export interface TargetRegion {
  name: Expressionable<string>;
  regionalReplicaCount?: Expressionable<number>;
  storageAccountType?: Expressionable<'Standard_LRS' | 'Standard_ZRS'>;
}

export interface TerminateNotificationProfile {
  notBeforeTimeout?: Expressionable<string>;
  enable?: Expressionable<boolean>;
}

export interface UpgradePolicy {
  mode?: Expressionable<'Automatic' | 'Manual' | 'Rolling'>;
  rollingUpgradePolicy?: Expressionable<RollingUpgradePolicy>;
  automaticOSUpgradePolicy?: Expressionable<AutomaticOSUpgradePolicy>;
}

export interface UserArtifactSource {
  fileName: Expressionable<string>;
  mediaLink: Expressionable<string>;
}

export interface VaultCertificate {
  certificateUrl?: Expressionable<string>;
  certificateStore?: Expressionable<string>;
}

export interface VaultSecretGroup {
  sourceVault?: Expressionable<SubResource>;
  vaultCertificates?: Expressionable<VaultCertificate[]>;
}

export interface VirtualHardDisk {
  uri?: Expressionable<string>;
}

export interface VirtualMachineExtensionInstanceView {
  name?: Expressionable<string>;
  type?: Expressionable<string>;
  typeHandlerVersion?: Expressionable<string>;
  substatuses?: Expressionable<InstanceViewStatus[]>;
  statuses?: Expressionable<InstanceViewStatus[]>;
}

export interface VirtualMachineExtensionProperties {
  forceUpdateTag?: Expressionable<string>;
  publisher?: Expressionable<string>;
  type?: Expressionable<string>;
  typeHandlerVersion?: Expressionable<string>;
  autoUpgradeMinorVersion?: Expressionable<boolean>;
  instanceView?: Expressionable<VirtualMachineExtensionInstanceView>;
}

export interface VirtualMachineIdentity {
  type?: Expressionable<'SystemAssigned' | 'UserAssigned' | 'SystemAssigned, UserAssigned' | 'None'>;
}

export interface VirtualMachineIdentityUserAssignedIdentitiesValue {
}

export interface VirtualMachineProperties {
  hardwareProfile?: Expressionable<HardwareProfile>;
  storageProfile?: Expressionable<StorageProfile>;
  additionalCapabilities?: Expressionable<AdditionalCapabilities>;
  osProfile?: Expressionable<OSProfile>;
  networkProfile?: Expressionable<NetworkProfile>;
  diagnosticsProfile?: Expressionable<DiagnosticsProfile>;
  availabilitySet?: Expressionable<SubResource>;
  virtualMachineScaleSet?: Expressionable<SubResource>;
  proximityPlacementGroup?: Expressionable<SubResource>;
  priority?: Expressionable<'Regular' | 'Low' | 'Spot'>;
  evictionPolicy?: Expressionable<'Deallocate' | 'Delete'>;
  billingProfile?: Expressionable<BillingProfile>;
  host?: Expressionable<SubResource>;
  licenseType?: Expressionable<string>;
}

export interface virtualMachines_extensions_childResource {
  name: Expressionable<string>;
  type: Expressionable<'extensions'>;
  apiVersion: Expressionable<'2019-07-01'>;
  location: Expressionable<string>;
}

export interface VirtualMachineScaleSetDataDisk {
  name?: Expressionable<string>;
  lun: Expressionable<number>;
  caching?: Expressionable<'None' | 'ReadOnly' | 'ReadWrite'>;
  writeAcceleratorEnabled?: Expressionable<boolean>;
  createOption: Expressionable<'FromImage' | 'Empty' | 'Attach'>;
  diskSizeGB?: Expressionable<number>;
  managedDisk?: Expressionable<VirtualMachineScaleSetManagedDiskParameters>;
  diskIOPSReadWrite?: Expressionable<number>;
  diskMBpsReadWrite?: Expressionable<number>;
}

export interface VirtualMachineScaleSetExtension {
  name?: Expressionable<string>;
}

export interface VirtualMachineScaleSetExtensionProfile {
  extensions?: Expressionable<VirtualMachineScaleSetExtension[]>;
}

export interface VirtualMachineScaleSetExtensionProperties {
  forceUpdateTag?: Expressionable<string>;
  publisher?: Expressionable<string>;
  type?: Expressionable<string>;
  typeHandlerVersion?: Expressionable<string>;
  autoUpgradeMinorVersion?: Expressionable<boolean>;
  provisionAfterExtensions?: Expressionable<string[]>;
}

export interface VirtualMachineScaleSetIdentity {
  type?: Expressionable<'SystemAssigned' | 'UserAssigned' | 'SystemAssigned, UserAssigned' | 'None'>;
}

export interface VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue {
}

export interface VirtualMachineScaleSetIPConfiguration {
  id?: Expressionable<string>;
  name: Expressionable<string>;
  properties?: Expressionable<VirtualMachineScaleSetIPConfigurationProperties>;
}

export interface VirtualMachineScaleSetIPConfigurationProperties {
  subnet?: Expressionable<ApiEntityReference>;
  primary?: Expressionable<boolean>;
  publicIPAddressConfiguration?: Expressionable<VirtualMachineScaleSetPublicIPAddressConfiguration>;
  privateIPAddressVersion?: Expressionable<'IPv4' | 'IPv6'>;
  applicationGatewayBackendAddressPools?: Expressionable<SubResource[]>;
  applicationSecurityGroups?: Expressionable<SubResource[]>;
  loadBalancerBackendAddressPools?: Expressionable<SubResource[]>;
  loadBalancerInboundNatPools?: Expressionable<SubResource[]>;
}

export interface VirtualMachineScaleSetIpTag {
  ipTagType?: Expressionable<string>;
  tag?: Expressionable<string>;
}

export interface VirtualMachineScaleSetManagedDiskParameters {
  storageAccountType?: Expressionable<'Standard_LRS' | 'Premium_LRS' | 'StandardSSD_LRS' | 'UltraSSD_LRS'>;
  diskEncryptionSet?: Expressionable<DiskEncryptionSetParameters>;
}

export interface VirtualMachineScaleSetNetworkConfiguration {
  id?: Expressionable<string>;
  name: Expressionable<string>;
  properties?: Expressionable<VirtualMachineScaleSetNetworkConfigurationProperties>;
}

export interface VirtualMachineScaleSetNetworkConfigurationDnsSettings {
  dnsServers?: Expressionable<string[]>;
}

export interface VirtualMachineScaleSetNetworkConfigurationProperties {
  primary?: Expressionable<boolean>;
  enableAcceleratedNetworking?: Expressionable<boolean>;
  networkSecurityGroup?: Expressionable<SubResource>;
  dnsSettings?: Expressionable<VirtualMachineScaleSetNetworkConfigurationDnsSettings>;
  ipConfigurations: Expressionable<VirtualMachineScaleSetIPConfiguration[]>;
  enableIPForwarding?: Expressionable<boolean>;
}

export interface VirtualMachineScaleSetNetworkProfile {
  healthProbe?: Expressionable<ApiEntityReference>;
  networkInterfaceConfigurations?: Expressionable<VirtualMachineScaleSetNetworkConfiguration[]>;
}

export interface VirtualMachineScaleSetOSDisk {
  name?: Expressionable<string>;
  caching?: Expressionable<'None' | 'ReadOnly' | 'ReadWrite'>;
  writeAcceleratorEnabled?: Expressionable<boolean>;
  createOption: Expressionable<'FromImage' | 'Empty' | 'Attach'>;
  diffDiskSettings?: Expressionable<DiffDiskSettings>;
  diskSizeGB?: Expressionable<number>;
  osType?: Expressionable<'Windows' | 'Linux'>;
  image?: Expressionable<VirtualHardDisk>;
  vhdContainers?: Expressionable<string[]>;
  managedDisk?: Expressionable<VirtualMachineScaleSetManagedDiskParameters>;
}

export interface VirtualMachineScaleSetOSProfile {
  computerNamePrefix?: Expressionable<string>;
  adminUsername?: Expressionable<string>;
  adminPassword?: Expressionable<string>;
  customData?: Expressionable<string>;
  windowsConfiguration?: Expressionable<WindowsConfiguration>;
  linuxConfiguration?: Expressionable<LinuxConfiguration>;
  secrets?: Expressionable<VaultSecretGroup[]>;
}

export interface VirtualMachineScaleSetProperties {
  upgradePolicy?: Expressionable<UpgradePolicy>;
  automaticRepairsPolicy?: Expressionable<AutomaticRepairsPolicy>;
  virtualMachineProfile?: Expressionable<VirtualMachineScaleSetVMProfile>;
  overprovision?: Expressionable<boolean>;
  doNotRunExtensionsOnOverprovisionedVMs?: Expressionable<boolean>;
  singlePlacementGroup?: Expressionable<boolean>;
  zoneBalance?: Expressionable<boolean>;
  platformFaultDomainCount?: Expressionable<number>;
  proximityPlacementGroup?: Expressionable<SubResource>;
  additionalCapabilities?: Expressionable<AdditionalCapabilities>;
  scaleInPolicy?: Expressionable<ScaleInPolicy>;
}

export interface VirtualMachineScaleSetPublicIPAddressConfiguration {
  name: Expressionable<string>;
  properties?: Expressionable<VirtualMachineScaleSetPublicIPAddressConfigurationProperties>;
}

export interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings {
  domainNameLabel: Expressionable<string>;
}

export interface VirtualMachineScaleSetPublicIPAddressConfigurationProperties {
  idleTimeoutInMinutes?: Expressionable<number>;
  dnsSettings?: Expressionable<VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings>;
  ipTags?: Expressionable<VirtualMachineScaleSetIpTag[]>;
  publicIPPrefix?: Expressionable<SubResource>;
  publicIPAddressVersion?: Expressionable<'IPv4' | 'IPv6'>;
}

export interface virtualMachineScaleSets_extensions_childResource {
  name: Expressionable<string>;
  type: Expressionable<'extensions'>;
  apiVersion: Expressionable<'2019-07-01'>;
  properties: Expressionable<VirtualMachineScaleSetExtensionProperties>;
}

export interface virtualMachineScaleSets_virtualmachines_childResource {
  name: Expressionable<string>;
  type: Expressionable<'virtualmachines'>;
  apiVersion: Expressionable<'2019-07-01'>;
  location: Expressionable<string>;
  properties: Expressionable<VirtualMachineScaleSetVMProperties>;
  plan?: Expressionable<Plan>;
}

export interface VirtualMachineScaleSetStorageProfile {
  imageReference?: Expressionable<ImageReference>;
  osDisk?: Expressionable<VirtualMachineScaleSetOSDisk>;
  dataDisks?: Expressionable<VirtualMachineScaleSetDataDisk[]>;
}

export interface VirtualMachineScaleSetVMNetworkProfileConfiguration {
  networkInterfaceConfigurations?: Expressionable<VirtualMachineScaleSetNetworkConfiguration[]>;
}

export interface VirtualMachineScaleSetVMProfile {
  osProfile?: Expressionable<VirtualMachineScaleSetOSProfile>;
  storageProfile?: Expressionable<VirtualMachineScaleSetStorageProfile>;
  networkProfile?: Expressionable<VirtualMachineScaleSetNetworkProfile>;
  diagnosticsProfile?: Expressionable<DiagnosticsProfile>;
  extensionProfile?: Expressionable<VirtualMachineScaleSetExtensionProfile>;
  licenseType?: Expressionable<string>;
  priority?: Expressionable<'Regular' | 'Low' | 'Spot'>;
  evictionPolicy?: Expressionable<'Deallocate' | 'Delete'>;
  billingProfile?: Expressionable<BillingProfile>;
  scheduledEventsProfile?: Expressionable<ScheduledEventsProfile>;
}

export interface VirtualMachineScaleSetVMProperties {
  hardwareProfile?: Expressionable<HardwareProfile>;
  storageProfile?: Expressionable<StorageProfile>;
  additionalCapabilities?: Expressionable<AdditionalCapabilities>;
  osProfile?: Expressionable<OSProfile>;
  networkProfile?: Expressionable<NetworkProfile>;
  networkProfileConfiguration?: Expressionable<VirtualMachineScaleSetVMNetworkProfileConfiguration>;
  diagnosticsProfile?: Expressionable<DiagnosticsProfile>;
  availabilitySet?: Expressionable<SubResource>;
  licenseType?: Expressionable<string>;
  protectionPolicy?: Expressionable<VirtualMachineScaleSetVMProtectionPolicy>;
}

export interface VirtualMachineScaleSetVMProtectionPolicy {
  protectFromScaleIn?: Expressionable<boolean>;
  protectFromScaleSetActions?: Expressionable<boolean>;
}

export interface WindowsConfiguration {
  provisionVMAgent?: Expressionable<boolean>;
  enableAutomaticUpdates?: Expressionable<boolean>;
  timeZone?: Expressionable<string>;
  additionalUnattendContent?: Expressionable<AdditionalUnattendContent[]>;
  winRM?: Expressionable<WinRMConfiguration>;
}

export interface WinRMConfiguration {
  listeners?: Expressionable<WinRMListener[]>;
}

export interface WinRMListener {
  protocol?: Expressionable<'Http' | 'Https'>;
  certificateUrl?: Expressionable<string>;
}

export class ComputeBuilder {
  public static availabilitySets(name: Expressionable<string>, properties: AvailabilitySetProperties, location: Expressionable<string>): ResourceDefinition<AvailabilitySetProperties> {
    return {
      type: 'Microsoft.Compute/availabilitySets',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static diskEncryptionSets(name: Expressionable<string>, properties: EncryptionSetProperties, location: Expressionable<string>): ResourceDefinition<EncryptionSetProperties> {
    return {
      type: 'Microsoft.Compute/diskEncryptionSets',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static disks(name: Expressionable<string>, properties: DiskProperties, location: Expressionable<string>): ResourceDefinition<DiskProperties> {
    return {
      type: 'Microsoft.Compute/disks',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static galleries(name: Expressionable<string>, properties: GalleryProperties, location: Expressionable<string>): ResourceDefinition<GalleryProperties> {
    return {
      type: 'Microsoft.Compute/galleries',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static galleries_applications(name: Expressionable<string>, properties: GalleryApplicationProperties, location: Expressionable<string>): ResourceDefinition<GalleryApplicationProperties> {
    return {
      type: 'Microsoft.Compute/galleries/applications',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static galleries_applications_versions(name: Expressionable<string>, properties: GalleryApplicationVersionProperties, location: Expressionable<string>): ResourceDefinition<GalleryApplicationVersionProperties> {
    return {
      type: 'Microsoft.Compute/galleries/applications/versions',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static galleries_images(name: Expressionable<string>, properties: GalleryImageProperties, location: Expressionable<string>): ResourceDefinition<GalleryImageProperties> {
    return {
      type: 'Microsoft.Compute/galleries/images',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static galleries_images_versions(name: Expressionable<string>, properties: GalleryImageVersionProperties, location: Expressionable<string>): ResourceDefinition<GalleryImageVersionProperties> {
    return {
      type: 'Microsoft.Compute/galleries/images/versions',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static hostGroups(name: Expressionable<string>, properties: DedicatedHostGroupProperties, location: Expressionable<string>): ResourceDefinition<DedicatedHostGroupProperties> {
    return {
      type: 'Microsoft.Compute/hostGroups',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static hostGroups_hosts(name: Expressionable<string>, properties: DedicatedHostProperties, location: Expressionable<string>): ResourceDefinition<DedicatedHostProperties> {
    return {
      type: 'Microsoft.Compute/hostGroups/hosts',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static images(name: Expressionable<string>, properties: ImageProperties, location: Expressionable<string>): ResourceDefinition<ImageProperties> {
    return {
      type: 'Microsoft.Compute/images',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static proximityPlacementGroups(name: Expressionable<string>, properties: ProximityPlacementGroupProperties, location: Expressionable<string>): ResourceDefinition<ProximityPlacementGroupProperties> {
    return {
      type: 'Microsoft.Compute/proximityPlacementGroups',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static snapshots(name: Expressionable<string>, properties: SnapshotProperties, location: Expressionable<string>): ResourceDefinition<SnapshotProperties> {
    return {
      type: 'Microsoft.Compute/snapshots',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static virtualMachines(name: Expressionable<string>, properties: VirtualMachineProperties, location: Expressionable<string>): ResourceDefinition<VirtualMachineProperties> {
    return {
      type: 'Microsoft.Compute/virtualMachines',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static virtualMachineScaleSets(name: Expressionable<string>, properties: VirtualMachineScaleSetProperties, location: Expressionable<string>): ResourceDefinition<VirtualMachineScaleSetProperties> {
    return {
      type: 'Microsoft.Compute/virtualMachineScaleSets',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static virtualMachineScaleSets_virtualmachines(name: Expressionable<string>, properties: VirtualMachineScaleSetVMProperties, location: Expressionable<string>): ResourceDefinition<VirtualMachineScaleSetVMProperties> {
    return {
      type: 'Microsoft.Compute/virtualMachineScaleSets/virtualmachines',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
  public static virtualMachineScaleSets_virtualMachines_extensions(name: Expressionable<string>, properties: VirtualMachineExtensionProperties, location: Expressionable<string>): ResourceDefinition<VirtualMachineExtensionProperties> {
    return {
      type: 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
}
