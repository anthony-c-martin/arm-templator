import { Template } from '../../lib/template';
import { createScriptsResource } from '../includes/scripts';

export default (template: Template) => {
  const location = template.resourceGroupLocation();
  const name = template.addStringParameter('myName');

  const script = template.deploy(createScriptsResource(
    'myScript',
    location,
    `${__dirname}/myScript.ps1`,
    {
      name,
    }), []);

  const ref = template.getReference(script);
  template.addObjectOutput('text', template.access(template.access(ref, 'output'), 'text'));
}