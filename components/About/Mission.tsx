import Image from "next/image";
import React from "react";
import aboutImgSixth from "../../images/about-img-6.png";
import { josefin } from "../../utils/utilsFonts";

const Mission = () => {
  return (
    <div className="my-[50px]">
      <h3
        className={`md:text-[40px] leading-[45px] md:font-semibold ${josefin.className} mb-6 max-md:font-semibold max-md:text-[32px]`}
      >
        Mission
      </h3>
      <div className="grid grid-cols-2 gap-6">
        <Image
          src={aboutImgSixth}
          alt=""
          className="object-cover w-full max-md:h-full rounded-lg"
        />

        <div>
          <p className="text-base md:font-semibold max-md:font-normal">
          Our mission at ad1tage is to create a vibrant and supportive community where seniors can thrive. We are dedicated to delivering exceptional services that enhance their quality of life and enable them to savor their golden year
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
