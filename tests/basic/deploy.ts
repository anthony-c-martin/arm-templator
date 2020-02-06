import { Deployment } from '../../lib/template';
import { default as template } from './input'

const subscriptionId = '319b29d4-ae29-421c-b557-eac405f673b6';
const resourceGroup = 'anttestrg';

const deployment: Deployment = {
  location: 'West US',
  subscriptionId,
  resourceGroup,
  name: 'anttest',
  mode: 'Complete',
  template: template,
  parameters: {
    namePrefix: 'anttest',
    subnetResourceId: `/subscriptions/${subscriptionId}/resourceGroups/anttestrg-vnet/providers/Microsoft.Network/VirtualNetworks/anttest-vnet/subnets/default`,
  }
}

export default deployment;