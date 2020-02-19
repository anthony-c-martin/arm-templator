import { renderTemplate, resourceGroupLocation, getReference, concat, getResourceId } from '../../lib/template';
import { createBaseNic, createBaseVm } from '../includes/modularity';
import { ResourceReference } from '../../lib/common';

export default renderTemplate(template => {
  const location = resourceGroupLocation();
  const namePrefix = template.addStringParameter('namePrefix');
  const subnetResourceId = template.addStringParameter('subnetResourceId');

  const vms: ResourceReference<any>[] = [];

  for (let i = 0; i < 3; i++) {
    const script = template.deployNested(
      `nested${i}`,
      location,
      nested => {
        const publicIp = nested.deploy({
          type: 'Microsoft.Network/publicIPAddresses',
          apiVersion: '2019-11-01',
          name: [concat(namePrefix, `-pip${i}`)],
          location: location,
          properties: {
            publicIPAllocationMethod: 'Dynamic',
          }
        });

        const nic = nested.deploy({
          type: 'Microsoft.Network/networkInterfaces',
          apiVersion: '2019-11-01',
          name: [concat(namePrefix, `-nic${i}`)],
          location: location,
          properties: createBaseNic(subnetResourceId, getResourceId(publicIp)),
        }, [publicIp]);

        const vm = nested.deploy({
          type: 'Microsoft.Compute/virtualMachines',
          apiVersion: '2019-07-01',
          name: [concat(namePrefix, `-vm${i}`)],
          location: location,
          properties: createBaseVm(`vm${i}`, getResourceId(nic)),
        }, [nic]);

        vms.push(vm);
      }
    );

    template.addArrayOutput('vms', vms.map(getResourceId));
  }
});