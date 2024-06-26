"use client";

import Image from "next/image";
import React from "react";
import NavbarButton from "./NavbarButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

function Navbar({ isLoggedIn }: { isLoggedIn?: boolean }) {
  const router = useRouter();
  function handleLogOut() {
    signOut(auth).then(() => {
      router.push("/");
    });
  }

  function handleHome() {
    router.push("/");
  }

  return (
    <nav className=" hidden md:flex py-2 max-w-screen-md lg:max-w-full mx-auto w-full lg:w-full px-6 lg:px-24 justify-center   md:justify-between items-center ">
      {!isLoggedIn ? (
        <div className="relative w-full max-w-[178px]  md:h-10 cursor-pointer">
          <Link href="/">
            <Image src="/Chit_chat_logo.svg" fill alt="" />
          </Link>
        </div>
      ) : (
        <div></div>
      )}

      <ul className=" flex gap-4 main">
        {isLoggedIn ? (
          <NavbarButton
            onClick={handleLogOut}
            style="border border-green-500 rounded-xl text-alternativeText bg-main font-bold"
          >
            LOG OUT
          </NavbarButton>
        ) : (
          <NavbarButton
            onClick={handleHome}
            style="border border-green-500 rounded-xl text-alternativeText bg-main font-bold"
          >
            HOME
          </NavbarButton>
        )}

        {/* {isLoggedIn ? (
          <NavbarButton style="border border-green-500 rounded-xl text-alternativeText bg-main font-bold">
            HOME
          </NavbarButton>
        ) : (
          <NavbarButton style="border border-green-500 rounded-xl text-alternativeText bg-main font-bold">
            LOG OUT
          </NavbarButton>
        )} */}
        {/* <NavbarButton style="italic font-bold text-secondaryText">
          PREVIEW
        </NavbarButton> */}
      </ul>
    </nav>
  );
}

export default Navbar;
