import { interactiveLogin } from 'ms-rest-azure';
import { ResourceManagementClient } from 'azure-arm-resource';
import * as yargs from 'yargs';
import { Deployment } from '../template';
import { inspect } from 'util';
import chalk from 'chalk';


export interface DeployArgs {
  deployment: Deployment;
}

export async function deployAsync(args: DeployArgs) {
  const deployment = args.deployment;
  
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
          template: deployment.template.render(),
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

export interface DisplayArgs {
  deployment: Deployment;
}

export async function displayAsync(args: DisplayArgs) {
  const argv = yargs.options({
    full: { type: 'boolean', demandOption: false, desc: 'Include the full deployment object' },
  }).argv;

  const template = args.deployment.template;
  
  console.log(JSON.stringify(template.render(), null, 2));
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