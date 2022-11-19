import Footer from './Footer';
import Header from './Header';

import Head from 'next/head';

import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Head>
        <title>Preflop Dojo</title>
        <meta name="description" content="Practicing your poker preflop ranges" />
        <link rel="icon" href="/chip.png" />
      </Head>
      <Header />
      <div className={styles.mainContainer}>{children}</div>
      <Footer />
    </div>
  );
}
