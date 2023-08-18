"use client"
import Image from "next/image";
import React, { useState } from "react";
import sliderImg from "../../images/slider-img.png";
import sliderImg1 from "../../images/kitchen-img-2.png";
import sliderImg2 from "../../images/hero.png";
import sliderImg3 from "../../images/login-form-img-1.png";
import startImg from "../../images/star-icon.png";
import startOutlineImg from "../../images/Star-outline.png";
import heartImg from "../../images/heart-icon-outline.png";
import filledHeartImg from "../../images/heart-icon.png";
import Link from "next/link";
import { josefin } from "../../utils/utilsFonts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CardWithSlider = (props) => {
  const [filled, setFilled] = useState(props.likeButton)

  return (
    <div className="bg-white rounded-[16px] overflow-hidden hotel-card-design shadow-lg">
      <Slider {...settings}>
        <div className="relative before:bg-slider-overlay before:absolute before:h-full before:w-full before:top-0 before:left-0">
          <Image
            className="w-full h-[240px] object-cover"
            src={sliderImg}
            alt=""
          />
        </div>

        <div className="relative before:bg-slider-overlay before:absolute before:h-full before:w-full before:top-0 before:left-0">
          <Image
            className="w-full h-[240px] object-cover"
            src={sliderImg1}
            alt=""
          />
        </div>

        <div className="relative before:bg-slider-overlay before:absolute before:h-full before:w-full before:top-0 before:left-0">
          <Image
            className="w-full h-[240px] object-cover"
            src={sliderImg2}
            alt=""
          />
        </div>

        <div className="relative before:bg-slider-overlay before:absolute before:h-full before:w-full before:top-0 before:left-0">
          <Image
            className="w-full h-[240px] object-cover"
            src={sliderImg3}
            alt=""
          />
        </div>
      </Slider>
      {/* <div className="text-white bg-black bg-opacity-50 px-[11px] py-[3px] -mt-[45px] relative z-1 w-max ml-4 rounded-2xl mb-[10px]">
        $12.00<span className="text-secondary">/Month</span>
      </div> */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between rating-like ">
          <div className="flex gap-1 mb-2 starts">
            {props.rating === "5.0" ? (
              <>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" fill="#2A86DB" stroke="#2A86DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" fill="#2A86DB" stroke="#2A86DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" fill="#2A86DB" stroke="#2A86DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" fill="#2A86DB" stroke="#2A86DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" fill="#2A86DB" stroke="#2A86DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


              </>
            ) 
             
             : (
              ""
            )}
            <span className="ml-2 font-medium">{props.rating}</span>
          </div>
          <div className="cursor-pointer">
            {props.likeButton === "filled" ? (


              <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8401 3.60999C20.3294 3.099 19.7229 2.69364 19.0555 2.41708C18.388 2.14052 17.6726 1.99817 16.9501 1.99817C16.2276 1.99817 15.5122 2.14052 14.8448 2.41708C14.1773 2.69364 13.5709 3.099 13.0601 3.60999L12.0001 4.66999L10.9401 3.60999C9.90843 2.5783 8.50915 1.9987 7.05012 1.9987C5.59109 1.9987 4.19181 2.5783 3.16012 3.60999C2.12843 4.64169 1.54883 6.04096 1.54883 7.49999C1.54883 8.95903 2.12843 10.3583 3.16012 11.39L4.22012 12.45L12.0001 20.23L19.7801 12.45L20.8401 11.39C21.3511 10.8792 21.7565 10.2728 22.033 9.60535C22.3096 8.93789 22.4519 8.22248 22.4519 7.49999C22.4519 6.77751 22.3096 6.0621 22.033 5.39464C21.7565 4.72718 21.3511 4.12075 20.8401 3.60999Z" fill="#2A86DB" stroke="#2A86DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z"
                  stroke="#2A86DB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <Link href={`property-details/1Aserdwaaxxde${props.id}`}>
          <p className={`text-base mt-1`}>{props.paraText}</p>
          <p className={` text-gray-600 text-sm`}>{props.subParaText}</p>
          <p className={`text-primary text-[14px] mt-1`}>{props.location}</p>
        </Link>
      </div>
    </div>
  );
};

export default CardWithSlider;
