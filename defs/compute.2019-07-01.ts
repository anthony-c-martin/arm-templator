import { Expressionable, ResourceDefinition } from '../lib/common';

export interface VirtualMachineProps {
  hardwareProfile?: Expressionable<HardwareProfile>;
  storageProfile?: Expressionable<StorageProfile>;
  additionalCapabilities?: Expressionable<AdditionalCapabilities>;
  osProfile?: Expressionable<OSProfile>;
  networkProfile?: Expressionable<NetworkProfile>;
  diagnosticsProfile?: Expressionable<DiagnosticsProfile>;
  availabilitySet?: Expressionable<SubResource>;
  virtualMachineScaleSet?: Expressionable<SubResource>;
  proximityPlacementGroup?: Expressionable<SubResource>;
  priority?: Expressionable<Priority>;
  evictionPolicy?: Expressionable<EvictionPolicy>;
  billingProfile?: Expressionable<BillingProfile>;
  host?: Expressionable<SubResource>;
  licenseType?: Expressionable<string>;
}

interface HardwareProfile {
  vmSize: Expressionable<VmSize>;
}

interface StorageProfile {
  imageReference?: Expressionable<ImageReference>;
  osDisk?: Expressionable<OsDisk>;
  dataDisks?: Expressionable<Expressionable<DataDisk>[]>;
}

interface BillingProfile {
  maxPrice?: Expressionable<number>;
}

interface AdditionalCapabilities {
  ultraSSDEnabled?: Expressionable<boolean>;
}

interface OSProfile {
  computerName?: Expressionable<string>;
  adminUsername?: Expressionable<string>;
  adminPassword?: Expressionable<string>;
  customData?: Expressionable<string>;
  windowsConfiguration?: Expressionable<WindowsConfiguration>;
  linuxConfiguration?: Expressionable<LinuxConfiguration>;
  secrets?: Expressionable<Expressionable<VaultSecretGroup>[]>;
  allowExtensionOperations?: Expressionable<boolean>;
  requireGuestProvisionSignal?: Expressionable<boolean>;
}

interface NetworkProfile {
  networkInterfaces?: Expressionable<Expressionable<NetworkInterfaceReference>[]>;
}

interface DiagnosticsProfile {
  bootDiagnostics?: Expressionable<BootDiagnostics>;
}

interface BootDiagnostics {
  enabled?: Expressionable<boolean>;
  storageUri?: Expressionable<string>
}

interface NetworkInterfaceReference {
  id?: Expressionable<string>;
  properties?: Expressionable<NetworkInterfaceReferenceProperties>;
}

interface NetworkInterfaceReferenceProperties {
  primary?: Expressionable<boolean>;
}

interface WindowsConfiguration {
  provisionVMAgent?: Expressionable<boolean>;
  enableAutomaticUpdates?: Expressionable<boolean>;
  timeZone?: Expressionable<string>;
  additionalUnattendContent?: Expressionable<AdditionalUnattendContent>;
  winRM?: Expressionable<WinRMConfiguration>;
}

interface WinRMConfiguration {
  listeners?: Expressionable<Expressionable<WinRMListener>[]>;
}

interface WinRMListener {
  protocol?: Expressionable<Protocol>;
  certificateUrl?: Expressionable<string>;
}

interface AdditionalUnattendContent {
  passName?: Expressionable<PassName>;
  componentName?: Expressionable<ComponentName>;
  settingName?: Expressionable<SettingName>;
  content?: Expressionable<string>;
}

interface LinuxConfiguration {
  disablePasswordAuthentication?: Expressionable<boolean>;
  ssh?: Expressionable<SshConfiguration>;
  provisionVMAgent?: Expressionable<boolean>;
}

interface SshConfiguration {
  publicKeys?: Expressionable<Expressionable<SshPublicKey>[]>;
}

interface SshPublicKey {
  path?: Expressionable<string>;
  keyData?: Expressionable<string>;
}

interface VaultSecretGroup {
  sourceVault?: Expressionable<SubResource>;
  vaultCertificates?: Expressionable<Expressionable<VaultCertificate>[]>;
}

interface VaultCertificate {
  certificateUrl?: Expressionable<string>;
  certificateStore?: Expressionable<string>;
}

interface ImageReference {
  id?: Expressionable<string>;
  publisher?: Expressionable<string>;
  offer?: Expressionable<string>;
  sku?: Expressionable<string>;
  version?: Expressionable<string>;
}

interface OsDisk {
  osType?: Expressionable<OsType>;
  encryptionSettings?: Expressionable<DiskEncryptionSettings>;
  name?: Expressionable<string>;
  vhd?: Expressionable<VirtualHardDisk>;
  image?: Expressionable<VirtualHardDisk>;
  caching?: Expressionable<Caching>;
  writeAcceleratorEnabled?: Expressionable<boolean>;
  diffDiskSettings?: Expressionable<DiffDiskSettings>;
  createOption: Expressionable<CreateOption>;
  diskSizeGB?: Expressionable<number>;
  managedDisk?: Expressionable<ManagedDiskParameters>;
}

interface DataDisk {
  lun: Expressionable<number>;
  name?: Expressionable<string>;
  vhd?: Expressionable<VirtualHardDisk>;
  image?: Expressionable<VirtualHardDisk>;
  caching?: Expressionable<Caching>;
  writeAcceleratorEnabled?: Expressionable<boolean>;
  createOption: Expressionable<CreateOption>;
  diskSizeGB?: Expressionable<number>;
  managedDisk?: Expressionable<ManagedDiskParameters>;
  toBeDetached?: Expressionable<boolean>;
}

