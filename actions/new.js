// Module Dependencies

var fs = require('fs');
var shell = require('shelljs');
var chalk = require('chalk');
var exec = require('child_process').exec;

// Configurations

require.extensions['.txt'] = function (module, filename) {
      module.exports = fs.readFileSync(filename, 'utf8');
};

var gitignore = shell.ShellString(
  require('../configs/gitignore.txt')
);
var darumarc = require('../configs/daruma.json');

var createSpinner = require('../helpers/createSpinner');
var installing = createSpinner(`Installing dependencies`);

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
  shell.exec('npm init -y', {silent:true});
  shell.exec('git init', {silent:true});

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
    ).to('./.daruma.json');
    
    installing.start();

    // Try using child_process.exec instead
    
    exec('npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-stage-0', function(err, stdout, stdin) {
      if (err) {
        console.error(err);
      }
      installing.stop();
      intro();  
    });
    
  } else {
    newDharhma = shell.ShellString(
      JSON.stringify(
        darumarc,
        null,
        '  '
      ) + '\n'
    ).to('./.daruma.json');


    installing.start();

    exec('npm install --save-dev babel-core babel-preset-es2015 babel-preset-stage-0', function(err, stdout, stdin) {
      if (err) {
        console.error(err);
      }
      installing.stop();
      intro();
    });
    
  }
  
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
};
