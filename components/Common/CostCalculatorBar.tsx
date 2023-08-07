"use client";
import Image from "next/image";
import React, { useState } from "react";
import { josefin } from "../../utils/utilsFonts";
import Button from "./Button";
import Dropdown from "./Dropdown";
import locationIcon from "../../images/location.png";
import bedroomIcon from "../../images/bedroom.png";
import Link from "next/link";
import {
  bedroomsItems,
  locationFilterItems,
  furnishingItems,
} from "../../utils/utilsItems";
import SearchBoxDropdown from "./SearchBoxDropdown";

const SearchBox = ({ searchClasses }) => {
  const [locationItems, setLocationItems] = useState(false);
  const [bedRoomItem, setBedRoomItem] = useState(false);
  const [furnishingItem, setFurnishingItem] = useState(false);

  const handleLocationItems = () => {
    setLocationItems(!locationItems);
  };

  const handleBedRoomItem = () => {
    setBedRoomItem(!bedRoomItem);
  };

  const handleFurnishingItem = () => {
    setFurnishingItem(!furnishingItem);
  };
  return (
    <div
      className={`bg-white p-[30px] rounded-xl shadow-md max-w-[1190px] w-full m-auto relative z-1 ${searchClasses} xl:max-h-[500px] h-full max-xl:h-max`}
    >
      <h3 className={`text-2xl ${josefin.className} mb-4`}>
        Estimate Your Revenue <span className=" text-gray-500">(AED)</span>
      </h3>

      <div className="flex justify-between gap-1 relative max-xl:grid max-xl:grid-cols-3 max-md:grid-cols-1">
        <div
          className="relative xl:w-full max-xl:w-full"
          onClick={handleLocationItems}
        >
          <SearchBoxDropdown imageSrc={locationIcon} seachHeading="Area" />
          {locationItems && (
            <div className="p-4 rounded-xl grid grid-cols-2 md:w-[587px] bg-white mt-3 max-md:grid-cols-1 absolute z-[1] max-md:w-full">
              {locationFilterItems.map((items) => {
                return (
                  <div
                    key={items.id}
                    className="odd:border-r odd:border-[#E1D9CE] odd:mr-[30px] max-md:border-none"
                  >
                    <h2 className="text-base font-semibold mt-[30px]">
                      {items.heading}
                    </h2>
                    {items.menuItem.map((value, index) => {
                      return (
                        <div key={index} className="font-extralight p-">
                          {value}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 2nd box */}
        <div
          className="relative xl:w-full max-xl:w-full"
          onClick={handleBedRoomItem}
        >
          <SearchBoxDropdown imageSrc={bedroomIcon} seachHeading="Bedrooms" />
          {bedRoomItem && (
            <div className="p-4 rounded-xl grid grid-cols-2 bg-white mt-3 absolute z-[1] w-full">
              {bedroomsItems.map((items, index) => {
                return (
                  <div key={index} className="text-base">
                    {items}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 3rd box */}
        <div
          className="relative xl:w-full max-xl:w-full"
          onClick={handleFurnishingItem}
        >
          <SearchBoxDropdown
            imageSrc={bedroomIcon}
            seachHeading="Furnishing & View"
          />
          {furnishingItem && (
            <div className="p-4 rounded-xl grid grid-cols-2 bg-white mt-3 absolute z-[1] w-full">
              {furnishingItems.map((items, index) => {
                return (
                  <div key={index} className="text-base">
                    {items}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <Button
          ButtonText={"Calculate"}
          ButtonClasses={
            "w-max flex items-center text-white justify-center max-h-[58px] max-xl:w-full max-md:py-3"
          }
        ></Button>
      </div>

      {/* Custom slider input with 4 values 90,180,270,360 days */}
      <div className="flex flex-col">
        <label
          htmlFor="minmax-range"
          className={` text-xl ${josefin.className} my-6`}
        >
          How many days a year your property be available for rent?
        </label>
        <input
          id="minmax-range"
          type="range"
          min="90"
          max="365"
          className="slider w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-500 accent-gray-700 "
        />

        <div className="flex justify-between w-full pt-2">
          <div className="text-base">90 Days</div>
          <div className="text-base">180 Days</div>
          <div className="text-base">270 Days</div>
          <div className="text-base">360 Days</div>
        </div>
      </div>

      {/* Result */}
      <div className="flex flex-col mt-6 items-center">
        <div className="text-4xl bg-gray-200 w-full p-5 rounded-md text-center">
          114 756
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
