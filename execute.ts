import { series } from 'async';
import path = require('path');
import { renderTemplate } from './lib/template';

series([async () => {
  const execPath = path.resolve(process.argv[2]);
  const execute = (await import(execPath)).default;
  
  const generated = renderTemplate(execute);
  console.log(JSON.stringify(generated, null, 2));
}]);