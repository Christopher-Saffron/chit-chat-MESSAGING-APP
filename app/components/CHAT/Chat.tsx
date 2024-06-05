"use client";
import React, { ReactHTMLElement, useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useChatStore } from "@/lib/chatStore";
import { useUserStore } from "@/lib/userStore";
import Image from "next/image";

// const FAKE_MESSAGES = [
//   {
//     text: "Hello there!",
//     user: "otherUser",
//     sentAt: new Date("2024-05-01T13:41:02.283Z"),
//     image: "",
//     id: "0",
//   },
//   {
//     text: "Hi!",
//     user: "user",
//     sentAt: new Date("2024-05-01T13:42:02.283Z"),
//     image: "YES",
//     id: "1",
//   },
//   {
//     text: "How are You?",
//     user: "otherUser",
//     sentAt: new Date("2024-05-01T13:47:02.283Z"),
//     image: "",
//     id: "2",
//   },
//   {
//     text: "Test message.",
//     user: "otherUser",
//     sentAt: new Date("2024-05-01T13:47:02.283Z"),
//     image: "",
//     id: "3",
//   },
//   {
//     text: "Test message.",
//     user: "otherUser",
//     sentAt: new Date("2024-05-01T13:47:02.283Z"),
//     image: "",
//     id: "4",
//   },
// ];

function Chat() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [chat, setChat] = useState<any>(null);

  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked }: any =
    useChatStore();

  const { currentUser }: any = useUserStore();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  return (
    <div className="h-full  w-full flex flex-col   justify-normal ">
      <div className=" h-20 flex justify-between px-9 py-3  items-center shadow-xl  ">
        <div>
          <div className="relative   font-bold text-xl">
            <div className="h-3 w-3 rounded-full bg-[#9FF577] absolute top-1/2 -left-5 -translate-y-1/2" />
            <h2>{user.name}</h2>
          </div>
          <p className="italic text-sm text-secondaryText">
            Say something nice!
          </p>
        </div>
        <div>
          <Image
            className="cursor-pointer hover:scale-110 transition"
            src="/Icon_more.svg"
            width={10}
            height={16}
            alt="Show more"
          />
        </div>
      </div>

      <div className="p-4 flex-col mx-1 flex-grow flex justify-end  gap-4 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-corner-transparent scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar-thumb-secondaryText">
        <div className="h-full">
          {chat?.messages.map((item: any) => {
            return (
              <ChatMessage
                key={item.createdAt}
                {...item}
                fromCurrentUser={item.senderId === currentUser.id}
                avatarImg={
                  item.senderId === currentUser.id
                    ? currentUser.image
                    : user.image
                }
              />
            );
          })}
          <div ref={scrollRef} />
        </div>
      </div>
      <ChatInput />
    </div>
  );
}

export default Chat;
