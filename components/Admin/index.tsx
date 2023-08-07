"use client";
import React, { useState } from "react";
import AdminInsights from "./AdminInsights";
import AdminListing from "./AdminListing";
import { josefin } from "../../utils/utilsFonts";

const Admin = () => {
  const [listingTab, setListingTab] = useState(true);
  return (
    <React.Fragment>
      <div className="flex w-max text-center h-[80px] mx-auto md:-mt-[80px] lg:sticky lg:z-20 cursor-pointer items-center lg:top-0 mx-auto">
        <h3
          className={` ${
            josefin.className
          } max-md:px-2 md:px-5 md:mx-4 max-md:mx-2 h-full flex items-center border-b-[3px] rounded-sm transition-all ${
            listingTab === true
              ? "text-primary border-primary"
              : "border-transparent"
          }`}
          onClick={() => setListingTab(true)}
        >
          Listing
        </h3>
        <h3
          className={`${
            josefin.className
          } max-md:px-2 md:px-5 md:mx-4 max-md:mx-2 h-full flex items-center border-b-[3px] rounded-sm transition-all ${
            listingTab === false
              ? "text-primary border-primary"
              : "border-transparent"
          }`}
          onClick={() => setListingTab(false)}
        >
          Insights
        </h3>
      </div>
      {listingTab ? <AdminListing /> : <AdminInsights />}
    </React.Fragment>
  );
};

export default Admin;
