// Module Dependencies
import checkDir from '../helpers/checkdir';
import createSpinner from '../helpers/createSpinner';
import { exec } from 'child_process';
import chalk from 'chalk';

export default (args) => {
  const moduleNames = args.modules.join(' ');
  const uninstalling = createSpinner(
    `Uninstalling ${moduleNames.split(' ').join(', ')}`
  );
  checkDir();

  uninstalling.start();

  exec(`npm uninstall --save ${moduleNames}`, (err) => {
    if (err) {
      console.error(err);
    }
    uninstalling.stop();

    console.log(`
    ${chalk.yellow.bold('Done!')}
    `);
  });
};
