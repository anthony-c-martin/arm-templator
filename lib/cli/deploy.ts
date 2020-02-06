#!/usr/bin/env node
require('ts-node').register();

import path = require('path');
import yargs = require('yargs');
import { series } from 'async';
import { deployAsync, DeployArgs } from './common';

const argv = yargs.options({
  path: { type: 'string', demandOption: true, desc: 'Path to the deployment ts file' },
}).argv;

const args: DeployArgs = {
  deployment: require(path.resolve(argv.path)).default,
};

series(
  [() => deployAsync(args)], 
  (error, _) => {
    if (error) {
      throw error;
    }
  });