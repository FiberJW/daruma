// Module Dependencies
import fs from 'fs';

export default () => {
  try {
    fs.statSync('./.daruma.json');
  } catch (e) {
    throw new Error('    Must be in the root directory of a daruma project.');
  }
};
