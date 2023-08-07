import React from "react";
import CardImgWithText from "../Common/CardImgWithText";
import WFHIcon from "../../images/work-from-home.png";
import festiveSeasonImg from "../../images/festive-season.png";
import kitchenImg from "../../images/kitchen-img-2.png";
import { josefin } from "../../utils/utilsFonts";

const LearnMore = () => {
  return (
    <div className="mt-[119px] mb-[61px] rounded-[16px]">
      <div className="max-w-[545px] w-full mb-[50px]">
        <h2
          className={`text-[40px] mb-4 ${josefin.className} max-lg:text-[32px] max-lg:leading-[40px]`}
        >
          Learn more about the passion that powers us
        </h2>
        {/* <p className="text-base text-darkGrey">
          {
            " You'll find a range of facilities in your holiday home booked with Trophy Stays."
          }
        </p> */}
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:px-[124px] gap-[30px]">
        <CardImgWithText
          cardImage={WFHIcon}
          cardClass={`bg-white w-full text-black max-lg:pb-6`}
          cardContentClasses={"py-3"}
          cardPara={
            "Tips from our interior designers on optimizing your WFH space"
          }
          cardContent={"Read More"}
          cardLink={"/"}
        />

        <CardImgWithText
          cardImage={festiveSeasonImg}
          cardClass={`bg-white w-full text-black max-lg:pb-6`}
          cardContentClasses={"py-3"}
          cardPara={
            "Kick Off Festival Season with Sonder at Coachella and Stagecoach 2023"
          }
          cardContent={"Read More"}
          cardLink={"/"}
        />

        <CardImgWithText
          cardImage={kitchenImg}
          cardClass={`bg-white w-full text-black max-lg:pb-6`}
          cardContentClasses={"py-3"}
          cardPara={
            "The rise of hybrid and remote working, as well as travellers combining business."
          }
          cardContent={"Read More"}
          cardLink={"/"}
        />
      </div>
    </div>
  );
};

export default LearnMore;
