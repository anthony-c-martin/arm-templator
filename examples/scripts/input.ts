import { renderTemplate, resourceGroupLocation, concat } from '../../lib/template';
import { createScriptsResource } from '../includes/scripts';

export default renderTemplate(template => {
  const location = resourceGroupLocation();
  const name = template.addStringParameter('myName');

  const script = template.deploy(createScriptsResource(
    'myScript',
    location,
    `${__dirname}/myScript.ps1`,
    {
      name,
    }), []);

  const ref = template.getReference(script);
  template.addObjectOutput('text', ref.call('output').call('text'));
});