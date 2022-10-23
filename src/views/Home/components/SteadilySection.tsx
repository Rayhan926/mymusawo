import { steadilyStats } from "@config/constants";
import React from "react";

const SteadilySection = () => {
  return (
    <section className="bg-[url('/img/steadily-getting-there.png')] bg-no-repeat bg-center bg-cover py-[80px] lg:pt-[50px] lg:pb-[208px]">
      <div className="container text-white">
        <h2 className="__title text-center">Steadily getting there</h2>
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 mt-20 lg:mt-[110px]">
            {steadilyStats.map(({ label, value }, i) => (
              <div
                key={i}
                className="text-center lg:border-r border-[#0EB6D3] last:border-r-0"
              >
                <h6 className="text-[50px] lg:text-[70px] leading-[70px]">
                  {value}
                </h6>
                <p className="text-base lg:text-[20px] mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SteadilySection;
