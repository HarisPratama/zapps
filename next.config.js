/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	env: {
		NEXTAUTH_URL: 'http://localhost:3000',
		NEXTAUTH_SECRET: '521f898d2b89180f34663a724fc70f24',
		google: {
			client_id: '736616171846-ma8krke9gbfm16tdpmg7a17j27o14h13.apps.googleusercontent.com',
			client_secret: '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'
		},
		facebook: {
			client_id: '600449108166719',
			client_secret: '9a2af79bd621ad926c6dd325adeeb2db'
		},
	},
};

module.exports = nextConfig;
