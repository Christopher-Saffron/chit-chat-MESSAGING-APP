import React from "react";
import Avatar from "../Avatar";
import Image from "next/image";
import { useChatStore } from "@/lib/chatStore";
import { useUserStore } from "@/lib/userStore";

function Info() {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked }: any =
    useChatStore();

  const { currentUser }: any = useUserStore();
  return (
    <div className="w-[250px] h-full flex-shrink-0 rounded-r-xl border-l border-gray-200 overflow-x-hidden">
      <div className="flex justify-center  flex-col items-center mt-24">
        <div className="h-32 w-32 relative">
          <Avatar img={user.image} />
        </div>
        <span className=" font-bold text-xl mt-2">{user.name}</span>
        <div className="flex flex-col gap-3  mt-6 p-2 items-start font-bold text-sm text-secondaryText">
          <div className="flex items-center gap-4">
            <Image src="/Icon_email.svg" alt="" height={28} width={28} />
            <span className="">{user.email}</span>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/Icon_date.svg" alt="" height={28} width={28} />
            <span className="">joined 14.04.2024</span>
          </div>
        </div>
        <button className="flex justify-between items-center w-full font-bold  px-3 my-2 py-1 gap-4 border-b border-secondaryText">
          <span>Chat settings</span>
          <Image src="/Icon_chevron.svg" alt="" height={16} width={16} />
        </button>
        <button className="flex justify-between items-center w-full font-bold px-3 my-2 py-1 gap-4 border-b border-secondaryText">
          <span>Privacy settings</span>
          <Image src="/Icon_chevron.svg" alt="" height={16} width={16} />
        </button>

        {/* <div className="w-full px-3 font-bold ">
          <span className=" w-full">Shared images</span>
          <div className="overflow-y-hidden overflow-x-scroll py-3 scrollbar-thin scrollbar-track-transparent scrollbar-corner-transparent scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar-thumb-[#89B747]">
            <div className="w-fit gap-4 flex ">
              <div className=" relative h-12 w-12">
                <Image
                  src="/banner_img_4.png"
                  alt=""
                  fill
                  sizes="40px"
                  className=" rounded-xl"
                />
              </div>
              <div className=" relative h-12 w-12">
                <Image
                  src="/banner_img_4.png"
                  alt=""
                  fill
                  sizes="40px"
                  className=" rounded-xl"
                />
              </div>
              <div className=" relative h-12 w-12">
                <Image
                  src="/banner_img_4.png"
                  alt=""
                  fill
                  sizes="40px"
                  className=" rounded-xl"
                />
              </div>
              <div className=" relative h-12 w-12">
                <Image
                  src="/banner_img_4.png"
                  alt=""
                  fill
                  sizes="40px"
                  className=" rounded-xl"
                />
              </div>
              <div className=" relative h-12 w-12">
                <Image
                  src="/banner_img_4.png"
                  alt=""
                  fill
                  sizes="40px"
                  className=" rounded-xl"
                />
              </div>
              <div className=" relative h-12 w-12">
                <Image
                  src="/banner_img_4.png"
                  alt=""
                  fill
                  sizes="40px"
                  className=" rounded-xl"
                />
              </div>
              <div className=" relative h-12 w-12">
                <Image
                  src="/banner_img_4.png"
                  alt=""
                  fill
                  sizes="40px"
                  className=" rounded-xl"
                />
              </div>
            </div>
          </div>
        </div> */}
        <button className=" w-full my-12">
          <p className="mx-auto w-fit px-6 rounded-sm font-bold text-alternativeText bg-red-400 my-4 py-2 ">
            BLOCK USER
          </p>
        </button>
      </div>
    </div>
  );
}

export default Info;
