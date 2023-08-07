import Image from "next/image";
import React from "react";
import { josefin } from "../../utils/utilsFonts";

const Listing = (props: any) => {
  return (
    <>
      <div className="flex">
        <Image src={props.data.bannerImg} alt="" />
        <div className="w-full ml-5">
          <p className={`${josefin.className}`}>{props.data.headingName}</p>
          <div className="flex flex-wrap justify-between gap-4 mt-3">
            <p className="text-darkGrey max-md:text-sm">Revenue:</p>{" "}
            <p className="text-primary max-md:text-sm max-md:font-medium md:font-semibold">
              {props.data.revenue}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
