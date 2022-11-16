import clientPromise from "../../lib/mongodb";

export default async function handler(request, response) {
  console.log("data being fetched");
  try {
    const mongoClient = await clientPromise;
    const db = mongoClient.db("preflop-dojo");
    const collection = db.collection("ranges");
    const results = await collection.find({ email: "gunnar@email.com" }).toArray();

    response.status(200).json(results);
  } catch (e) {
    console.log(e);
    response.status(500).json(e);
  }
}
