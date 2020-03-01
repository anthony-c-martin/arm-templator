import { interactiveLogin } from 'ms-rest-azure';
import { ResourceManagementClient } from 'azure-arm-resource';
import { DeploymentBuilder } from '../template';
import { inspect } from 'util';
import chalk from 'chalk';


export interface DeployArgs {
  deployment: DeploymentBuilder<any, any>;
}

export async function deployAsync(args: DeployArgs) {
  const deployment = args.deployment;
  const settings = deployment.getSettings();
  
  const creds = await interactiveLogin();

  const client = new ResourceManagementClient.ResourceManagementClient(creds, settings.subscriptionId);
  
  const rgExists = await client.resourceGroups.checkExistence(settings.resourceGroup);
  
  if (!rgExists) {
    await client.resourceGroups.createOrUpdate(
      settings.resourceGroup,
      {
        location: settings.location,
      },
    );
  }

  try {
    const result = await client.deployments.createOrUpdate(
      settings.resourceGroup,
      settings.name,
      {
        properties: {
          template: deployment.renderTemplate(),
          mode: settings.mode,
          parameters: deployment.renderParams(),
        },
      });

      console.log(chalk.green('Deployment Succeeded!'));
      console.log(inspect(result?.properties?.outputs, false, null));
  } catch (err) {
    console.log(chalk.red('Deployment Failed!'));

    const result = await client.deploymentOperations.list(settings.resourceGroup, settings.name);
    console.log(inspect(result.slice(), false, null));

    throw err;
  }
}

export interface DisplayArgs {
  deployment: DeploymentBuilder<any, any>;
  full: boolean;
}

export async function displayAsync(args: DisplayArgs) {
  const template = args.deployment.renderTemplate();
  
  console.log(JSON.stringify(template, null, 2));
}