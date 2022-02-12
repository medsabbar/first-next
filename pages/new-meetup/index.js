import NewMettupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Fragment } from 'react';

function NewMeetupPage(props) {
	const router = useRouter();
	async function addMeetupHandler(entredData) {
		props.setLoading(true);
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(entredData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		console.log(data);

		await router.replace('/');

		props.setLoading(false);
	}
	return (
		<Fragment>
			<Head>
				<title>Add Meetup</title>
			</Head>
			<NewMettupForm onAddMeetup={addMeetupHandler} />
		</Fragment>
	);
}

export default NewMeetupPage;
