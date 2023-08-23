import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import listIcon from "../../images/list-icon.png";
import listBlackIcon from "../../images/menu-icon-black.png";
import mapIcon from "../../images/map-icon.png";
import mapWhiteIcon from "../../images/map-icon-white.png";
import Dropdown from "../Common/Dropdown";

type Props = {
  mapView: boolean;
  changeMapView: Dispatch<SetStateAction<boolean>>;
};

const FilterOptions = ({ mapView, changeMapView }: Props) => {
  return (
    <div className="flex items-center justify-between mb-10 flex-wrap gap-5">
      <Dropdown />
      <div
        className="flex border rounded-lg border-greyishBrown cursor-pointer"
        onClick={() => changeMapView((prev) => !prev)}
      >
        <div
          className={`flex rounded-lg h-max p-[14px] items-center transition-colors ${
            mapView === false
              ? "bg-primary text-white"
              : "bg-transparent text-black"
          }`}
        >
          {mapView ? (
            <Image
              className="object-contain h-[17px] mr-[10px]"
              src={listBlackIcon}
              alt=""
            />
          ) : (
            <Image
              className="object-contain h-[17px] mr-[10px]"
              src={listIcon}
              alt=""
            />
          )}

          <p>List</p>
        </div>
        <div
          className={`flex rounded-lg h-max p-[14px] items-center transition-all ${
            mapView === true ? "bg-primary text-white " : "bg-transparent"
          }`}
        >
          {mapView ? (
            <Image
              className="object-contain h-[17px] mr-[10px]"
              src={mapWhiteIcon}
              alt=""
            />
          ) : (
            <Image
              className="object-contain h-[17px] mr-[10px]"
              src={mapIcon}
              alt=""
            />
          )}
          <p>Map</p>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
