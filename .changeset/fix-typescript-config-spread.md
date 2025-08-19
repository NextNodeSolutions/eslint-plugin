---
"@nextnode/eslint-plugin": patch
---

Fix TypeScript configuration spread causing "Unexpected key '0'" error

Moves TypeScript configs (importX.flatConfigs.typescript and tseslint.configs.recommended) to be spread in the main array instead of inside a configuration object, preventing ESLint configuration errors.