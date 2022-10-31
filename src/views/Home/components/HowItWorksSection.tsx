import { howItWorks } from "@config/constants";
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const HowItWorksSection = () => {
  return (
    <section
      data-id="how-it-works"
      className="bg-[url('/img/how-it-works-mobile-bg.jpeg')] xl:bg-[url('/img/how-it-works-desktop-bg.jpeg')] bg-no-repeat bg-center pb-[160px] pt-[50px] mt-[100px] scroll-mt-[150px]"
    >
      <div className="container text-white">
        <h2 className="__title text-center">How it Works</h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[140px] xl:gap-[180px] mt-[62px]">
          {howItWorks.map(({ description, title }, i) => (
            <div
              key={i}
              className="rounded-[20px] border-2 border-white p-11 flex justify-center items-center flex-col text-center relative"
            >
              <h6 className="text-[24px] font-segoe-ui-bold">{title}</h6>
              <p className="text-lg mt-6">{description}</p>

              {i + 1 < howItWorks.length && (
                <div className="absolute top-[calc(100%+50px)] left-1/2 xl:left-auto rotate-90 xl:rotate-0 -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:-right-[140px]">
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
