import { interactiveLogin } from 'ms-rest-azure';
import { ResourceManagementClient } from 'azure-arm-resource';
import { Deployment } from '../template';
import { inspect } from 'util';
import chalk from 'chalk';


export interface DeployArgs {
  deployment: Deployment<any, any>;
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
          template: deployment.builder.render(),
          mode: deployment.mode,
          parameters: deployment.renderParams(),
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
  deployment: Deployment<any, any>;
  full: boolean;
}

export async function displayAsync(args: DisplayArgs) {
  const template = args.deployment.builder.render();
  
  console.log(JSON.stringify(template, null, 2));
}