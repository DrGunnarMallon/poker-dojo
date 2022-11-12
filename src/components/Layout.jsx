import React from "react";

import Header from "./Header";

import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
