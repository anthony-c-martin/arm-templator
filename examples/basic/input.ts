import { renderTemplate, concat, getResourceId } from '../../lib/template';
import { ComputeBuilder as compute, StorageProfile } from '../../lib/types/compute.2019-07-01';
import { NetworkBuilder as network } from '../../lib/types/network.2019-11-01';

export default renderTemplate(template => {
  const location = template.addStringParameter('location', 'West US');
  const resourceName = template.addStringParameter('resourceName', 'test');
  const subnetResourceId = template.addStringParameter('subnetResourceId');
  const publicIpAddressResourceId = template.addStringParameter('publicIpAddressResourceId');

  const storageAccount = template.deploy({
    apiVersion: '2015-06-15',
    type: 'Microsoft.Storage/storageAccounts',
    name: resourceName,
    location: location,
    properties: {
      accountType: 'Standard_LRS',
    }
  }, []);

  const nic = template.deploy(
    network.networkInterfaces(
      resourceName, {
        ipConfigurations: [{
          name: 'myConfig',
          properties: {
            subnet: {
              id: subnetResourceId,
            },
            privateIPAllocationMethod: 'Dynamic',
            publicIPAddress: {
              id: publicIpAddressResourceId,
            }
          }
        }],
      }, location),
    []);

  const storageUri = template.addVariable('bootDiagsUri', concat('http://', resourceName, '.blob.core.windows.net'));

  const storageProfile: StorageProfile = {
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

  const vm = template.deploy(
    compute.virtualMachines(
      resourceName, {
        osProfile: {
          computerName: 'myVm',
          adminUsername: 'antm88',
          adminPassword: 'secretPassword',
          windowsConfiguration: {
            provisionVMAgent: true,
          },
        },
        hardwareProfile: {
          vmSize: 'Standard_A1_v2',
        },
        storageProfile,
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