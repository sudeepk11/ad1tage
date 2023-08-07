import Image from "next/image";
import Link from "next/link";
import React from "react";
import kitcherIcon from "../../images/kitchen-filter-icon.png";
import homeIcon from "../../images/homes-filter-icon.png";
import campingIcon from "../../images/camping-filter-icon.png";
import mountainIcon from "../../images/mountain-filter-icon.png";
import castlesIcon from "../../images/castles-filter-icon.png";
import lsland from "../../images/island-filter-icon.png";
import farms from "../../images/farms-filter-icon.png";
import lakeView from "../../images/lake-filter-icon.png";

const FilterImgTile = () => {
  return (
    <div className="grid grid-cols-8 mb-10 max-sm:grid-cols-2 max-lg:grid-cols-4 max-sm:items-center max-w-[1190px] w-full mx-auto">
      <Link href="/" className="flex justify-center">
        <Image src={kitcherIcon} alt="" />
      </Link>

      <Link href="/" className="flex justify-center">
        <Image src={homeIcon} alt="" />
      </Link>

      <Link href="/" className="flex justify-center">
        <Image src={campingIcon} alt="" />
      </Link>

      <Link href="/" className="flex justify-center">
        <Image src={mountainIcon} alt="" />
      </Link>

      <Link href="/" className="flex justify-center">
        <Image src={castlesIcon} alt="" />
      </Link>

      <Link href="/" className="flex justify-center">
        <Image src={lsland} alt="" />
      </Link>

      <Link href="/" className="flex justify-center">
        <Image src={farms} alt="" />
      </Link>

      <Link href="/" className="flex justify-center">
        <Image src={lakeView} alt="" />
      </Link>
    </div>
  );
};

export default FilterImgTile;
