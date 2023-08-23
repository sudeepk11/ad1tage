"use client";

import { Fragment, useState } from "react";
import FilterOptions from "../Hotel/filterOptions";
import CardWithSlider from "../Common/CardWithSlider";
import Image from "next/image";
import mapImg from "../../images/map-img-2.png";
import mapOverlay from "../../images/appartment-icon.png";

export default function GridProvider({ children }) {
  const [mapView, setMapView] = useState(false);
  return (
    <Fragment>
      <FilterOptions mapView={mapView} changeMapView={setMapView} />
      {mapView ? (
        <div className="grid grid-cols-2 gap-6 max-md:flex max-md:flex-col-reverse max-lg:grid-col-2">
          <div className="grid lg:grid-cols-2 gap-6 ">{children}</div>
          <div className="md:sticky top-0 right-0 h-max">
            <Image src={mapImg} alt="" className="w-full rounded-[16px]" />
            <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] max-lg:hidden">
              <Image src={mapOverlay} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6 hotel-suggestion max-md:grid-cols-1 max-lg:grid-cols-2">
          {children}
        </div>
      )}
    </Fragment>
  );
}
