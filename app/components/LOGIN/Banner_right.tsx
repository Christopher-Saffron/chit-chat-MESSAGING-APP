import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Banner_right_image from "./Banner_right_image";

function Banner_right() {
  return (
    <div className="w-[700px] h-[700px] max-h-[700px] max-w-[700px] flex flex-col justify-self-stretch  overflow-hidden ">
      <div className="w-full h-full overflow-hidden">
        <Banner_right_image isLeftSide={true} img={"/banner_img_1.png"} />
        <Banner_right_image isLeftSide={false} img={"/banner_img_2.png"} />
      </div>
    </div>
  );
}

export default Banner_right;
