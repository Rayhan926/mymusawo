/* eslint-disable @next/next/no-img-element */
import React from "react";

const HeroSection = () => {
  return (
    <section className="lg:min-h-[950px] hero_bg flex flex-col justify-center overflow-hidden pt-[80px] lg:pt-[120px] xl:pt-0">
      <img
        src="/img/about-us-cover.png"
        className="lg:absolute bottom-0 w-full"
        alt="about-us-cover"
      />
    </section>
  );
};

export default HeroSection;
