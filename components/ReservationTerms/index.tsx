import React from "react";
import SubBanner from "../Common/SubBanner";
import subBannerImg from "../../images/sub-banner-img.png";
import subBannerMobileImg from "../../images/sub-banner-mobile-img.png";
import { privacyPolicyContent } from "../../utils/utilsItems";

const ReservationTerms = () => {
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] max-md:py-5 ">
      <SubBanner
        imageDesktopSrc={subBannerImg}
        imageModbileSrc={subBannerMobileImg}
        bannerHeading="Reservation Terms"
        bannerSubHeading="Last updated: February 16, 2023"
      />
      <div className="max-lg:md-10 lg:mt-[70px] lg:px-[74px] max-md:mb-[70px] md:mb-[200px]">
        {privacyPolicyContent.map((items) => {
          return (
            <div key={items.id} className="my-6">
              <h3 className="mb-3 text-base font-semibold">{items.title}</h3>
              <p className="mb-3">{items.contentPara1}</p>
              <p>{items.contentPara2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReservationTerms;
