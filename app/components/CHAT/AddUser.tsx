"use client";

import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import React, { useState } from "react";

function AddUser() {
  const [user, setUser] = useState<any>(null);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    console.log("ding");
    const formData = new FormData(e.target);
    const name = formData.get("name");

    try {
      const userRef = collection(db, "users");

      const q = query(userRef, where("name", "==", name));

      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user);

  return (
    <div className="relative">
      <form
        onSubmit={handleSearch}
        className="flex items-center group transition duration-100"
      >
        <input
          type="search"
          className=" text-alternativeText h-11 w-full  bg-[#89B747] border pl-12 px-2 rounded-l-lg rounded-r-lg group-focus-within:rounded-r-none my-4 placeholder:text-white placeholder:font-bold placeholder-icon relative focus:outline-none focus:bg-[#7BA441] focus:border-[#CCC]"
          placeholder="Search here..."
          name="name"
        />
        <button
          type="submit"
          className=" text-alternativeText font-bold bg-red-400  border-0 group-focus-within:border border-[#CCC] border-l-0 cursor-pointer   transition-all transform duration-200 overflow-hidden w-[0px] h-[44px] leading-[44px] rounded-r-lg  text-center p-0 group-focus-within:px-3 group-focus-within:w-32  group-focus-within:bg-main"
        >
          SEARCH
        </button>
      </form>
      {/* <div className="absolute h-fit p-3 shadow-2xl bg-white z-[200] rounded-sm w-full border border-red-500">
        <div className="flex justify-between items-center">
          <div className="relative h-12 w-12 rounded-full ">
            <Image
              // src={user.avatar || "/ChatOption.png"}
              src="/ChatOption.png"
              alt=""
              fill
              className=" object-cover rounded-full"
            />
          </div>
          <span className="">John Doe</span>
          <button className=" bg-main text-alternativeText text-sm font-bold rounded-full px-2 py-2 cursor-pointer ">
            ADD USER
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default AddUser;
