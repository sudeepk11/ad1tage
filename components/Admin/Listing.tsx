"use client";
import Image from "next/image";
import React from "react";
import { josefin } from "../../utils/utilsFonts";
import { Service } from "../../types/services";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../images/about-img-2.png";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Listing = ({ _id, name, city, category, photos }: Service) => {
  return (
    <Link href={`/service-details/${_id}`} className="grid grid-cols-3 gap-4">
      <Slider {...settings}>
        {photos.map((item) => (
          <div
            className="relative before:bg-slider-overlay before:absolute w-full"
            key={item + "wrapper"}
          >
            <Image
              className="h-[1.5in] w-[1.5in] rounded-xl object-cover"
              src={item}
              alt=""
              key={item}
              width={200}
              height={200}
            />
          </div>
        ))}
      </Slider>
      <div className="col-span-2 py-3">
        <p className={` ${josefin.className}`}>{name}</p>
        <p className=" text-gray-600 text-sm">{category.category}</p>
        <p className="text-primary text-[14px] mt-1">{city}</p>
      </div>
    </Link>
  );
};

export default Listing;
