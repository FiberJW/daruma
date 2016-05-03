// Module Dependencies

var shell = require('shelljs');
var fs = require('fs');

module.exports = function(args) {
  var moduleNames = args.modules.join(' ');

  try {

    fs.statSync('./daruma.json');

  } catch (e) {

    throw new Error('    Must be in the root directory of a daruma project.');

  }
  console.log(`
    Removing ${moduleNames.split(' ').join(', ')}.
    (May seem to hang as NPM progress bar is not shown.)
    `
  );
  shell.exec(`npm uninstall --save ${moduleNames}`, {silent:true});
};
