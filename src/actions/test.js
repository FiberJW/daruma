// Module Dependencies
import checkDir from '../helpers/checkdir';
import { exec } from 'child_process';

export default () => {
  checkDir();
  exec('mocha --compilers js:babel-core/register');
};
