import 'mocha';
import { expect } from 'chai';
import { Template, renderTemplate } from './src/template';

const testDir = `${__dirname}/tests`;

async function executeTest(name: string) {
  const execute = (await import(`${testDir}/${name}.ts`)).default;
  const expected = require(`${testDir}/${name}.json`);

  const template = new Template();
  execute(template);

  const generated = renderTemplate(template);
  expect(generated).to.deep.equal(expected);
}

describe('generation tests', () => {
  it('basic.ts', async () => await executeTest('basic'));
});