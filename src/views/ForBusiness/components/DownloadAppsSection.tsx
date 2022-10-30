import { contactInfo } from "@config/constants";
import Image from "next/image";
import React from "react";

const DownloadAppsSection = () => {
  return (
    <section>
      <div className="container">
        <div className="bg-[url('/img/Simple-Shiny.png')] bg-no-repeat pt-10 lg:mt-20 lg:mb-[150px] rounded-[30px] py-8 lg:py-[58px] px-8 gap-y-8 lg:px-[125px] grid grid-cols-1 lg:grid-cols-[auto,250px] gap-5 bg-cover">
          <div>
            <h5 className="text-[22px] lg:text-[28px] font-segoe-ui-bold leading-[34px] text-white mb-4 capitalize max-w-[450px]">
              Get in Touch with Us To Claim your Listing
            </h5>
          </div>

          <ul className="space-y-3">
            {contactInfo.map(({ icon, text }, i) => (
              <li key={i}>
                <div className="flex items-center gap-2.5 text-white text-base lg:text-[20px]">
                  <div className="shrink-0">{icon}</div>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppsSection;
