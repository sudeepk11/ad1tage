import React from "react";
import Link from "next/link";
import { josefin } from "../../utils/utilsFonts";
import Image from "next/image";
import home_banner from "../../images/home_banner.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 content-center items-center h-[540px] max-md:h-[730px]">
      <div className="flex flex-col justify-center text-black px-10">
        <h1
          className={`text-[45px]  font-semibold leading-[64px] ${josefin.className}`}
        >
          Empowering Seniors: Find Nearby Services with Ease!
        </h1>
        <p className="text-lg mb-[18px]">
          Discover personalized and reliable solutions for a vibrant and
          fulfilling senior lifestyle. Your gateway to a life enriched with
          convenience and care.
        </p>
      </div>
      {/* Center the image in its column */}
      <div className="flex justify-center">
        <Image src={home_banner} className="rounded-lg h-72 w-3/4 mb-10 shadow-2xl " alt="arrow" />
      </div>
    </div>
  );
};

export default Banner;
