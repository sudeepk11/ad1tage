import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardImgWithText from "../Common/CardImgWithText";

import Step1 from "../../images/step1.png";
import Step2 from "../../images/step2.png";
import Step3 from "../../images/step3.png";

import { josefin } from "../../utils/utilsFonts";
import arrowLeft from "../../images/arrow-with-circle.png";
import arrowRight from "../../images/arrow-with-circle-dark.png";
import Image from "next/image";
import Button from "../Common/Button";

const SixSteps = () => {
  return (
    <div className="py-[140px]">
      <div className="flex items-center justify-between">
        <h2
          className={`text-[40px] mb-4 max-w-[452px] w-full ${josefin.className} max-lg:text-[32px] max-lg:leading-[40px]`}
        >
          Six easy steps to start
          <p className="text-[18px] font-light">
            Six easy steps to start For you to become a partner and tap into the
            upside of your asset
          </p>
        </h2>

        <div className="flex gap-6 pr-[124px] cursor-pointer max-lg:hidden">
          <Image className="object-contain w-[55px]" src={arrowLeft} alt="" />
          <Image className="object-contain w-[55px]" src={arrowRight} alt="" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 lg:px-[124px] gap-[30px]">
        <CardImgWithText
          cardClass="bg-lightBrown px-[27px] pb-11"
          cardImage={Step1}
          stepName={1}
          cardImageStyle="h-7 object-contain mt-[65px] mb-10"
          cardHeading="Submit Your Property for Review"
          cardHeadingStyle="text-center"
          reviewUserNameStyling="text-primary text-base text-center pb-4"
          cardPara="Share with us your property details to help us to evaluate how much your property can earn."
          cardParaStyle={"text-darkGrey text-center"}
        />

        <CardImgWithText
          cardClass={`bg-lightBrown px-[27px] pb-11`}
          stepName={2}
          cardImage={Step2}
          cardImageStyle="h-7 object-contain mt-[65px] mb-10"
          cardHeading="Onboarding"
          cardHeadingStyle="text-center"
          reviewUserName=""
          reviewUserNameStyling="text-primary text-base text-center pb-4"
          cardPara="As we agree on the terms of our partnership, our design team will start to design and prepare your property."
          cardParaStyle="text-darkGrey text-center"
        />

        <CardImgWithText
          cardClass={`bg-lightBrown px-[27px] pb-11`}
          cardImage={Step3}
          stepName={3}
          cardImageStyle="h-7 object-contain mt-[65px] mb-10"
          cardHeading="Listing Creation"
          cardHeadingStyle="text-center"
          reviewUserNameStyling="text-primary text-base text-center pb-4"
          cardPara="We will create listing of your property, take professional pastures ensuring it stands out on all booking platforms."
          cardParaStyle="text-darkGrey text-center"
        />

        <CardImgWithText
          cardClass={`bg-lightBrown px-[27px] pb-11`}
          cardImage={Step3}
          stepName={4}
          cardImageStyle="h-7 object-contain mt-[65px] mb-10"
          cardHeading="Listing Creation"
          cardHeadingStyle="text-center"
          reviewUserNameStyling="text-primary text-base text-center pb-4"
          cardPara="We will create listing of your property, take professional pastures ensuring it stands out on all booking platforms."
          cardParaStyle="text-darkGrey text-center"
        />

        <CardImgWithText
          cardClass={`bg-lightBrown px-[27px] pb-11`}
          cardImage={Step3}
          stepName={5}
          cardImageStyle="h-7 object-contain mt-[65px] mb-10"
          cardHeading="Listing Creation"
          cardHeadingStyle="text-center"
          reviewUserNameStyling="text-primary text-base text-center pb-4"
          cardPara="We will create listing of your property, take professional pastures ensuring it stands out on all booking platforms."
          cardParaStyle="text-darkGrey text-center"
        />

        <CardImgWithText
          cardClass={`bg-lightBrown px-[27px] pb-11`}
          cardImage={Step3}
          stepName={6}
          cardImageStyle="h-7 object-contain mt-[65px] mb-10"
          cardHeading="Listing Creation"
          cardHeadingStyle="text-center"
          reviewUserNameStyling="text-primary text-base text-center pb-4"
          cardPara="We will create listing of your property, take professional pastures ensuring it stands out on all booking platforms."
          cardParaStyle="text-darkGrey text-center"
        />
      </div>

      <Button
        className="my-20"
        ButtonText={"Contact Us"}
        ButtonClasses={
          "w-fit flex items-center text-white justify-center max-h-[58px] max-xl:w-full mx-auto mt-10"
        }
      ></Button>
    </div>
  );
};

export default SixSteps;
