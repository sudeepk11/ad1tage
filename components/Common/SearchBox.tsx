"use client";
import React, { useState } from "react";
import { josefin } from "../../utils/utilsFonts";
import Button from "./Button";
import locationIcon from "../../Assets/Icons/location.png";

const SearchBox = ({ searchClasses }) => {
  return (
    <div
      className={`bg-white p-[20px] mb-10 rounded-xl shadow-md max-w-[1190px] w-full m-auto relative z-1 ${searchClasses} h-fit`}
    >
      <div className="grid grid-cols-8 md:gap-4 gap-2 relative">
        <input
          type="text"
          placeholder="Search..."
          className=" md:col-span-5 sm:col-span-4 col-span-8 py-[10px] px-6 border border-greyishBrown rounded-[8px] w-full"
        />
        <Button
          ButtonText={"Search"}
          ButtonClasses={
            "sm:col-span-1 col-span-3 w-full flex items-center font-semibold text-white justify-center max-h-[58px] max-xl:w-full max-md:py-3"
          }
        ></Button>
        <Button
          ButtonText={"Find Services near me"}
          icon={locationIcon}
          logo={locationIcon}
          ButtonClasses={
            " md:col-span-2 sm:col-span-3 col-span-5 !bg-blue-100 text-[#2A86DB] font-semibold w-full flex items-center justify-center max-h-[58px] max-xl:w-full max-md:py-3"
          }
        ></Button>
      </div>
    </div>
  );
};

export default SearchBox;
