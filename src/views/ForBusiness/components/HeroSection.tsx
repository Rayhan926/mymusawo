import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-[950px] hero_bg flex flex-col justify-center overflow-hidden pt-[120px] xl:pt-0">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 text-white">
          <div className="flex flex-col justify-center">
            <h1 className="text-[40px] xl:text-[80px] font-segoe-ui-bold leading-[100%] max-w-[560px] capitalize">
              Let the traffic flow
            </h1>
            <p className="text-[16px] xl:text-[18px] leading-[140%] mt-[30px] mb-[50px] max-w-[700px]">
              Let your business shine on Uganda&apos;s first ever in-app health
              and wellness directory and join the future of health care
            </p>

            <div className="flex gap-6 xl:gap-[50px]">
              <div className="max-w-[170px]">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mymusawo"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src={"/img/Google-Play.svg"}
                    width={170}
                    height={58}
                    alt="Google-Play"
                  />
                </a>
              </div>
              <div className="max-w-[170px]">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mymusawo"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src={"/img/App-Store.svg"}
                    width={170}
                    height={58}
                    alt="App-Store"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-end scale-[1] lg:translate-x-20 origin-bottom-right">
            <Image
              src={"/img/for-business.png"}
              width={1082}
              height={1012}
              alt="for-business"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
