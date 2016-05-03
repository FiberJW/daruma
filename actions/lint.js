// Module Dependencies

var shell = require('shelljs');
var checkDir = require('../helpers/checkdir');
var chalk = require('chalk');

var eslintrc = shell.ShellString(
  require('../configs/eslintrc.txt')
);

module.exports = function(args) {
  checkDir();
  
  var eslintrc = shell.ShellString(
    require('../configs/eslintrc.txt')
  );
  
  eslintrc.to('./.eslintrc.json');

  console.log(`
    ${chalk.bold.blue('Linting files...')}
  `);

  shell.exec('eslint ./src/*.js');
  
  shell.rm('./.eslintrc.json');

};


