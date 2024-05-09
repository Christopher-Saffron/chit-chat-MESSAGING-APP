import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Banner_right() {
  return (
    <div className="w-[700px] h-[700px] max-h-[700px] max-w-[700px] flex flex-col justify-self-stretch  overflow-hidden overflow-y-scroll">
      <div className="w-full h-full">
        <div className=" flex justify-start">
          <div className="relative w-[60%] h-[330px] ">
            <Image
              src="/banner_img_1.png"
              alt=""
              fill
              sizes="200px"
              className=" object-contain"
            />
          </div>
        </div>
        <div className=" flex justify-end">
          <div className="relative w-[60%] h-[330px] transform  justify-self-end self-end">
            <Image
              src="/banner_img_2.png"
              alt=""
              fill
              sizes="200px"
              className=" object-contain"
            />
          </div>
        </div>
        <div className=" flex justify-start">
          <div className="relative w-[60%] h-[330px] ">
            <Image
              src="/banner_img_4.png"
              alt=""
              fill
              sizes="200px"
              className=" object-contain"
            />
          </div>
        </div>
        <div className=" flex justify-end">
          <div className="relative w-[60%] h-[330px] transform  justify-self-end self-end">
            <Image
              src="/banner_img_3.png"
              alt=""
              fill
              sizes="200px"
              className=" object-contain"
            />
          </div>
        </div>
      </div>
      {/* <motion.div
        animate={{ opacity: [0, 1, 0.999, 0], y: [100, 0, 0, 100] }}
        exit={{}}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="h-16 w-32 bg-secondaryText rounded-3xl flex justify-around items-center px-4"
      >
        <div className="h-4 w-4 bg-white rounded-full animate-bounce"></div>
        <div className="h-4 w-4 bg-white rounded-full animate-bounce"></div>
        <div className="h-4 w-4 bg-white rounded-full animate-bounce"></div>
      </motion.div> */}
    </div>
  );
}

export default Banner_right;
