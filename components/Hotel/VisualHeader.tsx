"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";
import Slider from "react-slick";
import markerStartIcon from "../../Assets/Icons/marker_start.png";
import markerFinishIcon from "../../Assets/Icons/marker_finish.png";

import {
  Map,
  GeolocateControl,
  MapRef,
  Layer,
  Source,
  Marker,
} from "react-map-gl";
import { useRef, useEffect, useState, useCallback } from "react";
import { Coords } from "../../types/general";
import { Service } from "../../types/services";
import { useRouter } from "next/navigation";
import { useMapData } from "../../providers/MapDataProvider";
import axios from "axios";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function VisualHeader({
  latitude,
  longitude,
  photos,
}: Coords & Pick<Service, "photos">) {
  const router = useRouter();
  const { setMapData } = useMapData();
  const mapRef = useRef<MapRef>(null!);
  const geolocationRef = useRef<mapboxgl.GeolocateControl>(null!);
  const [userCoords, setUserCoords] = useState<Coords | null>(null);
  const [duration, setDuration] = useState(0);
  const [route, setRoute] = useState<
    mapboxgl.GeoJSONSourceOptions["data"] | null
  >(null);

  useEffect(() => {
    setMapData(null);
    router.refresh();
  }, []);

  useEffect(() => {
    if (!geolocationRef.current || !mapRef.current) return;
    geolocationRef.current.trigger();
  }, [geolocationRef.current, mapRef.current]);

  useEffect(() => {
    if (!mapRef.current || !userCoords) return;
    fetchRoute();
    mapRef.current.setCenter({
      lat: userCoords.latitude,
      lon: userCoords.longitude,
    });
  }, [userCoords, mapRef.current, latitude, longitude]);

  const fetchRoute = useCallback(async () => {
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change
    const { data } = await axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${userCoords.longitude},${userCoords.latitude};${longitude},${latitude}?steps=true&geometries=geojson&access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}`
    );
    setMapData(data);
    const coordinates = data.routes[0].geometry.coordinates;
    setDuration(data.routes[0].duration);
    const geojson: mapboxgl.GeoJSONSourceOptions["data"] = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates,
      },
    };
    setRoute(geojson);
  }, [userCoords, latitude, longitude]);

  const calculateEstimatedTime = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration - hours * 3600) / 60);
    return `${hours} hours and ${minutes} minutes`;
  };

  return (
    <div className="grid grid-cols-12 gap-6 relative overflow-hidden property-detail hotel-suggestion w-[98%] h-fit mx-auto my-2 p-4">
      <div className="col-span-7 max-lg:col-span-12 md:h-fit max-md:w-full">
        <Slider {...settings}>
          {photos.map((item) => (
            <Image
              className="w-full object-contain h-full rounded-lg"
              src={item}
              alt="item"
              width={1200}
              height={600}
              key={item}
            />
          ))}
        </Slider>
      </div>
      <div
        id="map-container"
        className="md:sticky right-0 md:order-2 order-1 sw-full h-[400px] lg:h-full rounded-lg col-span-5 max-lg:col-span-12"
      >
        <div className="absolute z-50 left-4 bottom-4 bg-black/60 text-white py-3 px-6 flex flex-col rounded">
          <p className="text-sm">
            {/* Show duration in hours and minutes */}
            Duration by car: {calculateEstimatedTime(duration)}
          </p>
        </div>
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
          initialViewState={{
            latitude: 20.5937,
            longitude: 78.9629,
            zoom: 5,
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
            ref={(ref) => ref && (geolocationRef.current = ref)}
          />
          {userCoords && (
            <Source
              id="geolocation"
              type="geojson"
              data={{
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [userCoords.longitude, userCoords.latitude],
                    },
                    properties: {},
                  },
                ],
              }}
            >
              {/* <Layer
                type="circle"
                paint={{
                  "circle-radius": 1,
                  "circle-color": "#3887be",
                }}
              /> */}

              {userCoords && (
                <Marker
                  latitude={userCoords.latitude}
                  longitude={userCoords.longitude}
                  anchor="bottom"
                >
                  <Image
                    src={markerStartIcon}
                    alt="marker"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </Marker>
              )}
            </Source>
          )}

          {route && (
            <Source type="geojson" data={route}>
              <Layer
                id="route-line"
                type="line"
                layout={{
                  "line-join": "round",
                  "line-cap": "round",
                }}
                paint={{
                  "line-color": "#3887be",
                  "line-width": 5,
                  "line-opacity": 0.75,
                }}
              ></Layer>
            </Source>
          )}
          <Source
            type="geojson"
            data={{
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [longitude, latitude],
                  },
                },
              ],
            }}
          >
            {/* <Layer
              id="end"
              type="circle"
              paint={{
                "circle-radius": 10,
                "circle-color": "#f30",
              }}
            /> */}
            {latitude && (
              <Marker latitude={latitude} longitude={longitude} anchor="bottom">
                <Image
                  src={markerFinishIcon}
                  alt="marker"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Marker>
            )}
          </Source>
        </Map>
      </div>
    </div>
  );
}
