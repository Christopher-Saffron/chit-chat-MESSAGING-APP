"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import NavbarButton from "./NavbarButton";
import Link from "next/link";
import { useSession } from "next-auth/react";

function Navbar() {
  // const { data: session } = useSession();

  // const isLoggedIn = useMemo(() => {
  //   return !session?.user;
  // }, [session?.user]);
  return (
    <nav className="  py-2 w-screen px-24  flex justify-between items-center ">
      <div className="relative w-full max-w-[178px] h-10 cursor-pointer">
        <Link href="/">
          <Image src="/Chit_chat_logo.svg" fill alt="" />
        </Link>
      </div>

      <ul className="flex gap-4 main">
        <NavbarButton style="border border-green-500 rounded-xl text-alternativeText bg-main font-bold">
          HOME
        </NavbarButton>
        {/* {isLoggedIn ? (
          <NavbarButton style="border border-green-500 rounded-xl text-alternativeText bg-main font-bold">
            HOME
          </NavbarButton>
        ) : (
          <NavbarButton style="border border-green-500 rounded-xl text-alternativeText bg-main font-bold">
            LOG OUT
          </NavbarButton>
        )} */}
        <NavbarButton style="italic font-bold text-secondaryText">
          PREVIEW
        </NavbarButton>
      </ul>
    </nav>
  );
}

export default Navbar;
