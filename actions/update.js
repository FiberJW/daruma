// Module Dependencies

var chalk = require('chalk');
var createSpinner = require('../helpers/createSpinner');
var exec = require('child_process').exec;

module.exports = function() {
  var updating = createSpinner(`Updating ${chalk.yellow('daruma')}`);
  updating.start();
  exec('npm install -g daruma', function(err, stdout, stdin) {
    if (err) {
      console.error(err);
    }  
    updating.stop();
    console.log(`
    ${chalk.bold.blue(`Congrats! you\'ve just updated ${chalk.yellow.bold('daruma')}`)}!
    `);
  });
};
