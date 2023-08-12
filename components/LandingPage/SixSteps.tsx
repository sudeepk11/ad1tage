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
    desc: "Stay current with ad1tage's latest updates on services and more, tailored to your needs.",
    icon: email,
  },
  {
    title: "Verified Services",
    desc: "Trust in ad1tage's validated services, ensuring your peace of mind and satisfaction.",
    icon: bolt,
  },
  {
    title: "Easy to Use",
    desc: "Navigate ad1tage effortlessly, simplifying the process of accessing essential services.",
    icon: bar,
  },
  {
    title: "Save Time",
    desc: "With ad1tage, optimize your time management by efficiently finding nearby services.",
    icon: smiley,
  },
  {
    title: "Save Money",
    desc: " Experience cost-effective solutions through ad1tage, enhancing your financial well-being.",
    icon: command,
  },
  {
    title: "24/7 Support",
    desc: "Feel supported around the clock with ad1tage's constant assistance for all your inquiries.",
    icon: chat,
  },
];

const SixSteps = () => {
  return (
    <div className="py-5 pb-20">
      <div className="px-[50px] max-lg:px-4 max-lg:py-10 hotel-suggestion">
        <h2 className={`text-[40px] text-center text-black max-lg:text-[32px] max-lg:leading-[35px] mb-[30px]`}>
          Why ad1tage?
        </h2>
        <p className="text-[18px] font-light text-center">
          Navigating Life's Next Chapter - Your Gateway to Tailored Services for Seniors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-[124px] mt-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4  border-gray-200 rounded-lg">
            <Image src={item.icon} alt="icon" className="w-16 h-16" />
            <h3 className="mt-4 text-xl font-semibold text-center">{item.title}</h3>
            <p className="mt-2 text-gray-500 text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SixSteps;
