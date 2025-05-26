import reactConfig from './react.js'
import pluginNext from '@next/eslint-plugin-next'

export default [
	...reactConfig,
	{
		ignores: ['.next'],
	},
	{
		plugins: {
			'@next/next': pluginNext,
		},
		rules: {
			...pluginNext.configs.recommended.rules,
			...pluginNext.configs['core-web-vitals'].rules,
		},
	},
]
