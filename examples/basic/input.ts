import { renderTemplate, concat, getResourceId, resourceGroupLocation } from '../../lib/template';
import { ComputeBuilder as compute, StorageProfile } from '../../lib/types/compute.2019-07-01';
import { NetworkBuilder as network } from '../../lib/types/network.2019-11-01';

const defaultStorageProfile: StorageProfile = {
  imageReference: {
    publisher: 'MicrosoftWindowsServer',
    offer: 'WindowsServer',
    sku: '2016-Datacenter',
    version: 'latest'
  },
  osDisk: {
    createOption: 'FromImage'
  },
  dataDisks: []
};

export default renderTemplate(template => {
  const location = resourceGroupLocation();
  const namePrefix = template.addStringParameter('namePrefix');
  const subnetResourceId = template.addStringParameter('subnetResourceId');

  // example of un-typed resource
  const storageAccount = template.deploy({
    apiVersion: '2015-06-15',
    type: 'Microsoft.Storage/storageAccounts',
    name: concat(namePrefix, 'stg'),
    location: location,
    properties: {
      accountType: 'Standard_LRS',
    }
  }, []);

  const nic = template.deploy(
    network.networkInterfaces(
      concat(namePrefix, '-nic'), {
        ipConfigurations: [{
          name: 'myConfig',
          properties: {
            subnet: {
              id: subnetResourceId,
            },
            privateIPAllocationMethod: 'Dynamic',
          }
        }],
      }, location),
    []);

  const storageUri = template.addVariable('bootDiagsUri', concat('http://', storageAccount.name, '.blob.core.windows.net'));

  const vm = template.deploy(
    compute.virtualMachines(
      concat(namePrefix, '-vm'), {
        osProfile: {
          computerName: 'myVm',
          adminUsername: concat(namePrefix, 'admin'),
          adminPassword: 'myS3cretP@ssw0rd',
          windowsConfiguration: {
            provisionVMAgent: true,
          },
        },
        hardwareProfile: {
          vmSize: 'Standard_A1_v2',
        },
        storageProfile: defaultStorageProfile,
        networkProfile: {
          networkInterfaces: [
            {
              properties: {
                primary: true
              },
              id: getResourceId(nic),
            },
          ]
        },
        diagnosticsProfile: {
          bootDiagnostics: {
            enabled: true,
            storageUri: storageUri,
          },
        },
      }, location),
    [nic, storageAccount]);

  template.addStringOutput('storageUri', storageUri);
});