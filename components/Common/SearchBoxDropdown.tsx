import Image from "next/image";
import React from "react";

const SearchBoxDropdown = ({ imageSrc, seachHeading }) => {
  return (
    <div className="flex p-4 border rounded-lg border-greyishBrown relative cursor-pointer xl:w-auto w-full max-md:py-2">
      <Image src={imageSrc} alt="" className="mr-3 object-contain" />
      <p className="text-base text-darkGrey after:bg-down-arrow after:absolute after:top-[50%] after:right-[22px] after:-translate-y-2/4 after:w-3 after:bg-no-repeat after:h-2 after:bg-center">
        {seachHeading}
      </p>
    </div>
  );
};

export default SearchBoxDropdown;
