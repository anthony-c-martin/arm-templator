#!/usr/bin/env node -r ts-node/register
// This file should not be compiled and is included in the package as-is
process.env.NODE_ENV = 'cli';

import path = require('path');
import yargs = require('yargs');
import { series } from 'async';
import { deployAsync, DeployArgs } from '../dist/cli';

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