import React, { useState } from "react";
import GoBackArrow from "../GoBackArrow";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { BannerLeftProps } from "./Banner_form_register";
import MainText from "../MainText";

function Banner_mobile_login({ onClick }: BannerLeftProps) {
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
    <div className="md:hidden w-full flex flex-col gap-2 ">
      <GoBackArrow
        style="-left-6"
        handleClick={() => {
          onClick("default");
        }}
      />
      <form onSubmit={handleLogin}>
        <h2 className="main-text text-6xl mb-4">LOGIN</h2>
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
        <button
          onClick={() => onClick("register")}
          className="font-bold text-center cursor-pointer my-6"
        >
          <MainText>New user?</MainText>{" "}
          <MainText style={"underline"}>Create an account</MainText>
        </button>
        <button
          className="action-button mx-auto text-center  text-alternativeText bg-main disabled:opacity-80"
          type="submit"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Banner_mobile_login;
