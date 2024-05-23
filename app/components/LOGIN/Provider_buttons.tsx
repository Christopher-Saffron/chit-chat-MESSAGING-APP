"use client";
import React from "react";

import Image from "next/image";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

function Provider_buttons() {
  function handleGithub(e: any) {
    e.preventDefault();
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider).then((res: any) => {
      console.log(res.user);
      /////////////////////// ADD NEW DOCUMENT TO FIREBASE

      /////////////////////// REDIRECT
    });
  }

  function handleGoogle(e: any) {
    e.preventDefault();
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((res: any) => {
      console.log(res.user);
      /////////////////////// ADD NEW DOCUMENT TO FIREBASE

      /////////////////////// REDIRECT
    });
  }

  return (
    <div className="flex justify-between items-center gap-6">
      <button onClick={handleGithub} className="auth-button">
        <div className="relative w-6 h-6">
          <Image src="/Icon_github.svg" alt="" fill />
        </div>
        <span>LOGIN WITH GITHUB</span>
      </button>
      <button onClick={handleGoogle} className="auth-button">
        <div className="relative w-6 h-6">
          <Image src="/Icon_gmail.svg" alt="" fill />
        </div>
        <span>LOGIN WITH GOOGLE</span>
      </button>
    </div>
  );
}

export default Provider_buttons;
