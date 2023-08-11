"use client";
import React, { useState } from "react";
import AdminInsights from "./AdminDashboard";
import AdminListing from "./AdminListing";
import { josefin } from "../../utils/utilsFonts";

const Admin = () => {
  const [currTab, setcurrTab] = useState(1);
  return (
    <React.Fragment>
      <div className="flex w-max text-center h-[80px] mx-auto md:-mt-[80px] lg:sticky lg:z-20 cursor-pointer items-center lg:top-0">
        <h3
          className={`${
            josefin.className
          } max-md:px-2 md:px-5 md:mx-4 max-md:mx-2 h-full flex items-center border-b-[3px] rounded-sm transition-all ${
            currTab === 1 ? "text-primary border-primary" : "border-transparent"
          }`}
          onClick={() => setcurrTab(1)}
        >
          Dashboard
        </h3>
        <h3
          className={` ${
            josefin.className
          } max-md:px-2 md:px-5 md:mx-4 max-md:mx-2 h-full flex items-center border-b-[3px] rounded-sm transition-all ${
            currTab === 2 ? "text-primary border-primary" : "border-transparent"
          }`}
          onClick={() => setcurrTab(2)}
        >
          Listing
        </h3>
        <h3
          className={` ${
            josefin.className
          } max-md:px-2 md:px-5 md:mx-4 max-md:mx-2 h-full flex items-center border-b-[3px] rounded-sm transition-all ${
            currTab === 3 ? "text-primary border-primary" : "border-transparent"
          }`}
          onClick={() => setcurrTab(3)}
        >
          Manage Categories
        </h3>
        <h3
          className={` ${
            josefin.className
          } max-md:px-2 md:px-5 md:mx-4 max-md:mx-2 h-full flex items-center border-b-[3px] rounded-sm transition-all ${
            currTab === 4 ? "text-primary border-primary" : "border-transparent"
          }`}
          onClick={() => setcurrTab(4)}
        >
          Add Services
        </h3>
      </div>
      {currTab === 1 && <AdminInsights />}
      {currTab === 2 && <AdminListing />}
    </React.Fragment>
  );
};

export default Admin;
