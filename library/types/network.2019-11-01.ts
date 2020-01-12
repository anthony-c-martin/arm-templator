import { OptionalExpression, ResourceDefinition } from "../language";

interface NetworkInterfaceProps {
  ipAddress: OptionalExpression<string>;
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