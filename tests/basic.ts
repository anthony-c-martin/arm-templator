import { Template, ParameterExpression } from '../library/language';
import { createVirtualMachine, createNetworkInterface } from '../library/types';

export default function execute(template: Template) {
  const location = new ParameterExpression('location');
  const resourceName = new ParameterExpression('test');

  // todo modules
  // todo params
  // todo functions
  // todo outputs
  // todo conditionals

  const vm = createVirtualMachine(
    resourceName, {
      adminName: 'antm88',
      password: 'secretPassword',
    }, location);

  const nic = createNetworkInterface(
    resourceName, {
      ipAddress: '10.0.0.24',
    }, location);

  template.addResource(nic, []);
  template.addResource(vm, [nic]);
}