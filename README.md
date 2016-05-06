<p align="center">
  <img alt="daruma" src="http://i.imgur.com/w1VPnph.png" width="546"/>
</p>

<p align="center">
  The JavaScript build tool.
</p>
<p align="center">
  <a href='https://www.npmjs.org/package/daruma'>
    <img src="https://img.shields.io/npm/v/daruma.svg?style=flat-square" />
  </a>
  <a href='http://npm-stat.com/charts.html?package=daruma'>
    <img src="https://img.shields.io/npm/dm/daruma.svg?style=flat-square" />
  </a>
  <a href='./LICENSE'>
    <img src="http://img.shields.io/:license-mit-blue.svg?style=flat-square" />
  </a>
</p>



## What is this?

A tool that gets you up and running writing ES2015+ JavaScript with no fuss.

## Why do I want this?

If you've ever had to start a node project or library from scratch with all of the cool features like ES2015 with babel and bundling with webpack, you know it can be a hassle. Daruma allows you to focus on what's most important: building your project.

Even Daruma was written using Daruma. :smirk:

## Who is this for?

Primarily for those who don't want to go through the hassle of setting up an ES2015+ project but still want to flexibility that a starter kit can't provide.

## Getting Started

Install Daruma from npm `npm install -g daruma`

#### Initialize a new project

`daruma new <projectname> [-l for libraries with a specific bundled outfile]`

#### Enter the Project Directory

`cd <projectname>`

#### Write ES2015+ code in your `src/` folder. (`index.js` is the entry for libraries)

then ...

#### Test your code

Write tests in your `test/` directory using whatever assertion library you'd like and run `daruma test` to run tests using Mocha

#### Compile your EsNext JavaScript

`daruma build [-w for watching files] [-p for production library builds]`

You now have valid ES5 code in your `dist/` folder! Wasn't that easy?

### Daruma leverages the power of...

- npm
- Babel
- Webpack
- Shelljs
- Mocha
- Vorpal

...to give you a clean and easy development experience.

This wouldn't be possible without those projects, so thank you JavaScript ecosystem. :)
# Roadmap:

## Features wanted:

- [x] `daruma new <projectname> -l` (Project Initialization for Library with single entry point)
- [x] `daruma new <projectname>`  (Project initialization for compiling whole source)
- [ ] `daruma init [-l]` (Transform a directory for use with daruma) 
- [x] `daruma build [-p -w for libs]` (Compile project depending on project type. Bundled file to `dist/` for lib and compile whole `src/` tree to `dist/` for normal projects. `-p` is for compiling minimized 'production' code and `-w` watches for changes)
- [x] `daruma test` (First class testing)
- [x] `daruma install <packagename(s)>` (Add package(s) from NPM and save to `package.json`)
- [x] `daruma uninstall <packagename(s)>` (Remove dependencies from project and `package.json`)
- [x] `daruma update` update the version of daruma on your machine
- [ ] daruma pre-build scripts

