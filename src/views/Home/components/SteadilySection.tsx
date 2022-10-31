import { steadilyStats } from "@config/constants";
import React from "react";

const SteadilySection = () => {
  return (
    <section
      data-id="for-businesses"
      className="scroll-mt-[150px] bg-[url('/img/steadily-getting-there.png')] bg-no-repeat bg-center bg-cover py-[80px] xl:pt-[50px] xl:pb-[208px]"
    >
      <div className="container text-white">
        <h2 className="__title text-center">Steadily getting there</h2>
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 mt-20 xl:mt-[110px]">
            {steadilyStats.map(({ label, value }, i) => (
              <div
                key={i}
                className="text-center xl:border-r border-[#0EB6D3] last:border-r-0"
              >
                <h6 className="text-[50px] xl:text-[70px] leading-[70px]">
                  {value}
                </h6>
                <p className="text-base xl:text-[20px] mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SteadilySection;
