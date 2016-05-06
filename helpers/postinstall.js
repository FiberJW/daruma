var exec = require('shelljs').exec;
var createSpinner = require('./createSpinner');
var chalk = require('chalk');


var globalDeps = ['webpack', 'babel-cli', 'mocha'];
var notInstalled = [];

globalDeps.forEach(function(dep) {
  if (exec(`npm list -g ${dep}`, {silent: true}).code === 1) {
    notInstalled.push(dep);
  }
});

if (notInstalled.length) {
  var installing = createSpinner('Installing daruma\'s dependencies');
  installing.start();
  exec(`npm install -g ${notInstalled.join(' ')}`);
  installing.stop();
}

console.log(`
    Ready, Set, ${chalk.bold.yellow('JavaScript')}!
`);
