import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.google.client_id,
			clientSecret: process.env.google.client_secret,
		}),
		FacebookProvider({
			clientId: process.env.facebook.client_id,
			clientSecret: process.env.facebook.client_secret,
		}),
		// ...add more providers here
	],
});