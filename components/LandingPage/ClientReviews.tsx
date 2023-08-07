import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardImgWithText from "../Common/CardImgWithText";
import QuoteIcon from "../../images/quote.png";
import { josefin } from "../../utils/utilsFonts";
import arrowLeft from "../../images/arrow-with-circle.png";
import arrowRight from "../../images/arrow-with-circle-dark.png";
import Image from "next/image";

const ClientReviews = () => {
  return (
    <div className="py-[140px]">
      <div className="flex items-center justify-between">
        <h2
          className={`text-[40px] mb-4 max-w-[452px] w-full ${josefin.className} max-lg:text-[32px] max-lg:leading-[40px]`}
        >
          What Our Clients Says About Us
        </h2>

        <div className="flex gap-6 pr-[124px] cursor-pointer max-lg:hidden">
          <Image className="object-contain w-[55px]" src={arrowLeft} alt="" />
          <Image className="object-contain w-[55px]" src={arrowRight} alt="" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 lg:px-[124px] gap-[30px]">
        <CardImgWithText
          cardClass="bg-lightBrown px-[27px] pb-11"
          cardImage={QuoteIcon}
          cardImageStyle="h-7 object-contain mt-[65px] mb-10"
          cardHeading="Location and apartment is amazing and Anna’s keep things updated I give 5star highly recommended"
          cardHeadingStyle="text-center"
          reviewUserName="By Waqas L"
          reviewUserNameStyling="text-primary text-base text-center pb-4"
          cardPara="stayed at Luxurious 1 BR Apt at Address Residence Jumeirah Resort in May 2023"
          cardParaStyle={"text-darkGrey text-center"}
        />

        <CardImgWithText
          cardClass={`bg-lightBrown px-[27px] pb-11`}
          cardImage={QuoteIcon}
          cardImageStyle="h-7 object-contain mt-[65px] mb-10"
          cardHeading="The place was very clean and the whole prep was was very smooth and organized and it was really easy to.."
          cardHeadingStyle="text-center"
          reviewUserName="By Waqas L"
          reviewUserNameStyling="text-primary text-base text-center pb-4"
          cardPara="Address Residence Jumeirah Resort in May 2023"
          cardParaStyle="text-darkGrey text-center"
        />

        <CardImgWithText
          cardClass={`bg-lightBrown px-[27px] pb-11`}
          cardImage={QuoteIcon}
          cardImageStyle="h-7 object-contain mt-[65px] mb-10"
          cardHeading="Location and apartment is amazing and Anna’s keep things updated I give 5star highly recommended"
          cardHeadingStyle="text-center"
          reviewUserName="By Waqas L"
          reviewUserNameStyling="text-primary text-base text-center pb-4"
          cardPara="stayed at Luxurious 1 BR Apt at Address Residence Jumeirah Resort in May 2023"
          cardParaStyle="text-darkGrey text-center"
        />
      </div>
    </div>
  );
};

export default ClientReviews;
