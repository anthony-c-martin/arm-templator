import { Expressionable } from '../../lib/common';

const baseStorageProfile = {
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

export const createBaseVm = (computerName: Expressionable<string>, nicResourceId: Expressionable<string>) => ({
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
  storageProfile: baseStorageProfile,
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

export const createBaseNic = (subnetResourceId: Expressionable<string>, publicIpAddressResourceId: Expressionable<string>) => ({
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