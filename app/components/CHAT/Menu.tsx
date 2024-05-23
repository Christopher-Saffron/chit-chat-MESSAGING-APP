import Image from "next/image";
import React from "react";
import MenuChatList from "./MenuChatList";
import AddUser from "./AddUser";

function Menu() {
  return (
    <div className="w-[350px] h-full bg-chatGradient rounded-l-2xl flex-shrink-0 py-8">
      <div className="w-full h-full">
        <div className="px-8">
          <div className="flex justify-between items-center">
            <div className="relative w-[180px] h-11">
              <Image src="Chit_chat_logo_white.svg" alt="" fill />
            </div>
            {/* <button className="relative h-8 w-2 py-3 px-6">
              <Image src="Icon_More.svg" fill alt="" />
            </button> */}
          </div>
          <AddUser />
          {/* <div className="flex flex-row justify-between items-center mt-2 pb-4 border-b ">
            <button className="relative h-8 w-8">
              <Image src="Icon_Recent.svg" alt="" fill />
            </button>
            <button className="relative h-8 w-8">
              <Image src="Icon_Messages.svg" alt="" fill />
            </button>
            <button className="relative h-8 w-8">
              <Image src="Icon_Group.svg" alt="" fill />
            </button>
            <button className="relative h-8 w-8">
              <Image src="Icon_Add.svg" alt="" fill />
            </button>
          </div> */}
        </div>
        <MenuChatList />
      </div>
    </div>
  );
}

export default Menu;
