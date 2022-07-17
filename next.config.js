/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	env: {
		API: 'https://admin.ooooo.id/api',
		NEXTAUTH_SECRET: '521f898d2b89180f34663a724fc70f24',
		GOOGLE_CLIENT_ID: '736616171846-ma8krke9gbfm16tdpmg7a17j27o14h13.apps.googleusercontent.com',
		GOOGLE_CLIENT_SECRET: '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',
		FACEBOOK_CLIENT_ID: '600449108166719',
		FACEBOOK_CLIENT_SECRET: '9a2af79bd621ad926c6dd325adeeb2db',
	},
};

module.exports = nextConfig;
