import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Preflop Dojo</title>
        <meta name="description" content="Practicing your poker preflop ranges" />
        <link rel="icon" href="/chip.png" />
      </Head>
      <main>
        <section className={styles.heroBanner}>
          <div className={styles.heroTitle}>If this geezer can do it</div>
          <div className={styles.heroSub}>You sure as shit can too.</div>
          <div className={styles.heroHook}>
            <ul>
              <li>Unlimited Ranges</li>
              <li>Drill any preflop position</li>
              <li>Large library of ranges</li>
            </ul>
          </div>
        </section>
        {/* <section>
          <p>
            Learn those pesky preflop ranges - don't think about preflop and focus on post flop strategy all the way.
          </p>
          <p>Train all pre-flop positions indivdually or in game settions.</p>
          <p>You can even train individual or custom ranges.</p>
          <p>GTO is great, but we all don't play GTO</p>
          <p>You can use and tweak pre-defined ranges or input your own</p>
        </section> */}
      </main>
    </>
  );
}
