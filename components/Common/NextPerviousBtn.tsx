import React from "react";
import arrowRight from "../../images/blog-arrow-right.png";
import arrowRightMobile from "../../images/arrow-with-circle-dark.png";
import arrowLeft from "../../images/secondary-color-arrow.png";
import arrowLeftMobile from "../../images/arrow-with-circle.png";
import Link from "next/link";
import Image from "next/image";

const NextPerviousBtn = ({ prevBtnText, nextBtnText }: any) => {
  return (
    <div className="flex w-full justify-between items-center my-[50px]">
      <Link href="/" className="flex items-center">
        <Image
          className="object-contain w-[55px] max-md:hidden"
          src={arrowLeft}
          alt=""
        />
        <Image
          className="object-contain w-[40px] md:hidden"
          src={arrowLeftMobile}
          alt=""
        />
        <p className="mx-5 text-base text-secondary max-md:mx-3 max-md:text-sm max-md:text-darkGrey">
          {prevBtnText}
        </p>
      </Link>
      <Link href="/" className="flex items-center">
        <p className="mx-5 text-base text-primary max-md:mx-3 max-md:text-sm max-md:text-black">
          {nextBtnText}
        </p>
        <Image
          className="object-contain w-[55px] max-md:hidden"
          src={arrowRight}
          alt=""
        />
        <Image
          className="object-contain w-[40px] md:hidden"
          src={arrowRightMobile}
          alt=""
        />
      </Link>
    </div>
  );
};

export default NextPerviousBtn;
