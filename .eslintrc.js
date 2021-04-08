module.exports = {
	parser: 'babel-eslint',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier',
		'plugin:import/errors',
		'plugin:react-hooks/recommended',
	],
	plugins: ['prettier'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'comma-dangle': 'off',
		'no-tabs': 'off',
		indent: 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: false,
				trailingComma: 'all',
				useTabs: true,
			},
			{
				usePrettierrc: false,
			},
		],
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': [
			'error',
			{
				ignore: ['children', 'className'],
			},
		],
		'no-constant-condition': 'off',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal'],
				'newlines-between': 'always',
			},
		],
		'import/no-internal-modules': [
			'error',
			{
				allow: [
					'next/*',
					'dayjs/**',
					'crypto-js/*',
					'firebase/*',
					'react-firebase-hooks/*',
					'tailwindcss/*',
					'react-pdf/**',

					'**/**.css',

					// internal
					'**/components/**',
					'**/models/**',
					'**/hooks/**',
					'**/utils/**',
				],
			},
		],
	},
	env: {
		node: true,
		browser: true,
		es6: true,
	},
	globals: {
		splitbee: true,
	},
}
