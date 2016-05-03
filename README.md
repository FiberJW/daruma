# Daruma

---

##  Build tool inspired by Rust's Cargo package manager

Install development builds: `npm install -g git://github.com/datwheat/daruma.git`

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
