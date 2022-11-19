import clientPromise from '../../../lib/mongodb';

/*

Returns all ranges for given user

Request POST data

- email: email of user

*/

export default async function handler(request, response) {
  try {
    const mongoClient = await clientPromise;
    const db = mongoClient.db('preflop-dojo');
    const collection = db.collection('ranges');
    const results = await collection.find({ email: request.body }).toArray();

    response.status(200).json(results);
  } catch (error) {
    console.error(error);
    response.status(500).json(error);
  }
}
