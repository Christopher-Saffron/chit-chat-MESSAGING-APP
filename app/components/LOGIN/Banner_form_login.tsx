"use client";

import React, { useState } from "react";
import GoBackArrow from "../GoBackArrow";
import { STATUSES } from "./Main_Screen";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Provider_buttons from "./Provider_buttons";

interface BannerLeftProps {
  onClick: (newStatus: STATUSES) => void;
}

function Banner_form_login({ onClick }: BannerLeftProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
        router.push("/online");
      });
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="hidden md:block grow w-[700px] h-[700px] max-h-[700px] max-w-[700px]  relative px-4 py-1 ">
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
            <label className="label-text">E-MAIL</label>
            <input
              className=" p-3 border border-mainText rounded-sm  focus:outline-main"
              type="text"
              name="email"
              placeholder="For a fast check You can use “user@user.com”"
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
          <Provider_buttons />
        </div>
        <div
          onClick={() => {
            onClick("register");
          }}
        >
          {/* <MainText style={"font-bold tracking-wide cursor-pointer"}>
            New user? <span className=" underline">Create an account.</span>
          </MainText> */}
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
