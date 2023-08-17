"use client";
import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import Categories from "./Categories";
import SearchBox from "../Common/SearchBox";
import SixSteps from "./SixSteps";

const LandingPage = () => {
  const categories = ["Healthcare", "Food", "Groceries", "Medical Stores"];

  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px]">
        <Banner />
        <SearchBox searchClasses="-mt-[83px]" />
      </div>

      <Services title="Find Top Services Nearby" />
      <Categories title="Top Categories" categories={categories} />
      <Services title="Your Recently Viewed Services" />
      <SixSteps />
    </React.Fragment>
  );
};

export default LandingPage;
