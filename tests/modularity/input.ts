import { concat, resourceGroupLocation, getResourceId, buildTemplate, Params } from '../../lib';
import { createBaseNic, createBaseVm } from '../includes/modularity';
import { thenMultiple } from '../../lib/template';

const params = {
  namePrefix: Params.String,
}

export default buildTemplate(params, {}, (params, template) => {
  const location = resourceGroupLocation();
  const { namePrefix } = params;

  const publicIp = template.deploy({
    namespace: 'Microsoft.Network',
    apiVersion: '2019-11-01',
    nameTypes: [{type: 'publicIPAddresses', name: concat(namePrefix, '-pip')}],
    location: location,
    properties: {
      publicIPAllocationMethod: 'Dynamic',
    }
  });

  const vnet = template.deploy({
    namespace: 'Microsoft.Network',
    apiVersion: '2019-11-01',
    nameTypes: [{type: 'virtualNetworks', name: concat(namePrefix, '-vnet')}],
    location: location,
    properties: {
      addressSpace: {
        addressPrefixes: [
          '10.0.0.0/24'
        ]
      }
    }
  });

  const subnet = vnet.then((deployer, vnet) => deployer.deploy({
    namespace: 'Microsoft.Network',
    apiVersion: '2019-11-01',
    nameTypes: [
      ...vnet.nameTypes,
      {type: 'subnets', name: 'default'},
    ],
    properties: {
      addressPrefix: '10.0.0.0/24'
    }
  }));

  for (let i = 0; i < 2; i++) {
    const nic = thenMultiple(subnet, publicIp, (deployer, subnet, publicIp) => deployer.deploy({
      namespace: 'Microsoft.Network',
      apiVersion: '2019-11-01',
      nameTypes: [{type: 'networkInterfaces', name: concat(namePrefix, `-nic${i}`)}],
      location: location,
      properties: createBaseNic(getResourceId(subnet), getResourceId(publicIp)),
    }));

    const vm = nic.then((deployer, nic) => deployer.deploy({
      namespace: 'Microsoft.Compute',
      apiVersion: '2019-07-01',
      nameTypes: [{type: 'virtualMachines', name: concat(namePrefix, `-vm${i}`)}],
      location: location,
      properties: createBaseVm(`vm${i}`, getResourceId(nic)),
    }));
  }

  return {};
});