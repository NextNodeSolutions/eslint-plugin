import nextnodeEslint from './src/index.js'

export default [
	...nextnodeEslint,
	{
		ignores: ['node_modules/**/*', '*.config.*', 'dist/**/*'],
	},
]
