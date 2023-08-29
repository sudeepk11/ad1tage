"use client";
import React from "react";
import axios from "axios";
import { josefin } from "../../../utils/utilsFonts";
import Button from "../../../components/Common/Button";
import CardWithSlider from "../../../components/Common/CardWithSlider";
import { notFound } from "next/navigation";
import { Service } from "../../../types/services";
import GridProvider from "../../../components/Layout/GridProvider";
import { useNearbyServices } from "../../../providers/NearbyServicesProvider";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Services() {
  const { nearbyServices } = useNearbyServices();
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px]">
      <div className="hotel-suggestion py-16">
        <h2
          className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-md:text-[22px] max-lg:leading-[35px] mb-[30px] font-semibold`}
        >
          Top services nearby
        </h2>
        <GridProvider withMap>
          {!nearbyServices && (
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center">Loading...</h2>
            </div>
          )}
          {nearbyServices && nearbyServices.length === 0 && (
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-center">
                No services found nearby
              </h2>
            </div>
          )}
          {nearbyServices &&
            nearbyServices.map((item) => (
              <CardWithSlider
                paraText={item.name}
                location={item.city}
                subParaText={item.category.category}
                rating={item.rating.toPrecision(2)}
                perRoomUserCount={"2 sleeps"}
                bedCount={"1 Bedroom"}
                bathCount={"1 Bath"}
                photos={item.photos}
                likeButton={"unfilled"}
                id={item._id}
                key={item._id}
              />
            ))}
        </GridProvider>
      </div>
    </div>
  );
}
