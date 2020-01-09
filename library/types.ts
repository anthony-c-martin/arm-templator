import { OptionalExpression, Resource } from "./language";

interface VirtualMachineProps {
  adminName: OptionalExpression<string>;
  password: OptionalExpression<string>;
}
export function createVirtualMachine(name: OptionalExpression<string>, properties: VirtualMachineProps, location: OptionalExpression<string>): Resource<VirtualMachineProps> {
  return {
    type: 'Microsoft.Compute/virtualMachines',
    apiVersion: '2020-01-01',
    name,
    location,
    properties,
  };
}

interface NetworkInterfaceProps {
  ipAddress: OptionalExpression<string>;
}
export function createNetworkInterface(name: OptionalExpression<string>, properties: NetworkInterfaceProps, location: OptionalExpression<string>): Resource<NetworkInterfaceProps> {
  return {
    type: 'Microsoft.Network/networkInterfaces',
    apiVersion: '2020-01-01',
    name,
    location,
    properties,
  };
}