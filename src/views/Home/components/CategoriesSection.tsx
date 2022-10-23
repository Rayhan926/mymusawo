/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { categories } from "@config/constants";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Image from "next/image";

const CategoriesSection = () => {
  return (
    <section className="mt-[100px] xl:mt-[150px]">
      <div className="container">
        <h2 className="__title text-center">
          Our Comprehensive Health and Wellness Categories
        </h2>
      </div>

      <div className="relative">
        <div className="container">
          <div className="mt-[70px]">
            <div className="flex flex-col-reverse">
              {/** Swiper Pagination --Start-- */}
              <div id="categoriesPagination" className="flex-wrap"></div>
              {/** Swiper Pagination --End-- */}
              <div className="relative">
                <button
                  id="prevBtn"
                  className="hidden xl:flex categoriesNavigationBtn absolute top-0 right-full h-full w-[65px] z-10 items-center justify-end text-[#EAEAEA]"
                >
                  <HiOutlineChevronLeft size={40} />
                </button>
                <button
                  id="nextBtn"
                  className="hidden xl:flex categoriesNavigationBtn absolute top-0 left-full h-full w-[65px] z-10 items-center justify-start text-[#EAEAEA]"
                >
                  <HiOutlineChevronRight size={40} />
                </button>

                <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{
                    el: "#categoriesPagination",
                  }}
                  navigation={{
                    prevEl: "#prevBtn",
                    nextEl: "#nextBtn",
                  }}
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
                      slidesPerView: 4,
                      slidesPerGroup: 4,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {categories.map(({ imgSrc, title }, i) => (
                    <SwiperSlide key={i}>
                      <div className="rounded-[20px] overflow-hidden relative">
                        <Image
                          src={imgSrc}
                          alt={title}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />

                        <div
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.88) 100%)",
                          }}
                          className="absolute top-0 left-0 w-full h-full px-5 py-4 flex items-end text-white text-2xl"
                        >
                          {title}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
