import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.homeContainer}>
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
        </section> */}
      <section className={styles.homeContent}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Unlimited Ranges</div>
            <div className={styles.cardContent}>
              Learn those pesky preflop ranges - don&#39;t think about preflop and focus on post flop strategy all the
              way.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Any position</div>
            <div className={styles.cardContent}>Train all pre-flop positions indivdually or in game settions.</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Library of ranges</div>
            <div className={styles.cardContent}>You can even train individual or custom ranges.</div>
          </div>
        </div>
        <div className={styles.banner}>
          <p>GTO is great, but we all don't play GTO</p>
          <p>You can use and tweak pre-defined ranges or input your own</p>
        </div>
      </section>
    </main>
  );
}
