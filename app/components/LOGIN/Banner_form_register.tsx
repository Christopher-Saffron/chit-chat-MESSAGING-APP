import React, { FormEvent, useState } from "react";
import MainText from "../MainText";
import Image from "next/image";
import GoBackArrow from "../GoBackArrow";
import { STATUSES } from "./Main_Screen";
import axios from "axios";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "@/lib/upload";

interface BannerLeftProps {
  onClick: (newStatus: STATUSES) => void;
}

function Banner_form_register({ onClick }: BannerLeftProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState({ file: "", url: "" });

  const handleImageUpload = (e: any) => {
    if (e.target.files[0]) {
      setImage({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    const { name, email, password } = Object.fromEntries(
      new FormData(e.target)
    );

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email as string,
        password as string
      );

      const imgUrl = await upload(image.file);

      await setDoc(doc(db, "users", res.user.uid), {
        name,
        email,
        image: imgUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created!");
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
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
      <form className="mt-6" onSubmit={handleRegister}>
        <h2 className="main-text">REGISTER</h2>
        <div className="flex flex-col my-8 gap-6">
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label className="label-text">E-MAIL</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className=" p-3 border border-mainText rounded-sm  focus:outline-main"
                type="email"
                placeholder="Your email"
                name="email"
              />
            </div>
            <div className="flex flex-col gap-2  w-full">
              <label className="label-text">USERNAME</label>
              <input
                onChange={(e) => setName(e.target.value)}
                className=" p-3 border border-mainText rounded-sm  focus:outline-main"
                type="text"
                placeholder="Your username"
                name="name"
              />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label className="label-text">PASSWORD</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className=" p-3 border border-mainText rounded-sm  focus:outline-main"
                type="password"
                placeholder="Your password"
                name="password"
              />
            </div>
            <div className="flex flex-col gap-2 w-full ">
              <label className="label-text">UPLOAD YOUR IMAGE</label>
              <div className=" flex items-center gap-4  ">
                <div className="h-16 w-16 relative">
                  <Image
                    src={image.url || "./avatar.svg"}
                    alt=""
                    fill
                    className="rounded-lg"
                  />
                </div>
                <input
                  className="   rounded-sm  outline-none ring-transparent shadow-none focus:outline-main"
                  type="file"
                  id="file"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          </div>

          <div className="flex  items-center gap-6">
            <div className="w-full h-0 border-mainText border-b" />
            <div className="font-bold">OR</div>
            <div className="w-full h-0 border-mainText border-b" />
          </div>
          <div className="flex justify-between items-center gap-6">
            <button onClick={() => {}} className="auth-button">
              <div className="relative w-6 h-6">
                <Image src="/Icon_github.svg" alt="" fill />
              </div>
              <span>REGISTER WITH GITHUB</span>
            </button>
            <button
              onClick={() => {
                auth.signOut();
              }}
              className="auth-button"
            >
              <span>LOG OUT</span>
            </button>

            <button onClick={() => {}} className="auth-button">
              <div className="relative w-6 h-6">
                <Image src="/Icon_gmail.svg" alt="" fill />
              </div>
              <span>REGISTER WITH GOOGLE</span>
            </button>
          </div>
        </div>
        <div
          onClick={() => {
            onClick("login");
          }}
        >
          <MainText style={"font-bold tracking-wide cursor-pointer"}>
            Already have an account? <span className=" underline">Log in.</span>
          </MainText>
        </div>
        <div className="flex gap-10 my-4 font-bold text-alternativeText">
          <button
            disabled={loading}
            type="submit"
            className="action-button bg-main disabled:opacity-80"
          >
            {loading ? "LOADING" : "REGISTER"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Banner_form_register;
