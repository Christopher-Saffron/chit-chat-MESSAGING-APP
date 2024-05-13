"use client";
import Image from "next/image";
import React, { useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { motion } from "framer-motion";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useChatStore } from "@/lib/chatStore";
import { useUserStore } from "@/lib/userStore";
import upload from "@/lib/upload";

function ChatInput() {
  const [EmojiPickerOpen, setEmojiPickerOpen] = useState<Boolean>(false);
  const [text, setText] = useState<string>("");
  const [img, setImg] = useState({
    file: null,
    url: "",
  });

  const { chatId, user }: any = useChatStore();
  const { currentUser }: any = useUserStore();

  const handleImg = (e: any) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  function handleEmoji(e: EmojiClickData) {
    setText((prev) => prev + e.emoji);
  }

  async function handleSend() {
    if (text === "") return;
    let imgUrl = null;

    try {
      if (img.file) {
        imgUrl = await upload(img.file);
      }

      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
        }),
      });

      const userIDs = [currentUser.id, user.id];

      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c: any) => c.chatId === chatId
          );

          console.log(userChatsData, "and now index", chatIndex);

          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen =
            id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });

      setText("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full h-16 px-3  flex justify-center items-center  bg-[#EBEBEB]">
      <input
        className="   w-full bg-inherit text-xl placeholder:color-secondaryText h-10 py-4 rounded-lg  placeholder:font-bold  relative focus:outline-none"
        placeholder="Type here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="relative flex gap-3 justify-between items-center">
        <button
          onClick={() => setEmojiPickerOpen((n) => !n)}
          className="relative h-6 w-6 input-emoji"
        >
          <Image src="/Icon_emoji.svg" alt="" fill />
        </button>
        <button className="relative h-6 w-6 input-emoji">
          <Image src="/Icon_attach.svg" alt="" fill />
          <input
            type="file"
            id="file"
            className=" hidden"
            onChange={handleImg}
          />
        </button>
        <button className="relative h-10 w-10 input-emoji" onClick={handleSend}>
          <Image src="/Icon_send.svg" alt="" fill />
        </button>
        {EmojiPickerOpen && (
          <motion.div
            // initial={{ opacity: 0, x: 100, y: '150%',  }}
            // animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-[150%] right-0"
          >
            <EmojiPicker onEmojiClick={handleEmoji} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default ChatInput;
