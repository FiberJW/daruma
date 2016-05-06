'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkdir = require('../helpers/checkdir');

var _checkdir2 = _interopRequireDefault(_checkdir);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module Dependencies

exports.default = function () {
  (0, _checkdir2.default)();
  (0, _child_process.exec)('mocha --compilers js:babel-core/register');
};