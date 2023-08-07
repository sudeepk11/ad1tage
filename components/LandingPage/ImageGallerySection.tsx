import Image from "next/image";
import React from "react";
import gallerImgOne from "../../images/gallery-img-1.png";
import gallerImgSecond from "../../images/gallery-img-2.png";
import gallerImgThird from "../../images/gallery-img-3.png";
import gallerImgFourth from "../../images/gallery-img-4.png";
import gallerImgFifth from "../../images/gallery-img-5.png";
import gallerImgSixth from "../../images/gallery-img-6.png";
import { josefin } from "../../utils/utilsFonts";

const ImageGallerySection = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-[30px] mb-[30px]">
        <div className="col-span-2 ">
          <h2
            className={`text-[40px] mb-2 ${josefin.className} max-lg:text-[32px] max-lg:leading-[40px] text-black`}
          >
            Discover exciting locations where skyline views, modern luxury, and
            amenities seamlessly merge.
          </h2>
          <p className="text-base text-primary">
            We are happy when our guests are happy.
          </p>
        </div>
        <Image
          className="w-full rounded-[16px] max-lg:max-h-[195px] max-lg:h-full object-cover max-lg:hidden"
          src={gallerImgOne}
          alt=""
        />
        <Image
          className="w-full rounded-[16px] max-lg:max-h-[195px] max-lg:h-full object-cover max-lg:hidden"
          src={gallerImgSecond}
          alt=""
        />
      </div>

      <div className="grid lg:grid-cols-6 gap-[30px] max-lg:grid-cols-3">
        <div className="lg:col-span-3">
          <Image
            className="w-full rounded-[16px] max-lg:max-h-[195px] max-lg:h-full object-cover"
            src={gallerImgThird}
            alt=""
          />
        </div>
        <Image
          className="w-full rounded-[16px] lg:hidden"
          src={gallerImgOne}
          alt=""
        />
        <Image
          className="w-full rounded-[16px] lg:hidden"
          src={gallerImgSecond}
          alt=""
        />
        <Image
          className="w-full rounded-[16px] max-lg:max-h-[195px] max-lg:h-full object-cover"
          src={gallerImgFourth}
          alt=""
        />
        <Image
          className="w-full rounded-[16px] max-lg:max-h-[195px] max-lg:h-full object-cover"
          src={gallerImgFifth}
          alt=""
        />
        <Image
          className="w-full rounded-[16px] max-lg:max-h-[195px] max-lg:h-full object-cover"
          src={gallerImgSixth}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageGallerySection;
