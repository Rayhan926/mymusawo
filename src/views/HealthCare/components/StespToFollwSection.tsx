import { healthExpertSteps } from "@config/constants";
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const StespToFollwSection = () => {
  return (
    <section className="bg-[url('/img/about-bg.png')] bg-no-repeat bg-bottom pt-[500px] -mt-[400px] pb-[70px]">
      <div className="container">
        <h2 className="__title text-center">
          Refer a fellow Health Expert to join My Musawo, and earn cash bonuses
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[140px] xl:gap-[180px] mt-[70px]">
          {healthExpertSteps.map(({ icon, text }, i) => (
            <div
              key={i}
              className="rounded-[20px] bg-white shadow-[0px_10px_24px_0px_#0000000F] p-11 flex justify-center items-center flex-col text-center relative"
            >
              <div>{icon}</div>
              <p className="text-lg mt-6">{text}</p>

              {i + 1 < healthExpertSteps.length && (
                <div className="absolute top-[calc(100%+50px)] left-1/2 xl:left-auto rotate-90 xl:rotate-0 -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:-right-[140px]">
                  <HiOutlineChevronRight size={40} className="text-[#0EB6D3]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StespToFollwSection;
