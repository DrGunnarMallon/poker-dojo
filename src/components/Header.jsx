import React from "react";

import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src="logo.png" />
      </div>
      <div className={styles.menu}>
        <div>Range Editor</div>
        <div>Range Viewer</div>
        <div>Trainer</div>
        <div>Help</div>
      </div>
      <div className={styles.login}>Login</div>
    </header>
  );
}

export default Header;
