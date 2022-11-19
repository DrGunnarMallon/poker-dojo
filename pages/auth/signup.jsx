import { getProviders, signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebookOption } from 'react-icons/gr';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

import styles from '../../styles/SignUp.module.css';

import { useUserStore } from '../../stores/useUserStore';

export default function SignUp({ providers }) {
  const currentPage = useUserStore((state) => state.currentPage);
  console.log('Current page: ', currentPage);

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.leftPanel}>
        <div className={styles.title}>Sign Up</div>
        <p>To store your ranges and practice progress, you need to sign into the Preflop Dojo.</p>
        <p>You can use your existing gmail or social media accounts for this.</p>
        <p>Don't worry, we won't sell your data and you won't get any spam from us.</p>
      </div>
      <div className={styles.rightPanel}>
        {providers?.google && (
          <div
            className={styles.loginProvider}
            onClick={() => signIn(providers.google.id, { callbackUrl: currentPage })}
          >
            <div className={styles.loginIcon}>
              <FcGoogle />
            </div>
            <div className={styles.loginText}>Sign up with Google</div>
          </div>
        )}

        {providers?.facebook && (
          <div className={styles.loginProvider} onClick={() => signIn(providers.facebook.id, { callbackUrl: '/' })}>
            <div className={styles.loginIcon}>
              <GrFacebookOption />
            </div>
            <div className={styles.loginText}>Sign up with Facebook</div>
          </div>
        )}

        {providers?.discord && (
          <div className={styles.loginProvider} onClick={() => signIn(providers.discord.id, { callbackUrl: '/' })}>
            <div className={styles.loginIcon}>
              <FaDiscord />
            </div>
            <div className={styles.loginText}>Sign up with Discord</div>
          </div>
        )}

        {providers?.twitter && (
          <div className={styles.loginProvider} onClick={() => signIn(providers.twitter.id, { callbackUrl: '/' })}>
            <div className={styles.loginIcon}>
              <FaTwitter />
            </div>
            <div className={styles.loginText}>Sign up with Twitter</div>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
