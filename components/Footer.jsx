import React from 'react';
import { FaTwitterSquare, FaInstagram, FaYoutubeSquare } from 'react-icons/fa';

import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div>Copyright 2022 - Preflop Dojo</div>
      <div className={styles.socialMedia}>
        <FaInstagram className={styles.instagram} />
        <FaTwitterSquare className={styles.twitter} />
        <FaYoutubeSquare className={styles.youtube} />
      </div>
    </div>
  );
}

export default Footer;
