import { OptionalExpression, ResourceDefinition } from "../language";

interface VirtualMachineProps {
  adminName: OptionalExpression<string>;
  password: OptionalExpression<string>;
}

export class ComputeBuilder {
  public static virtualMachine(name: OptionalExpression<string>, properties: VirtualMachineProps, location: OptionalExpression<string>): ResourceDefinition<VirtualMachineProps> {
    return {
      type: 'Microsoft.Compute/virtualMachines',
      apiVersion: '2019-07-01',
      name,
      location,
      properties,
    };
  }
}