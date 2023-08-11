import Image from "next/image";
import React from "react";
import { josefin } from "../../utils/utilsFonts";

const Listing = (props: any) => {
  return (
    <>
      <div className="flex">
        <Image src={props.data.bannerImg} alt="" />
        <div className="w-full ml-5 my-auto">
          <p className={`${josefin.className}`}>{props.data.headingName}</p>
        </div>
      </div>
    </>
  );
};

export default Listing;
