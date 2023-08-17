import Image from "next/image";
import React from "react";
import sliderImg from "../../images/slider-img.png";
import Link from "next/link";
import { josefin } from "../../utils/utilsFonts";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const CategoryCard = (props) => {
  return (
    <div className="bg-white rounded-[16px] hotel-card-design shadow-lg">
      <div className="relative before:bg-slider-overlay before:absolute before:h-fit before:w-full before:top-0 before:left-0">
        <Image
          className="w-full h-full object-contain"
          src={sliderImg}
          alt=""
        />
      </div>

      <Link href={`/`}>
        <p className={`text-base ${josefin.className} mx-3 my-2`}>
          {props.paraText}
        </p>
      </Link>
    </div>
  );
};

export default CategoryCard;
