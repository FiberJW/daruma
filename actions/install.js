// Module Dependencies

var checkDir = require('../helpers/checkdir');
var createSpinner = require('../helpers/createSpinner');
var exec = require('child_process').exec;
var chalk = require('chalk');

module.exports = function(args) {
  var moduleNames = args.modules.join(' ');
  var installing = createSpinner(
    `Installing ${moduleNames.split(' ').join(', ')}`
  );
  checkDir();

  installing.start();

  exec(`npm install --save ${moduleNames}`, function(err) {
    if (err) {
      console.error(err);
    }
    installing.stop();

    console.log(`
    ${chalk.yellow.bold('Done!')}
    `);
  });
};
