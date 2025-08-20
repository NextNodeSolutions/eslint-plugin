# @nextnode/eslint-plugin

## 1.2.0

### Minor Changes

- [#15](https://github.com/NextNodeSolutions/eslint-plugin/pull/15) [`4c4ff1c`](https://github.com/NextNodeSolutions/eslint-plugin/commit/4c4ff1cdd467fffd44fde6af731eb4f54b8bae61) Thanks [@walid-mos](https://github.com/walid-mos)! - Add ESLint configuration and fix TypeScript flat config usage

  - Add eslint.config.mjs that uses our own ESLint rules to lint the plugin itself
  - Fix "Unexpected array" error by correctly handling TypeScript flat configs
  - Improve import patterns and fix code style issues throughout the codebase
  - Remove unused TypeScript declaration files

## 1.1.3

### Patch Changes

- [#13](https://github.com/NextNodeSolutions/eslint-plugin/pull/13) [`f727f9c`](https://github.com/NextNodeSolutions/eslint-plugin/commit/f727f9cd86ca21bc4c7ccca5db9d4db567893fec) Thanks [@walid-mos](https://github.com/walid-mos)! - Fix CommonJS file handling in ESLint configuration

  Corrects TypeScript flat config usage to properly handle .cjs files without TypeScript parser conflicts. Removes spread operators that were causing configuration errors and ensures CommonJS files are linted with appropriate JavaScript rules.

## 1.1.2

### Patch Changes

- [#9](https://github.com/NextNodeSolutions/eslint-plugin/pull/9) [`93a910e`](https://github.com/NextNodeSolutions/eslint-plugin/commit/93a910e6a2caec54a4f8f74014119c2807d02dcc) Thanks [@walid-mos](https://github.com/walid-mos)! - Fix TypeScript configuration spread causing "Unexpected key '0'" error

  Moves TypeScript configs (importX.flatConfigs.typescript and tseslint.configs.recommended) to be spread in the main array instead of inside a configuration object, preventing ESLint configuration errors.

## 1.1.1

### Patch Changes

- [#7](https://github.com/NextNodeSolutions/eslint-plugin/pull/7) [`d477e02`](https://github.com/NextNodeSolutions/eslint-plugin/commit/d477e0219cd911681b17cac69a34f359957f8e5d) Thanks [@walid-mos](https://github.com/walid-mos)! - Fix TypeScript parser being applied to CommonJS files

  Excludes .cjs files from TypeScript parser configuration to prevent parsing errors. Only TypeScript files (.ts, .tsx) now use the TypeScript parser with project configuration.

## 1.1.0

### Minor Changes

- [#5](https://github.com/NextNodeSolutions/packages_eslint-plugin/pull/5) [`c40c0f0`](https://github.com/NextNodeSolutions/packages_eslint-plugin/commit/c40c0f024ea8a0d8feba0780b67ec2d7b7a8ef55) Thanks [@walid-mos](https://github.com/walid-mos)! - Added typescript
