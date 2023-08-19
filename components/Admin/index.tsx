"use client";
import React, { useState } from "react";
import AdminInsights from "./AdminDashboard";
import AdminListing from "./AdminListing";
import AdminManageCategories from "./AdminManageCategories";
import AdminAddService from "./AdminAddService";
import { josefin } from "../../utils/utilsFonts";

const Admin = () => {
  const [currTab, setcurrTab] = useState(1);
  return (
    <React.Fragment>
      <div className="flex place-content-center w-screen text-center h-[80px] mx-auto md:-mt-[80px] lg:sticky lg:z-20 cursor-pointer items-center lg:top-0 overflow-x-scroll scrollbar-hide">
        <h3
          className={`${
            josefin.className
          } max-md:px-2 md:px-5 md:mx-4 max-md:mx-2 h-full flex items-center rounded-sm transition-all ${
            currTab === 1 ? "text-primary font-semibold" : ""
          }`}
          onClick={() => setcurrTab(1)}
        >
          Dashboard
        </h3>
        <h3
          className={` ${
            josefin.className
          } max-md:px-2 md:px-5 md:mx-4 max-md:mx-2 h-full flex items-center rounded-sm transition-all ${
            currTab === 2 ? "text-primary font-semibold" : ""
          }`}
          onClick={() => setcurrTab(2)}
        >
          Listing
        </h3>
        <h3
          className={` ${
            josefin.className
          } max-md:px-2 md:px-5 md:mx-4 max-md:mx-2 h-full flex items-center rounded-sm transition-all ${
            currTab === 3 ? "text-primary font-semibold" : ""
          }`}
          onClick={() => setcurrTab(3)}
        >
          Manage Categories
        </h3>
        <h3
          className={` ${
            josefin.className
          } max-md:px-2 md:px-5 md:mx-4 max-md:mx-2 h-full flex items-center rounded-sm transition-all ${
            currTab === 4 ? "text-primary font-semibold" : ""
          }`}
          onClick={() => setcurrTab(4)}
        >
          Add Services
        </h3>
      </div>
      <div>
        {currTab === 1 && <AdminInsights />}
        {currTab === 2 && <AdminListing />}
        {currTab === 3 && <AdminManageCategories />}
        {currTab === 4 && <AdminAddService />}
      </div>
    </React.Fragment>
  );
};

export default Admin;
