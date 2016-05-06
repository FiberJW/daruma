'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _checkdir = require('../helpers/checkdir');

var _checkdir2 = _interopRequireDefault(_checkdir);

var _webpack = require('../configs/webpack.config');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sString = _shelljs2.default.ShellString; // Module Dependencies

// Configs

exports.default = function (args) {
  (0, _checkdir2.default)();
  var darumarc = JSON.parse(_shelljs2.default.cat('./.daruma.json'));

  if (darumarc.isLibrary) {
    sString(_webpack2.default.content).to('./webpack.config.js');

    if (args.options.watch && args.options.production) {
      _shelljs2.default.exec('webpack -w -p');
    } else if (args.options.watch) {
      _shelljs2.default.exec('webpack -w');
    } else if (args.options.production) {
      _shelljs2.default.exec('webpack -p');
    } else {
      _shelljs2.default.exec('webpack');
    }

    _shelljs2.default.rm('./webpack.config.js');
  } else if (args.options.watch) {
    _shelljs2.default.exec('babel src --out-dir dist --presets es2015,stage-0 -w');
  } else {
    _shelljs2.default.exec('babel src --out-dir dist --presets es2015,stage-0');
  }
};