"use client";
import React from "react";
import LineChartCommon from "./LineChartCommon";
import Rating from "../Common/Rating";
import Reviews from "./Reviews";
import ListingImg1 from "../../images/admin-listing1.png";
import ListingImg2 from "../../images/admin-listing2.png";
import Listing from "./Listing";
import { josefin } from "../../utils/utilsFonts";
import primaryArrowDown from "../../images/primary-arrow-down.png";
import Image from "next/image";
import BarChartCommon from "../Common/BarChartCommon";
const reviewArr = [
  {
    headingName: "By Waqas L",
    headingDetails:
      "stayed at Luxurious 1 BR Apt at Adress Residence Jumeirah Resort in May 2023",
    review:
      "Location and apartment is amazing and Anna’s keep things updated I give 5star highly recommended",
  },
  {
    headingName: "By Mirette A",
    headingDetails:
      "stayed at Modern | Chic Studio in the heart of Arjan in May 2023",
    review:
      "The place was very clean and the whole prep was was very smooth and organized and it was really easy to reach out to Anna",
  },
];
const listingArr = [
  {
    headingName: "1 Bed Apartment with Stunning View",
    revenue: "$1200.00",
    bannerImg: ListingImg1,
  },
  {
    headingName: "1 Bed Apartment with Stunning View",
    revenue: "$1200.00",
    bannerImg: ListingImg2,
  },
  {
    headingName: "1 Bed Apartment with Stunning View",
    revenue: "$1200.00",
    bannerImg: ListingImg1,
  },
];
const AdminInsights = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
        <p
          className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
        >
          Insights
        </p>
        <div className="justify-between grid-cols-3 lg:grid lg:gap-6">
          <div className="bg-offWhite w-full max-lg:mb-4 h-[185px rounded-2xl overflow-hidden">
            <p className="text-xl font-medium text-center">$0.00</p>
            <p className="text-[10px] text-center">This Month Earning</p>
            <LineChartCommon color="#8FA3CA" dataKey="pv" />
          </div>
          <div className="bg-offWhite w-full max-lg:mb-4 h-[185px] rounded-2xl overflow-hidden">
            <p className="text-xl font-medium text-center">0</p>
            <p className="text-[10px] text-center">30-Day Views</p>
            <LineChartCommon color="#CA8FB2" dataKey="uv" />
          </div>
          <div className="bg-offWhite w-full max-lg:mb-4 h-[185px] rounded-2xl overflow-hidden">
            <p className="text-xl font-medium text-center">0</p>
            <p className="text-[10px] text-center">30-Day Bookings</p>
            <LineChartCommon color="#8FCAB5" dataKey="amt" />
          </div>

        </div>
        <div className="grid justify-between gap-4 mt-6 mb-2 lg:grid-cols-3 max-lg:grid-cols-1">
          <div className="col-span-1 p-5 bg-offWhite rounded-xl max-md:p-3">
            <div className="flex justify-between mb-5">
              <p className="mr-10 font-semibold leading-9 text-black md:text-2xl max-md:text-lg">
                Reviews
              </p>
              <div className="flex flex-wrap content-center max-md:justify-end">
                <Rating />
                <p className="text-2xl font-medium leading-9 text-black">4.0</p>
                <p className="ml-1 text-base font-normal leading-9 text-darkGrey">
                  (21 Reviews)
                </p>
              </div>
            </div>
            {reviewArr &&
              reviewArr.length &&
              reviewArr.map((data, idx) => {
                return (
                  <div key={idx} className="my-4">
                    <Rating />
                    <Reviews data={data} />
                  </div>
                );
              })}
            <button className="flex px-3 py-2 text-xs font-medium border rounded md:hidden text-primary border-primary">
              See More
              <Image
                className="object-contain ml-2"
                src={primaryArrowDown}
                alt=""
              />
            </button>
          </div>
       
          <div className="bg-offWhite w-full max-lg:mb-4 p-3 rounded-2xl overflow-hidden">
            <p className="text-[10px] text-center">Property Revenue Insights</p>
            <BarChartCommon color="#8FCAB5" dataKey="amt" />
          </div>
   
          <div className="p-5 bg-offWhite rounded-xl max-md:p-3">
            <p className="mb-5 font-semibold leading-9 text-black max-md:text-lg md:text-2xl lg:flex-wrap">
              Listings
            </p>
            {listingArr &&
              listingArr.length &&
              listingArr.map((data, idx) => {
                return (
                  <div key={idx} className="mb-5">
                    <Listing data={data} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminInsights;
