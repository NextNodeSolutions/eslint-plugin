import 'eslint-plugin-only-warn'

import js from '@eslint/js'
import importX from 'eslint-plugin-import-x'
import tsParser from '@typescript-eslint/parser'
import tseslint from 'typescript-eslint'
import globals from 'globals'

const tsConfigPath = process.cwd()

/** @type {import("eslint").Linter.Config[]} */
export default [
	js.configs.recommended,
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	...tseslint.configs.recommended,
	{
		ignores: [
			// Ignore dotfiles
			'*.config.*',
			'node_modules/',
			'eslint.config.mjs',
		],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: true,
				tsconfigRootDir: tsConfigPath,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
				...globals.browser,
			},
		},
		settings: {
			'import-x/resolver': {
				typescript: {
					project: tsConfigPath,
				},
			},
			node: {
				extensions: ['.mjs', '.cjs', '.js', '.jsx', '.ts', '.tsx'],
			},
		},
		rules: {
			// JS
			'no-unused-vars': 'off',
			'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
			'no-unused-vars': 0,
			'arrow-body-style': ['error', 'as-needed'],
			'prefer-arrow-callback': 'error',
			'consistent-return': 'error',

			// TS
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_', ignoreRestSiblings: true },
			],
			'@typescript-eslint/no-var-requires': 0,
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/explicit-function-return-type': 'error',

			// Import
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
]
