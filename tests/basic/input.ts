import { concat, getResourceId, resourceGroupLocation, buildTemplate, Params, Outputs } from '../../lib';

const defaultStorageProfile = {
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

const params = {
  namePrefix: Params.String,
  subnetResourceId: Params.String,
}

const outputs = {
  storageUri: Outputs.String,
}

export default buildTemplate(params, outputs, (params, template) => {
  const { namePrefix, subnetResourceId } = params;
  const location = resourceGroupLocation();

  const storageAccount = template.deploy({
    apiVersion: '2015-06-15',
    type: 'Microsoft.Storage/storageAccounts',
    name: [concat(namePrefix, 'stg')],
    location: location,
    properties: {
      accountType: 'Standard_LRS',
    },
  });

  const nic = template.deploy({
    type: 'Microsoft.Network/networkInterfaces',
    apiVersion: '2019-11-01',
    name: [concat(namePrefix, '-nic')],
    location: location,
    properties: {
      ipConfigurations: [{
        name: 'myConfig',
        properties: {
          subnet: {
            id: subnetResourceId,
          },
          privateIPAllocationMethod: 'Dynamic',
        }
      }],
    },
  });

  const storageUri = concat('http://', storageAccount.name[0], '.blob.core.windows.net');

  const vm = template.deploy({
    type: 'Microsoft.Compute/virtualMachines',
    apiVersion: '2019-07-01',
    name: [concat(namePrefix, '-vm')],
    location: location,
    properties: {
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
    }
  }, [nic, storageAccount]);
  
  return {
    storageUri
  };
});