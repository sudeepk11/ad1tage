import React from "react";
import ClientReviews from "../../components/LandingPage/ClientReviews";
import LearnMore from "../../components/LandingPage/LearnMore";
import Benefits from "../../components/LandingPage/Benefits";
import SixSteps from "../../components/LandingPage/SixSteps";
import HostWithUsBanner from "../../components/LandingPage/HostWithUsBanner";
import HostWithUsHandle from "../../components/LandingPage/HandleBanner";
import SearchBox from "../../components/Common/SearchBox";
import CostCalculator from "../../components/Common/CostCalculatorBar";
const HostWithUs = () => {
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px]">
      <HostWithUsBanner />
      <CostCalculator searchClasses="-mt-[83px]" />
      <Benefits />
      <HostWithUsHandle />
      <SixSteps />
      <ClientReviews />
      <LearnMore />
    </div>
  );
};

export default HostWithUs;
