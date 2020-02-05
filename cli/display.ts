import path = require('path');
import * as yargs from 'yargs';
import { Deployment } from '../lib/template';

const argv = yargs.options({
  path: { type: 'string', demandOption: true, desc: 'Path to the deployment ts file' },
  full: { type: 'boolean', demandOption: false, desc: 'Include the full deployment object' },
}).argv;

const deployment: Deployment = require(path.resolve(argv.path)).default;

const output: any = argv.full ? deployment : deployment.template;

console.log(JSON.stringify(output, null, 2));