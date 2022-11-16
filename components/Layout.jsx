import Footer from "./Footer";
import Header from "./Header";

import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={styles.mainContainer}>{children}</div>
      <Footer />
    </div>
  );
}
