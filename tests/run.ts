import 'mocha';
import { expect } from 'chai';
import { Template } from '../lib/template';

async function executeTest(name: string) {
  const generated: Template = require(`${__dirname}/${name}/input.ts`).default;
  const expected = require(`${__dirname}/${name}/output.json`);

  expect(generated.render()).to.deep.equal(expected);
}

describe('generation tests', () => {
  it('basic', async () => await executeTest('basic'));
  it('modularity', async () => await executeTest('modularity'));
  it('scripts', async () => await executeTest('scripts'));
  it('nested', async () => await executeTest('nested'));
});