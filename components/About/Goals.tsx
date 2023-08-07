import React from "react";
import { josefin } from "../../utils/utilsFonts";
import { aboutGoal } from "../../utils/utilsItems";
import Button from "../Common/Button";

const Goals = () => {
  return (
    <div className="my-[50px]">
      <h3
        className={`text-[40px] leading-[45px] md:font-bold ${josefin.className} mb-6 max-md:font-semibold max-md:text-[32px]`}
      >
        Goals
      </h3>
      <ul>
        {aboutGoal.map((items) => {
          return (
            <div key={items.id} className="md:mb-8 ml-5 max-md:mb-5">
              <p
                className="flex items-start md:font-bold text-base mb-4 before:mt-[2px] before:bg-arrow-right-primary before:bg-no-repeat before:bg-center 
              before:w-[20px] before:h-[20px] before:inline-flex before:-ml-[30px] before:mr-[10px] pl-2 max-md:font-semibold"
              >
                {items.title}
              </p>
              <p className="md:font-bold max-md:font-normal text-base mb-4 pl-2">
                {items.content}
              </p>
            </div>
          );
        })}
      </ul>

      <div className="flex justify-between gap-[30px] md:mt-[100px] max-md:mt-[40px]">
        <Button
          ButtonText="Book Now"
          ButtonClasses="md:bg-primary max-md:bg-blackLight max-md:border-blackLight border md:border-primary text-white w-full text-center md:font-bold max-md:font-medium md:py-3 max-md:py-[10px]"
        />
        <Button
          ButtonText="Gallery"
          ButtonClasses="bg-white border md:border-primary max-md:border-blackLight max-md:text-blackLight md:text-primary w-full text-center md:font-bold max-md:font-medium md:py-3 max-md:py-[10px]"
        />
      </div>
    </div>
  );
};

export default Goals;
