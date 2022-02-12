import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);
	return (
		<Layout loading={loading} setLoading={setLoading}>
			<Component {...pageProps} loading={loading} setLoading={setLoading} />
		</Layout>
	);
}

export default MyApp;
