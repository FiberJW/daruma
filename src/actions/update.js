// Module Dependencies
import chalk from 'chalk';
import createSpinner from '../helpers/createSpinner';
import { exec } from 'child_process';

export default () => {
  const updating = createSpinner(`Updating ${chalk.yellow('daruma')}`);
  updating.start();

  exec('npm uninstall -g daruma && npm install -g daruma', (err) => {
    if (err) {
      console.error(err);
    }

    updating.stop();

    console.log(`
    ${chalk.bold.blue('Congrats! You\'ve just updated ' +
    `${chalk.yellow.bold('daruma')}`)}!
    `);
  });
};
