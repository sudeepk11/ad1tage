import Image from "next/image";
import React from "react";
import { josefin } from "../../utils/utilsFonts";
import { Service } from "../../types/services";
import Link from "next/link";
import img from "../../images/about-img-2.png";

const Listing = ({ _id, name, city }: Service) => {
  return (
    <Link href={`/service-details/${_id}`} className="flex items-center gap-4">
      <Image
        className="h-[1.5in] w-[1.5in] rounded-xl object-cover"
        src={img}
        alt=""
      />
      <p className={`${josefin.className}`}>
        {name}, {city}
      </p>
    </Link>
  );
};

export default Listing;
