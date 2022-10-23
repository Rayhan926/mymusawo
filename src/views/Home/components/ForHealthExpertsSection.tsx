import { forHealthExperts } from "@config/constants";
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const ForHealthExpertsSection = () => {
  return (
    <section className='bg-[url("/img/for-health-experts-bg.png")] bg-no-repeat bg-center pt-[300px] lg:pb-[166px] -mt-[125px]'>
      <div className="container">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-[repeat(2,514px)] gap-12 lg:gap-[92px]">
          {forHealthExperts.map(({ description, title }, i) => (
            <div
              key={i}
              className="bg-white rounded-[30px] py-8 lg:py-[50px] px-9 lg:px-[54px] shadow-[0px_10px_24px_0px_#0000000F] text-center flex flex-col justify-center items-center"
            >
              <h3 className="__title">{title}</h3>
              <p className="text-[20px] lg:text-[32px] leading-[28px] lg:leading-[43px] my-6 lg:my-8">
                {description}
              </p>
              <a href="#" className="gradient_btn_2">
                <span className="flex justify-center items-center gap-1">
                  Learn more
                  <HiOutlineChevronRight className="translate-y-px" size={16} />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForHealthExpertsSection;
