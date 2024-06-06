import React from "react";
import MainText from "../MainText";
import Image from "next/image";
import Provider_buttons from "./Provider_buttons";
import { BannerLeftProps } from "./Banner_form_register";

function Banner_mobile({ onClick }: BannerLeftProps) {
  return (
    <div className="md:hidden w-full max-w-[400px] flex flex-col gap-6 ">
      <div className="relative w-full  mx-auto  h-24 cursor-pointer">
        <Image src="/Chit_chat_logo.svg" fill alt="" />
      </div>
      <div className=" text-center text-xl">
        <p>
          Popular <MainText>messaging</MainText> application
        </p>
        <p>For You, to be close with</p>
        <p>your friends and loved ones.</p>
      </div>
      <button
        onClick={() => onClick("login")}
        className="action-button mx-auto text-center  text-alternativeText bg-main disabled:opacity-80"
        type="submit"
      >
        LOGIN WITH EMAIL
      </button>
      <div className="flex  items-center gap-6">
        <div className="w-full h-0 border-mainText border-b" />
        <div className="font-bold">OR</div>
        <div className="w-full h-0 border-mainText border-b" />
      </div>
      <Provider_buttons />
      <button
        onClick={() => onClick("register")}
        className="font-bold text-center cursor-pointer"
      >
        <MainText>New user?</MainText>{" "}
        <MainText style={"underline"}>Create an account</MainText>
      </button>
    </div>
  );
}

export default Banner_mobile;
