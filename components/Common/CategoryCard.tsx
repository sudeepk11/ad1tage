import Image from "next/image";
import React from "react";
import sliderImg from "../../images/slider-img.png";
import Link from "next/link";
import { josefin } from "../../utils/utilsFonts";

const CategoryCard = (props) => {
  return (
    <div className="bg-white rounded-[16px] hotel-card-design shadow-lg">
      <Link href={`/categories/${props.id}`}>
        <div className="relative before:bg-slider-overlay before:absolute before:h-fit before:w-full before:top-0 before:left-0 h-[2.5in] rounded-t-[16px] overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            fill
            sizes="100vw"
            src={props.photo}
            alt=""
          />
        </div>

        <p className={`text-lg ${josefin.className} mx-3 my-2`}>
          {props.paraText}
        </p>

        <p className={`text-sm ${josefin.className} text-primary mx-3 my-2`}>
          {props.descText}
        </p>
      </Link>
    </div>
  );
};

export default CategoryCard;
