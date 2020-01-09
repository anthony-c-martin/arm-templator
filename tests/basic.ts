import { Template, ParameterExpression } from '../library/language';
import { createVirtualMachine, createNetworkInterface } from '../library/types';

export default function execute(template: Template) {
  const location = 'West US';

  const vm = createVirtualMachine(
    'myVm', {
      adminName: 'antm88',
      password: 'secretPassword',
    }, location);

  const nic = createNetworkInterface(
    'myNic', {
      ipAddress: '10.0.0.24',
    }, location);

  template.addResource(nic, []);
  template.addResource(vm, [nic]);
}