import React from "react";
import Link from "next/link";
import { josefin } from "../../utils/utilsFonts";
import Image from "next/image";
import home_banner from "../../images/home_banner.png";

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 content-center items-center h-fit my-20">
      <div className="flex flex-col justify-center text-black md:px-10 lg:order-1 order-2">
        <h1
          className={`md:text-[45px] text-[30px] font-semibold md:leading-[64px]  ${josefin.className}`}
        >
          Empowering Seniors: Find Nearby Services with Ease!
        </h1>
        <p className="text-lg mb-[18px] text-justify">
          Discover personalized and reliable solutions for a vibrant and
          fulfilling senior lifestyle. Your gateway to a life enriched with
          convenience and care.
        </p>
      </div>
      {/* Center the image in its column */}
      <div className="flex justify-center lg:order-2 order-1">
        <Image
          src={home_banner}
          className="rounded-lg h-auto lg:w-7/12 md:w-11/12 object-contain mb-10 shadow-2xl "
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default Banner;
