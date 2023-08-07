import React from "react";
import contactCheckIn from "../../images/check-in.png";
import netflix from "../../images/netflix.png";
import BathroomImg from "../../images/bathroom-toiletries.png";
import kitchenIcon from "../../images/kitchen.png";
import bedRoomIcon from "../../images/premium-linen.png";
import routerImg from "../../images/router-img.png";
import { josefin } from "../../utils/utilsFonts";
import CardImgWithText from "../Common/CardImgWithText";

const EveryThingRightHere = () => {
  return (
    <div className="my-[119px] rounded-[16px] max-lg:my-[80px]">
      <div className="max-w-[405px] w-full mb-[50px] max-lg:mb-[30px]">
        <h2
          className={`text-[40px] max-lg:text-[32px] text-black max-lg:leading-[32px] mb-4 ${josefin.className} `}
        >
          Everything You Need. All Right Here.
        </h2>
        <p className="text-base text-darkGrey">
          {
            " You'll find a range of facilities in your holiday home booked with Trophy Stays."
          }
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:px-[124px] gap-[30px]">
        <CardImgWithText
          cardImage={contactCheckIn}
          cardClass={`bg-lightBrown text-center w-full max-lg:mb-5`}
          cardContentClasses={"px-[27px] py-5"}
          cardHeading={"Contactless Check-In"}
          cardPara={
            "You'll find a range of facilities in your holiday home booked with Trophy Stays."
          }
        />

        <CardImgWithText
          cardImage={bedRoomIcon}
          cardClass={`bg-lightBrown text-center w-full max-lg:mb-5`}
          cardContentClasses={"px-[27px] py-5"}
          cardHeading={"Premium Linen"}
          cardPara={
            "You'll find a range of facilities in your holiday home booked with Trophy Stays."
          }
        />

        <CardImgWithText
          cardImage={routerImg}
          cardClass={`bg-lightBrown text-center w-full max-lg:mb-5`}
          cardContentClasses={"px-[27px] py-5"}
          cardHeading={"Fast Wi-Fi 250 Mbps"}
          cardPara={
            "You'll find a range of facilities in your holiday home booked with Trophy Stays."
          }
        />

        <CardImgWithText
          cardImage={kitchenIcon}
          cardClass={`bg-lightBrown text-center w-full max-lg:mb-5`}
          cardContentClasses={"px-[27px] py-5"}
          cardHeading={"Equipped Kitchen"}
          cardPara={
            "You'll find a range of facilities in your holiday home booked with Trophy Stays."
          }
        />

        <CardImgWithText
          cardImage={netflix}
          cardClass={`bg-lightBrown text-center w-full max-lg:mb-5`}
          cardContentClasses={"px-[27px] py-5"}
          cardHeading={"Smart TV W/ Netflix"}
          cardPara={
            "You'll find a range of facilities in your holiday home booked with Trophy Stays."
          }
        />

        <CardImgWithText
          cardImage={BathroomImg}
          cardClass={`bg-lightBrown text-center w-full max-lg:mb-5`}
          cardContentClasses={"px-[27px] py-5"}
          cardHeading={"Bathroom Toiletries"}
          cardPara={
            "You'll find a range of facilities in your holiday home booked with Trophy Stays."
          }
        />
      </div>
    </div>
  );
};

export default EveryThingRightHere;
