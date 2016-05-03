module.exports = function() {
  var fs = require('fs');
  try {
    fs.statSync('./daruma.json');
  } catch (e) {
    throw new Error('    Must be in the root directory of a daruma project.');
  }
};
