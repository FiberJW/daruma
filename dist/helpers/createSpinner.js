'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Module Dependencies

exports.default = function (text) {
  var spinner = (0, _ora2.default)(_chalk2.default.bold(text));
  return spinner;
};