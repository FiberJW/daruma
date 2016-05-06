// Module Dependencies
import shell from 'shelljs';
const { ShellString: sString } = shell;
import checkDir from '../helpers/checkdir';
import { content as webpackConfig } from '../configs/webpack.config';

// Configs
export default (args) => {
  checkDir();
  const darumarc = JSON.parse(shell.cat('./.daruma.json'));

  if (darumarc.isLibrary) {
    sString(
      webpackConfig
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
