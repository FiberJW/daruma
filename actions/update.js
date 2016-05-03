// Module Dependencies

var shell = require('shelljs');
var chalk = require('chalk');

module.exports = function() {
  shell.exec('npm install -g daruma', {silent: true});
  
  console.log(`
    ${chalk.bold.blue(`Congrats! you\'ve just updated ${chalk.yellow.bold('daruma')}`)}!
  `);

};
