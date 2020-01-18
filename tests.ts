import 'mocha';
import { expect } from 'chai';
import { Template, renderTemplate } from './lib/template';

const examplesDir = `${__dirname}/examples`;

async function executeTest(name: string) {
  const execute = (await import(`${examplesDir}/${name}/input.ts`)).default;
  const expected = require(`${examplesDir}/${name}/output.json`);

  const template = new Template();
  execute(template);

  const generated = renderTemplate(template);
  expect(generated).to.deep.equal(expected);
}

describe('generation tests', () => {
  it('basic', async () => await executeTest('basic'));
  it('modularity', async () => await executeTest('modularity'));
  it('scripts', async () => await executeTest('scripts'));
});