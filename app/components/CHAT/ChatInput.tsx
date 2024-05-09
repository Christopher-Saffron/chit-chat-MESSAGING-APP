"use client";
import Image from "next/image";
import React, { useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { motion } from "framer-motion";

function ChatInput() {
  const [EmojiPickerOpen, setEmojiPickerOpen] = useState<Boolean>(false);
  const [text, setText] = useState<string>("");

  function handleEmoji(e: EmojiClickData) {
    setText((prev) => prev + e.emoji);
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
        </button>
        <button className="relative h-10 w-10 input-emoji">
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
