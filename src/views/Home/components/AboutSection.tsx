import { facilities } from "@config/constants";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className='bg-[url("/img/about-bg.png")] bg-no-repeat bg-center mt-8 xl:-mt-[120px] relative z-[3]'>
      <div className="max-w-[1407px] mx-auto px-5 grid-cols-1 grid xl:grid-cols-3 gap-10 xl:gap-[60px]">
        {facilities.map(({ icon, text }, i) => (
          <div
            key={i}
            className="bg-white rounded-[30px] shadow-[0px_10px_24px_0px_#0000000F] p-10 flex flex-col justify-center items-center text-center gap-6 xl:gap-10"
          >
            <div className="max-w-[80px] xl:max-w-[100px]">{icon}</div>

            <h4 className="text-base xl:text-lg font-semibold">{text}</h4>
          </div>
        ))}
      </div>

      <div className="container mt-[100px] scroll-mt-[150px]" id="about-us">
        <div className="grid grid-cols-1 xl:grid-cols-[60%,auto] gap-5">
          <div>
            <Image
              src={"/img/compressed/about-us.png"}
              alt="about-us"
              width={852}
              height={602}
            />
          </div>

          <div className="flex flex-col justify-center items-start">
            <h3 className="__title font-segoe-ui-bold">About Us</h3>
            <p className="mt-5 mb-[50px] text-base xl:text-lg max-w-[710px]">
              My Musawo, which is Luganda for “My Doctor”, is a mobile app that
              gives Ugandans access to quality health care information, services
              and products.
              <br />
              <br />
              We believe that everyone’s health and wellbeing is a priority and
              the efficiency with which they have their health care needs met
              matters. <br />
              <br />
              We want to inspire Ugandans to take control of their lives by
              having direct access to expert health and wellness information, as
              well as a robust support system.
            </p>

            <button className="gradient_btn">
              <span>Join our mailing list</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
