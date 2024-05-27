import { format, formatDistance, formatDistanceToNow } from "date-fns";
import { Timestamp } from "firebase/firestore";
import Image from "next/image";
import React from "react";

interface MessageProps {
  text: string;
  senderId: string;
  createdAt: Timestamp;
  img?: string;
  avatarImg: string;
  fromCurrentUser: boolean;
}

function ChatMessage({
  text,
  createdAt,
  avatarImg,
  img,
  fromCurrentUser,
}: MessageProps) {
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
        <span className=" text-[11px] block">
          {format(new Date(createdAt.seconds * 1000), "HH:mm")}
        </span>
      </div>

      <div
        className={`break-all ${
          fromCurrentUser ? "message-right" : "message-left"
        } font-medium p-3 mb-12   relative rounded-lg ${img ? "w-full" : ""} `}
      >
        <span className=" break-all">{text}</span>
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
