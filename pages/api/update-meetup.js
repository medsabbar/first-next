import { MongoClient, ObjectId } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'PUT') {
		const data = req.body;

		const client = await MongoClient.connect(process.env.MONGO_CONNECT);
		const db = client.db();

		const meetupsCollection = db.collection('meetups');

		await meetupsCollection.updateOne(
			{ _id: ObjectId(data.id) },
			{
				$set: {
					title: data.title,
					image: data.image,
					description: data.description,
					address: data.address,
				},
			}
		);

		client.close();

		res.status(201).json({
			message: 'Meetup Updated!',
		});
	}
}

export default handler;
