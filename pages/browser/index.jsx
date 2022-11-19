import React from 'react';

import { getSession } from 'next-auth/react';

function index() {
  return <div>Browser</div>;
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
