// Module Dependencies

var chalk = require('chalk');
var createSpinner = require('../helpers/createSpinner');
var exec = require('child_process').exec;

module.exports = function() {
  var updating = createSpinner(`Updating ${chalk.yellow('daruma')}`);
  updating.start();

  exec('npm install -g daruma', function(err) {
    if (err) {
      console.error(err);
    }

    updating.stop();

    console.log(`
    ${chalk.bold.blue(`Congrats! You\'ve just updated ` +
    `${chalk.yellow.bold('daruma')}`)}!
    `);
  });
};
