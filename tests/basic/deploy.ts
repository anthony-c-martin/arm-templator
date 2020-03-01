import { buildDeployment } from '../../lib/template';
import { default as template } from './input'

const subscriptionId = '319b29d4-ae29-421c-b557-eac405f673b6';
const resourceGroup = 'anttestrg';

export default buildDeployment(
  { 
    location: 'West US',
    subscriptionId,
    resourceGroup,
    name: 'anttest',
    mode: 'Complete',
  },
  template,
  {
    namePrefix: 'anttest',
    subnetResourceId: `/subscriptions/${subscriptionId}/resourceGroups/anttestrg-vnet/providers/Microsoft.Network/VirtualNetworks/anttest-vnet/subnets/default`,
  }
);