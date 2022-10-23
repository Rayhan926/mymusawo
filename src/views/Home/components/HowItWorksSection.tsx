import { howItWorks } from "@config/constants";
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const HowItWorksSection = () => {
  return (
    <section className="bg-[url('/img/how-it-works-bg.png')] bg-cover bg-no-repeat bg-center pb-[160px] pt-[50px] mt-[100px]">
      <div className="container text-white">
        <h2 className="__title text-center">How it Works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[140px] lg:gap-[180px] mt-[62px]">
          {howItWorks.map(({ description, title }, i) => (
            <div
              key={i}
              className="rounded-[20px] border-2 border-white p-11 flex justify-center items-center flex-col text-center relative"
            >
              <h6 className="text-3xl font-segoe-ui-bold">{title}</h6>
              <p className="text-xl mt-8">{description}</p>

              {i + 1 < howItWorks.length && (
                <div className="absolute top-[calc(100%+50px)] left-1/2 lg:left-auto rotate-90 lg:rotate-0 -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:-right-[120px]">
                  <HiOutlineChevronRight size={45} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
