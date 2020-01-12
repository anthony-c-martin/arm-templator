import { OptionalExpression, ResourceDefinition } from "../language";

interface NetworkInterfaceProps {
  networkSecurityGroup?: OptionalExpression<SubResource>;
  ipConfigurations: OptionalExpression<OptionalExpression<NetworkInterfaceIPConfiguration>[]>;
  dnsSettings?: OptionalExpression<NetworkInterfaceDnsSettings>;
  enableAcceleratedNetworking?: boolean;
  enableIPForwarding?: boolean;
}

interface SubResource {
  id: OptionalExpression<string>;
}

interface NetworkInterfaceIPConfiguration {
  name: OptionalExpression<string>;
  properties?: OptionalExpression<NetworkInterfaceIPConfigurationPropertiesFormat>;
}

interface NetworkInterfaceIPConfigurationPropertiesFormat {
  virtualNetworkTaps?: OptionalExpression<OptionalExpression<SubResource>[]>;
  applicationGatewayBackendAddressPools?: OptionalExpression<OptionalExpression<SubResource>[]>;
  loadBalancerBackendAddressPools?: OptionalExpression<OptionalExpression<SubResource>[]>;
  loadBalancerInboundNatRules?: OptionalExpression<OptionalExpression<SubResource>[]>;
  privateIPAddress?: OptionalExpression<string>;
  privateIPAllocationMethod?: OptionalExpression<PrivateIPAllocationMethod>;
  privateIPAddressVersion?: OptionalExpression<PrivateIPAddressVersion>;
  subnet?: OptionalExpression<SubResource>;
  primary?: OptionalExpression<boolean>;
  publicIPAddress?: OptionalExpression<SubResource>;
  applicationSecurityGroups?: OptionalExpression<OptionalExpression<SubResource>[]>;
}

type PrivateIPAllocationMethod = 'Static' | 'Dynamic';
type PrivateIPAddressVersion = 'IPv4' | 'IPv6';

interface NetworkInterfaceDnsSettings {
  dnsServers?: OptionalExpression<OptionalExpression<string>[]>;
  internalDnsNameLabel?: OptionalExpression<string>;
}

export class NetworkBuilder {
  public static networkInterface(name: OptionalExpression<string>, properties: NetworkInterfaceProps, location: OptionalExpression<string>): ResourceDefinition<NetworkInterfaceProps> {
    return {
      type: 'Microsoft.Network/networkInterfaces',
      apiVersion: '2019-11-01',
      name,
      location,
      properties,
    };
  }
}