import { Template } from './library/language';

export default function execute(template: Template) {
  const vm = {
    type: 'Microsoft.Compute/virtualMachines',
    apiVersion: '2020-01-01',
    location: 'West US',
    properties: {
      vmProp1: 'value',
    },
  };
  
  const nic = {
    type: 'Microsoft.Network/networkInterfaces',
    apiVersion: '2020-01-01',
    location: 'West US',
    properties: {
      niceProp1: 'value',
    },
  }

  template.addResource(nic, []);
  template.addResource(vm, [nic]);
}