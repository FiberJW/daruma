// Module Dependencies

var daruma = require('vorpal')();
var shell = require('shelljs');

// Actions
var newAction = require('./actions/new');
var installAction = require('./actions/install');
var uninstallAction = require('./actions/uninstall');
var buildAction = require('./actions/build.js');

// Initialize a new project
daruma
  .command('new <name>')
  .description('Creates new project with specified name.')
  .option('-l, --library', 'For a project that exports a bundled `.js` file.')
  .action(newAction);

// Install deps from npm
daruma
  .command('install <modules...>')
  .description('Installs modules from NPM into your project.')
  .action(installAction);

// Remove npm modules from project
daruma
  .command('uninstall <modules...>')
  .description('Removes NPM modules from your project.')
  .action(uninstallAction);

// Build project
daruma
  .command('build')
  .option('-w --watch', 'Recompiles projects based on file changes.')
  .option('-p --production', 'Compiles minimized output file.')
  .description('Compile your source files to the `dist` directory.')
  .action(buildAction);

// Run CLI
daruma.parse(process.argv);
