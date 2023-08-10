import React from "react";
import Link from "next/link";
import { josefin } from "../../utils/utilsFonts";
import Image from "next/image";
import home_banner from "../../Assets/Images/home_banner.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 content-center items-center h-[640px] max-md:h-[730px]">
      <div className=" text-black max-md:left-5 max-md:pr-5">
        <h1 className={`text-[64px] leading-[64px] ${josefin.className}`}>
          Empowering Seniors: Find Nearby Services with Ease!
        </h1>
        <p className="text-lg mb-[30px]">
          Discover personalized and reliable solutions for a vibrant and
          fulfilling senior lifestyle. Your gateway to a life enriched with
          convenience and care.
        </p>
      </div>
      {/* Center the image in its column */}
      <div className="flex justify-center">
        <Image src={home_banner} alt="arrow" />
      </div>
    </div>
  );
};

export default Banner;
