// Module Dependencies
import checkDir from '../helpers/checkdir';
import createSpinner from '../helpers/createSpinner';
import { exec } from 'child_process';
import chalk from 'chalk';

export default (args) => {
  const moduleNames = args.modules.join(' ');
  const installing = createSpinner(
    `Installing ${moduleNames.split(' ').join(', ')}`
  );
  checkDir();

  installing.start();

  exec(`npm install --save ${moduleNames}`, (err) => {
    if (err) {
      console.error(err);
    }
    installing.stop();

    console.log(`
    ${chalk.yellow.bold('Done!')}
    `);
  });
};
