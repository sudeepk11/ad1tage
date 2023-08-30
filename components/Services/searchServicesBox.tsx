"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../Common/Button";
import useDebounce from "../../hooks/useDebounce";
import CardWithSlider from "../Common/CardWithSlider";
import { Service } from "../../types/services";

const SearchServicesBox = ({ services }) => {
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const [isLoading, setIsLoading] = useState(false);
  const [servicesList, setServicesList] = useState<Service[]>(services);
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  // const debounce = useDebounce(input, 400);

  const handleSearch = (e, queryString) => {
    e.preventDefault();
    let query = queryString.toLowerCase().split(" ").join("");
    let newServices = (services as Service[]).filter(
      (item) =>
        item.name.toLowerCase().split(" ").join("").includes(query) ||
        item.category.category
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(query) ||
        item.city.toLowerCase().split(" ").join("").includes(query)
    );
    setServicesList(newServices);
  };

  useEffect(() => {
    function onBlur(e: MouseEvent) {
      if (
        !wrapperRef.current ||
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    }
    window.addEventListener("mousedown", onBlur);
    return () => {
      window.removeEventListener("mousedown", onBlur);
    };
  }, [wrapperRef.current]);

  return (
    <div>
      <div className="bg-white p-[20px] mb-10 rounded-xl shadow-md max-w-[1190px] w-full m-auto relative z-1 h-fit">
        <div className="flex flex-col lg:flex-row lg:items-center md:gap-4 gap-2 relative">
          <div className="relative flex-1" ref={wrapperRef}>
            <input
              type="text"
              placeholder="Search by name, category or city..."
              className="py-[10px] px-6 border border-greyishBrown rounded-[8px] w-full flex-1"
              onFocus={() => setIsFocused(true)}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                handleSearch(e, e.target.value);
                setIsLoading(true);
              }}
            />
          </div>
        </div>
      </div>
      <div className="max-md:flex max-md:flex-col-reverse max-lg:grid-col-2">
        <div className="grid lg:grid-cols-4 gap-6">
          {servicesList.length === 0 && (
            <div className=" col-span-full flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-center">
              No services found for &quot;{input}&quot;

              </h2>
            </div>
          )}
          {servicesList.map((item) => (
            <CardWithSlider
              paraText={item.name}
              location={item.city}
              subParaText={item.category.category}
              rating={item.rating.toPrecision(2)}
              perRoomUserCount={"2 sleeps"}
              bedCount={"1 Bedroom"}
              bathCount={"1 Bath"}
              photos={item.photos}
              likeButton={"unfilled"}
              id={item._id}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchServicesBox;
