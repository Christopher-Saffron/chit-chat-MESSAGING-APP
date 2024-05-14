import { format } from "date-fns";
import Image from "next/image";
import React from "react";

interface MessageProps {
  text: string;
  senderId: string;
  createdAt: Date;
  img?: string;
  id?: string;
}

function ChatMessage({
  text,
  createdAt,
  avatarImg,
  img,
  fromCurrentUser,
}: {
  [key: string]: any;
}) {
  console.log(img);
  return (
    <div
      className={`message ${
        fromCurrentUser ? "flex-row-reverse" : "flex-row"
      } `}
    >
      <div className="text-center w-fit text-secondaryText font-semibold text-sm">
        <div className=" w-12 h-12 relative">
          <Image
            src={avatarImg || "/ChatOption.png"}
            alt=""
            fill
            className=" rounded-full object-cover shadow"
          />
        </div>
        <span>00:00</span>
      </div>
      {/* <div
        className={`${messageSide} font-medium p-3 ${
          messageSide === "message-right" ? " text-alternativeText" : ""
        } mb-12  max-w-80 relative w-fit rounded-lg`}
      >aa</div> */}
      {/* <div
        className={`font-medium p-3 mb-12   relative rounded-lg message-right `}
      >
        <span>{text}</span>
      </div> */}
      <div
        className={`${
          fromCurrentUser ? "message-right" : "message-left"
        } font-medium p-3 mb-12   relative rounded-lg ${img ? "w-full" : ""} `}
      >
        <span>{text}</span>
        {img && (
          <div className="relative w-full h-52 mt-2">
            <Image src={img} alt="" fill className=" object-cover shadow-xl" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;
