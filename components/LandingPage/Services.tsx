import React from "react";
import Button from "../Common/Button";
import { josefin } from "../../utils/utilsFonts";
import CardWithSlider from "../Common/CardWithSlider";

const Services = ({ title }) => {
  return (
    <div className=" py-16 px-[50px] max-lg:px-4 max-lg:py-10  hotel-suggestion">
      <div className="flex gap-2 justify-between">
        <h2
          className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-md:text-[22px] max-lg:leading-[35px] mb-[30px] font-semibold`}
        >
          {title}
        </h2>
        <Button
          ButtonText={"Show All"}
          ButtonClasses={
            "!bg-blue-100 text-[#2A86DB] font-semibold w-fit flex items-center justify-center max-w-fit max-h-[38px] max-xl:w-full"
          }
        ></Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-md:grid-cols-1 max-lg:grid-cols-2">
        <CardWithSlider
          paraText={"Kle Hospital"}
          location={"Belgaum"}
          subParaText={"Hospitality Service"}
          rating={"5.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"unfilled"}
        />
        <CardWithSlider
          paraText={"Katti Caterers"}
          location={"Mysore"}
          subParaText={"Caterining Service"}
          rating={"5.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"filled"}
        />
        <CardWithSlider
          paraText={"One Stop Caretakers"}
          location={"Bengaluru"}
          subParaText={"Caretaking Service"}
          rating={"5.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"filled"}
        />
        <CardWithSlider
          paraText={"A.K Medicals"}
          location={"Hubli"}
          subParaText={"Medical Service"}
          rating={"5.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"unfilled"}
        />
      </div>
    </div>
  );
};

export default Services;
