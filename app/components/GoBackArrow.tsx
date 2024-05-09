import React from "react";
import MainText from "./MainText";
import Image from "next/image";

interface ArrowProps {
  style?: string;
  handleClick?: () => void;
}

function GoBackArrow({ style, handleClick }: ArrowProps) {
  return (
    <div
      className={`w-full font-extrabold flex gap-4 items-center cursor-pointer group relative ${style}`}
      onClick={handleClick}
    >
      <div className="relative h-4 w-7 group-hover:scale-120 transform duration-150">
        <Image src="/Icon_arrow.svg" alt="" fill />
      </div>
      <span className=" group-hover:scale-110 transform duration-150">
        CHIT<MainText>CHAT</MainText>
      </span>
    </div>
  );
}

export default GoBackArrow;
