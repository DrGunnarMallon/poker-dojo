import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";

function login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>
          Welcome, {session.user.name} [{session.user.email}]
        </p>
        <img src={session.user.image} />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }
}

export default login;
