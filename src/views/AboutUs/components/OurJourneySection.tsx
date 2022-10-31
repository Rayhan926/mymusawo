import { cx, roadmaps } from "@config/constants";
import React from "react";

const OurJourneySection = () => {
  return (
    <section className="pt-14 lg:pt-[150px] " data-id="our-journey">
      <div className="container">
        <h2 className="text-[26px] lg:text-[36px] font-segoe-ui-bold text-center">
          Our Journey So Far
        </h2>

        {/** Journey Roadmap --Start-- */}
        <div className="mt-20 lg:mt-[130px]">
          {roadmaps.map((props, i) => (
            <Box {...props} rightAlign={(i + 1) % 2 === 0} />
          ))}
        </div>
        {/** Journey Roadmap --End-- */}
      </div>
    </section>
  );
};

export default OurJourneySection;

type BoxProps = {
  rightAlign?: boolean;
  date: string;
  title: string;
  description: string;
};

const Box = ({ rightAlign, date, description, title }: BoxProps) => {
  const Info = ({ className }: { className?: string }) => {
    return (
      <div
        className={cx(
          "bg-white z-[5] relative w-fit shadow-[0px_0px_4px_0px_#00000026] p-5 rounded-[19px] max-w-[440px] border-[3px] border-white my-4 lg:my-0 __info_box",
          className,
        )}
      >
        <p className="text-base lg:text-lg uppercase opacity-80">{date}</p>
        <h4 className="text-[20px] lg:text-[26px] uppercase my-1 font-segoe-ui-bold">
          {title}
        </h4>
        <p className="text-base lg:text-lg opacity-80">{description}</p>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 relative __box">
      <div
        className={cx(
          "pr-10 lg:pr-[60px] relative hidden lg:block",
          rightAlign && "opacity-0 pointer-events-none",
        )}
      >
        <Info className="ml-auto" />

        {/** Horizonal Line --Start-- */}
        <div className="absolute top-1/2 -translate-y-1/2 h-1 w-10 lg:w-[60px] right-0 bg-[#DDDDDD] z-[2] __horizontal_line"></div>
        {/** Horizonal Line --End-- */}
      </div>
      <div
        className={cx(
          "pl-10 lg:pl-[60px] relative",
          !rightAlign && "lg:opacity-0 lg:pointer-events-none",
        )}
      >
        <Info className="mr-auto" />

        {/** Horizonal Line --Start-- */}
        <div className="absolute top-1/2 -translate-y-1/2 h-1 w-10 lg:w-[60px] left-0 bg-[#DDDDDD] z-[2] __horizontal_line"></div>
        {/** Horizonal Line --End-- */}
      </div>

      {/** Vertical Line --Start-- */}
      <div className="h-full w-1 bg-[#DDDDDD] absolute left-0 lg:left-1/2 lg:-translate-x-1/2 z-[2] __vertical_line"></div>
      {/** Vertical Line --End-- */}

      {/** Circle --Start-- */}
      <div className="h-5 w-5 rounded-full bg-[#DDDDDD] absolute left-[-8px] lg:left-1/2 lg:-translate-x-1/2 top-1/2 -translate-y-1/2 z-[3] __circle"></div>
      {/** Circle --End-- */}
    </div>
  );
};
