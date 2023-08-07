import Image from "next/image";
import React from "react";
import searchIcon from "../../images/search.png";
const SearchBar = ({ searchBarProperty }: any) => {
  return (
    <div
      className={`flex gap-4 max-lg:flex-col max-lg:mt-2 ${searchBarProperty}`}
    >
      <div
        className={`relative ${
          searchBarProperty ? searchBarProperty : "lg:w-[370px] "
        }`}
      >
        <div className="absolute top-[50%] -translate-y-[50%] left-0 flex items-center pl-4 pointer-events-none">
          <Image src={searchIcon} alt="" />
        </div>
        <input
          type="text"
          className="block w-full px-4 py-[13px] pl-10 text-base font-normal text-[#939393] border border-[#E1D9CE] rounded-lg bg-transaprent focus:ring-[#886750] focus:border-[#886750]"
          placeholder="Search by Keyword"
          required
        />
      </div>
      <div>
        <button className="px-7 max-lg:w-full py-[14px] bg-[#886750] text-center text-white rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
