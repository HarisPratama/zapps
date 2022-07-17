import '../styles/globals.css';
import { store } from '../src/store';

import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={ session }>
			<Provider store={ store }>
				<Component { ...pageProps } />
			</Provider>
		</SessionProvider>
	);
}

export default MyApp;
