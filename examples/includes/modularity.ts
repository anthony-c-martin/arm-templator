import { Expressionable } from '../../lib/common';
import { VirtualMachineProperties } from '../../lib/types/compute.2019-07-01';
import { NetworkInterfacePropertiesFormat } from '../../lib/types/network.2019-11-01';

export const vmGenerator = (computerName: Expressionable<string>, nicResourceId: Expressionable<string>): VirtualMachineProperties => ({
  osProfile: {
    computerName: computerName,
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
        id: nicResourceId,
      },
    ]
  },
});

export const nicGenerator = (subnetResourceId: Expressionable<string>, publicIpAddressResourceId: Expressionable<string>): NetworkInterfacePropertiesFormat => ({
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
});