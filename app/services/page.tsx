"use client";
import React from "react";
import axios from "axios";
import { josefin } from "../../utils/utilsFonts";
import { notFound } from "next/navigation";
import { Service } from "../../types/services";
import SearchServicesBox from "../../components/Services/searchServicesBox";
import Button from "../../components/Common/Button";
import Link from "next/link";
import locationIcon from "../../Assets/Icons/location.png";

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
        <div className="flex gap-2 justify-between items-center mb-[30px]">
          <h2
            className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-md:text-[22px] max-lg:leading-[35px] font-semibold`}
          >
            All Services
          </h2>
          <Link href="/services/top-services">
            <Button
              ButtonText={"Find Services near me"}
              icon={locationIcon}
              logo={locationIcon}
              ButtonClasses={
                "lg:w-max !bg-blue-100 text-[#2A86DB] font-semibold w-full h-fit flex items-center justify-center py-1"
              }
            ></Button>
          </Link>
        </div>
        <SearchServicesBox services={services} />
      </div>
    </div>
  );
}
