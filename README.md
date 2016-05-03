<p align="center">
  <img alt="daruma" src="http://i.imgur.com/w1VPnph.png" width="546"/>
</p>

<p align="center">
  The JavaScript build tool.
</p>
##  Build tool inspired by Rust's Cargo package manager

Install development builds: `npm install -g git://github.com/datwheat/daruma.git`

## Getting Started

Install daruma globally like above ^.

`daruma new <projectname> [-l for libraries with a spefific bundled outfile]`

`cd <projectname>`

Write ES2015 code in your source folder. (`index.js` is the entry for libraries)

`daruma build [-w for watching files] [-p for production library builds]`

You now have valid ES5 code in your `dist/` folder! Wasn't that easy?

# Roadmap:

## Features wanted:

- [x] `daruma new <projectname> --lib` (Project Initialization for Library with single entry point)
- [x] `daruma new <projectname>`  (Project initialization for compiling whole source)
- [x] `daruma build [-p -w for libs]` (Compile project depending on project type. Bundled file to `dist/` for lib and compile whole `src/` tree to `dist/` for normal projects. `-p` is for compiling minimized 'production' code and `-w` watches for changes)
- [ ] `daruma test` (First class testing)
- [x] `daruma install <packagename(s)>` (Add package(s) from NPM and save to `package.json`)
- [x] `daruma uninstall <packagename(s)>` (Remove dependencies from project and `package.json`)
- [ ] `daruma lint` (Lints your Files based on a eslint standard)
- [x] Initialize as git repo
- [x] Add a node .gitignore
- [ ] daruma pre-build scripts
