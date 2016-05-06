// Module Dependencies

var checkDir = require('../helpers/checkdir');
var exec = require('child_process').exec;

module.exports = function() {
  checkDir();
  exec(`mocha --compilers js:babel-core/register`);
};
