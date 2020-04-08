import { concat, getResourceId, resourceGroupLocation, buildTemplate, Params, Outputs } from '../../lib';
import { thenMultiple } from '../../lib/template';

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
    namespace: 'Microsoft.Storage',
    apiVersion: '2015-06-15',
    nameTypes: [{type: 'storageAccounts', name: concat(namePrefix, 'stg')}],
    location: location,
    properties: {
      accountType: 'Standard_LRS',
    },
  });

  const nic = template.deploy({
    namespace: 'Microsoft.Network',
    apiVersion: '2019-11-01',
    nameTypes: [{type: 'networkInterfaces', name: concat(namePrefix, '-nic')}],
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
    }});

  thenMultiple(nic, storageAccount, (deployer, nic, storageAccount) => deployer.deploy({
    namespace: 'Microsoft.Compute',
    apiVersion: '2019-07-01',
    nameTypes: [{type: 'virtualMachines', name: concat(namePrefix, '-vm')}],
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
          storageUri: concat('http://', storageAccount.nameTypes[0].name, '.blob.core.windows.net'),
        },
      },
    }}));

  return {
    // todo fix dependency
    storageUri: concat('http://', concat(namePrefix, 'stg'), '.blob.core.windows.net'),
  };
});