import clientPromise from "../lib/mongodb";

export default function Home({ properties }) {
  console.log(properties);

  return (
    <div>
      {properties.map((property) => (
        <div key={property.name}>
          {property.name} - [{property.cuisine}] - {property.borough}
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const mongoClient = await clientPromise;

  const db = await mongoClient.db("sample_restaurants");
  const data = await db.collection("restaurants").find({}).limit(20).toArray();
  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { properties },
  };
}
