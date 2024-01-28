const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const mongoUri =
	'mongodb+srv://test_user:test_user@testcluster.ybs6i9t.mongodb.net/locations?retryWrites=true&w=majority';

const client = new MongoClient(mongoUri);

const router = express.Router();

router.post('/add-location', async (req, res) => {
	try {
		await client.connect();
		const database = client.db('locations');
		const collection = database.collection('user-locations');

		const result = await collection.insertOne({
			address: req.body.address,
			coords: { lat: req.body.lat, lng: req.body.lng },
		});
		res.json({ message: 'Stored location!', locationId: result.insertedId });
		console.log(
			'=============================================',
			'\nNew location was added:',
			'\n_id: ' + result.insertedId.toString(),
			'\naddress: ' + req.body.address,
			'\ncoords: ' + `{ lat: ${req.body.lat}, lng: ${req.body.lng} }`
		);
	} catch (err) {
		console.dir(err);
	} finally {
		//client.close();
	}
});

router.get('/location/:lid', async (req, res) => {
	const locationId = req.params.lid;

	try {
		await client.connect();
		const database = client.db('locations');
		const collection = database.collection('user-locations');

		const location = await collection.findOne({
			_id: new ObjectId(locationId),
		});

		if (!location) {
			return res.status(404).json({ message: 'Location not found!' });
		}
		res.json({ address: location.address, coordinates: location.coords });
	} catch (err) {
		console.dir(err);
	} finally {
		//client.close();
	}
});

module.exports = router;
