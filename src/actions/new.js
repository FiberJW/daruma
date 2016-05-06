// Module Dependencies
import shell from 'shelljs';
import chalk from 'chalk';
import { exec } from 'child_process';
import darumarc from '../configs/daruma';
import createSpinner from '../helpers/createSpinner';
const sString = shell.ShellString;
import { content as gitignoreCfg } from '../configs/gitignore';

// Configurations
const gitignore = sString(
  gitignoreCfg
);
const installing = createSpinner('Installing dependencies');

export default (args) => {
  const name = args.name;

  // Initialize Project Structure
  shell.mkdir([
    `./${name}/`,
    `./${name}/src/`,
    `./${name}/dist/`,
    `./${name}/test/`,
  ]);

  shell.cd(`./${name}/`);

  // Common Configs
  darumarc.name = `${name}`;
  gitignore.to('./.gitignore');
  shell.exec('npm init -y', { silent: true });
  shell.exec('git init', { silent: true });

  /**
  * [Provides instructions to user after creating a new project.]
  */
  function intro() {
    console.log(`
      Project created!
      \`cd ${chalk.bold.red(name)}/\` to enter folder.
      Write ES2015 code in \`src/\` folder.
      Run \`${chalk.yellow.bold('daruma')} build\` in root of project directory.
      Your compiled code will be in the \`dist/\` folder.
      Enjoy ${chalk.bold.yellow('freedom')}!
    `);
  }

  if (args.options.library) {
    // Library's Entry Point
    shell.touch('./src/index.js');

    darumarc.isLibrary = true;

    sString(
      JSON.stringify(
        darumarc,
        null,
        '  '
      )
    ).to('./.daruma.json');

    installing.start();

    exec('npm install --save-dev ' +
      'webpack ' +
      'babel-loader ' +
      'json-loader ' +
      'babel-core ' +
      'babel-preset-es2015 ' +
      'babel-preset-stage-0', // End First Param
      (err) => {
        if (err) {
          console.error(err);
        }
        installing.stop();
        intro();
      }
    );
  } else {
    sString(
      JSON.stringify(
        darumarc,
        null,
        '  '
      )
    ).to('./.daruma.json');

    installing.start();

    exec('npm install --save-dev ' +
      'babel-core ' +
      'babel-preset-es2015 ' +
      'babel-preset-stage-0', // End First Param
      (err) => {
        if (err) {
          console.error(err);
        }
        installing.stop();
        intro();
      }
    );
  }
};
