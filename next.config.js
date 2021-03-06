module.exports = {
	future: {
		webpack5: true,
	},
	images: {
		domains: ['api.producthunt.com'],
	},
	async rewrites() {
		return [
			{
				source: '/bee.js',
				destination: 'https://cdn.splitbee.io/sb.js',
			},
			{
				source: '/_hive/:slug',
				destination: 'https://hive.splitbee.io/:slug',
			},
		]
	},
}
