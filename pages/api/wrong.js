import { MongoClient } from "mongodb";
import { ResponseCookies } from "next/dist/server/web/spec-extension/cookies";

const uri = process.env.MONGODB_URI;
const options = {};

if (!process.env.MONGODB_URI) {
  throw new Error("noob");
}

export default async function handler(request, response) {
  try {
    const mongoClient = await new MongoClient(uri, options).connect();
    console.log("Connected");
    const db = mongoClient.db("sample_restaurants");
    const collection = db.collection("restaurants");
    const results = await collection
      .find({})
      .project({
        grades: 0,
        borough: 0,
        restaurant_id: 0,
      })
      .limit(4)
      .toArray();

    response.status(200).json(results);
  } catch (e) {
    console.log(e);
    response.status(500).json(e);
  }
}
