// Module Dependencies
import ora from 'ora';
import chalk from 'chalk';

export default (text) => {
  const spinner = ora(chalk.bold(text));
  return spinner;
};
