import { Template } from '../src/template';
import { ComputeBuilder as compute } from '../defs/compute.2019-07-01';
import { NetworkBuilder as network } from '../defs/network.2019-11-01';
import { nicGenerator, vmGenerator } from './modularity.external';

export default function execute(template: Template) {
  const location = template.addStringParameter('location', 'West US');
  const resourceName = template.addStringParameter('resourceName', 'test');
  const subnetResourceId = template.addStringParameter('subnetResourceId');
  const publicIpAddressResourceId = template.addStringParameter('publicIpAddressResourceId');

  const vm1Name = template.concat(resourceName, '-vm1');
  const vm2Name = template.concat(resourceName, '-vm2');

  const nic1 = template.deploy(
    network.networkInterface(
      template.concat(resourceName, '-nic1'),
      nicGenerator(subnetResourceId, publicIpAddressResourceId),
      location),
    []);

  const vm1 = template.deploy(
    compute.virtualMachine(
      vm1Name,
      vmGenerator(vm1Name, template.getResourceId(nic1)),
      location),
    [nic1]);

  const nic2 = template.deploy(
    network.networkInterface(
      template.concat(resourceName, '-nic2'),
      nicGenerator(subnetResourceId, publicIpAddressResourceId),
      location),
    []);

  const vm2 = template.deploy(
    compute.virtualMachine(
      vm2Name,
      vmGenerator(vm2Name, template.getResourceId(nic2)),
      location),
    [nic2]);
}