"use client";
import React from "react";
import Banner from "./Banner";
import Neighbourhoods from "./Neighbourhoods";
import HotelSuggestions from "./HotelSuggestions";
import EveryThingRightHere from "./EveryThingRightHere";
import ImageGallerySection from "./ImageGallerySection";
import LearnMore from "./LearnMore";
import ClientReviews from "./ClientReviews";
import SearchBox from "../Common/SearchBox";
import DurationBanner from "./DurationBanner";

const LandingPage = () => {

  const perMonthDescription = {
    description: 'Save more than 20% when you go the monthly way!',
    price: '$49',
    features: [
      {
        positive: true,
        desc: 'Flexible'
      },
      {
        positive: true,
        desc: 'Zero Cancellations To Cancel',
      },
      {
        positive: true,
        desc: '0 Maintenance Cost',
      },
      {
        positive: true,
        desc: '20% Cheaper'
      }
    ],
    duration: 'Month'
  }

  const perDayDescription = {
    description: 'Looking for Shorter Trips? Go the Daily Stay way!',
    price: '$9',
    features: [
      {
        positive: true,
        desc: 'Flexible'
      },
      {
        positive: true,
        desc: 'Zero Cancellations To Cancel',
      },
      {
        positive: true,
        desc: '0 Maintenance Cost',
      },
      {
        positive: false,
        desc: '20% Cheaper'
      }
    ],
    duration: 'Day'
  }

  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px]">
        <Banner />
        <SearchBox searchClasses="-mt-[83px]" />
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <DurationBanner durationObject={perMonthDescription} />
          <DurationBanner durationObject={perDayDescription} />
        </div>
        <Neighbourhoods />
      </div>

      <HotelSuggestions />
      <div className="container-2xl max-lg:px-4 lg:px-[50px]">
        <EveryThingRightHere />
        <ImageGallerySection />
        <LearnMore />
        <ClientReviews />
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
