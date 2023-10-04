import Image from "next/image";
import React from "react";
import aboutImg from "../../Assets/Images/about-us.jpg";
import { josefin } from "../../utils/utilsFonts";
import Uniqueness from "./Uniqueness";
import Philosophy from "./Philosophy";
import Mission from "./Mission";
import Goals from "./Goals";


const About = () => {
  return (
    <div className="flex container-2xl max-lg:px-4 lg:px-[50px] max-xl:gap-12 xl:gap-[40px] max-lg:flex-col">
      <div className="static md:sticky flex flex-col justify-center w-1/2 h-fit md:h-screen top-[30px] max-md:w-full max-lg:mt-[30px]">
        <Image
          src={aboutImg}
          alt=""
          className="object-contain h-fit left-0 w-full rounded-lg"
        />
        <p className="text-center font-thin text-2xl mt-4 mb-6 max-md:font-medium max-md:text-base">
          The dedicated minds & vision behind ad1tage, your companions in making
          senior life easier.
        </p>
      </div>
      <div className="w-1/2 max-md:w-full md:mb-[100px] max-md:mb-5">
        <h1
          className={`md:text-[56px] md:leading-[56px] font-semibold ${josefin.className} md:mt-[80px] max-md:text-4xl`}
        >
          Simplifying <span className="text-primary">Senior</span> Living
        </h1>
        <p className="text-darkGrey font-bold text-lg mt-8 mb-6 max-md:font-medium max-md:text-base">
          Stay Independent, Stay Connected: Unveiling Nearby Services with
          ad1tage.
        </p>

        <Mission />
        <Goals />
      </div>
    </div>
  );
};

export default About;
