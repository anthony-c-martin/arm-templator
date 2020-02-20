import { resourceGroupLocation, getReference, Template, buildTemplate } from '../../lib/template';
import { createScriptsResource } from '../includes/scripts';

interface Params {
  myName: string,
}

interface Outputs {
  text: string,
}

export default buildTemplate<Params, Outputs>(template => {
  const location = resourceGroupLocation();
  const myName = template.getParam('string', 'myName');

  const script = template.deploy(createScriptsResource(
    'myScript',
    location,
    `${__dirname}/myScript.ps1`,
    {
      name: myName,
    }), []);

  const ref = getReference(script);
  template.setOutput('string', 'text', ref.call('output').call('text'));
});