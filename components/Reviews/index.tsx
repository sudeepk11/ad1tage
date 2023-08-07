import React from "react";
import SubBanner from "../Common/SubBanner";
import ReviewImg from "../../images/reviews-img.png";
import ReviewMobileImg from "../../images/review-mobile-img.png";
import { reviewArr } from "../../utils/utilsItems";
import Rating from "../Common/Rating";
import Reviews from "../Admin/Reviews";
import NextPerviousBtn from "../Common/NextPerviousBtn";
import ReviewFilterBar from "./ReviewFilterBar";

const Review = () => {
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] max-md:py-5 mb-5">
      <SubBanner
        imageDesktopSrc={ReviewImg}
        imageModbileSrc={ReviewMobileImg}
        bannerHeading="Reviews"
      />
      <div className="lg:px-[74px] md:mt-[100px] max-md:mt-[50px] ">
        <ReviewFilterBar />

        <h6 className="mt-3 mb-5 text-sm text-darkGrey">
          Showing 1 - 10 of 180 reviews
        </h6>
        {reviewArr &&
          reviewArr.length &&
          reviewArr.map((data) => {
            return (
              <div key={data.id} className="my-6">
                <Rating />
                <Reviews data={data} />
              </div>
            );
          })}
        <NextPerviousBtn
          prevBtnText="Older Reviews"
          nextBtnText="Newer Reviews"
        />
      </div>
    </div>
  );
};

export default Review;
