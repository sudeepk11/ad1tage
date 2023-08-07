"use client";
import Image from "next/image";
import React, { useState } from "react";
import CardWithSlider from "../Common/CardWithSlider";
import SearchBox from "../Common/SearchBox";
import FilterImgTile from "./filterImgTile";
import FilterOptions from "./filterOptions";
import mapImg from "../../images/map-img-2.png";
import mapOverlay from "../../images/appartment-icon.png";

const HotelListing = () => {
  const [mapView, setMapView] = useState(false);

  return (
    <div className="hotel-suggestion">
      <SearchBox searchClasses="mt-[20px] mb-10" />
      <FilterImgTile />
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
            <Image src={mapImg} alt="" className="w-full" />
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
