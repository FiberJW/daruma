import { exec } from 'shelljs';
import createSpinner from './createSpinner';
import chalk from 'chalk';

const globalDeps = ['webpack', 'babel-cli', 'mocha'];
const notInstalled = [];

globalDeps.forEach((dep) => {
  if (exec(`npm list -g ${dep}`, { silent: true }).code === 1) {
    notInstalled.push(dep);
  }
});

if (notInstalled.length) {
  const installing = createSpinner('Installing daruma\'s dependencies');
  installing.start();
  exec(`npm install -g ${notInstalled.join(' ')}`);
  installing.stop();
}

console.log(`
    Ready, Set, ${chalk.bold.yellow('JavaScript')}!
`);
