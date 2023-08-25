import React from "react";
import axios from "axios";
import { Category } from "../../types/categories";
import { josefin } from "../../utils/utilsFonts";
import Button from "../../components/Common/Button";
import CategoryCard from "../../components/Common/CategoryCard";
import CardWithSlider from "../../components/Common/CardWithSlider";
import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function Categories() {
  let categories: Category[] = [];
  try {
    const { data } = await axios.get(`${API_URL}/categories`);
    categories = data.data;
    console.log(data.data);
  } catch (err) {
    console.log(err.response);
    return notFound();
  }
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px]">
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
          {categories.map((category, i) => (
            <CategoryCard
              key={i}
              id={category._id}
              paraText={`${category.category}`}
              descText={category.desc}
            />
          ))}
        </div>

        {/* Top Categories */}
        <h2
          className={`mb-4 ${josefin.className} text-[32px] text-primary  max-lg:text-[32px] max-lg:leading-[35px] mt-[50px] font-semibold`}
        >
          Top Services Across Categories
        </h2>
        {categories.map((category, index) => (
          <div key={index} className="hotel-suggestion py-5">
            <div className="flex justify-between">
              <h2
                className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-md:text-[22px] max-lg:leading-[35px] mb-[30px] font-semibold`}
              >
                {category.category}
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
        ))}
      </div>
    </div>
  );
}
