---
"@nextnode/eslint-plugin": patch
---

Fix CommonJS file handling in ESLint configuration

Corrects TypeScript flat config usage to properly handle .cjs files without TypeScript parser conflicts. Removes spread operators that were causing configuration errors and ensures CommonJS files are linted with appropriate JavaScript rules.