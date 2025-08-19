# @nextnode/eslint-plugin

## 1.1.1

### Patch Changes

- [#7](https://github.com/NextNodeSolutions/eslint-plugin/pull/7) [`d477e02`](https://github.com/NextNodeSolutions/eslint-plugin/commit/d477e0219cd911681b17cac69a34f359957f8e5d) Thanks [@walid-mos](https://github.com/walid-mos)! - Fix TypeScript parser being applied to CommonJS files

  Excludes .cjs files from TypeScript parser configuration to prevent parsing errors. Only TypeScript files (.ts, .tsx) now use the TypeScript parser with project configuration.

## 1.1.0

### Minor Changes

- [#5](https://github.com/NextNodeSolutions/packages_eslint-plugin/pull/5) [`c40c0f0`](https://github.com/NextNodeSolutions/packages_eslint-plugin/commit/c40c0f024ea8a0d8feba0780b67ec2d7b7a8ef55) Thanks [@walid-mos](https://github.com/walid-mos)! - Added typescript
