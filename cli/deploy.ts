import path = require('path');
import { interactiveLogin } from 'ms-rest-azure';
import { ResourceManagementClient } from 'azure-arm-resource';
import { series } from 'async';
import * as yargs from 'yargs';

const argv = yargs.options({
  template: { type: 'string', demandOption: true, desc: 'Path to the template ts file' },
  params: { type: 'string', demandOption: true, desc: 'Path to the params ts file' },
  sub: { type: 'string', demandOption: true, desc: 'Azure Subscription Id' },
  group: { type: 'string', demandOption: true, desc: 'Resource Group Name' },
  deployment: { type: 'string', demandOption: true, desc: 'Deployment Name' },
  location: { type: 'string', demandOption: true, desc: 'Resource Group Location' }
}).argv;

series([async () => {
  const template = require(path.resolve(argv.template)).default;
  const parameters = renderParams(path.resolve(argv.params));

  const creds = await interactiveLogin();

  const client = new ResourceManagementClient.ResourceManagementClient(creds, argv.sub);
  
  const rgExists = await client.resourceGroups.checkExistence(argv.group);
  
  if (!rgExists) {
    await client.resourceGroups.createOrUpdate(
      argv.group,
      {
        location: argv.location,
      },
    );
  }

  const deployment = await client.deployments.createOrUpdate(
    argv.group,
    argv.deployment,
    {
      properties: {
        template,
        mode: 'Complete',
        parameters,
      },
    });

  console.log(JSON.stringify(deployment?.properties?.outputs, null, 2));
}], 
(error, _) => {
  if (error) {
    throw error;
  }
});

function renderParams(paramsPath: string) {
  const parameters = require(paramsPath).default;
  const output: {[key: string]: any} = {};

  for (const key of Object.keys(parameters)) {
    output[key] = {
      value: parameters[key],
    };
  }

  return output;
}