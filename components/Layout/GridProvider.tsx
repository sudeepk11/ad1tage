"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import FilterOptions from "../Hotel/filterOptions";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import { Coords } from "../../types/general";
import mapboxgl from "mapbox-gl";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Service } from "../../types/services";

type Props = {
  children: any;
  withMap?: boolean;
};

export default function GridProvider({ children, withMap }: Props) {
  const geolocateRef = useRef<mapboxgl.GeolocateControl>(null!);
  const [nearbyServices, setNearbyServices] = useState<Service[]>([]);
  const [userCoords, setUserCoords] = useState<Coords | null>(null);
  const [mapView, setMapView] = useState(withMap || false);
  const { refresh } = useRouter();

  useEffect(() => {
    mapView && refresh && refresh();
  }, [mapView, refresh]);

  useEffect(() => {
    if (!geolocateRef.current) return;
    geolocateRef.current.trigger();
  }, [geolocateRef.current]);

  useEffect(() => {
    if (!userCoords) return;
    async function fetchServices() {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_MAPBOX_KEY}/services/get-nearby-services/?latitude=${userCoords.latitude}&longitude=${userCoords.longitude}`
      );
      setNearbyServices(data.data);
    }
    fetchServices();
  }, [userCoords]);

  return (
    <Fragment>
      {!withMap && (
        <FilterOptions mapView={mapView} changeMapView={setMapView} />
      )}
      {mapView || withMap ? (
        <div className="grid grid-cols-2 gap-6 max-md:flex max-md:flex-col-reverse max-lg:grid-col-2">
          <div className="grid lg:grid-cols-2 gap-6">{children}</div>
          <div className="rounded-xl">
            <Map
              mapLib={import("mapbox-gl")}
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
              style={{ height: 512 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              initialViewState={{
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 6,
              }}
            >
              <GeolocateControl
                trackUserLocation
                showUserLocation
                showUserHeading
                positionOptions={{ enableHighAccuracy: true }}
                showAccuracyCircle
                ref={(ref) => ref && (geolocateRef.current = ref)}
                onGeolocate={(e) =>
                  setUserCoords({
                    latitude: e.coords.latitude,
                    longitude: e.coords.longitude,
                  })
                }
              />
              {userCoords && (
                <Marker
                  latitude={userCoords.latitude}
                  longitude={userCoords.longitude}
                  anchor="bottom"
                  color="red"
                />
              )}
            </Map>
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
