'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkdir = require('../helpers/checkdir');

var _checkdir2 = _interopRequireDefault(_checkdir);

var _createSpinner = require('../helpers/createSpinner');

var _createSpinner2 = _interopRequireDefault(_createSpinner);

var _child_process = require('child_process');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module Dependencies

exports.default = function (args) {
  var moduleNames = args.modules.join(' ');
  var uninstalling = (0, _createSpinner2.default)('Uninstalling ' + moduleNames.split(' ').join(', '));
  (0, _checkdir2.default)();

  uninstalling.start();

  (0, _child_process.exec)('npm uninstall --save ' + moduleNames, function (err) {
    if (err) {
      uninstalling.stop();
      console.error(err);
    } else {
      uninstalling.stop();
      console.log('\n        ' + _chalk2.default.yellow.bold('Done!') + '\n      ');
    }
  });
};