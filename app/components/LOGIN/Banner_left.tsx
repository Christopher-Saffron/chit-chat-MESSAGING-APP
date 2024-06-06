"use client";

import React from "react";
import MainText from "../MainText";
import Image from "next/image";
import { STATUSES } from "./Main_Screen";

interface BannerLeftProps {
  onClick: (newStatus: STATUSES) => void;
}

function Banner_left({ onClick }: BannerLeftProps) {
  return (
    <div className=" hidden md:block w-[700px] h-[700px] max-h-[700px] max-w-[700px]">
      <p className=" font-extrabold ml-6 mb-6">
        CHIT<MainText>CHAT</MainText>
      </p>
      <div className="flex gap-4 flex-col">
        <div className="border-l border-[#252525] px-6">
          <h2 className="main-text">POPULAR</h2>
          <h2 className="main-text text-main">MESSAGING</h2>
          <h2 className="main-text">APPLICATION</h2>
        </div>
        <div className="border-l border-main px-6 pt-6">
          <h3 className="main-text-2">For You, to be close with</h3>
          <div className="relative">
            <div className="absolute h-8 w-8 -top-[10px] -right-[20px]">
              <Image src="/heart emoji.svg" alt="" fill />
            </div>

            <h3 className="main-text-2">
              <MainText style="font-bold">your friends</MainText> and{" "}
              <MainText style="font-bold">loved ones</MainText>.
            </h3>
          </div>
        </div>
        <div className="flex font-bold text-lg px-6 gap-9 items-center">
          <div>PREMIUM SERVICE</div>
          <div className="h-4 border-l-2 border-[#252525] " />
          <div>GET NEWEST</div>
          <div className="h-4 border-l-2 border-[#252525] " />
          <div>DEVELOPERS</div>
        </div>
      </div>
      <div className="flex mt-4 gap-10 py-8 font-bold text-alternativeText">
        <button
          onClick={() => onClick("login")}
          className="action-button bg-main"
        >
          LOG IN
        </button>
        <button
          className="action-button bg-mainText"
          onClick={() => onClick("register")}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default Banner_left;
