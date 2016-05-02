var shell = require('shelljs');

module.exports = function(args) {
  if (args.options.library) {
    // Initialize Project Structure
    shell.mkdir([`./${args.name}/`, `./${args.name}/src/`, `${args.name}/dist/`]);
    shell.cd(`./${args.name}/`);
    shell.touch('./src/index.js');
    shell.ShellString(`{\n  "library": true,\n  "projectName": "${args.name}"\n}\n`).to('.darumarc');
    // Project-Specific Configs
    shell.exec('npm init -y');

  } else {
    console.log(`created ${args.name} project at \`${args.name}/\``);
  }
}
