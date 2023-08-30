"use client";
import { useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Layer, Map, Source } from "react-map-gl";
import { Coords } from "../../types/general";
import axios from "axios";
import { josefin } from "../../utils/utilsFonts";

const LocationForm = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<Coords | null>(null);

  async function search(e: mapboxgl.MapLayerMouseEvent) {
    const { lat, lng } = e.lngLat;
    setSelectedLocation({ latitude: lat, longitude: lng });
    const { data } = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}`
    );
    const newAddress =
      data.features
        .find((item) => item.id.includes("address"))
        ?.place_name.split(",")[0] || "";
    const newPostcode =
      data.features.find((item) => item.id.includes("postcode"))?.text || "";
    const newCountry =
      data.features.find((item) => item.id.includes("country"))?.text || "";
    const newCity =
      data.features.find((item) => item.id.includes("place"))?.text || "";
    console.log(data);
    setAddress(newAddress);
    setCity(newCity);
    setCountry(newCountry);
    setPincode(newPostcode);
  }

  return (
    <>
      <div className="h-80 col-span-8 w-full relative">
        <label
          className={`block mb-2 !text-sm !font-bold text-black !${josefin.className}`}
        >
          Pick Location
        </label>
        <Map
          mapLib={import("mapbox-gl")}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
          style={{ height: "100%", width: "100%" }}
          initialViewState={{ longitude: 77.5946, latitude: 12.9716, zoom: 12 }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onClick={search}
        >
          {selectedLocation && (
            <Source
              type="geojson"
              data={{
                type: "Point",
                coordinates: [
                  selectedLocation.longitude,
                  selectedLocation.latitude,
                ],
              }}
            >
              <Layer
                type="circle"
                paint={{
                  "circle-color": "#FFFFFF",
                  "circle-radius": 6,
                  "circle-stroke-width": 6,
                  "circle-stroke-color": "#0000FF",
                }}
              ></Layer>
            </Source>
          )}
        </Map>
      </div>
      <div className="w-full col-span-2 max-md:col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Pincode
        </label>
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder="Pincode"
          className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
        />
      </div>

      <div className="w-full col-span-2 max-md:col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Address
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
        />
      </div>
      <div className="w-full col-span-2 max-md:col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          City
        </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
        />
      </div>
      <div className="w-full col-span-2 max-md:col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Country
        </label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
          className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
        />
      </div>
      <div className="w-full col-[1/3] max-md:col-span-4">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Longitude
        </label>
        <input
          className="w-full h-[52px] border border-solid border-greyishBrown bg-greyishBrown/30 rounded-lg p-3"
          type="text"
          placeholder="Choose on the map"
          name="longitude"
          readOnly
          onFocus={(e) => e.preventDefault()}
          value={selectedLocation?.longitude || ""}
        />
      </div>
      <div className="w-full col-span-2 max-md:col-span-4">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Latitude
        </label>
        <input
          className="w-full h-[52px] border border-solid border-greyishBrown bg-greyishBrown/30 rounded-lg p-3"
          type="text"
          placeholder="Choose on the map"
          name="lattitude"
          readOnly
          onFocus={(e) => e.preventDefault()}
          value={selectedLocation?.latitude || ""}
        />
      </div>
    </>
  );
};

export default LocationForm;
