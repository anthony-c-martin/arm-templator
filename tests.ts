import 'mocha';
import { expect } from 'chai';
import fs from 'fs';
import { ConcreteTemplate, renderJson } from './library/executor';

const testDir = `${__dirname}/tests`;

async function executeTest(name: string) {
  const execute = (await import(`${testDir}/${name}.ts`)).default;
  const expected = fs.readFileSync(`${testDir}/${name}.json`, {encoding: 'utf8'});

  const template = new ConcreteTemplate();
  execute(template);

  const generated = renderJson(template);
  expect(generated).to.equal(expected);
}

describe('generation tests', () => {
  it('basic.ts', async () => await executeTest('basic'));
});