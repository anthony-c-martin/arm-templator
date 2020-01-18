import { Expressionable, ResourceDefinition } from '../lib/common';

export interface NetworkInterfaceProps {
  networkSecurityGroup?: Expressionable<SubResource>;
  ipConfigurations: Expressionable<Expressionable<NetworkInterfaceIPConfiguration>[]>;
  dnsSettings?: Expressionable<NetworkInterfaceDnsSettings>;
  enableAcceleratedNetworking?: boolean;
  enableIPForwarding?: boolean;
}

interface SubResource {
  id: Expressionable<string>;
}

interface NetworkInterfaceIPConfiguration {
  name: Expressionable<string>;
  properties?: Expressionable<NetworkInterfaceIPConfigurationPropertiesFormat>;
}

interface NetworkInterfaceIPConfigurationPropertiesFormat {
  virtualNetworkTaps?: Expressionable<Expressionable<SubResource>[]>;
  applicationGatewayBackendAddressPools?: Expressionable<Expressionable<SubResource>[]>;
  loadBalancerBackendAddressPools?: Expressionable<Expressionable<SubResource>[]>;
  loadBalancerInboundNatRules?: Expressionable<Expressionable<SubResource>[]>;
  privateIPAddress?: Expressionable<string>;
  privateIPAllocationMethod?: Expressionable<PrivateIPAllocationMethod>;
  privateIPAddressVersion?: Expressionable<PrivateIPAddressVersion>;
  subnet?: Expressionable<SubResource>;
  primary?: Expressionable<boolean>;
  publicIPAddress?: Expressionable<SubResource>;
  applicationSecurityGroups?: Expressionable<Expressionable<SubResource>[]>;
}

type PrivateIPAllocationMethod = 'Static' | 'Dynamic';
type PrivateIPAddressVersion = 'IPv4' | 'IPv6';

interface NetworkInterfaceDnsSettings {
  dnsServers?: Expressionable<Expressionable<string>[]>;
  internalDnsNameLabel?: Expressionable<string>;
}

export class NetworkBuilder {
  public static networkInterface(name: Expressionable<string>, properties: NetworkInterfaceProps, location: Expressionable<string>): ResourceDefinition<NetworkInterfaceProps> {
    return {
      type: 'Microsoft.Network/networkInterfaces',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
}