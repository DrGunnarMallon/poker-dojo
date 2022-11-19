import React from 'react';
import { getSession } from 'next-auth/react';

import styles from '../../styles/Pricing.module.css';

function index() {
  return (
    <div className={styles.pricingContainer}>
      <p>I'm doing my best to keep this site add-free.</p>
      <p>But unfortunately, hosting is not free.</p>
      <p>So, if you enjoy the site and got anything from it,</p>
      <p>please be nice, and buy me a coffee ;)</p>
      <p>&nbsp;</p>
      <a href="https://www.buymeacoffee.com/gunnarmallJ">
        <img src="https://img.buymeacoffee.com/button-api/?text=Be nice - buy me a coffee&emoji=&slug=gunnarmallJ&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
      </a>
    </div>
  );
}
export default index;
export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return { redirect: { destination: '/auth/signup' } };
  }
  return { props: { session } };
};
