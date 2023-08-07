import React from "react";

const Reviews = (props: any) => {
  return (
    <div>
      <p className="leading-6 max-md:text-sm md:text-base font-semibold text-[#292021] my-2">
        {props?.data?.headingName}{" "}
        <span className="max-md:text-sm font-normal text-[#939393]">
          – {props?.data?.headingDetails}
        </span>
      </p>
      <p className="max-md:text-sm leading-6 md:text-base font-normal text-[#292021]">
        {props?.data?.review}
      </p>
    </div>
  );
};

export default Reviews;
