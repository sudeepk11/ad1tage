import React from "react";
import searchIcon from "../../images/search-icon.png";
import Image from "next/image";
import Button from "../Common/Button";
import Dropdown from "../Common/Dropdown";
import { josefin } from "../../utils/utilsFonts";
import ListingTable from "./ListingTable";

const AdminListing = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
        <div className="flex items-center justify-between gap-4 max-xl:flex-col max-xl:justify-start max-xl:items-start w-full">
          <div className="flex justify-between w-full">
            <p
              className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
            >
              Listings
            </p>
            <Button
              ButtonText={"+ Create Listing"}
              ButtonClasses={
                "text-white justify-center max-h-[58px] max-md:py-3"
              }
            ></Button>
          </div>
        </div>
        <div className="flex content-center justify-between gap-4 mt-4 mb-6 max-md:flex-col md:flex-wrap">
          <div className="flex justify-center items-start md:w-[507px] gap-4 max-md:w-full max-md:justify-between max-md:flex-col">
            <div className="relative top-0 left-0 search-bar max-md:w-[100%]">
              <input
                className="pl-12 md:w-[375px] max-md:w-full h-[52px] border border-solid border-greyishBrown rounded-lg"
                type="text"
                placeholder="Search"
              />
              <Image
                className="absolute top-[50%] -translate-y-[50%] left-4"
                src={searchIcon}
                alt={""}
              />
            </div>
            <div className="w-full search-button">
              <button className="w-[116px] max-md:w-full h-[52px] !bg-blue-100 rounded-lg text-primary text-base">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Listing Table */}
        <div className="w-full overflow-x-scroll">
          <ListingTable />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminListing;
