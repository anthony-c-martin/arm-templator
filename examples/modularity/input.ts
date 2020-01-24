import { renderTemplate, concat, resourceGroupLocation } from '../../lib/template';
import { ComputeBuilder as compute } from '../../lib/types/compute.2019-07-01';
import { NetworkBuilder as network } from '../../lib/types/network.2019-11-01';
import { nicGenerator, vmGenerator } from '../includes/modularity';

export default renderTemplate(template => {
  const location = resourceGroupLocation();
  const resourceName = template.addStringParameter('resourceName', 'test');
  const subnetResourceId = template.addStringParameter('subnetResourceId');
  const publicIpAddressResourceId = template.addStringParameter('publicIpAddressResourceId');

  const vm1Name = concat(resourceName, '-vm1');
  const vm2Name = concat(resourceName, '-vm2');

  const nic1 = template.deploy(
    network.networkInterfaces(
      concat(resourceName, '-nic1'),
      nicGenerator(subnetResourceId, publicIpAddressResourceId),
      location),
    []);

  const vm1 = template.deploy(
    compute.virtualMachines(
      vm1Name,
      vmGenerator(vm1Name, template.getResourceId(nic1)),
      location),
    [nic1]);

  const nic2 = template.deploy(
    network.networkInterfaces(
      concat(resourceName, '-nic2'),
      nicGenerator(subnetResourceId, publicIpAddressResourceId),
      location),
    []);

  const vm2 = template.deploy(
    compute.virtualMachines(
      vm2Name,
      vmGenerator(vm2Name, template.getResourceId(nic2)),
      location),
    [nic2]);
});