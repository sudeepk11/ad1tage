import React from "react";
import axios from "axios";
import { josefin } from "../../utils/utilsFonts";
import Button from "../../components/Common/Button";
import CardWithSlider from "../../components/Common/CardWithSlider";
import { notFound } from "next/navigation";
import { Service } from "../../types/services";
import SearchServicesBox from "../../components/Common/searchServicesBox";
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

  // Filter Results:

  // const filterResults = () => {
  //   console.log("Button Clicked");
  //   let query = input.toLowerCase().split(" ").join("");
  //   let newServices = (services as Service[]).filter(
  //     (item) =>
  //       item.name.toLowerCase().split(" ").join("").includes(query) ||
  //       item.category.category
  //         .toLowerCase()
  //         .split(" ")
  //         .join("")
  //         .includes(query) ||
  //       item.city.toLowerCase().split(" ").join("").includes(query)
  //   );
  //   services = newServices;
  //   // setServices(newServices);
  // };

  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px]">
      <div className="hotel-suggestion py-16">
        <h2
          className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-md:text-[22px] max-lg:leading-[35px] mb-[30px] font-semibold`}
        >
          All Services
        </h2>
        <SearchServicesBox services={services} />
      </div>
    </div>
  );
}
