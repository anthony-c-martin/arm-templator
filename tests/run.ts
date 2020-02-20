import 'mocha';
import { expect } from 'chai';

async function executeTest(name: string) {
  const generated = require(`${__dirname}/${name}/input.ts`).default.render();
  //fs.writeFileSync(`${__dirname}/${name}/output.json`, JSON.stringify(generated, null, 2), {encoding:'utf8'});
  const expected = require(`${__dirname}/${name}/output.json`);
  
  expect(generated).to.deep.equal(expected);
}

describe('generation tests', () => {
  it('basic', async () => await executeTest('basic'));
  it('modularity', async () => await executeTest('modularity'));
  it('scripts', async () => await executeTest('scripts'));
  it('nested', async () => await executeTest('nested'));
});