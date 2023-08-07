import React from "react";
import Dropdown from "../Common/Dropdown";
import SearchBar from "../Common/SearchBar";

const ReviewFilterBar = () => {
  return (
    <div className="bg-white p-[30px] rounded-xl shadow-md max-w-[1190px] w-full m-auto relative z-1 max-md:mt-[50px] mt-[83px] xl:max-h-[166px] h-full max-xl:h-max mb-[50px]">
      <div className="grid items-end grid-cols-5 gap-4 max-xl:grid-cols-3 max-md:grid-cols-1">
        <div>
          <h6 className="mb-2 font-medium">Sort by</h6>
          <Dropdown
            filterText="Most Recent Stay"
            filterIconHidden="hidden"
            filterTextStyle="pr-0"
            dropDownWidth="w-full"
          />
        </div>
        <div className="font-medium md:col-span-2">
          <h6 className="mb-2 font-medium">Filter by</h6>
          <div className="flex gap-4 max-md:flex-col max-md:gap-5">
            <Dropdown
              filterText="All Stars"
              filterIconHidden="hidden"
              filterTextStyle="pr-0"
              dropDownWidth="w-full"
            />
            <Dropdown
              filterText="All Properties"
              filterIconHidden="hidden"
              filterTextStyle="pr-0"
              dropDownWidth="w-full"
            />
          </div>
        </div>

        <div className="xl:col-span-2 md:col-span-3">
          <SearchBar searchBarProperty="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ReviewFilterBar;
