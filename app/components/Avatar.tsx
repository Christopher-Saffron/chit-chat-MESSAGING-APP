import Image from "next/image";
import React from "react";

function Avatar({ img }: { img?: string }) {
  return (
    <>
      <Image
        src={img || "/ChatOption.png"}
        alt=""
        fill
        className="rounded-full object-cover"
      />
      {/* <div className="h-1/4 w-1/4 rounded-full bg-[#9FF577] absolute bottom-0.5 right-0.5" /> */}
    </>
  );
}

export default Avatar;
