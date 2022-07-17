import Head from 'next/head';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import { setUser } from '../src/store/auth/action';

export default function Home() {
	const dispatch = useDispatch();

	const router = useRouter();

	const { data: session } = useSession();
	const { data } = useSession();

	const authSelector = useSelector(({ auth }) => auth);
	const { user } = authSelector;

	useEffect(() => {
		const token = localStorage.getItem('user');
		console.log(token, '<<< token');
		if (!token) router.replace('/auth');
	}, []);

	useEffect(() => {
		if (data?.user) {
			dispatch(setUser(data?.user));
		}
		const user = localStorage.getItem('user');
		if (user) {
			dispatch(setUser(JSON.parse(user)));
		}
	}, [data]);

	if (user) {
		return (
			<div className={ styles.container }>
				<Head>
					<title>Zapps</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={ styles.main }>
					{ user?.image && <img src={ user?.image } height='100px' className='rounded-full' /> }
					{ user?.photo && <img src={ user?.photo } height='100px' className='rounded-full' /> }
					<div className='h-8'></div>
					<h1 className={ styles.title }>
						Welcome { user?.name ?? user?.firstname }
					</h1>

					<p className={ `cursor-pointer ${ styles.description }` }
						onClick={ () => {
							signOut();
							localStorage.clear();
						} }
					>
						Logout
					</p>

				</main>

				<footer className={ styles.footer }>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Powered by Zapps
					</a>
				</footer>
			</div>
		);
	} return null;
}
