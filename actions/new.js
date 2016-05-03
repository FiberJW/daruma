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
    ).to('./daruma.json');
    
    console.log(`
    Installing dependencies...
    `);

    shell.exec('npm install -g webpack', {silent:true});
    shell.exec('npm install --save-dev babel-loader babel-core babel-preset-es2015', {silent:true});
  } else {
    newDharhma = shell.ShellString(
      JSON.stringify(
        darumarc,
        null,
        '  '
      ) + '\n'
    ).to('./daruma.json');

    console.log(`
    Installing dependencies...
    `);

    shell.exec('npm install -g babel-cli', {silent:true});
    shell.exec('npm install --save-dev babel-core babel-preset-es2015 babel-preset-stage-0', {silent:true});
  }

  console.log(`
    Project created!
    \`cd ${name}/\` to enter folder.
    Write ES2015 code in \`src/\` folder.
    Run \`daruma build\` in root of project directory.
    Your compiled code will be in the \`dist/\` folder.
    Enjoy freedom!
  `);
};
