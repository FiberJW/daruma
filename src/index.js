#!/usr/bin/env node
// Module Dependencies

import vorpal from 'vorpal';

const daruma = vorpal();

// Actions
import newAction from './actions/new';
import installAction from './actions/install';
import uninstallAction from './actions/uninstall';
import buildAction from './actions/build';
import updateAction from './actions/update';
import testAction from './actions/test';

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

// Update daruma
daruma
  .command('update')
  .description('Update daruma to the latest build.')
  .action(updateAction);

// Run tests
daruma
  .command('test')
  .description('Runs tests within `tests/` directory.')
  .action(testAction);

// Run CLI
daruma.parse(process.argv);
