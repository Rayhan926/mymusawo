import { teams } from "@config/constants";
import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <section
      className="pt-[50px] pb-[70px] bg-[#F2F2F2] scroll-mt-14 lg:scroll-mt-20"
      data-id="our-team"
    >
      <div className="container">
        <h2 className="text-[26px] lg:text-[36px] font-segoe-ui-bold text-center">
          Our Team
        </h2>
        <div className="mt-10 lg:mt-[70px] grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          {teams.map(({ about, imgSrc, name, title }, i) => (
            <div
              key={i}
              className="rounded-[20px] overflow-hidden bg-[#0C2F33]"
            >
              <Image
                width={520}
                layout="responsive"
                height={520}
                alt={name}
                src={imgSrc}
              />

              <div className="p-5 text-white">
                <h3 className="text-[28px] font-segoe-ui-bold">{name}</h3>
                <h6 className="font-segoe-ui-regular">{title}</h6>
                <p className="mt-3">{about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
