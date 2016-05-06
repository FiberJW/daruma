var ora = require('ora');
var chalk = require('chalk');

module.exports = function createSpinner(text) {
  var spinner = ora(chalk.bold(text));
  return spinner;
};
