import Image from "next/image";
import React from "react";
import Avatar from "../Avatar";

function ChatOption({ chat }: any) {
  function handleClick() {
    console.log("ding", chat);
  }
  return (
    // <div
    //   onClick={handleClick}
    //   className="flex justify-between items-center  py-2 px-6 gap-4 cursor-pointer hover:bg-[#75B444]"
    // >
    <>
      <div className="relative h-12 w-12">
        <Avatar img={chat.user.image} />
      </div>
      <div className="text-alternativeText text-sm flex-grow">
        <h3 className="  font-bold">John Doe</h3>
        <p>Are You okay?</p>
      </div>
      <div className="bg-[#EF8181] rounded-full text-alternativeText font-bold px-1.5 py-1 text-sm">
        2+
      </div>
    </>
    // </div>
  );
}

export default ChatOption;
