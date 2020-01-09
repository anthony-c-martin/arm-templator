import { Template, ParameterExpression } from './library/language';
import { createVirtualMachine, createNetworkInterface } from './library/types';

export default function execute(template: Template) {
  const location = 'West US';

  // todo modules
  // todo params
  // todo functions
  // todo outputs
  // todo conditionals

  var vmNameParam = new ParameterExpression('test');

  const vm = createVirtualMachine(
    vmNameParam, {
      adminName: 'antm88',
      password: 'secretPassword',
    }, location);

  const nic = createNetworkInterface(
    vmNameParam, {
      ipAddress: '10.0.0.24',
    }, location);

  template.addResource(nic, []);
  template.addResource(vm, [nic]);
}