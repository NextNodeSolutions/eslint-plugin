# @nextnode/eslint-plugin

A comprehensive ESLint configuration package for TypeScript and React projects, optimized for Next.js applications.

## Features

- 🔧 TypeScript support with strict type checking
- ⚛️ React and React Hooks rules
- 🚀 Next.js specific rules and optimizations
- 📦 Import sorting and organization with path groups
- 🎯 Modern JavaScript features support
- 🌐 Node.js and Browser globals
- ⚠️ Only warnings mode (no errors that break builds)

## Installation

```bash
pnpm add -D @nextnode/eslint-plugin eslint@^9.22.0
```

> **Note**: This package requires ESLint v9.22.0 or higher and uses the new flat config format.

## Quick Start

### Base Configuration (TypeScript)

For a basic TypeScript setup:

```javascript
// eslint.config.js
import nextnodeEslint from '@nextnode/eslint-plugin/base'

export default nextnodeEslint
```

### React Configuration

For React projects:

```javascript
// eslint.config.js
import nextnodeEslint from '@nextnode/eslint-plugin/react'

export default nextnodeEslint
```

### Next.js Configuration

For Next.js projects:

```javascript
// eslint.config.js
import nextnodeEslint from '@nextnode/eslint-plugin/next'

export default nextnodeEslint
```

## Configuration Details

### Base Configuration Features

- **TypeScript Parser**: Uses `@typescript-eslint/parser` with project-aware type checking
- **Import Management**: Automatic import sorting with custom path groups for React, Next.js, and internal modules
- **Modern JavaScript**: Support for latest ECMAScript features
- **Globals**: Includes both Node.js and browser globals
- **File Extensions**: Supports `.mjs`, `.cjs`, `.js`, `.jsx`, `.ts`, `.tsx`

### Import Sorting Rules

The configuration includes intelligent import sorting with the following groups:

1. Built-in and external packages (React, Next.js prioritized)
2. Internal modules
3. Relative imports (sibling, parent, index)
4. Object imports
5. Type imports

Example of sorted imports:
```typescript
import React from 'react'
import { NextPage } from 'next'
import { Button } from '@mui/material'

import { utils } from '@/lib/utils'

import { Header } from '../components/Header'
import { Footer } from './Footer'

import type { User } from '@/types/user'
```

## Advanced Usage

### Extending Configuration

You can extend any configuration and override specific rules:

```javascript
// eslint.config.js
import nextnodeEslint from '@nextnode/eslint-plugin/base'

export default [
  ...nextnodeEslint,
  {
    rules: {
      // Override specific rules
      '@typescript-eslint/explicit-function-return-type': 'off',
      'import-x/order': ['error', {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['sibling', 'parent', 'index'],
          'object',
          'type'
        ],
        'newlines-between': 'always'
      }]
    }
  }
]
```

### Custom Ignores

Add custom ignore patterns:

```javascript
// eslint.config.js
import nextnodeEslint from '@nextnode/eslint-plugin/base'

export default [
  ...nextnodeEslint,
  {
    ignores: [
      'dist/',
      'build/',
      '*.generated.ts'
    ]
  }
]
```

## Dependencies

This package includes and configures the following ESLint plugins:

### Core
- `eslint` - The core ESLint linter
- `@eslint/js` - ESLint's recommended JavaScript rules

### TypeScript Support
- `typescript` - TypeScript compiler
- `@typescript-eslint/parser` - TypeScript parser for ESLint
- `typescript-eslint` - TypeScript-specific ESLint rules

### React & Next.js
- `@next/eslint-plugin-next` - Next.js specific rules
- `eslint-plugin-react` - React specific rules
- `eslint-plugin-react-hooks` - React Hooks rules

### Import Management
- `eslint-plugin-import-x` - Import/export syntax rules
- `eslint-import-resolver-typescript` - TypeScript import resolution

### Utilities
- `eslint-plugin-only-warn` - Converts all errors to warnings
- `globals` - Global variables definitions

## Requirements

- **Node.js**: >= 20.0.0
- **TypeScript**: >= 5.8.2
- **ESLint**: >= 9.22.0

## Troubleshooting

### Common Issues

1. **"Cannot find module" errors**: Ensure your `tsconfig.json` is properly configured and in the project root.

2. **Import resolution issues**: Make sure your TypeScript paths are correctly set up in `tsconfig.json`.

3. **Performance issues**: For large projects, consider using `project: ['./tsconfig.json']` instead of `project: true` in your TypeScript parser options.

## Changesets & Version Management

This project uses [Changesets](https://github.com/changesets/changesets) for automated version management and publishing.

### Quick Changeset Guide

When making changes that should trigger a version bump:

```bash
pnpm changeset
```

This will prompt you to:
1. Select which packages to bump (`@nextnode/eslint-plugin`)
2. Choose the change type:
   - **patch** (1.0.0 → 1.0.1): Bug fixes, documentation updates
   - **minor** (1.0.0 → 1.1.0): New features, new rules
   - **major** (1.0.0 → 2.0.0): Breaking changes
3. Provide a summary of your changes

### Automated Workflow

1. **PR Creation**: Changeset-check ensures a changeset is present
2. **Merge to Main**: Creates a "Version Packages" PR automatically
3. **Version PR Merge**: Publishes the new version to npm

### Manual Commands

```bash
# Create a changeset
pnpm changeset

# Apply changesets and update versions (automated)
pnpm changeset:version

# Publish to npm (automated)
pnpm changeset:publish
```

For detailed information, see our [Changesets Documentation](.changeset/CHANGESETS.md) and the official [Changesets Documentation](https://github.com/changesets/changesets).

## Contributing

When contributing to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm changeset` to create a changeset describing your changes
5. Commit the changeset file along with your changes
6. Create a Pull Request

The changeset workflow will automatically handle versioning and publishing once your PR is merged.

## License

ISC © Walid M
