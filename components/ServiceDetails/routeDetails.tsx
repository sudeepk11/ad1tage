"use client";
import React from "react";
import { useMapData } from "../../providers/MapDataProvider";
import Image from "next/image";
import arrowIcon from "../../Assets/Icons/arrow.png";

export const RouteDetails = () => {
  const { mapData } = useMapData();

  const { distance } = mapData?.routes[0] || {};

  return (
    <div className="flex gap-2">
      <Image src={arrowIcon} alt="" className="object-contain" />
      {distance ? (
        <p>{(distance / 1000).toFixed(2)} km</p>
      ) : (
        <p>Calculating...</p>
      )}
    </div>
  );
};
