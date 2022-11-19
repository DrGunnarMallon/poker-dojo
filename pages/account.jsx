import { getSession } from 'next-auth/react';
import styles from '../styles/account.module.css';
// import { useUserStore } from '../stores/useUserStore';

const Account = ({ session }) => {
  // const user = useUserStore();

  if (session) {
    // user.setNewUser(session.user.name, session.user.email, session.user.image);
    return <div className={styles.accountContainer}>Hello World</div>;
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
        destination: '/',
      },
    };
  }

  return {
    props: { session },
  };
};
