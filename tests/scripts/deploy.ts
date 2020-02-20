import { Deployment } from '../../lib/template';
import { default as builder } from './input'

const subscriptionId = '319b29d4-ae29-421c-b557-eac405f673b6';
const resourceGroup = 'antscripts';

export default new Deployment(
  'West US',
  subscriptionId,
  resourceGroup,
  'antscripts',
  'Complete',
  builder,
  {
    myName: 'Anthony Martin',
  }
);