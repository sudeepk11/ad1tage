import Image from "next/image";
import React from "react";
import aboutImg from "../../images/about-img.png";
import { josefin } from "../../utils/utilsFonts";
import Uniqueness from "./Uniqueness";
import Philosophy from "./Philosophy";
import Mission from "./Mission";
import Goals from "./Goals";

const About = () => {
  return (
    <div className="flex container-2xl max-lg:px-4 lg:px-[50px] max-xl:gap-12 xl:gap-[120px] max-md:flex-col">
      <div className=" max-md:w-full md:w-[55%] md:mb-[60px]">
        <Image
          src={aboutImg}
          alt=""
          className="py-16 object-cover sticky top-[80px] h-screen left-0 w-full"
        />
  
      </div>
      <div className="max-md:w-full md:w-[45%] md:mb-[100px] max-md:mb-5">
        <h1
          className={`md:text-[56px] md:leading-[56px] font-semibold ${josefin.className} md:mt-[80px] max-md:text-4xl`}
        >
        Simplifying <span className="text-primary">Senior</span>  Living
        </h1>
        <p className="text-darkGrey font-bold text-lg mt-8 mb-6 max-md:font-medium max-md:text-base">
        Stay Independent, Stay Connected: Unveiling Nearby Services with ad1tage.
        </p>


        <Mission />
        <Goals />
      </div>
    </div>
  );
};

export default About;
