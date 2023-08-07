import Image from "next/image";
import React from "react";
import { josefin } from "../../utils/utilsFonts";

const ImageText = ({
  imgeSrc,
  imgTextClasses,
  headingText,
  paraText,
  subHeading,
  dateText,
}: any) => {
  return (
    <div className={`flex max-md:flex-col md:gap-[100px] ${imgTextClasses}`}>
      <div className="max-md:w-full md:basis-6/12">
        <Image
          src={imgeSrc}
          alt=""
          className="object-cover rounded-lg h-full w-full"
        />
      </div>

      <div className="max-md:w-full md:basis-6/12">
        <h6 className="text-darkGrey text-lg max-md:my-3 md:my-6 max-md:text-base">
          {headingText}
        </h6>
        <h2
          className={`text-black text-[56px] max-md:text-4xl max-md:leading-9 leading-[56px] ${josefin.className} mb-4`}
        >
          {subHeading}
        </h2>
        <span className="text-primary text-lg my-4 max-md:text-sm">
          {dateText}
        </span>
        <p className="text-base mt-4">{paraText}</p>
      </div>
    </div>
  );
};

export default ImageText;
