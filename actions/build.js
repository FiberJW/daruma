// Module Dependencies

var shell = require('shelljs');
var sString = shell.ShellString;
var checkDir = require('../helpers/checkdir');

// Configs

module.exports = function(args) {
  checkDir();
  var darumarc = JSON.parse(shell.cat('./.daruma.json'));

  if (darumarc.isLibrary) {
    sString(
      require('../configs/webpack.config.txt')
    ).to('./webpack.config.js');

    if (args.options.watch && args.options.production) {
      shell.exec('webpack -w -p');
    } else if (args.options.watch) {
      shell.exec('webpack -w');
    } else if (args.options.production) {
      shell.exec('webpack -p');
    } else {
      shell.exec('webpack');
    }

    shell.rm('./webpack.config.js');
  } else if (args.options.watch) {
    shell.exec('babel src --out-dir dist --presets es2015,stage-0 -w');
  } else {
    shell.exec('babel src --out-dir dist --presets es2015,stage-0');
  }
};
