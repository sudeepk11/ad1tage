"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CardWithSlider from "../Common/CardWithSlider";
import Button from "../Common/Button";
import SearchBox from "../Common/SearchBox";
import FilterImgTile from "./filterImgTile";
import FilterOptions from "./filterOptions";
import mapImg from "../../images/map-img-2.png";
import mapOverlay from "../../images/appartment-icon.png";
import CategoryCard from "../Common/CategoryCard";
import { josefin } from "../../utils/utilsFonts";
import {getUsers} from '../../service/service.js';
const CategoriesListing = () => {

  
   useEffect(() => {
    getUsers()
    .then((res) => {
      console.log(res)
    })
    
   },[])
  const categories = [
    {
      name: 'Health Care',
      description: 'Services and resources related to medical care, health insurance, specialists, and wellness programs for senior citizens.'
    },
    {
      name: 'Social Activities',
      description: 'Opportunities for senior citizens to engage in social interactions, join clubs, participate in recreational activities, and attend events.'
    },
    {
      name: 'Financial Planning',
      description: 'Guidance and advice on managing finances during retirement, investments, estate planning, and pension-related information.'
    },
    {
      name: 'Housing Options',
      description: 'Information about various housing choices for senior citizens, including retirement communities, assisted living, and nursing homes.'
    },
    {
      name: 'Transportation',
      description: 'Transportation services catering to senior citizens, such as accessible public transportation, senior discounts, and specialized shuttle services.'
    },
    {
      name: 'Caregiver Support',
      description: 'Resources and assistance for family members and caregivers of senior citizens, including respite care, support groups, and training.'
    }

  ];
  
  return (
    <div className="hotel-suggestion py-16">
      <div className="flex justify-between">
        <h2
          className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-md:text-[22px] max-lg:leading-[35px] mb-[30px] font-semibold`}
        >
          Categories
        </h2>
        <Button
          ButtonText={"Showing Near Bangalore"}
          ButtonClasses={
            "!bg-white text-[#2A86DB] font-semibold w-fit flex items-center justify-center max-w-fit max-h-[38px] max-xl:w-full"
          }
        ></Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 hotel-card-design max-lg:grid-cols-1">
        {categories.map((category , i) => (
          <CategoryCard key={i} id={i} paraText={`${category.name}`} descText = {category.description}  />
        ))}
      </div>

      {/* Top Categories */}
      <h2
        className={`mb-4 ${josefin.className} text-[32px] text-primary  max-lg:text-[32px] max-lg:leading-[35px] mt-[50px] font-semibold`}
      >
        Top Services Across Categories
      </h2>
      {categories.map((category, index) => {
        return (
          <div key={index} className="hotel-suggestion py-5">
            <div className="flex justify-between">
              <h2
                className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-md:text-[22px] max-lg:leading-[35px] mb-[30px] font-semibold`}
              >
                {category.name}
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
                    rating={"4.3"}
                    id={i}
                    perRoomUserCount={"2 sleeps"}
                    bedCount={"1 Bedroom"}
                    bathCount={"1 Bath"}
                    likeButton={false}
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
