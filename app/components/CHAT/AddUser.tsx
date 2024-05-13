"use client";
import { AnimatePresence, motion } from "framer-motion";

import { db } from "@/lib/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import Image from "next/image";
import React, { useState } from "react";
import { useUserStore } from "@/lib/userStore";

function AddUser() {
  const [user, setUser] = useState<any>(null);

  const { currentUser }: any = useUserStore();

  const handleSearch = async (e: any) => {
    e.preventDefault();
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

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

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
          className=" text-alternativeText font-bold bg-main  border-0 group-focus-within:border border-[#CCC] border-l-0 cursor-pointer   transition-all transform duration-200 overflow-hidden w-[0px] h-[44px] leading-[44px] rounded-r-lg  text-center p-0 group-focus-within:px-3 group-focus-within:w-32  group-focus-within:bg-main"
        >
          SEARCH
        </button>
      </form>
      <AnimatePresence mode="wait">
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute h-fit px-3 py-4 shadow-2xl bg-white z-[200] rounded-md w-full "
          >
            <div className="flex justify-between items-center mt-4">
              <div className="relative h-12 w-12 rounded-full ">
                <Image
                  src={user.image || "/ChatOption.png"}
                  alt=""
                  fill
                  className=" object-cover rounded-full"
                />
              </div>
              <span className=" font-bold flex-grow px-2 text-center">
                {user.name}
              </span>
              <button
                onClick={handleAdd}
                className=" bg-main text-alternativeText text-sm font-bold rounded-full px-2 py-2 cursor-pointer "
              >
                ADD USER
              </button>
              <button
                onClick={() => setUser(null)}
                className="absolute top-0 right-0 py-1 px-2 cursor-pointer"
              >
                X
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AddUser;
