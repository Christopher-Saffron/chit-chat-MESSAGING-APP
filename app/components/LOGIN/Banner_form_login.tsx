import React, { useState } from "react";
import MainText from "../MainText";
import Image from "next/image";
import GoBackArrow from "../GoBackArrow";
import { STATUSES } from "./Main_Screen";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "@/lib/firebase";

interface BannerLeftProps {
  onClick: (newStatus: STATUSES) => void;
}

function Banner_form_login({ onClick }: BannerLeftProps) {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = Object.fromEntries(new FormData(e.target));
    try {
      await signInWithEmailAndPassword(
        auth,
        email as string,
        password as string
      ).then(() => {
        console.log("LOGGED IN");
      });
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="grow w-[700px] h-[700px] max-h-[700px] max-w-[700px]  relative px-4 py-1 ">
      <GoBackArrow
        style="-left-6"
        handleClick={() => {
          onClick("default");
        }}
      />
      <form onSubmit={handleLogin} className="mt-6">
        <h2 className="main-text">LOGIN</h2>
        <div className="flex flex-col my-8 gap-6">
          <div className="flex flex-col gap-2">
            <label className="label-text">
              E-MAIL / PHONE NUMBER / NICKNAME
            </label>
            <input
              className=" p-3 border border-mainText rounded-sm  focus:outline-main"
              type="text"
              name="email"
              placeholder="For a fast check You can use “user”"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="label-text">PASSWORD</label>
            <input
              className=" p-3 border border-mainText rounded-sm  focus:outline-main"
              type="password"
              name="password"
              placeholder="For a fast check You can use “password”"
            />
          </div>
          <div className="flex  items-center gap-6">
            <div className="w-full h-0 border-mainText border-b" />
            <div className="font-bold">OR</div>
            <div className="w-full h-0 border-mainText border-b" />
          </div>
          <div className="flex justify-between items-center gap-6">
            <button className="auth-button">
              <div className="relative w-6 h-6">
                <Image src="/Icon_github.svg" alt="" fill />
              </div>
              <span>SIGN IN WITH GITHUB</span>
            </button>
            <button className="auth-button">
              <div className="relative w-6 h-6">
                <Image src="/Icon_gmail.svg" alt="" fill />
              </div>
              <span>SIGN IN WITH GOOGLE</span>
            </button>
          </div>
        </div>
        <div
          onClick={() => {
            onClick("register");
          }}
        >
          <MainText style={"font-bold tracking-wide cursor-pointer"}>
            New user? <span className=" underline">Create an account.</span>
          </MainText>
        </div>
        <div className="flex gap-10 my-4 font-bold text-alternativeText">
          <button
            disabled={loading}
            className="action-button bg-main disabled:opacity-80"
            type="submit"
          >
            {loading ? "LOADING" : "LOG IN"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Banner_form_login;
