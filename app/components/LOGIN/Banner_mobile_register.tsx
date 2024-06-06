import React, { FormEvent, useState } from "react";
import Image from "next/image";
import GoBackArrow from "../GoBackArrow";
import { STATUSES } from "./Main_Screen";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "@/lib/upload";
import { useRouter } from "next/navigation";
import { BannerLeftProps } from "./Banner_form_register";
import MainText from "../MainText";

function Banner_mobile_register({ onClick }: BannerLeftProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState({ file: "", url: "" });
  const router = useRouter();

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
      router.push("/online");
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
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
      <form onSubmit={handleRegister}>
        <h2 className="main-text text-6xl mb-4">REGISTER</h2>
        <div className="flex flex-col gap-2">
          <label className="label-text">E-MAIL</label>
          <input
            className=" p-3 border border-mainText rounded-sm  focus:outline-main"
            type="text"
            name="email"
            placeholder="For a fast check You can use “user@user.com”"
          />
        </div>
        <div className="flex flex-col gap-2  w-full">
          <label className="label-text">USERNAME</label>
          <input
            className=" p-3 border border-mainText rounded-sm  focus:outline-main"
            type="text"
            placeholder="Your username"
            name="name"
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
        <div className="flex flex-col gap-2 w-full ">
          <label className="label-text">UPLOAD YOUR IMAGE</label>
          <div className=" flex items-center gap-4  ">
            <div className="h-16 w-16 relative">
              <Image src={"./avatar.svg"} alt="" fill className="rounded-lg" />
            </div>
            <input
              className="   rounded-sm  outline-none ring-transparent shadow-none focus:outline-main"
              type="file"
              id="file"
              // onChange={handleImageUpload}
            />
          </div>
        </div>
        <button
          onClick={() => onClick("login")}
          className="font-bold text-center cursor-pointer my-6"
        >
          <MainText>Already have an account?</MainText>{" "}
          <MainText style={"underline"}>Login</MainText>
        </button>
        <button
          className="action-button mx-auto text-center  text-alternativeText bg-main disabled:opacity-80"
          type="submit"
        >
          CREATE AN ACCOUNT
        </button>
      </form>
    </div>
  );
}

export default Banner_mobile_register;
