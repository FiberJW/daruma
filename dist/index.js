'use strict';

var _vorpal = require('vorpal');

var _vorpal2 = _interopRequireDefault(_vorpal);

var _new = require('./actions/new');

var _new2 = _interopRequireDefault(_new);

var _install = require('./actions/install');

var _install2 = _interopRequireDefault(_install);

var _uninstall = require('./actions/uninstall');

var _uninstall2 = _interopRequireDefault(_uninstall);

var _build = require('./actions/build');

var _build2 = _interopRequireDefault(_build);

var _update = require('./actions/update');

var _update2 = _interopRequireDefault(_update);

var _test = require('./actions/test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var daruma = (0, _vorpal2.default)();

// Actions
// Module Dependencies

// Initialize a new project
daruma.command('new <name>').description('Creates new project with specified name.').option('-l, --library', 'For a project that exports a bundled `.js` file.').action(_new2.default);

// Install deps from npm
daruma.command('install <modules...>').description('Installs modules from NPM into your project.').action(_install2.default);

// Remove npm modules from project
daruma.command('uninstall <modules...>').description('Removes NPM modules from your project.').action(_uninstall2.default);

// Build project
daruma.command('build').option('-w --watch', 'Recompiles projects based on file changes.').option('-p --production', 'Compiles minimized output file.').description('Compile your source files to the `dist` directory.').action(_build2.default);

// Update daruma
daruma.command('update').description('Update daruma to the latest build.').action(_update2.default);

// Run tests
daruma.command('test').description('Runs tests within `tests/` directory.').action(_test2.default);

// Run CLI
daruma.parse(process.argv);