import { ServiceClientCredentials } from 'ms-rest';
import { ResourceManagementClient } from 'azure-arm-resource';
import { DeploymentBuilder } from './template';
import { inspect } from 'util';
import chalk from 'chalk';

export interface DeployArgs<TParams, TOutput> {
  deployment: DeploymentBuilder<TParams, TOutput>;
}

export async function deployAsync<TParams, TOutput>(creds: ServiceClientCredentials, args: DeployArgs<TParams, TOutput>) {
  const deployment = args.deployment;
  const settings = deployment.getSettings();

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

export interface DisplayArgs<TParams, TOutput> {
  deployment: DeploymentBuilder<TParams, TOutput>;
  full: boolean;
}

export function display<TParams, TOutput>(args: DisplayArgs<TParams, TOutput>): string {
  let output;

  if (args.full) {
    output = {
      params: args.deployment.renderParams(),
      settings: args.deployment.getSettings(),
      template: args.deployment.renderTemplate(),
    };
  } else {
    output = args.deployment.renderTemplate();
  }

  return JSON.stringify(output, null, 2);
}