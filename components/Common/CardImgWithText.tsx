import Image from "next/image";
import Link from "next/link";
import React from "react";
import { josefin } from "../../utils/utilsFonts";

const CardImgWithText = ({
  cardClass,
  cardImage,
  cardImageStyle,
  cardContentClasses,
  cardHeading,
  cardHeadingStyle,
  cardPara,
  cardParaStyle,
  reviewUserName,
  reviewUserNameStyling,
  cardLink,
  cardContent,
  stepName,
  cardOverlapText,
}: any) => {
  return (
    <div className={`rounded-[16px] w-full overflow-hidden ${cardClass}`}>
      {stepName && (
        <p className={`text-md text-primary mt-10 flex justify-center`}>
          Step {stepName}{" "}
        </p>
      )}
      <div className="relative">
        <Image
          className={`filter ${cardImageStyle} w-full brightness-75`}
          src={cardImage}
          alt=""
        />
        <h6 className="text-2xl font-semibold text-white absolute bottom-5 left-1/2 transform -translate-x-1/2">
          {cardOverlapText}
        </h6>
      </div>
      <div className={`${cardContentClasses}`}>
        <h6
          className={`text-2xl tex-black mb-2 ${josefin.className} ${cardHeadingStyle}`}
        >
          {cardHeading}
        </h6>
        {reviewUserName && (
          <>
            <div className={`${reviewUserNameStyling}`}>{reviewUserName}</div>
            <div className="mx-auto w-[40px] h-px text-center bg-[#E1D9CE] text-[#E1D9CE] mb-4"></div>
          </>
        )}
        <p className={`text-sm ${cardParaStyle} `}>{cardPara}</p>
      </div>
      {cardLink && (
        <Link className="text-sm underline text-primary" href={cardLink}>
          {cardContent}
        </Link>
      )}
    </div>
  );
};

export default CardImgWithText;
