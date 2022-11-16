import Head from "next/head";
import { useEffect, useState } from "react";
import clientPromise from "../lib/mongodb";

import { useMongoStore } from "../stores/useMongoStore";

export default function Home({ isConnected }) {
  const [entries, setEntries] = useState([]);
  const signedIn = useMongoStore((state) => state.signedIn);
  const signIn = useMongoStore((state) => state.signIn);

  useEffect(() => {
    if (!signedIn) {
      (async () => {
        const results = await fetch("/api/list?email:gunnar@email.com");
        const resultsJson = await results.json();
        setEntries(resultsJson);
        signIn();
      })();
    }
  }, [signedIn, signIn]);

  return (
    <>
      <Head>
        <title>Preflop Dojo</title>
        <meta name="description" content="Practicing your poker preflop ranges" />
        <link rel="icon" href="/chip.png" />
      </Head>
      <main>
        <section>
          <p>
            Learn those pesky preflop ranges - don't think about preflop and focus on post flop strategy all the way.
          </p>
          <p>Train all pre-flop positions indivdually or in game settions.</p>
          <p>You can even train individual or custom ranges.</p>
          <p>GTO is great, but we all don't play GTO</p>
          <p>You can use and tweak pre-defined ranges or input your own</p>
        </section>
        <section>
          Ranges:
          {entries.map((entry) => (
            <div key={Math.random()}>
              {entry._id} - {entry.email} - {entry.name} - {entry.ranges.rfi}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    await clientPromise;

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
