"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import { Coords } from "../../types/general";
import mapboxgl from "mapbox-gl";
import { useRouter } from "next/navigation";
import axios from "axios";
import MapMarker from "../Common/MapMarker";
import { useNearbyServices } from "../../providers/NearbyServicesProvider";

type Props = {
  children: any;
  withMap?: boolean;
};

export default function GridProvider({ children, withMap }: Props) {
  const geolocateRef = useRef<mapboxgl.GeolocateControl>(null!);
  const { nearbyServices, setNearbyServices } = useNearbyServices();
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
        `${process.env.NEXT_PUBLIC_API_URL}/services/get-nearby-services/?latitude=${userCoords.latitude}&longitude=${userCoords.longitude}`
      );
      setNearbyServices(data.data);
    }
    fetchServices();
  }, [userCoords]);

  return (
    <Fragment>
      {/* {!withMap && (
        <FilterOptions mapView={mapView} changeMapView={setMapView} />
      )} */}
      {mapView || withMap ? (
        <div className="grid grid-cols-2 gap-6 max-md:flex max-md:flex-col-reverse max-lg:grid-col-2">
          <div className="lg:grid-cols-2">{children}</div>
          <div className="rounded-xl">
            <Map
              mapLib={import("mapbox-gl")}
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
              style={{ height: 512 }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              initialViewState={{
                latitude: 20.5937,
                longitude: 78.9629,
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
              {nearbyServices &&
                nearbyServices.map((item) => (
                  <Marker
                    key={item._id}
                    latitude={parseFloat(item.lattitude)}
                    longitude={parseFloat(item.longitude)}
                  >
                    <div className="relative ">
                      {/* <CardWithSlider
                      paraText={item.name}
                      location={item.city}
                      subParaText={item.category.category}
                      rating={item.rating.toPrecision(2)}
                      photos={item.photos}
                      likeButton={"unfilled"}
                      id={item._id}
                      key={item._id}
                    /> */}

                      <MapMarker
                        key={item._id}
                        id={item._id}
                        paraText={item.name}
                        subParaText={item.category.category}
                        rating={item.rating.toPrecision(2)}
                        photos={item.photos}
                      />
                    </div>
                  </Marker>
                ))}
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
