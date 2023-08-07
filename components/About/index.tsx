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
      <div className="max-md:w-full md:w-[55%] md:mb-[60px]">
        <Image
          src={aboutImg}
          alt=""
          className="object-cover sticky top-[80px] left-0 w-full"
        />
      </div>
      <div className="max-md:w-full md:w-[45%] md:mb-[100px] max-md:mb-5">
        <h1
          className={`md:text-[56px] md:leading-[56px] font-bold ${josefin.className} md:mt-[80px] max-md:text-4xl`}
        >
          Building the future of hospitality
        </h1>
        <p className="text-darkGrey font-bold text-lg mt-8 mb-6 max-md:font-medium max-md:text-base">
          Experience the home that moves with you for a month, a year, or longer
          with a global network of designer, furnished apartments.
        </p>
        <Uniqueness />
        <Philosophy />
        <Mission />
        <Goals />
      </div>
    </div>
  );
};

export default About;
