import HeroSection from "@views/ForBusiness/components/HeroSection";
import React from "react";
import DownloadAppsSection from "./components/DownloadAppsSection";
import PricePlan from "./components/PricePlan";

const ForBusiness = () => {
  return (
    <>
      <HeroSection />
      <PricePlan />
      <DownloadAppsSection />
    </>
  );
};

export default ForBusiness;
