import { format } from "date-fns";
import Image from "next/image";
import React from "react";

interface MessageProps {
  text: string;
  user: string;
  sentAt: Date;
  image?: string;
  id: string;
}

function ChatMessage({ text, user, sentAt, image }: MessageProps) {
  return (
    <div className={`message  ${user === "user" ? "flex-row-reverse" : ""}`}>
      <div className="text-center w-fit text-secondaryText font-semibold text-sm">
        <Image
          src="/ChatOption.png"
          alt=""
          width={50}
          height={50}
          className=" rounded-full"
        />
        <span>{format(sentAt, "kk:mm")}</span>
      </div>
      {/* <div
        className={`${messageSide} font-medium p-3 ${
          messageSide === "message-right" ? " text-alternativeText" : ""
        } mb-12  max-w-80 relative w-fit rounded-lg`}
      >aa</div> */}
      <div
        className={`${
          user === "user" ? "message-right" : "message-left"
        } font-medium p-3 mb-12   relative ${
          image ? "w-3/5" : "w-fit max-w-80"
        } rounded-lg `}
      >
        <span>{text}</span>
        {!!image && (
          <div className="relative w-full h-52 mt-2">
            <Image
              src="/banner_img_1.png"
              alt=""
              fill
              className=" object-cover shadow-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;