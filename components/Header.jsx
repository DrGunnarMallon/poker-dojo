import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Header.module.css';

function Header() {
  const { data: session, status } = useSession();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <Link href="/">
          <Image src="/chip.png" alt="" height="50" width="50" />
          <Image src="/logo.png" alt="" height="64" width="210" />
        </Link>
      </div>
      <div className={styles.headerMenu}>
        <Link href="/editor">Range Editor</Link>
        <Link href="/browser">Range Browser</Link>
        <Link href="/trainer">Range Trainer</Link>
        <Link href="/pricing">Pricing</Link>
      </div>
      <div className={styles.headerLogin}>
        {session && session.user.image && (
          <>
            <Image
              src={session.user.image}
              alt=""
              width="35"
              height="35"
              style={{ borderRadius: '5px' }}
              onClick={() => signOut()}
            />
            <Link href="#" onClick={() => signOut()}>
              Sign out
            </Link>
          </>
        )}
        {!session && (
          <div onClick={() => signIn()} className={styles.loginButton}>
            Sign In
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
