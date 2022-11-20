import React from 'react';

import { getSession } from 'next-auth/react';

import styles from '../../styles/Trainer.module.css';
import TrainerControls from '../../components/TrainerControls';

function index() {
  return (
    <div className={styles.trainerContainer}>
      <TrainerControls />
      <h1>Range Trainer</h1>
    </div>
  );
}

export default index;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signup',
      },
    };
  }

  return {
    props: { session },
  };
};
