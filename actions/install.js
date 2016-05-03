// Module Dependencies

var shell = require('shelljs');
var checkDir = require('../helpers/checkdir');

module.exports = function(args) {
  var moduleNames = args.modules.join(' ');

  checkDir();

  console.log(`
    Installing ${moduleNames.split(' ').join(', ')}.
    (May seem to hang as NPM progress bar is not shown.)
    `
  );
  shell.exec(`npm install --save ${moduleNames}`, {silent:true});
  console.log('    Done!');
};
