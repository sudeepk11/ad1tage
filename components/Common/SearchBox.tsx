"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import locationIcon from "../../Assets/Icons/location.png";
import mapboxgl from "mapbox-gl";
import { Coords, Result } from "../../types/general";
import axios from "axios";
import ResultRef from "./ResultRef";
import useDebounce from "../../hooks/useDebounce";
import { useRouter } from "next/navigation";

const SearchBox = ({ searchClasses = "" }) => {
  const { push } = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState<Result[]>([]);
  const debounce = useDebounce(input, 400);

  useEffect(() => {
    if (!debounce) return;
    async function fetchResults() {
      const { data } = await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/global-search/`)
        .finally(() => setIsLoading(false));
      setResults(
        (data.data as Result[]).filter((item) =>
          item.name
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(debounce.toLowerCase().split(" ").join(""))
        )
      );
    }
    fetchResults();
  }, [debounce]);

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
    <div
      className={`bg-white p-[20px] mb-10 rounded-xl shadow-md max-w-[1190px] w-full m-auto relative z-1 ${searchClasses} h-fit`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center md:gap-4 gap-2 relative">
        <div className="relative flex-1" ref={wrapperRef}>
          <input
            type="text"
            placeholder="Search..."
            className="py-[10px] px-6 border border-greyishBrown rounded-[8px] w-full flex-1"
            onFocus={() => setIsFocused(true)}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setIsLoading(true);
            }}
          />
          {input && isFocused && (
            <div className="w-full absolute top-full left-0 right-0 flex flex-col bg-white border-greyishBrown border-[1px] rounded-b-md z-10">
              {isLoading ? (
                <span className="py-3 px-6">Loading...</span>
              ) : results.length > 0 ? (
                results.map((item) => <ResultRef {...item} key={item.id} />)
              ) : (
                <span className="py-3 px-6">Nothing has been found</span>
              )}
            </div>
          )}
        </div>
        <Button
          ButtonText={"Find Services near me"}
          icon={locationIcon}
          logo={locationIcon}
          ButtonClicked={() => push("/services")}
          ButtonClasses={
            "lg:w-max !bg-blue-100 text-[#2A86DB] font-semibold w-full flex items-center justify-center py-3"
          }
        ></Button>
      </div>
    </div>
  );
};

export default SearchBox;
