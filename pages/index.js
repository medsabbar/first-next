import Link from 'next/link';
import { Fragment } from 'react';

const data = {
	new: 'new',
	remove: 'remove',
};

function Home(props) {
	return (
		<Fragment>
			<Link href="/new">{props.data.new}</Link>
			<br />
			<Link href="/remove">{props.data.remove}</Link>
		</Fragment>
	);
}

export function getStaticProps(context) {
	return {
		props: { data: data },
		revalidate: 1,
	};
}

export default Home;
