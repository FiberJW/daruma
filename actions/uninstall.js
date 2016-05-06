// Module Dependencies

var checkDir = require('../helpers/checkdir');
var createSpinner = require('../helpers/createSpinner');
var exec = require('child_process').exec;
var chalk = require('chalk');

module.exports = function(args) {
  var moduleNames = args.modules.join(' ');
  var uninstalling = createSpinner(
    `Uninstalling ${moduleNames.split(' ').join(', ')}`
  );
  checkDir();

  uninstalling.start();

  exec(`npm uninstall --save ${moduleNames}`, function(err) {
    if (err) {
      console.error(err);
    }
    uninstalling.stop();

    console.log(`
    ${chalk.yellow.bold('Done!')}
    `);
  });
};
