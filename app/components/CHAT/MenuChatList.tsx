"use client";

import React, { useEffect, useState } from "react";
import ChatOption from "./ChatOption";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useChatStore } from "@/lib/chatStore";
import { useUserStore } from "@/lib/userStore";

function MenuChatList() {
  const [chats, setChats] = useState<any>([]);

  const { currentUser }: any = useUserStore();

  const { chatId, changeChat }: any = useChatStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data()?.chats ?? [];

        const promises = items.map(async (item: any) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });
        const chatData = await Promise.all(promises);

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );
    return () => {
      unSub();
    };
  }, [currentUser.id]);

  const handleSelect = async (chat: any) => {
    const userChats = chats.map((item: any) => {
      const { user, ...rest } = item;
      return rest;
    });

    const chatIndex = userChats.findIndex(
      (item: any) => item.chatId === chat.chatId
    );

    userChats[chatIndex].isSeen = true;

    const userChatsRef = doc(db, "userchats", currentUser.id);

    try {
      await updateDoc(userChatsRef, {
        chats: userChats,
      });
      changeChat(chat.chatId, chat.user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col  md:max-h-[550px] scrollbar-thin scrollbar-track-transparent scrollbar-corner-transparent scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar-thumb-[#89B747] overflow-y-scroll">
      {chats.length > 0 ? (
        chats.map((chat: any) => (
          <div
            onClick={() => {
              handleSelect(chat);
            }}
            className={`flex justify-between items-center  py-2 px-6 gap-4 cursor-pointer ${
              chat.isSeen ? "" : "bg-[#90c26a]"
            } hover:bg-[#75B444]`}
            key={chat.chatId}
          >
            <ChatOption chat={chat} />
          </div>
        ))
      ) : (
        <span className=" text-alternativeText text-xs w-2/3 text-center mx-auto italic">
          Feel free to add test accounts such as John Doe or Foo Bar
        </span>
      )}
    </div>
  );
}

export default MenuChatList;
