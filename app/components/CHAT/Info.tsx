import React from "react";
import Avatar from "../Avatar";
import Image from "next/image";
import { useChatStore } from "@/lib/chatStore";
import { useUserStore } from "@/lib/userStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

function Info() {
  const {
    chatId,
    user,
    isCurrentUserBlocked,
    isReceiverBlocked,
    changeBlock,
    resetChat,
  }: any = useChatStore();
  const { currentUser }: any = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-[250px] h-full flex-shrink-0 rounded-r-xl border-l border-gray-200 overflow-x-hidden">
      <div className="flex justify-center  flex-col items-center mt-24">
        <div className="h-32 w-32 relative">
          <Avatar img={user.image} />
        </div>
        <span className=" font-bold text-xl mt-2">{user.name}</span>
        <div className="flex flex-col gap-3  mt-6 p-2 items-start font-bold text-sm text-secondaryText">
          <div className="flex items-center gap-4">
            <Image src="/Icon_email.svg" alt="" height={28} width={28} />
            <span className="">{user.email}</span>
          </div>
          {/* <div className="flex items-center gap-4">
            <Image src="/Icon_date.svg" alt="" height={28} width={28} />
            <span className="">joined 14.04.2024</span>
          </div> */}
        </div>
        <button className="flex justify-between items-center w-full font-bold  px-3 my-2 py-1 gap-4 border-b border-secondaryText">
          <span>Chat settings</span>
          <Image src="/Icon_chevron.svg" alt="" height={16} width={16} />
        </button>
        <button className="flex justify-between items-center w-full font-bold px-3 my-2 py-1 gap-4 border-b border-secondaryText">
          <span>Privacy settings</span>
          <Image src="/Icon_chevron.svg" alt="" height={16} width={16} />
        </button>

        <div className=" w-full my-12 text-center">
          <button
            onClick={handleBlock}
            className="mx-auto w-fit px-6 rounded-sm font-bold text-alternativeText bg-red-400 my-4 py-2 hover:scale-105 transition "
          >
            {isCurrentUserBlocked
              ? "You are Blocked!"
              : isReceiverBlocked
              ? "User blocked"
              : "Block User"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
