import Image from "next/image";
import React from "react";
import overlayImg from "../../images/left-shadow-overlay.png";
import { josefin } from "../../utils/utilsFonts";

const SubBanner = ({
  imageDesktopSrc,
  imageModbileSrc,
  bannerHeading,
  bannerSubHeading,
}: any) => {
  return (
    <div className="relative h-[216px] rounded-2xl overflow-hidden">
      <div className="h-[216px]">
        <Image
          src={imageDesktopSrc}
          alt=""
          className="object-cover w-full h-full max-md:hidden "
        />
        <Image
          src={imageModbileSrc}
          alt=""
          className="object-cover w-full h-full md:hidden "
        />
        <Image
          className="absolute top-0 left-0 object-cover w-full h-full "
          src={overlayImg}
          alt=""
        />
      </div>
      <div className="absolute left-[75px] max-md:left-[30px] text-white font-semibold top-[50%] -translate-y-[50%]">
        <h2 className={`text-[56px] max-md:text-[40px] ${josefin.className}`}>
          {bannerHeading}
        </h2>
        <p className="text-base">{bannerSubHeading}</p>
      </div>
    </div>
  );
};

export default SubBanner;
