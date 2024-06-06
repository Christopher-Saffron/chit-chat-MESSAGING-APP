"use client";
import React from "react";

import Image from "next/image";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Provider_buttons() {
  const router = useRouter();

  async function handleGithub(e: any) {
    e.preventDefault();

    try {
      const githubProvider = new GithubAuthProvider();
      signInWithPopup(auth, githubProvider).then(async (res: any) => {
        const additionalUserInfo = getAdditionalUserInfo(res);
        const isNewUser = additionalUserInfo?.isNewUser;

        if (isNewUser) {
          /////////////////////// ADD NEW DOCUMENT TO FIREBASE
          await setDoc(doc(db, "users", res.user.uid), {
            name: res.user.displayName,
            email: res.user.email,
            image: res.user.photoURL,
            id: res.user.uid,
            blocked: [],
          });

          await setDoc(doc(db, "userchats", res.user.uid), {
            chats: [],
          });

          toast.success("Account created!");
        }

        /////////////////////// REDIRECT
        router.push("/online");
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function handleGoogle(e: any) {
    e.preventDefault();

    try {
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider).then(async (res: any) => {
        const additionalUserInfo = getAdditionalUserInfo(res);
        const isNewUser = additionalUserInfo?.isNewUser;
        if (isNewUser) {
          ////// is new user, create new document
          await setDoc(doc(db, "users", res.user.uid), {
            name: res.user.displayName,
            email: res.user.email,
            image: res.user.photoURL,
            id: res.user.uid,
            blocked: [],
          });

          await setDoc(doc(db, "userchats", res.user.uid), {
            chats: [],
          });

          toast.success("Account created!");
        }
        // /////////////////////// REDIRECT

        router.push("/online");
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      <button onClick={handleGithub} className="auth-button">
        <div className="hidden md:block relative w-6 h-6">
          <Image src="/Icon_github.svg" alt="" fill />
        </div>
        <span>LOGIN WITH GITHUB</span>
      </button>
      <button onClick={handleGoogle} className="auth-button">
        <div className="hidden md:block relative w-6 h-6">
          <Image src="/Icon_gmail.svg" alt="" fill />
        </div>
        <span>LOGIN WITH GOOGLE</span>
      </button>
    </div>
  );
}

export default Provider_buttons;
