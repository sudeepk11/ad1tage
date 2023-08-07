"use client";
import React from "react";
import subBannerImg from "../../images/sub-banner-img.png";
import subBannerMobileImg from "../../images/sub-banner-mobile-img.png";
import SubBanner from "../Common/SubBanner";
import Button from "../Common/Button";
import searchIcon from "../../images/search.png";
import Image from "next/image";
import Accordion from "../Common/Accordion";
import NextPerviousBtn from "../Common/NextPerviousBtn";

const CustomerHelp = () => {
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] max-md:py-5">
      <SubBanner
        imageDesktopSrc={subBannerImg}
        imageModbileSrc={subBannerMobileImg}
        bannerHeading="Customer Help"
      />
      <div className="lg:px-[74px] max-lg:md-10 mb-[70px] lg:mb-[80px] md:mt-[100px] max-md:mt-[50px]">
        <div className="flex gap-4 bg-white shadow-xl max-md:p-4 md:p-9 rounded-xl mb-[50px] max-md:flex-col">
          <div className="relative w-full ">
            <input
              className="w-full py-3 pl-10 pr-5 border rounded-lg border-greyishBrown"
              type="text"
              placeholder="Search by keyword"
            />
            <Image
              src={searchIcon}
              alt=""
              className="object-cover absolute top-[50%] -translate-y-[50%] w-4 left-3"
            />
          </div>

          <Button
            ButtonText="Search"
            ButtonClasses="text-white w-max flex items-center max-md:w-full justify-center max-md:py-3 md:bg-primary "
          />
        </div>

        <div>
          <p className="mb-5 text-sm text-darkGrey">
            Showing 1 - 10 of 18 questions
          </p>
          <Accordion />
        </div>
      </div>

      <NextPerviousBtn
        prevBtnText="Older Questions"
        nextBtnText="Newer Questions"
      />
    </div>
  );
};

export default CustomerHelp;
