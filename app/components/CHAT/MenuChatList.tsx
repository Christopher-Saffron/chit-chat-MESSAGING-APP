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
        const items = res.data().chats;

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

  const handleSelect = async (chat) => {
    const userChats = chats.map((item) => {
      const { user, ...rest } = item;
      return rest;
    });

    const chatIndex = userChats.findIndex(
      (item) => item.chatId === chat.chatId
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
    <div className="flex flex-col max-h-[550px] scrollbar-thin scrollbar-track-transparent scrollbar-corner-transparent scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar-thumb-[#89B747] overflow-y-scroll">
      {chats.map((chat: any) => (
        <div
          onClick={() => {
            handleSelect(chat);
          }}
          className="flex justify-between items-center  py-2 px-6 gap-4 cursor-pointer hover:bg-[#75B444]"
          key={chat.chatId}
        >
          <ChatOption chat={chat} />
        </div>
      ))}
    </div>
  );
}

export default MenuChatList;
