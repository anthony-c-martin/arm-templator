#!/usr/bin/env node
require('ts-node').register();

import path = require('path');
import yargs = require('yargs');
import { series } from 'async';
import { interactiveLogin } from 'ms-rest-azure';
import { deployAsync, DeployArgs } from '../execute';

const argv = yargs.options({
  path: { type: 'string', demandOption: true, desc: 'Path to the deployment ts file' },
}).argv;

const args: DeployArgs<any, any> = {
  deployment: require(path.resolve(argv.path)).default,
};

series(
  [async () => {
    const creds = await interactiveLogin();

    await deployAsync(creds, args);
  }],
  (error, _) => {
    if (error) {
      throw error;
    }
  });