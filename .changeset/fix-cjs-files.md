---
"@nextnode/eslint-plugin": patch
---

Fix TypeScript parser being applied to CommonJS files

Excludes .cjs files from TypeScript parser configuration to prevent parsing errors. Only TypeScript files (.ts, .tsx) now use the TypeScript parser with project configuration.