'use strict';

var _shelljs = require('shelljs');

var _createSpinner = require('./createSpinner');

var _createSpinner2 = _interopRequireDefault(_createSpinner);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalDeps = ['webpack', 'babel-cli', 'mocha'];
var notInstalled = [];

globalDeps.forEach(function (dep) {
  if ((0, _shelljs.exec)('npm list -g ' + dep, { silent: true }).code === 1) {
    notInstalled.push(dep);
  }
});

if (notInstalled.length) {
  var installing = (0, _createSpinner2.default)('Installing daruma\'s dependencies');
  installing.start();
  (0, _shelljs.exec)('npm install -g ' + notInstalled.join(' '));
  installing.stop();
}

console.log('\n    Ready, Set, ' + _chalk2.default.bold.yellow('JavaScript') + '!\n');