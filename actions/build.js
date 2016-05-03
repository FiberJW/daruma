// Module Dependencies

var shell = require('shelljs');
var checkDir = require('../helpers/checkdir');

// Configs


module.exports = function(args) {
  checkDir();
  
  var darumarc = JSON.parse(shell.cat('./daruma.json'));

  if (darumarc.isLibrary) {
    var webpackConfig = shell.ShellString(
      require('../configs/webpack.config.txt')
    );

    webpackConfig.to('./webpack.config.js');
    
    if (args.options.watch && args.options.production) {
      shell.exec('webpack -w -p');
    } else if (args.options.watch) {
      shell.exec('webpack -w');
    } else if (args.options.production) {
      shell.exec('webpack -p');
    } else {
      shell.exec('webpack');
    }
    
    shell.rm('./webpack.config.js'); // Like we were never there :P
  } else {
    if (args.options.watch) {
      shell.exec('babel src --out-dir dist --presets es2015 stage-0 -w');
    } else {
      shell.exec('babel src --out-dir dist --presets es2015 stage-0');
    }
  }
};
