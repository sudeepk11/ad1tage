import Image from "next/image";
import React, { useState } from "react";
import listIcon from "../../images/list-icon.png";
import listBlackIcon from "../../images/menu-icon-black.png";
import mapIcon from "../../images/map-icon.png";
import mapWhiteIcon from "../../images/map-icon-white.png";
import Dropdown from "../Common/Dropdown";

const FilterOptions = ({ listOrMapView }: any) => {
  const [mapView, setMapView] = useState(false);
  const handleMapView = () => {
    setMapView(!mapView);
  };
  return (
    <div className="flex items-center justify-between mb-10 flex-wrap gap-5">
      <Dropdown />
      <div
        className="flex border rounded-lg border-greyishBrown cursor-pointer"
        onClick={() => {
          handleMapView(), listOrMapView();
        }}
      >
        <div
          className={`flex rounded-lg h-max p-[14px] items-center transition-all ${
            mapView === false
              ? "bg-black text-white"
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
            mapView === true ? "bg-black text-white " : "bg-transparent"
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
