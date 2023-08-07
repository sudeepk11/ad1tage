import React from "react";
import { josefin } from "../../utils/utilsFonts";
import emailIcon from "../../images/email-with-bg-icon.png";
import instaIcon from "../../images/email-with-bg-icon.png";
import linkedInIcon from "../../images/linkedin-with-bg-icon.png";
import subBannerImg from "../../images/sub-banner-img.png";
import subBannerMobileImg from "../../images/sub-banner-mobile-img.png";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import SubBanner from "../Common/SubBanner";

const Contact = () => {
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] max-md:py-5">
      <SubBanner
        imageDesktopSrc={subBannerImg}
        imageModbileSrc={subBannerMobileImg}
        bannerHeading="Contact Us"
      />
      <div className="lg:px-[74px] md:mt-[100px] max-md:mt-[50px] ">
        <ContactForm />
      </div>
      <div>
        <h2
          className={`max-md:text-[32px] md:text-[40px] ${josefin.className} mb-10 `}
        >
          Contact or Follow Us
        </h2>
        <div className="bg-lightBrown grid md:grid-cols-3 md:px-[50px] lg:px-[200px] max-md:py-[30px] md:py-[70px] justify-center rounded-2xl mb-[100px]">
          <Link
            href="/"
            className="flex flex-col items-center justify-center relative 
            max-md:after:w-[2px] max-md:after:h-[15%] max-md:after:bottom-0 max-md:after:right-[50%] max-md:pb-[50px]
             md:after:w-[25%] md:after:h-[2px] after:flex after:absolute md:after:right-0 after:bg-greyishBrown"
          >
            <Image src={emailIcon} alt="" className="object-contain mb-5" />
            <p className="underline">hello@trophystays.com</p>
          </Link>

          <Link
            href="/"
            className="relative flex flex-col items-center justify-center 
            max-md:before:w-[2px] max-md:before:h-[15%] max-md:before:top-0 max-md:before:right-[50%]
            max-md:after:w-[2px] max-md:after:h-[15%] max-md:after:bottom-0 max-md:after:right-[50%] max-md:py-[50px]
            md:before:w-[25%] md:before:h-[2px] after:flex before:absolute md:before:left-0 before:bg-greyishBrown
            after:w-[25%] after:h-[2px] after:flex after:absolute after:right-0 after:bg-greyishBrown"
          >
            <Image src={linkedInIcon} alt="" className="object-contain mb-5" />
            <p className="underline">trophy-stays</p>
          </Link>

          <Link
            href="/"
            className="relative flex flex-col items-center justify-center 
            max-md:before:w-[2px] max-md:before:h-[15%] max-md:before:top-0 max-md:before:right-[50%]  max-md:pt-[50px]
            before:w-[25%] before:h-[2px] after:flex before:absolute md:before:left-0 before:bg-greyishBrown"
          >
            <Image src={instaIcon} alt="" className="object-contain mb-5" />
            <p className="underline">@trophystays</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
