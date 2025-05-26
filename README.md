# pack-nextnode-eslint

A comprehensive ESLint configuration package for TypeScript and React projects, optimized for Next.js applications.

## Features

- TypeScript support with strict type checking
- React and React Hooks rules
- Next.js specific rules
- Import sorting and organization
- Modern JavaScript features support
- Node.js and Browser globals


## Configuration Details

The configuration includes:

- TypeScript parser and rules
- Import sorting and organization
- React and React Hooks rules
- Next.js specific optimizations
- Modern JavaScript features
- Browser and Node.js globals


## Installation

```bash
pnpm i -D @nextnode/eslint-plugin eslint@^9.22.0
```

## Dependencies

### Core
- `eslint`
- `@eslint/js`

### TypeScript Support
- `typescript`
- `@typescript-eslint/parser`
- `typescript-eslint`

### React & Next.js
- `@next/eslint-plugin-next`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

### Import Management
- `eslint-plugin-import-x`
- `eslint-import-resolver-typescript`

### Utilities
- `eslint-plugin-only-warn`
- `globals`

## Usage

### Base Configuration

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

### Extending and Overriding Rules

You can extend the base configuration and override specific rules:

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

## Requirements

- Node.js >= 20.0.0
- TypeScript >= 5.8.2
- ESLint >= 9.22.0

## Contributing

This project uses [Changesets](https://github.com/changesets/changesets) for version management. When contributing:

1. Make your changes
2. Run `pnpm changeset` to create a changeset describing your changes
3. Commit the changeset file along with your changes
4. Create a Pull Request

The changeset workflow will automatically:
- Ensure all PRs include a changeset
- Create version bump PRs when changes are merged
- Publish new versions to npm

For more details, see [.changeset/README.md](.changeset/README.md).

## License

ISC
