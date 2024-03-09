"use client";
import { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Layer, Map, Source } from "react-map-gl";
import { Coords } from "../../../types/general";
import axios from "axios";
import { josefin } from "../../../utils/utilsFonts";
import useDebounce from "../../../hooks/useDebounce";

const LocationForm = ({
  address,
  plotnumber,
  city,
  pincode,
  lattitude,
  longitude,
  updateFields,
}) => {
  const mapRef = useRef(null);
  const [userTypedPincode, setUserTypedPincode] = useState("");
  const debounce = useDebounce(pincode, 1000);

  async function search(e: mapboxgl.MapLayerMouseEvent) {
    const { lat, lng } = e.lngLat;
    updateFields({ lattitude: lat, longitude: lng });

    const { data } = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}`
    );
    // const newAddress =
    //   data.features
    //     .find((item) => item.id.includes("address"))
    //     ?.place_name.split(",")[0] || "";
    const newPostcode =
      data.features.find((item) => item.id.includes("postcode"))?.text || "";
    // const newCountry =
    //   data.features.find((item) => item.id.includes("country"))?.text || "";
    const newCity =
      data.features.find((item) => item.id.includes("place"))?.text || "";

    updateFields({ city: newCity });
    // setCountry(newCountry);
    updateFields({ pincode: newPostcode });
  }
  // Search by pincode:
  async function searchByPincode() {
    const { data } = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pincode}.json?pincode=${pincode}&country=IN&access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY}`
    );
    console.log(data);
    if (!data.features.length) return;
    const newCity =
      data.features.find((item) => item.id.includes("place"))?.text || "";
    const newCoords = data.features[0].center;

    updateFields({ lattitude: newCoords[1], longitude: newCoords[0] });

    // Recenter the map to the new location:
    mapRef.current.flyTo({
      center: newCoords,
      zoom: 12,
    });
  }

  const handlePincodeChange = (e) => {
    updateFields({ pincode: e.target.value });
    setUserTypedPincode(e.target.value);
  };

  useEffect(() => {
    if (!debounce || !userTypedPincode) return;

    setUserTypedPincode("");
    searchByPincode();
  }, [debounce, userTypedPincode]);

  return (
    <>
      <div className=" h-80 col-span-8 w-full relative">
        <label
          className={`block mb-2 !text-sm !font-bold text-black !${josefin.className}`}
        >
          Pick Location
        </label>
        <Map
          ref={mapRef}
          mapLib={import("mapbox-gl")}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
          style={{ height: "90%", width: "100%" }}
          initialViewState={{
            longitude: longitude,
            latitude: lattitude,
            zoom: 12,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onClick={search}
        >
          {lattitude && longitude && (
            <Source
              type="geojson"
              data={{
                type: "Point",
                coordinates: [longitude, lattitude],
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
          onChange={handlePincodeChange}
          placeholder="Pincode"
          className="w-full h-[52px] border border-solid border-greyishBrown  rounded-lg p-3"
          name="pincode"
          required
        />
      </div>
      <div className="w-full col-span-6 max-md:col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Address
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => updateFields({ address: e.target.value })}
          placeholder="Address"
          className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
          name="address"
          required
        />
      </div>

      {/* Plot No */}
      <div className="w-full col-span-2 max-md:col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Plot Number
        </label>
        <input
          type="text"
          placeholder="Plot Number"
          className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
          name="plotnumber"
          value={plotnumber}
          onChange={(e) => updateFields({ plotnumber: e.target.value })}
          required
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
          onChange={(e) => updateFields({ city: e.target.value })}
          placeholder="City"
          className="w-full h-[52px] border border-solid border-greyishBrown bg-gray-50 rounded-lg p-3"
          name="city"
          // readOnly
          required
        />
      </div>

      <div className="w-full col-span-2 max-md:col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Longitude
        </label>
        <input
          className="w-full h-[52px] border border-solid border-greyishBrown bg-gray-50 rounded-lg p-3"
          type="text"
          placeholder="Choose on the map"
          name="longitude"
          readOnly
          onFocus={(e) => e.preventDefault()}
          value={longitude || ""}
          required
        />
      </div>
      <div className="w-full col-span-2 max-md:col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Latitude
        </label>
        <input
          className="w-full h-[52px] border border-solid border-greyishBrown bg-gray-50 rounded-lg p-3"
          type="text"
          placeholder="Choose on the map"
          name="lattitude"
          readOnly
          onFocus={(e) => e.preventDefault()}
          value={lattitude || ""}
          required
        />
      </div>
    </>
  );
};

export default LocationForm;
