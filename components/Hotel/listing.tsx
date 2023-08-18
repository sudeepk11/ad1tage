"use client";
import Image from "next/image";
import React, { useState } from "react";
import CardWithSlider from "../Common/CardWithSlider";
import SearchBox from "../Common/SearchBox";
import FilterImgTile from "./filterImgTile";
import FilterOptions from "./filterOptions";
import mapImg from "../../images/map-img-2.png";
import mapOverlay from "../../images/appartment-icon.png";
import { josefin } from "../../utils/utilsFonts";
import Button from "../Common/Button";

const HotelListing = () => {
  const [mapView, setMapView] = useState(false);

  return (
    <div className="hotel-suggestion py-16">
      <div className="flex justify-between">
        <h2
          className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-lg:leading-[35px] max-md:text-[22px] mb-[30px] font-semibold`}
        >
          Category: HealthCare
        </h2>
        <Button
          ButtonText={"Showing Near Bangalore"}
          ButtonClasses={
            "!bg-white text-[#2A86DB] font-semibold w-fit flex items-center justify-center max-w-fit max-h-[38px] max-xl:w-full"
          }
        ></Button>
      </div>
      <FilterOptions listOrMapView={() => setMapView(!mapView)} />
      {mapView === true ? (
        <div className="grid grid-cols-2 gap-6 max-md:flex max-md:flex-col-reverse max-lg:grid-col-2">
          <div className="grid lg:grid-cols-2 gap-6 ">
            {Array.from(Array(12), (e, i) => {
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
          <div className="md:sticky top-0 right-0 h-max">
            <Image src={mapImg} alt="" className="w-full rounded-[16px]" />
            <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] max-lg:hidden">
              <Image src={mapOverlay} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6 hotel-suggestion max-md:grid-cols-1 max-lg:grid-cols-2">
          {Array.from(Array(12), (e, i) => {
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
      )}
    </div>
  );
};

export default HotelListing;
