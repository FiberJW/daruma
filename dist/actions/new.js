'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _child_process = require('child_process');

var _daruma = require('../configs/daruma');

var _daruma2 = _interopRequireDefault(_daruma);

var _createSpinner = require('../helpers/createSpinner');

var _createSpinner2 = _interopRequireDefault(_createSpinner);

var _gitignore = require('../configs/gitignore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sString = _shelljs2.default.ShellString; // Module Dependencies

// Configurations
var gitignore = sString(_gitignore.content);
var installing = (0, _createSpinner2.default)('Installing dependencies');

exports.default = function (args) {
  var name = args.name;

  // Initialize Project Structure
  _shelljs2.default.mkdir(['./' + name + '/', './' + name + '/src/', './' + name + '/dist/', './' + name + '/test/']);

  _shelljs2.default.cd('./' + name + '/');

  // Common Configs
  _daruma2.default.name = '' + name;
  gitignore.to('./.gitignore');
  _shelljs2.default.exec('npm init -y', { silent: true });
  _shelljs2.default.exec('git init', { silent: true });

  /**
  * [Provides instructions to user after creating a new project.]
  */
  function intro() {
    console.log('\n      Project created!\n      `cd ' + _chalk2.default.bold.red(name) + '/` to enter folder.\n      Write ES2015 code in `src/` folder.\n      Run `' + _chalk2.default.yellow.bold('daruma') + ' build` in root of project directory.\n      Your compiled code will be in the `dist/` folder.\n      Enjoy ' + _chalk2.default.bold.yellow('freedom') + '!\n    ');
  }

  if (args.options.library) {
    // Library's Entry Point
    _shelljs2.default.touch('./src/index.js');

    _daruma2.default.isLibrary = true;

    sString(JSON.stringify(_daruma2.default, null, '  ')).to('./.daruma.json');

    installing.start();

    (0, _child_process.exec)('npm install --save-dev ' + 'webpack ' + 'babel-loader ' + 'json-loader ' + 'babel-core ' + 'babel-preset-es2015 ' + 'babel-preset-stage-0', // End First Param
    function (err) {
      if (err) {
        console.error(err);
      }
      installing.stop();
      intro();
    });
  } else {
    sString(JSON.stringify(_daruma2.default, null, '  ')).to('./.daruma.json');

    installing.start();

    (0, _child_process.exec)('npm install --save-dev ' + 'babel-core ' + 'babel-preset-es2015 ' + 'babel-preset-stage-0', // End First Param
    function (err) {
      if (err) {
        console.error(err);
      }
      installing.stop();
      intro();
    });
  }
};