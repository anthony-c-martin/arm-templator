import { resourceGroupLocation, getReference, buildTemplate, Params, Outputs } from '../../lib';
import { createScriptsResource } from '../includes/scripts';

const params = {
  myName: Params.String,
}

const outputs = {
  text: Outputs.String,
}

export default buildTemplate(params, outputs, (params, template) => {
  const location = resourceGroupLocation();
  const { myName } = params;

  const script = template.deploy(createScriptsResource(
    'myScript',
    location,
    `${__dirname}/myScript.ps1`,
    {
      name: myName,
    }), []);

  const ref = getReference(script);

  return {
    text: ref.call('output').call('text'),
  };
});