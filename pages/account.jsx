import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";

import styles from "../styles/account.module.css";

import { useMongoStore } from "../stores/useMongoStore";
// import clientPromise from "../lib/mongodb";

const Account = ({ session }) => {
  const signedIn = useMongoStore((state) => state.signedIn);
  const signIn = useMongoStore((state) => state.signIn);
  if (!signedIn) {
    signIn();
  }

  if (session) {
    return <div className={styles.accountContainer}>The RFI for {session.user.name} is:</div>;
  }

  return (
    <div className={styles.accountContainer}>
      <p>You are not signed in.</p>
    </div>
  );
};

export default Account;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: { session },
  };
};
