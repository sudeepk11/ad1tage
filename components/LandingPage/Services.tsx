import React from "react";
import { josefin } from "../../utils/utilsFonts";
import CardWithSlider from "../Common/CardWithSlider";

const Services = ({ title }) => {
  return (
    <div className=" py-16 px-[50px] max-lg:px-4 max-lg:py-10  hotel-suggestion">
      <h2
        className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-lg:leading-[35px] mb-[30px] font-semibold`}
      >
        {title}
      </h2>
      <div className="grid grid-cols-4 gap-6 hotel-card-design max-lg:grid-cols-1">
        <CardWithSlider
          paraText={"Kle Hospital"}
          subParaText={"Hospitality Service"}
          rating={"5.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"unfilled"}
        />
        <CardWithSlider
          paraText={"Katti Caterers, Mysore"}
          subParaText={"Caterining Service"}
          rating={"5.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"filled"}
        />
        <CardWithSlider
          paraText={"One Stop Caretakers, Mysore"}
          subParaText={"Caretaking Service"}
          rating={"5.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"filled"}
        />
        <CardWithSlider
          paraText={"A.K Medicals, Mysore"}
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
