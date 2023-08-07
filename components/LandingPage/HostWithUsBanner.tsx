import React from "react";
import Link from "next/link";
import { josefin } from "../../utils/utilsFonts";
import Button from "../Common/Button";

const HostWithUsBanner = () => {
  return (
    <div className="bg-banner-image h-[640px] bg-no-repeat bg-right rounded-[16px] relative bg-cover overflow-hidden max-md:h-[730px]">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-host-with-us-banner"></div>
      <div className="absolute text-white max-w-[586px] top-[50%] left-[75px] -translate-y-1/2 max-md:left-5 max-md:pr-5">
        <h1 className={`text-[64px] leading-[64px] ${josefin.className}`}>
        Host With Us
        </h1>
        <p className="text-lg mb-[30px]">
        Tell us about your property and our algorithm will compare your property with the performance of similar rentals under our management.
        </p>
      </div>
    </div>
  );
};

export default HostWithUsBanner;
