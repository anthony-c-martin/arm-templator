#!/usr/bin/env node
require('ts-node').register();

import path = require('path');
import yargs = require('yargs');
import { series } from 'async';
import { display, DisplayArgs } from '../execute';

const argv = yargs.options({
  path: { type: 'string', demandOption: true, desc: 'Path to the deployment ts file' },
  full: { type: 'boolean', demandOption: false, desc: 'Display the full deployment object' },
}).argv;

const args: DisplayArgs<any, any> = {
  deployment: require(path.resolve(argv.path)).default,
  full: argv.full ?? false,
};

series(
  [async () => {
    const output = display(args);

    console.log(output);
  }],
  (error, _) => {
    if (error) {
      throw error;
    }
  });