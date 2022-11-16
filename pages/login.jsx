import React from "react";

import Router from "next/router";

import { useSession, signIn, signOut } from "next-auth/react";

function Login() {
  const { status } = useSession({
    require: true,
    onUnauthenticated() {
      Router.push("/");
    },
  });

  if (status === "authenticated") {
    Router.push("/account");
  }

  return true;
}

export default Login;
