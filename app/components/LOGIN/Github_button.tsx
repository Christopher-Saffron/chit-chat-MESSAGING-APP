"use client";
import { auth } from "@/lib/firebase";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import React from "react";

function Github_button() {
  function handleGithub(e: any) {
    e.preventDefault();
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider).then((res) => {
      console.log(res);
    });
  }
  return (
    <button onClick={handleGithub} className="auth-button">
      <div className="relative w-6 h-6">
        <Image src="/Icon_github.svg" alt="" fill />
      </div>
      <span>REGISTER WITH GITHUB</span>
    </button>
  );
}

export default Github_button;
