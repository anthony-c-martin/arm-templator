import path = require('path');
import { interactiveLogin } from 'ms-rest-azure';
import { ResourceManagementClient } from 'azure-arm-resource';
import * as yargs from 'yargs';
import { Deployment } from '../lib/template';
import { inspect } from 'util';
import chalk from 'chalk';

export async function deploy() {
  const argv = yargs.options({
    path: { type: 'string', demandOption: true, desc: 'Path to the deployment ts file' },
  }).argv;
  
  const deployment: Deployment = require(path.resolve(argv.path)).default;

  const creds = await interactiveLogin();

  const client = new ResourceManagementClient.ResourceManagementClient(creds, deployment.subscriptionId);
  
  const rgExists = await client.resourceGroups.checkExistence(deployment.resourceGroup);
  
  if (!rgExists) {
    await client.resourceGroups.createOrUpdate(
      deployment.resourceGroup,
      {
        location: deployment.location,
      },
    );
  }

  try {
    const result = await client.deployments.createOrUpdate(
      deployment.resourceGroup,
      deployment.name,
      {
        properties: {
          template: deployment.template,
          mode: deployment.mode,
          parameters: renderParams(deployment.parameters),
        },
      });

      console.log(chalk.green('Deployment Succeeded!'));
      console.log(inspect(result?.properties?.outputs, false, null));
  } catch (err) {
    console.log(chalk.red('Deployment Failed!'));

    const result = await client.deploymentOperations.list(deployment.resourceGroup, deployment.name);
    console.log(inspect(result.slice(), false, null));

    throw err;
  }
}

export async function display() {
  const argv = yargs.options({
    path: { type: 'string', demandOption: true, desc: 'Path to the deployment ts file' },
    full: { type: 'boolean', demandOption: false, desc: 'Include the full deployment object' },
  }).argv;
  
  const deployment: Deployment = require(path.resolve(argv.path)).default;
  
  const output: any = argv.full ? deployment : deployment.template;
  
  console.log(JSON.stringify(output, null, 2));
}
  
function renderParams(parameters: {[key: string]: any}) {
  const output: {[key: string]: any} = {};

  for (const key of Object.keys(parameters)) {
    output[key] = {
      value: parameters[key],
    };
  }

  return output;
}