import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
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
        </section>
      </main>
    </>
  );
}
