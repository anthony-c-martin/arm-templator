import 'mocha';
import { expect } from 'chai';

const examplesDir = `${__dirname}/examples`;

async function executeTest(name: string) {
  const generated = require(`${examplesDir}/${name}/input.ts`).default;
  const expected = require(`${examplesDir}/${name}/output.json`);

  expect(generated).to.deep.equal(expected);
}

describe('generation tests', () => {
  it('basic', async () => await executeTest('basic'));
  it('modularity', async () => await executeTest('modularity'));
  it('scripts', async () => await executeTest('scripts'));
});