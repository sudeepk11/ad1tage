"use client";

import Image from "next/image";
import Slider from "react-slick";
import sliderImg from "../../images/fujairah.png";
import sliderImg1 from "../../images/fujairah.png";
import { Map, GeolocateControl, MapRef, Marker } from "react-map-gl";
import { useRef, useEffect, useState } from "react";
import { Coords } from "../../types/general";
import { Service } from "../../types/services";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  variableWidth: true,
};

export default function VisualHeader({
  latitude,
  longitude,
  photos,
}: Coords & Pick<Service, "photos">) {
  const mapRef = useRef<MapRef | null>(null);
  const [userCoords, setUserCoords] = useState<Coords | null>(null);

  useEffect(() => {
    if (!mapRef.current || !userCoords) return;
    mapRef.current.setCenter({
      lat: userCoords.latitude,
      lon: userCoords.longitude,
    });
  }, [userCoords, mapRef.current]);
  console.log(photos);

  return (
    <div className="grid grid-cols-12 gap-6 relative overflow-hidden property-detail hotel-suggestion w-[98%] mx-auto my-5">
      <Slider {...settings} className="h-[450px] md:col-span-7 col-span-12">
        {photos.map((item) => (
          <Image
            className="w-full object-cover h-[450px] md:!w-[60vw] rounded-lg"
            src={sliderImg}
            alt=""
            key={item}
          />
        ))}
      </Slider>
      <div
        id="map-container"
        className=" md:sticky right-0 md:order-2 order-1 sw-full h-[450px] rounded-lg col-span-5"
      >
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 7,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
          mapLib={import("mapbox-gl")}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          ref={(ref) => ref && (mapRef.current = ref)}
        >
          <GeolocateControl
            trackUserLocation
            positionOptions={{ enableHighAccuracy: true }}
            showUserHeading
            onGeolocate={(e) =>
              setUserCoords({
                latitude: e.coords.latitude,
                longitude: e.coords.longitude,
              })
            }
          />
          {/* <Marker anchor="bottom" latitude={latitude} longitude={longitude} /> */}
        </Map>
      </div>
    </div>
  );
}
