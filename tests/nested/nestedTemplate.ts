import { resourceGroupLocation, concat, getResourceId, buildTemplate } from '../../lib/template';
import { createBaseNic, createBaseVm } from '../includes/modularity';

interface Params {
  index: string,
  namePrefix: string,
  subnetResourceId: string,
}

interface Outputs {
  vmResourceId: string,
}

export default buildTemplate<Params, Outputs>(template => {
  const location = resourceGroupLocation();
  const index = template.getParam('string', 'index');
  const namePrefix = template.getParam('string', 'namePrefix');
  const subnetResourceId = template.getParam('string', 'subnetResourceId');

  const publicIp = template.deploy({
    type: 'Microsoft.Network/publicIPAddresses',
    apiVersion: '2019-11-01',
    name: [concat(namePrefix, '-pip', index)],
    location: location,
    properties: {
      publicIPAllocationMethod: 'Dynamic',
    }
  });

  const nic = template.deploy({
    type: 'Microsoft.Network/networkInterfaces',
    apiVersion: '2019-11-01',
    name: [concat(namePrefix, '-nic', index)],
    location: location,
    properties: createBaseNic(subnetResourceId, getResourceId(publicIp)),
  }, [publicIp]);

  const vm = template.deploy({
    type: 'Microsoft.Compute/virtualMachines',
    apiVersion: '2019-07-01',
    name: [concat(namePrefix,'-vm', index)],
    location: location,
    properties: createBaseVm(concat('vm', index), getResourceId(nic)),
  }, [nic]);

  template.setOutput('string', 'vmResourceId', getResourceId(vm));
});