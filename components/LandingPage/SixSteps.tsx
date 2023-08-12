import React from "react";
import email from "../../Assets/Icons/email.png";
import bolt from "../../Assets/Icons/bolt.png";
import bar from "../../Assets/Icons/bar.png";
import smiley from "../../Assets/Icons/smiley.png";
import command from "../../Assets/Icons/command.png";
import chat from "../../Assets/Icons/chat.png";

import { josefin } from "../../utils/utilsFonts";
import Image from "next/image";
import Button from "../Common/Button";

const items = [
  {
    title: "News & Updates",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: email,
  },
  {
    title: "Verified Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: bolt,
  },
  {
    title: "Easy to Use",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: bar,
  },
  {
    title: "Save Time",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: smiley,
  },
  {
    title: "Save Money",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: command,
  },
  {
    title: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: chat,
  },
];

const SixSteps = () => {
  return (
    <div className="py-[140px]">
      <div className=" py-[60px] px-[50px] max-lg:px-4 max-lg:py-10 hotel-suggestion">
        <h2
          className={` ${josefin.className} text-[40px] text-center text-black max-lg:text-[32px] max-lg:leading-[35px] mb-[30px]`}
        >
          Why SeniorSpot?
        </h2>
        <p className="text-[18px] font-light text-center">
          Navigating Life's Next Chapter - Your Gateway to Tailored Services for
          Seniors.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 lg:px-[124px] gap-[40px]">
        {items.map((item, index) => (
          <div className="flex flex-col items-center my-3">
            <Image src={item.icon} alt="icon" />
            <h3 className="font-semibold">{item.title}</h3>
            <p className=" text-gray-500 text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SixSteps;
