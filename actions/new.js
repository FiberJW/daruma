// Module Dependencies

var fs = require('fs');
var shell = require('shelljs');

// Configurations

require.extensions['.txt'] = function (module, filename) {
      module.exports = fs.readFileSync(filename, 'utf8');
};

var gitignore = shell.ShellString(
  require('../configs/gitignore.txt')
);
var darumarc = require('../configs/daruma.json');



module.exports = function(args) {
  var newDharhma, name = args.name;
  // Initialize Project Structure
    
  shell.mkdir([
    `./${name}/`,
    `./${name}/src/`,
    `./${name}/dist/`
  ]);
  shell.cd(`./${name}/`);
  
  // Common Configs
  
  darumarc.name = `${name}`;
  gitignore.to('./.gitignore');
  shell.exec('npm init -y');
  shell.exec('git init');
  
  if (args.options.library) {
    // Library's Entry Point
    shell.touch('./src/index.js');

    darumarc.isLibrary = true;
    newDharhma = shell.ShellString(
      JSON.stringify(
        darumarc,
        null,
        '  '
      ) + '\n'
    ).to('./daruma.json');

    shell.exec('npm install -g webpack');
    shell.exec('npm install --save-dev babel-loader babel-core babel-preset-es2015');
  } else {
    newDharhma = shell.ShellString(
      JSON.stringify(
        darumarc,
        null,
        '  '
      ) + '\n'
    ).to('./daruma.json');
    
    shell.exec('npm install -g babel-cli');
    shell.exec('npm install --save-dev babel-core babel-preset-es2015');
  }
};

