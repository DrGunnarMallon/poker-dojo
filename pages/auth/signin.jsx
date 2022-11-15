import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { FaDiscord, FaTwitter } from "react-icons/fa";

import styles from "../../src/styles/SignIn.module.css";

export default function SignIn({ providers }) {
  return (
    <div className={styles.signInContainer}>
      <h1>Sign In</h1>
      <div className={styles.rightPanel}>
        {providers?.google && (
          <div
            className={styles.loginProvider}
            onClick={() => signIn(providers.google.id, { callbackUrl: "/account" })}
          >
            <div className={styles.loginIcon}>
              <FcGoogle />
            </div>
            <div className={styles.loginText}>Sign in with Google</div>
          </div>
        )}

        {providers?.facebook && (
          <div
            className={styles.loginProvider}
            onClick={() => signIn(providers.facebook.id, { callbackUrl: "/account" })}
          >
            <div className={styles.loginIcon}>
              <GrFacebookOption />
            </div>
            <div className={styles.loginText}>Sign in with Facebook</div>
          </div>
        )}

        {providers?.discord && (
          <div
            className={styles.loginProvider}
            onClick={() => signIn(providers.discord.id, { callbackUrl: "/account" })}
          >
            <div className={styles.loginIcon}>
              <FaDiscord />
            </div>
            <div className={styles.loginText}>Sign in with Discord</div>
          </div>
        )}

        {providers?.twitter && (
          <div
            className={styles.loginProvider}
            onClick={() => signIn(providers.twitter.id, { callbackUrl: "/account" })}
          >
            <div className={styles.loginIcon}>
              <FaTwitter />
            </div>
            <div className={styles.loginText}>Sign in with Twitter</div>
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
