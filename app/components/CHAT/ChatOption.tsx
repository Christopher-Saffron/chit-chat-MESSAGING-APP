import Image from "next/image";
import React, { useMemo } from "react";
import Avatar from "../Avatar";

function ChatOption({ chat }: any) {
  function handleClick() {
    console.log("ding", chat);
  }

  const lastMessage = useMemo(() => {
    return chat.lastMessage.slice(0, 20);
  }, [chat]);
  return (
    <>
      <div className="relative h-12 w-12">
        <Avatar img={chat.user.image} />
      </div>
      <div className="text-alternativeText text-sm flex-grow">
        <h3 className="  font-bold">{chat.user.name}</h3>
        <p>{lastMessage}</p>
      </div>
      <div className="bg-[#EF8181] rounded-full text-alternativeText font-bold px-1.5 py-1 text-sm truncate">
        NEW
      </div>
    </>
  );
}

export default ChatOption;
