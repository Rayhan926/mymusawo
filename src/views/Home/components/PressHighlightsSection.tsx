/* eslint-disable @next/next/no-img-element */
import { pressHighlights } from "@config/constants";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const PressHighlightsSection = () => {
  return (
    <section className="mt-20 lg:mt-[150px] press_section">
      <div className="px-5 lg:px-[3%]">
        <h2 className="__title text-center">Recent Press Highlights</h2>
        <div className="mt-[55px]">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2.2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.8,
                spaceBetween: 30,
              },
            }}
            loop
          >
            {pressHighlights.map(({ description, imgSrc, link }, i) => (
              <SwiperSlide key={i}>
                <a href={link} target="_blank" rel="noreferrer">
                  <div className="h-full p-[30px] rounded-[30px] shadow-[0px_0px_4px_0px_#00000026] duration-200 hover:shadow-[0px_10px_24px_0px_#0EB6D30F]">
                    <img
                      src={imgSrc}
                      alt={description}
                      className="max-h-[75px]"
                    />
                    <p className="text-base lg:text-lg mt-[30px]">
                      {description}
                    </p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="container mt-[100px]">
        <div className="bg-[url('/img/Simple-Shiny.png')] bg-no-repeat bg-center bg-cover rounded-[30px] pt-[60px] pb-12 text-center">
          <h2 className="text-[32px] lg:text-[48px] font-segoe-ui-bold text-white">
            Your Health and Wellness Matters.
          </h2>

          <button className="mt-10 bg-white rounded-[10px] py-[18px] px-7">
            <span className="gradient_text">Ask a Question Today</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PressHighlightsSection;
