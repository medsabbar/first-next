import { MongoClient, ObjectId } from 'mongodb';
import EditMeetup from '../../components/meetups/EditMeetup';
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function EditPage({ setLoading, meetupData }) {
	const router = useRouter();
	async function hanleUpdateMeetup(entredData) {
		setLoading(true);
		await fetch('/api/update-meetup', {
			method: 'PUT',
			body: JSON.stringify(entredData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		await router.replace('/');

		setLoading(false);
	}
	return (
		<Fragment>
			<Head>
				<title>Edtit Meetup</title>
			</Head>
			<EditMeetup meetupData={meetupData} onUpdateMeetup={hanleUpdateMeetup} />
		</Fragment>
	);
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	const client = await MongoClient.connect(process.env.MONGO_CONNECT);
	const db = client.db();

	const meetupsCollection = db.collection('meetups');
	const selectedMeetup = await meetupsCollection.findOne({
		_id: ObjectId(meetupId),
	});

	client.close();
	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				address: selectedMeetup.address,
				image: selectedMeetup.image,
				description: selectedMeetup.description,
			},
		},
	};
}

export async function getStaticPaths() {
	const client = await MongoClient.connect(process.env.MONGO_CONNECT);
	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
	return {
		fallback: 'blocking',
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
}
