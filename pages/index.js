import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>React Mettup App</title>
			</Head>
			<MeetupList meetups={props.meetups} />
		</Fragment>
	);
}

export async function getStaticProps() {
	const client = await MongoClient.connect(process.env.MONGO_CONNECT);
	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find().toArray();

	client.close();
	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	};
}

export default HomePage;
