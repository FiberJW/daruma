var daruma = require('vorpal')();
var shell = require('shelljs');
var newAction = require('./actions/new');

daruma
  .command('new <name>')
  .description('Creates new project with specified name.')
  .option('-l, --library', 'For a project that exports a bundled `.js` file.')
  .action(newAction);

daruma.parse(process.argv);