interface DiskEncryptionSettings {
  diskEncryptionKey?: Expressionable<KeyVaultSecretReference>;
  keyEncryptionKey?: Expressionable<KeyVaultKeyReference>;
  enabled?: Expressionable<boolean>;
}

interface KeyVaultSecretReference { 
  secretUrl: Expressionable<string>;
  sourceVault: Expressionable<SubResource>;
}

interface KeyVaultKeyReference {
  keyUrl: Expressionable<string>;
  sourceVault: Expressionable<SubResource>;
}

interface SubResource {
  id?: Expressionable<string>;
}

interface VirtualHardDisk {
  uri?: Expressionable<string>;
}

interface DiffDiskSettings {
  option?: Expressionable<Option>;
}

interface ManagedDiskParameters {
  id?: Expressionable<string>;
  storageAccountType?: Expressionable<StorageAccountType>;
  diskEncryptionSet?: Expressionable<DiskEncryptionSetParameters>;
}

interface DiskEncryptionSetParameters {
  id?: Expressionable<string>;
}

type VmSize = 'Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2_v2' | 'Standard_A4_v2' | 'Standard_A8_v2' | 'Standard_A2m_v2' | 'Standard_A4m_v2' | 'Standard_A8m_v2' | 'Standard_B1s' | 'Standard_B1ms' | 'Standard_B2s' | 'Standard_B2ms' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D2' | 'Standard_D3' | 'Standard_D4' | 'Standard_D11' | 'Standard_D12' | 'Standard_D13' | 'Standard_D14' | 'Standard_D1_v2' | 'Standard_D2_v2' | 'Standard_D3_v2' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_D2_v3' | 'Standard_D4_v3' | 'Standard_D8_v3' | 'Standard_D16_v3' | 'Standard_D32_v3' | 'Standard_D64_v3' | 'Standard_D2s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3' | 'Standard_D16s_v3' | 'Standard_D32s_v3' | 'Standard_D64s_v3' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_DS1' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_DS1_v2' | 'Standard_DS2_v2' | 'Standard_DS3_v2' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_DS11_v2' | 'Standard_DS12_v2' | 'Standard_DS13_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13-2_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14-4_v2' | 'Standard_E2_v3' | 'Standard_E4_v3' | 'Standard_E8_v3' | 'Standard_E16_v3' | 'Standard_E32_v3' | 'Standard_E64_v3' | 'Standard_E2s_v3' | 'Standard_E4s_v3' | 'Standard_E8s_v3' | 'Standard_E16s_v3' | 'Standard_E32s_v3' | 'Standard_E64s_v3' | 'Standard_E32-16_v3' | 'Standard_E32-8s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64-16s_v3' | 'Standard_F1' | 'Standard_F2' | 'Standard_F4' | 'Standard_F8' | 'Standard_F16' | 'Standard_F1s' | 'Standard_F2s' | 'Standard_F4s' | 'Standard_F8s' | 'Standard_F16s' | 'Standard_F2s_v2' | 'Standard_F4s_v2' | 'Standard_F8s_v2' | 'Standard_F16s_v2' | 'Standard_F32s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | 'Standard_GS4-8' | 'Standard_GS4-4' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H8' | 'Standard_H16' | 'Standard_H8m' | 'Standard_H16m' | 'Standard_H16r' | 'Standard_H16mr' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_M64s' | 'Standard_M64ms' | 'Standard_M128s' | 'Standard_M128ms' | 'Standard_M64-32ms' | 'Standard_M64-16ms' | 'Standard_M128-64ms' | 'Standard_M128-32ms' | 'Standard_NC6' | 'Standard_NC12' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC6s_v2' | 'Standard_NC12s_v2' | 'Standard_NC24s_v2' | 'Standard_NC24rs_v2' | 'Standard_NC6s_v3' | 'Standard_NC12s_v3' | 'Standard_NC24s_v3' | 'Standard_NC24rs_v3' | 'Standard_ND6s' | 'Standard_ND12s' | 'Standard_ND24s' | 'Standard_ND24rs' | 'Standard_NV6' | 'Standard_NV12' | 'Standard_NV24';
type Priority = 'Regular' | 'Low' | 'Spot';
type EvictionPolicy = 'Deallocate' | 'Delete';
type OsType = 'Windows' | 'Linux'
type Caching = 'None' | 'ReadOnly' | 'ReadWrite';
type CreateOption = 'FromImage' | 'Empty' | 'Attach';
type Option = 'Local';
type StorageAccountType = 'Standard_LRS' | 'Premium_LRS' | 'StandardSSD_LRS' | 'UltraSSD_LR';
type PassName = 'OobeSystem';
type ComponentName = 'Microsoft-Windows-Shell-Setup';
type SettingName = 'AutoLogon' | 'FirstLogonCommands';
type Protocol = 'Http' | 'Https';

export class ComputeBuilder {
  public static virtualMachine(name: Expressionable<string>, properties: VirtualMachineProps, location: Expressionable<string>): ResourceDefinition<VirtualMachineProps> {
    return {
      type: 'Microsoft.Compute/virtualMachines',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
}