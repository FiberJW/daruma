'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _createSpinner = require('../helpers/createSpinner');

var _createSpinner2 = _interopRequireDefault(_createSpinner);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var updating = (0, _createSpinner2.default)('Updating ' + _chalk2.default.yellow('daruma'));
  updating.start();

  (0, _child_process.exec)('npm uninstall -g daruma && npm install -g daruma', function (err) {
    if (err) {
      console.error(err);
    }

    updating.stop();

    console.log('\n    ' + _chalk2.default.bold.blue('Congrats! You\'ve just updated ' + ('' + _chalk2.default.yellow.bold('daruma'))) + '!\n    ');
  });
}; // Module Dependencies