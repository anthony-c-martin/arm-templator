import { renderTemplate, concat, resourceGroupLocation, getResourceId } from '../../lib/template';
import { ComputeBuilder as compute } from '../../lib/types/compute.2019-07-01';
import { NetworkBuilder as network } from '../../lib/types/network.2019-11-01';
import { createBaseNic, createBaseVm } from '../includes/modularity';

export default renderTemplate(template => {
  const location = resourceGroupLocation();
  const namePrefix = template.addStringParameter('namePrefix', 'test');

  const publicIp = template.deploy(
    network.publicIPAddresses(
      concat(namePrefix, '-pip'),
      {
        publicIPAllocationMethod: 'Dynamic',
      },
      location),
    []);

  const vnet = template.deploy(
    network.virtualNetworks(
      concat(namePrefix, '-vnet'),
      {
        addressSpace: {
          addressPrefixes: [
            '10.0.0.0/24'
          ]
        }
      },
      location),
    []);

  const subnet = template.deploy(
    network.virtualNetworks_subnets(
      concat(namePrefix, '/default'),
      {
        addressPrefix: '10.0.0.0/24'
      },
      location),
    [vnet]);

  for (let i = 0; i < 2; i++) {
    const nic = template.deploy(
      network.networkInterfaces(
        concat(namePrefix, `-nic${i}`),
        createBaseNic(getResourceId(subnet), getResourceId(publicIp)),
        location),
      [subnet, publicIp]);

    const vm = template.deploy(
      compute.virtualMachines(
        concat(namePrefix, `-vm${i}`),
        createBaseVm(`vm${i}`, getResourceId(nic)),
        location),
      [nic]);
  }
});