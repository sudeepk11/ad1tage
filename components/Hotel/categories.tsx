"use client";
import Image from "next/image";
import React, { useState } from "react";
import CardWithSlider from "../Common/CardWithSlider";
import Button from "../Common/Button";
import SearchBox from "../Common/SearchBox";
import FilterImgTile from "./filterImgTile";
import FilterOptions from "./filterOptions";
import mapImg from "../../images/map-img-2.png";
import mapOverlay from "../../images/appartment-icon.png";
import CategoryCard from "../Common/CategoryCard";
import { josefin } from "../../utils/utilsFonts";

const CategoriesListing = () => {
  return (
    <div className="hotel-suggestion py-5">
      <h2
        className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-lg:leading-[35px] mb-[30px] font-semibold`}
      >
        Categories
      </h2>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-6 hotel-card-design max-lg:grid-cols-1">
        {Array.from(Array(18), (e, i) => (
          <CategoryCard key={i} id={i} paraText={`Category ${i}`} />
        ))}
      </div>

      {/* Top Categories */}
      <h2
        className={` ${josefin.className} text-[32px] text-primary  max-lg:text-[32px] max-lg:leading-[35px] mt-[50px] font-semibold`}
      >
        Top Services Across Categories
      </h2>
      {Array.from(Array(3), (category, index) => {
        return (
          <div className="hotel-suggestion py-5">
            <div className="flex justify-between">
              <h2
                className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-lg:leading-[35px] mb-[30px] font-semibold`}
              >
                Category {index + 1}
              </h2>
              <Button
                ButtonText={"Show All"}
                ButtonClasses={
                  "!bg-blue-100 text-[#2A86DB] font-semibold w-fit flex items-center justify-center max-w-fit max-h-[38px] max-xl:w-full"
                }
              ></Button>
            </div>
            <div className="grid grid-cols-4 gap-6 hotel-suggestion max-md:grid-cols-1 max-lg:grid-cols-2">
              {Array.from(Array(4), (e, i) => {
                return (
                  <CardWithSlider
                    paraText={" 1 Bed Apartment with Stunning View"}
                    rating={"5.0"}
                    id={i}
                    perRoomUserCount={"2 sleeps"}
                    bedCount={"1 Bedroom"}
                    bathCount={"1 Bath"}
                    likeButton={"unfilled"}
                    key={`slider-${i}`}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesListing;
