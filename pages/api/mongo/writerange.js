import clientPromise from '../../../lib/mongodb';

/*

Writes a range to the database

Request POST data:

- email: email of user
- path: path to range
- range: range to be stored

*/

export default async function handler(request, response) {
  const range = request.body.range;
  const email = request.body.email;
  const path = request.body.path;

  const filter = { email, path };
  const options = { upsert: true };

  const updateDoc = {
    $set: {
      range,
      email,
      path,
    },
  };

  try {
    const mongoClient = await clientPromise;
    const db = mongoClient.db('preflop-dojo');
    const collection = db.collection('ranges');
    const results = await collection.updateOne(filter, updateDoc, options);

    response.status(200).json(results);
  } catch (error) {
    console.error(error);
    response.status(500).json(error);
  }
}
