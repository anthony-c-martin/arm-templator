import { resourceGroupLocation, getReference, Template } from '../../lib/template';
import { createScriptsResource } from '../includes/scripts';

const template = new Template();
const location = resourceGroupLocation();
const name = template.addStringParameter('myName');

const script = template.deploy(createScriptsResource(
  'myScript',
  location,
  `${__dirname}/myScript.ps1`,
  {
    name,
  }), []);

const ref = getReference(script);
template.addObjectOutput('text', ref.call('output').call('text'));

export default template;