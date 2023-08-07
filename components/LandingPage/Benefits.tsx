import React from "react";
import CardImgWithText from "../Common/CardImgWithText";
import profitabilityImg from "../../images/profitability.png";
import flexibilityImg from "../../images/flexibility.png";
import transparencyImg from "../../images/transparency.png";
import { josefin } from "../../utils/utilsFonts";

const LearnMore = () => {
  return (
    <div className="mt-[119px] mb-[61px] rounded-[16px]">
      <div className="max-w-[545px] w-full mb-[50px]">
        <h2
          className={`text-[40px] mb-4 ${josefin.className} max-lg:text-[32px] max-lg:leading-[40px]`}
        >
          Benefits of short and mid-stay rentals
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:px-[124px] gap-[30px]">
        <CardImgWithText
          cardImage={profitabilityImg}
          cardOverlapText={"Profitability"}
          cardClass={`bg-white w-full text-black max-lg:pb-6`}
          cardContentClasses={"py-3"}
          cardPara={
            "Landlords earn much higher returns doing the short-term versus long-term – it can range between 30-50 percent."
          }
          //   cardContent={"Read More"}
          cardLink={"/"}
        />

        <CardImgWithText
          cardImage={flexibilityImg}
          cardOverlapText={"Flexibility"}
          cardClass={`bg-white w-full text-black max-lg:pb-6`}
          cardContentClasses={"py-3"}
          cardPara={
            "You choose the days, weeks, or months to rent. Rent as much or as little as you choose. You can use your property anytime you need it."
          }
          //   cardContent={"Read More"}
          cardLink={"/"}
        />

        <CardImgWithText
          cardImage={transparencyImg}
          cardOverlapText={"Transparency"}
          cardClass={`bg-white w-full text-black max-lg:pb-6`}
          cardContentClasses={"py-3"}
          cardPara={
            "No hidden fees, we charge one management fee and we give you access to our online landlord portal with live updates on generated revenue."
          }
          //   cardContent={"Read More"}
          cardLink={"/"}
        />
      </div>
    </div>
  );
};

export default LearnMore;
