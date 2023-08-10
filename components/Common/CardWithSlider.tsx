import Image from "next/image";
import React from "react";
import sliderImg from "../../images/slider-img.png";
import sliderImg1 from "../../images/kitchen-img-2.png";
import sliderImg2 from "../../images/hero.png";
import sliderImg3 from "../../images/login-form-img-1.png";
import startImg from "../../images/star-icon.png";
import startOutlineImg from "../../images/Star-outline.png";
import heartImg from "../../images/heart-icon-outline.png";
import filledHeartImg from "../../images/heart-icon.png";
import Link from "next/link";
import { josefin } from "../../utils/utilsFonts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const CardWithSlider = (props) => {
  return (
    <div className="bg-white rounded-[16px] overflow-hidden hotel-card-design shadow-lg">
      <Slider {...settings}>
        <div className="relative before:bg-slider-overlay before:absolute before:h-full before:w-full before:top-0 before:left-0">
          <Image
            className="w-full h-[240px] object-cover"
            src={sliderImg}
            alt=""
          />
        </div>

        <div className="relative before:bg-slider-overlay before:absolute before:h-full before:w-full before:top-0 before:left-0">
          <Image
            className="w-full h-[240px] object-cover"
            src={sliderImg1}
            alt=""
          />
        </div>

        <div className="relative before:bg-slider-overlay before:absolute before:h-full before:w-full before:top-0 before:left-0">
          <Image
            className="w-full h-[240px] object-cover"
            src={sliderImg2}
            alt=""
          />
        </div>

        <div className="relative before:bg-slider-overlay before:absolute before:h-full before:w-full before:top-0 before:left-0">
          <Image
            className="w-full h-[240px] object-cover"
            src={sliderImg3}
            alt=""
          />
        </div>
      </Slider>
      {/* <div className="text-white bg-black bg-opacity-50 px-[11px] py-[3px] -mt-[45px] relative z-1 w-max ml-4 rounded-2xl mb-[10px]">
        $12.00<span className="text-secondary">/Month</span>
      </div> */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between rating-like ">
          <div className="flex gap-1 mb-2 starts">
            {props.rating === "5.0" ? (
              <>
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
              </>
            ) : props.rating === "4.0" ? (
              <>
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image
                  className="object-contain"
                  src={startOutlineImg}
                  alt=""
                />
              </>
            ) : props.rating === "3.0" ? (
              <>
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image
                  className="object-contain"
                  src={startOutlineImg}
                  alt=""
                />
                <Image
                  className="object-contain"
                  src={startOutlineImg}
                  alt=""
                />
              </>
            ) : (
              ""
            )}
            <span>{props.rating}</span>
          </div>
          <div>
            {props.likeButton === "filled" ? (
              <Link href="/">
                <Image src={filledHeartImg} alt="" />
              </Link>
            ) : (
              <Link href="/">
                <Image src={heartImg} alt="" />
              </Link>
            )}
          </div>
        </div>
        <Link href={`property-details/1Aserdwaaxxde${props.id}`}>
          <p className={`text-base ${josefin.className}`}>{props.paraText}</p>
          <p className={`text-base text-gray-400 ${josefin.className}`}>
            {props.subParaText}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CardWithSlider;
