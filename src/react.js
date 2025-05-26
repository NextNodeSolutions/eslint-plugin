import baseConfig from './index.js'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
	...baseConfig,
	{
		...pluginReact.configs.flat.recommended,
		languageOptions: {
			...pluginReact.configs.flat.recommended.languageOptions,
			globals: {
				...globals.serviceworker,
			},
		},
	},
	{
		plugins: {
			'react-hooks': pluginReactHooks,
		},
		settings: { react: { version: 'detect' } },
		rules: {
			...pluginReactHooks.configs.recommended.rules,
			// React scope no longer necessary with new JSX transform.
			'react/react-in-jsx-scope': 'off',
		},
	},
	{
		plugins: {
			react: pluginReact,
		},
		languageOptions: {
			globals: {
				React: true,
				JSX: true,
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'react/function-component-definition': [
				'error',
				{
					namedComponents: 'arrow-function',
					unnamedComponents: 'arrow-function',
				},
			],
			'react/self-closing-comp': [
				'error',
				{
					component: true,
					html: true,
				},
			],
		},
	},
]
