import React from "react";
import { josefin } from "../../utils/utilsFonts";
import CardWithSlider from "../Common/CardWithSlider";
import ShowMore from "./ShowMore";
import { Service } from "../../types/services";
import { notFound } from "next/navigation";
import axios from "axios";

export default async function Services({ title }) {
  let services: Service[] = [];
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/services`
    );
    services = data.data?.slice(0, 4);
  } catch (err) {
    return notFound();
  }

  return (
    <div className=" py-16 px-[50px] max-lg:px-4 max-lg:py-10  hotel-suggestion">
      <div className="flex gap-2 justify-between">
        <h2
          className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-md:text-[22px] max-lg:leading-[35px] mb-[30px] font-semibold`}
        >
          {title}
        </h2>
        <ShowMore url={"/services/top-services"} />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-md:grid-cols-1 max-lg:grid-cols-2">
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
      </div>
    </div>
  );
}
