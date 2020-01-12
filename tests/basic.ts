import { Template } from '../library/language';
import { ComputeBuilder as compute } from '../library/types/compute.2019-07-01';
import { NetworkBuilder as network } from '../library/types/network.2019-11-01';

export default function execute(template: Template) {
  const location = template.addStringParameter('location', 'West US');
  const resourceName = template.addStringParameter('resourceName', 'test');

  // todo modules
  // todo functions
  // todo outputs
  // todo conditionals

  const nic = template.deploy(
    network.networkInterface(
      resourceName, {
        ipAddress: '10.0.0.24',
      }, location),
    []);

  const vm = template.deploy(
    compute.virtualMachine(
      resourceName, {
        adminName: 'antm88',
        password: 'secretPassword',
      }, location),
    [nic]);
}