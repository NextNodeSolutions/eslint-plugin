import pluginNext, { configs as nextConfigs } from '@next/eslint-plugin-next'

import reactConfig from './react.js'

/** @type {import("eslint").Linter.Config[]} */
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
			...nextConfigs.recommended.rules,
			...nextConfigs['core-web-vitals'].rules,
		},
	},
]
