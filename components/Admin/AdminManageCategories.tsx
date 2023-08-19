import React from "react";
import searchIcon from "../../images/search-icon.png";
import Image from "next/image";
import { josefin } from "../../utils/utilsFonts";
import CategoriesTable from "./CategoriesTable";

const AdminManageCategories = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
        <div className="flex items-center justify-between gap-4 max-xl:flex-col max-xl:justify-start max-xl:items-start">
          <p
            className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
          >
            Manage Categories
          </p>
        </div>
        <div className="flex content-center justify-between gap-4 mt-4 mb-6 max-md:flex-col md:flex-wrap">
          <div className="flex max-md:flex-col justify-center items-start w-full">
            <div className="relative top-0 left-0 search-bar max-md:w-[100%] w-full ">
              <input
                className="pl-12 w-full h-[52px] border border-solid border-greyishBrown rounded-lg"
                type="text"
                placeholder="Search"
              />
              <Image
                className="absolute top-[50%] -translate-y-[50%] left-4"
                src={searchIcon}
                alt={""}
              />
            </div>
            <div className="search-button md:mx-2 max-md:mt-3 w-full">
              <button className="w-full h-[52px] bg-primary rounded-lg text-white text-base">
                Search
              </button>
            </div>
          </div>
        </div>
        {/* Categories Table */}
        <div className="w-full overflow-x-scroll">
          <CategoriesTable />
        </div>
        <div className="mt-10">
          <p
            className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
          >
            Add Category
          </p>
          <div className="flex justify-between gap-4 max-md:flex-col md:flex-wrap">
            <div className="grid grid-cols-7 w-full place-items-end gap-3">
              <div className="w-full col-span-2">
                <label
                  className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
                >
                  Name
                </label>
                <input
                  className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                  type="text"
                  placeholder="Enter Category Name"
                />
              </div>
              <div className="w-full col-span-4">
                <label
                  className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
                >
                  Description
                </label>
                <input
                  className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                  type="text"
                  placeholder="Enter Category Description"
                />
              </div>
              <div className="w-full col-span-1">
                <button className="w-full h-[52px] bg-primary rounded-lg text-white text-base">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminManageCategories;
