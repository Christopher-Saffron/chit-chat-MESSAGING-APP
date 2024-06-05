import Image from "next/image";
import React from "react";

function Banner_right_image({
  isLeftSide,
  img,
}: {
  isLeftSide: boolean;
  img: string;
}) {
  return (
    <div className={` flex  ${!isLeftSide && "justify-end"} `}>
      <div className="relative  w-[60%] ">
        <div className="relative  w-full h-[330px]">
          <Image
            src={img}
            alt=""
            fill
            sizes="200px"
            className={` object-contain  ${
              isLeftSide
                ? "opacity-0 image-loading-instant"
                : "opacity-0 image-loading-image"
            } `}
          />
        </div>
        <div
          className={`absolute ${
            isLeftSide ? "hidden" : "right-2  image-loading-right"
          } bottom-8 image-loading-bubble image-loading translate-y-[150px]  h-16 w-28 mr-12 rounded-full bg-[#E5E6EC] flex items-center justify-center gap-2`}
        >
          <div className="image-loading-ball rounded-full h-5 w-5 bg-[#C4C5C9]" />
          <div className="image-loading-ball rounded-full h-5 w-5 bg-[#C4C5C9]" />
          <div className="image-loading-ball rounded-full h-5 w-5 bg-[#C4C5C9]" />
        </div>
      </div>
    </div>
  );
}

export default Banner_right_image;
