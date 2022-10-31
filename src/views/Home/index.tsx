import dynamic from "next/dynamic";
import React from "react";
import AboutSection from "./components/AboutSection";
import CategoriesSection from "./components/CategoriesSection";
import ForHealthExpertsSection from "./components/ForHealthExpertsSection";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import SteadilySection from "./components/SteadilySection";

const PressHighlightsSection = dynamic(
  () => import("./components/PressHighlightsSection"),
  { ssr: false },
);

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <CategoriesSection />
      <ForHealthExpertsSection />
      <SteadilySection />
      <PressHighlightsSection />
    </>
  );
};

export default Home;
