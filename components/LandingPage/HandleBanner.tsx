import React from "react";
import { josefin } from "../../utils/utilsFonts";

const HostWithUsHandle = () => {
  return (
    <div className="bg-banner-image h-[640px] bg-no-repeat bg-right rounded-[16px] relative bg-cover overflow-hidden max-md:h-[730px]">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-host-with-us-handle"></div>
      <div className="absolute text-white max-w-[686px] top-[50%] left-[75px] -translate-y-1/2 max-md:left-5 max-md:pr-5">
        <h1 className={`text-[64px] leading-[64px] ${josefin.className}`}>
          We handle everything.
        </h1>
        <p className="text-2xl my-[30px]">Compliance</p>
        <p className="text-2xl my-[30px]">Operations</p>
        <p className="text-2xl my-[30px]">Housekeeping</p>
        <p className="text-2xl my-[30px]">Guest Management</p>
      </div>
    </div>
  );
};

export default HostWithUsHandle;
