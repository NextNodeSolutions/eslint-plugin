import 'eslint-plugin-only-warn'

import js from '@eslint/js'
import importX from 'eslint-plugin-import-x'
import tsParser from '@typescript-eslint/parser'
import tseslint from 'typescript-eslint'
import globals from 'globals'

const tsConfigPath = process.cwd()

/** @type {import("eslint").Linter.Config[]} */
export default [
	// Base configs for all files
	js.configs.recommended,
	importX.flatConfigs.recommended,

	{
		ignores: [
			// Ignore dotfiles
			'*.config.*',
			'node_modules/',
			'eslint.config.mjs',
		],
	},

	// Common configuration for all JS/TS files
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
				...globals.browser,
			},
		},
		settings: {
			node: {
				extensions: ['.mjs', '.cjs', '.js', '.jsx', '.ts', '.tsx'],
			},
		},
		rules: {
			// Common JS rules
			'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
			'arrow-body-style': ['error', 'as-needed'],
			'prefer-arrow-callback': 'error',
			'consistent-return': 'error',

			// Import rules
			'import-x/order': [
				'error',
				{
					groups: [
						['builtin', 'external'],
						'internal',
						['sibling', 'parent', 'index'],
						'object',
						'type',
					],
					pathGroups: [
						{
							pattern: '@/**',
							group: 'internal',
							position: 'after',
						},
						{
							pattern: 'next/**',
							group: 'builtin',
							position: 'before',
						},
						{
							pattern: 'react',
							group: 'builtin',
							position: 'before',
						},
					],
					pathGroupsExcludedImportTypes: ['type'],
					'newlines-between': 'always',
				},
			],
			'import-x/extensions': 'off',
			'import-x/no-unresolved': 'off',
			'import-x/no-extraneous-dependencies': 'off',
			'import-x/prefer-default-export': 'off',
		},
	},

	// TypeScript configs and rules
	...importX.flatConfigs.typescript,
	...tseslint.configs.recommended,

	// TypeScript-specific configuration
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: true,
				tsconfigRootDir: tsConfigPath,
			},
		},
		settings: {
			'import-x/resolver': {
				typescript: {
					project: tsConfigPath,
				},
			},
		},
		rules: {
			// Override JS rules for TS
			'no-unused-vars': 'off',

			// TypeScript-specific rules
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_', ignoreRestSiblings: true },
			],
			'@typescript-eslint/no-var-requires': 0,
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/explicit-function-return-type': 'error',
		},
	},

	// CommonJS-specific configuration
	{
		files: ['**/*.cjs'],
		languageOptions: {
			sourceType: 'commonjs',
		},
	},
]
