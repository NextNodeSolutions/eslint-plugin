---
"@nextnode/eslint-plugin": minor
---

Add ESLint configuration and fix TypeScript flat config usage

- Add eslint.config.mjs that uses our own ESLint rules to lint the plugin itself
- Fix "Unexpected array" error by correctly handling TypeScript flat configs  
- Improve import patterns and fix code style issues throughout the codebase
- Remove unused TypeScript declaration files