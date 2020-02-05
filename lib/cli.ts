import path = require('path');
import { interactiveLogin } from 'ms-rest-azure';
import { ResourceManagementClient } from 'azure-arm-resource';
import * as yargs from 'yargs';
import { Deployment } from './template';
import { inspect } from 'util';
import chalk from 'chalk';
import { series } from 'async';

async function deployAsync(deployment: Deployment) {
  const argv = yargs.options({ }).argv;
  
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

async function displayAsync(deployment: Deployment) {
  const argv = yargs.options({
    full: { type: 'boolean', demandOption: false, desc: 'Include the full deployment object' },
  }).argv;
  
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

function runSynchronously(asyncFunction: () => Promise<any>) {
  series(
    [asyncFunction], 
    (error, _) => {
      if (error) {
        throw error;
      }
    });
}

export class Cli {
  private deployment: Deployment;
  constructor(deployment: Deployment) {
    this.deployment = deployment;
  }

  deploy() {
    runSynchronously(() => deployAsync(this.deployment));
  }

  display() {
    runSynchronously(() => displayAsync(this.deployment));
  }
}

export function createCli(deployment: Deployment) {
  return new Cli(deployment);
}