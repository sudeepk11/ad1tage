import Image from "next/image";
import React from "react";
import aboutImgFifth from "../../images/about-img-5.png";
import { josefin } from "../../utils/utilsFonts";

const Philosophy = () => {
  return (
    <div>
      <h2
        className={`${josefin.className} text-[40px] font-bold md:mb-4 max-md:font-semibold max-md:text-[32px]`}
      >
        Philosophy
      </h2>
      <p className="font-bold text-lg md:mt-8 md:mb-6 max-md:font-normal max-md:text-base max-md:my-6">
        While helping you live like a true local in a new neighborhood or city,
        we elevate each day with exclusive partner services* — from meal kits
        and wine delivery to on-demand fitness and car rentals.
      </p>
      <Image
        src={aboutImgFifth}
        alt=""
        className="object-cover my-[50px] w-full max-md:my-3 min-h-[156px] h-full"
      />
      <p className="font-bold text-lg mt-8 mb-6 max-md:font-normal max-md:text-base">
        Hotels aren’t always hip. Hosts aren’t always reliable. So we’re
        changing the game—with spaces that inspire and delight, that fulfill
        needs without sacrificing style, all while delivering seamless,
        personalized experiences. Check in, request fresh towels, and get dinner
        recommendations—all from your phone.
      </p>
    </div>
  );
};

export default Philosophy;
