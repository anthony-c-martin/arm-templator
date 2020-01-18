import { Template } from '../../src/template';
import { createScriptsResource } from '../includes/scripts';

export default (template: Template) => {
  const location = template.resourceGroupLocation();
  const rgName = template.addStringParameter('resourceGroupName');

  template.deploy(createScriptsResource(
    'myScript',
    location,
    `${__dirname}/myScript.ps1`,
    {
      Location: location,
      Name: rgName,
    }), []);
}