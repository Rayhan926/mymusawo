import { forHealthExperts } from "@config/constants";
import Link from "next/link";
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const ForHealthExpertsSection = () => {
  return (
    <section className='bg-[url("/img/for-health-experts-bg.png")] bg-no-repeat bg-center pt-[200px] lg:pt-[300px] xl:pb-[166px] -mt-[125px]'>
      <div className="container scroll-mt-[150px]" data-id="for-experts">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 xl:grid-cols-[repeat(2,514px)] mb-12 xl:mb-0 gap-12 xl:gap-[92px]">
          {forHealthExperts.map(({ description, title, link }, i) => (
            <div
              key={i}
              className="bg-white rounded-[30px] py-8 xl:py-[50px] px-6 xl:px-[54px] shadow-[0px_10px_24px_0px_#0000000F] text-center flex flex-col justify-center items-center"
            >
              <h3 className="__title">{title}</h3>
              <p className="text-[16px] xl:text-[20px] leading-[24px] xl:leading-[28px] my-5 mb-6 xl:my-6">
                {description}
              </p>
              <Link href={link}>
                <a className="gradient_btn_2">
                  <span className="flex justify-center items-center gap-1">
                    Learn more
                    <HiOutlineChevronRight
                      className="translate-y-px"
                      size={16}
                    />
                  </span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForHealthExpertsSection;
