'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  try {
    _fs2.default.statSync('./.daruma.json');
  } catch (e) {
    throw new Error('    Must be in the root directory of a daruma project.');
  }
}; // Module Dependencies