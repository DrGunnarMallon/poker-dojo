import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";

import styles from "../src/styles/account.module.css";

const account = ({ session }) => {
  //   const { data: session, status } = useSession();

  if (session) {
    return (
      <div className={styles.accountContainer}>
        {/* <h1>Account</h1> */}
        {/* <p>Welcome, {session.user.name}</p> */}
        {/* <img
          src={session.user.image}
          height='100px'
          width='100px'
          style={{ borderRadius: "100%" }}
        />
        <br />
        <button onClick={() => signOut()}>Sign out</button> */}
      </div>
    );
  }

  return (
    <div className={styles.accountContainer}>
      <p>You are not signed in.</p>
    </div>
  );
};

export default account;

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
