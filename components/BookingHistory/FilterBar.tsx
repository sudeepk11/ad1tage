import React from "react";
import SearchBar from "../Common/SearchBar";
import Dropdown from "../Common/Dropdown";

const FilterBar = () => {
  return (
    <div className="flex justify-between w-full max-lg:flex-col lg:ml-2">
      <Dropdown />
      <SearchBar />
    </div>
  );
};

export default FilterBar;
