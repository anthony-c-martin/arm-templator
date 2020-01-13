import { Template } from '../src/template';
import { ComputeBuilder as compute } from '../defs/compute.2019-07-01';
import { NetworkBuilder as network } from '../defs/network.2019-11-01';

export default function execute(template: Template) {
  const location = template.addStringParameter('location', 'West US');
  const resourceName = template.addStringParameter('resourceName', 'test');
  const subnetResourceId = template.addStringParameter('subnetResourceId');
  const publicIpAddressResourceId = template.addStringParameter('publicIpAddressResourceId');
  const bootDiagsStorageUri = template.addStringParameter('bootDiagsStorageUri');

  // todo modules
  // todo functions
  // todo outputs
  // todo conditionals

  const nic = template.deploy(
    network.networkInterface(
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

  const vm = template.deploy(
    compute.virtualMachine(
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
        storageProfile: {
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
        },
        networkProfile: {
          networkInterfaces: [
            {
              properties: {
                primary: true
              },
              id: template.getResourceId(nic),
            },
          ]
        },
        diagnosticsProfile: {
          bootDiagnostics: {
            enabled: true,
            storageUri: bootDiagsStorageUri,
          },
        },
      }, location),
    [nic]);
}