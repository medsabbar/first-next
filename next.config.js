const withPWA = require('next-pwa');

module.exports = withPWA({
	reactStrictMode: true,
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === 'development',
	},
	images: {
		domains: ['upload.wikimedia.org', 'd1qwqe1acr1rnz.cloudfront.net'],
	},
	env: {
		MONGO_CONNECT:
			'mongodb+srv://Sabbar:WAckZaykYsiBbNGU@cluster0.jh8gq.mongodb.net/meetups?retryWrites=true&w=majority',
	},
});
