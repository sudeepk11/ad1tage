import React from "react";
import axios from "axios";
import { josefin } from "../../utils/utilsFonts";
import Button from "../../components/Common/Button";
import CardWithSlider from "../../components/Common/CardWithSlider";
import { notFound } from "next/navigation";
import { Service } from "../../types/services";
import GridProvider from "../../components/Layout/GridProvider";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function Services() {
  let services: Service[] = [];
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/services`
    );
    services = data.data;
  } catch (err) {
    return notFound();
  }
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px]">
      <div className="hotel-suggestion py-16">
        <h2
          className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-md:text-[22px] max-lg:leading-[35px] mb-[30px] font-semibold`}
        >
          Top services nearby
        </h2>
        <GridProvider withMap>
          {services.map((item) => (
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
