"use client";

import React, { useEffect, useState } from "react";
import ChatOption from "./ChatOption";
import useUserStore from "@/lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";

function MenuChatList() {
  const [chats, setChats] = useState<any>([]);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
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

  return (
    <div className="flex flex-col max-h-[550px] scrollbar-thin scrollbar-track-transparent scrollbar-corner-transparent scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar-thumb-[#89B747] overflow-y-scroll">
      {chats.map((chat: any) => (
        <ChatOption key={chat.id} />
      ))}
      <ChatOption />
      <ChatOption />
    </div>
  );
}

export default MenuChatList;
