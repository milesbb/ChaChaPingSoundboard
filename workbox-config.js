module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,mp3,webp,js,css,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};