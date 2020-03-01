import { concat, resourceGroupLocation, getResourceId, buildTemplate, Params } from '../../lib';
import { createBaseNic, createBaseVm } from '../includes/modularity';

const params = {
  namePrefix: Params.String,
}

export default buildTemplate(params, {}, (params, template) => {
  const location = resourceGroupLocation();
  const { namePrefix } = params;

  const publicIp = template.deploy({
    type: 'Microsoft.Network/publicIPAddresses',
    apiVersion: '2019-11-01',
    name: [concat(namePrefix, '-pip')],
    location: location,
    properties: {
      publicIPAllocationMethod: 'Dynamic',
    }
  });

  const vnet = template.deploy({
    type: 'Microsoft.Network/virtualNetworks',
    apiVersion: '2019-11-01',
    name: [concat(namePrefix, '-vnet')],
    location: location,
    properties: {
      addressSpace: {
        addressPrefixes: [
          '10.0.0.0/24'
        ]
      }
    }
  });

  const subnet = template.deploy({
    type: 'Microsoft.Network/virtualNetworks/subnets',
    apiVersion: '2019-11-01',
    name: [...vnet.name, 'default'],
    properties: {
      addressPrefix: '10.0.0.0/24'
    }
  }, [vnet]);

  for (let i = 0; i < 2; i++) {
    const nic = template.deploy({
      type: 'Microsoft.Network/networkInterfaces',
      apiVersion: '2019-11-01',
      name: [concat(namePrefix, `-nic${i}`)],
      location: location,
      properties: createBaseNic(getResourceId(subnet), getResourceId(publicIp)),
    }, [subnet, publicIp]);

    const vm = template.deploy({
      type: 'Microsoft.Compute/virtualMachines',
      apiVersion: '2019-07-01',
      name: [concat(namePrefix, `-vm${i}`)],
      location: location,
      properties: createBaseVm(`vm${i}`, getResourceId(nic)),
    }, [nic]);
  }

  return {};
});