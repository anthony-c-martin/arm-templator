import { resourceGroupLocation, concat, getResourceId, buildTemplate, Params, Outputs } from '../../lib';
import { createBaseNic, createBaseVm } from '../includes/modularity';

const params = {
  index: Params.String,
  namePrefix: Params.String,
  subnetResourceId: Params.String,
}

const outputs = {
  vmResourceId: Outputs.String,
}

export default buildTemplate(params, outputs, (params, template) => {
  const location = resourceGroupLocation();
  const { index, namePrefix, subnetResourceId } = params;

  const publicIp = template.deploy({
    namespace: 'Microsoft.Network',
    apiVersion: '2019-11-01',
    nameTypes: [{type: 'publicIPAddresses', name: concat(namePrefix, '-pip', index)}],
    location: location,
    properties: {
      publicIPAllocationMethod: 'Dynamic',
    }
  });

  const nic = publicIp.then((deployer, publicIp) => deployer.deploy({
    namespace: 'Microsoft.Network',
    apiVersion: '2019-11-01',
    nameTypes: [{type: 'networkInterfaces', name: concat(namePrefix, '-nic', index)}],
    location: location,
    properties: createBaseNic(subnetResourceId, getResourceId(publicIp)),
  }));

  const vm = nic.then((deployer, nic) => deployer.deploy({
    namespace: 'Microsoft.Compute',
    apiVersion: '2019-07-01',
    nameTypes: [{type: 'virtualMachines', name: concat(namePrefix, '-vm', index)}],
    location: location,
    properties: createBaseVm(concat('vm', index), getResourceId(nic)),
  }));

  return {
    vmResourceId: vm.then((_, vm) => getResourceId(vm)),
  };
});