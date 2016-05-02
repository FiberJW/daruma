# Daruma

---

##  Build tool inspired by Rust's Cargo package manager

# Roadmap:

## Features wanted:

- [ ] `daruma new <projectname> --lib` (Project Initialization for Library with single entry point)
- [ ] `daruma new <projectname>`  (Project initialization for compiling whole source)
- [ ] `daruma build <-p>` (Compile project depending on project type. Bundled file to `dist/` for lib and compile whole `src/` tree to `dist/` for normal projects. `-p` is for compiling minimized 'production' code)
- [ ] `daruma test` (Run tests within `tests/` directory)
- [ ] `daruma add <packagename>` (Add package from NPM)
- [ ] `daruma lint` (Lints your Files based on a eslint standard)
- [ ] `.darumarc` (Config file for daruma to read)
