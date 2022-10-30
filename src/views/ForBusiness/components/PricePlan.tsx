import { healthExpertSteps, pricePlans } from "@config/constants";
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const cx = (...args: string[]) => args.join(" ");

const PricePlan = () => {
  return (
    <section className="bg-[url('/img/about-bg.png')] bg-no-repeat bg-bottom pt-[500px] -mt-[400px] pb-[70px]">
      <div className="container">
        <h2 className="__title text-center">
          Monthly Subscription Plan for Health and Wellness Businesses
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7 mt-[70px] px-[5%]">
          {pricePlans.map(({ features, icon, name, title, bestValue }, i) => {
            return (
              <div key={i} className="flex items-center">
                <div
                  style={{
                    background: bestValue
                      ? "linear-gradient(135deg, rgba(14, 182, 211, 0.9) 0%, rgba(0, 206, 203, 0.9) 100%)"
                      : "white",
                  }}
                  className={cx(
                    "shadow-[0px_10px_24px_0px_#0000000F] rounded-[20px] p-[50px] flex flex-col items-center w-full relative overflow-hidden",
                  )}
                >
                  {icon}
                  <h6
                    className={cx(
                      "text-xl mt-6 font-medium",
                      !bestValue ? "text-black" : "text-white",
                    )}
                  >
                    Quarterly Plan
                  </h6>
                  <h4
                    className={cx(
                      "font-segoe-ui-bold mt-4",
                      bestValue
                        ? "text-white text-[64px]"
                        : "gradient_text text-[48px]",
                    )}
                  >
                    {title}
                  </h4>

                  <ul className="space-y-3 w-full mt-6">
                    {features.map((f, i) => (
                      <li
                        key={i}
                        className={cx(
                          "flex items-center gap-3",
                          bestValue
                            ? "text-white text-[22px]"
                            : "text-black text-xl",
                        )}
                      >
                        <div className="shrink-0">
                          {bestValue ? (
                            <svg
                              width={30}
                              height={30}
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_56_756)">
                                <path
                                  d="M8.95521 17.7042C8.88073 17.624 8.81406 17.538 8.75677 17.4487C8.69922 17.3589 8.64896 17.2628 8.60755 17.163C8.46927 16.8336 8.43177 16.4779 8.4901 16.1385C8.54844 15.8016 8.70156 15.4794 8.94427 15.2146L9.03281 15.1234C9.62995 14.5544 10.5357 14.4484 11.2461 14.8758C11.3477 14.9365 11.4445 15.0086 11.5349 15.0911L11.5438 15.0992C12.0466 15.5815 12.8974 16.3703 13.456 16.8675L13.9354 17.2974L19.8031 11.1424C19.8857 11.0573 19.9766 10.981 20.0727 10.9143C20.1711 10.8464 20.2745 10.7888 20.3813 10.7422C20.4891 10.6951 20.6031 10.6581 20.7198 10.6326C20.8362 10.6068 20.9549 10.5922 21.0729 10.5896H21.0797C21.1971 10.5883 21.3122 10.5966 21.4289 10.6164C21.5427 10.6357 21.657 10.6667 21.776 10.7125C21.8857 10.7544 21.9909 10.807 22.0904 10.8698C22.1854 10.9299 22.2781 11.0016 22.3654 11.0839L22.4076 11.1221C22.4898 11.2036 22.5641 11.2922 22.6289 11.3862C22.6956 11.4823 22.7526 11.5857 22.7987 11.693C22.8464 11.8008 22.8833 11.9148 22.9091 12.0313C22.9352 12.1456 22.9492 12.2643 22.9521 12.3854V12.4453C22.951 12.5492 22.9411 12.6547 22.9224 12.7589C22.9018 12.8721 22.8708 12.9836 22.8297 13.0898C22.788 13.1987 22.7346 13.3047 22.6716 13.4049C22.6096 13.5031 22.5367 13.5974 22.4549 13.6836L15.3667 21.1211C15.2833 21.2102 15.194 21.2883 15.1005 21.3549C15.0044 21.4237 14.9008 21.4828 14.7924 21.5323C14.6839 21.5813 14.5708 21.6201 14.457 21.6469C14.3438 21.674 14.2255 21.6901 14.1055 21.6956L14.0729 21.6964C13.9628 21.6987 13.8542 21.6922 13.7497 21.676L13.7232 21.6708C13.6151 21.6526 13.5099 21.6255 13.4094 21.5901C13.2997 21.551 13.1924 21.5008 13.0901 21.4404L13.0737 21.4299C12.9771 21.3716 12.887 21.3057 12.8049 21.2336L12.7885 21.218C12.3771 20.8362 11.9299 20.4477 11.4779 20.055C10.6948 19.3745 9.60859 18.393 8.95755 17.706L8.95521 17.7042ZM16 0C20.4167 0 24.4188 1.79245 27.3159 4.68411C30.2076 7.58125 31.9997 11.5833 31.9997 16C31.9997 20.4169 30.2073 24.419 27.3159 27.3161C24.419 30.2078 20.4167 32 16 32C11.5831 32 7.58099 30.2078 4.68385 27.3161C1.79219 24.419 0 20.4167 0 15.9997C0 11.5833 1.79219 7.58125 4.68385 4.68411C7.58125 1.79245 11.5831 0 16 0ZM25.2341 6.76589C22.8714 4.40286 19.6068 2.94167 16 2.94167C12.393 2.94167 9.12839 4.40286 6.76563 6.76589C4.40286 9.12865 2.94167 12.3932 2.94167 15.9997C2.94167 19.6068 4.40286 22.8714 6.76563 25.2341C9.12839 27.5969 12.393 29.0583 16 29.0583C19.6068 29.0583 22.8714 27.5971 25.2341 25.2341C27.5969 22.8711 29.0581 19.6068 29.0581 15.9997C29.0581 12.3932 27.5971 9.12865 25.2341 6.76589Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_56_756">
                                  <rect width={32} height={32} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          ) : (
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_56_684)">
                                <path
                                  d="M6.71641 13.2781C6.66055 13.218 6.61055 13.1535 6.56758 13.0865C6.52441 13.0191 6.48672 12.9471 6.45566 12.8723C6.35195 12.6252 6.32383 12.3584 6.36758 12.1039C6.41133 11.8512 6.52617 11.6096 6.7082 11.4109L6.77461 11.3426C7.22246 10.9158 7.90176 10.8363 8.43457 11.1568C8.51074 11.2023 8.5834 11.2564 8.65117 11.3184L8.65781 11.3244C9.03496 11.6861 9.67305 12.2777 10.092 12.6506L10.4516 12.973L14.8523 8.35684C14.9143 8.29297 14.9824 8.23574 15.0545 8.18574C15.1283 8.13477 15.2059 8.0916 15.2859 8.05664C15.3668 8.02129 15.4523 7.99355 15.5398 7.97441C15.6272 7.95508 15.7162 7.94414 15.8047 7.94219H15.8098C15.8979 7.94121 15.9842 7.94746 16.0717 7.9623C16.157 7.97676 16.2428 8 16.332 8.03438C16.4143 8.06582 16.4932 8.10527 16.5678 8.15234C16.6391 8.19746 16.7086 8.25117 16.774 8.31289L16.8057 8.3416C16.8674 8.40273 16.923 8.46914 16.9717 8.53965C17.0217 8.61172 17.0645 8.68926 17.099 8.76973C17.1348 8.85059 17.1625 8.93613 17.1818 9.02344C17.2014 9.10918 17.2119 9.19824 17.2141 9.28906V9.33398C17.2133 9.41191 17.2059 9.49102 17.1918 9.56914C17.1764 9.6541 17.1531 9.73769 17.1223 9.81738C17.091 9.89902 17.051 9.97852 17.0037 10.0537C16.9572 10.1273 16.9025 10.198 16.8412 10.2627L11.525 15.8408C11.4625 15.9076 11.3955 15.9662 11.3254 16.0162C11.2533 16.0678 11.1756 16.1121 11.0943 16.1492C11.0129 16.1859 10.9281 16.215 10.8428 16.2352C10.7578 16.2555 10.6691 16.2676 10.5791 16.2717L10.5547 16.2723C10.4721 16.274 10.3906 16.2691 10.3123 16.257L10.2924 16.2531C10.2113 16.2395 10.1324 16.2191 10.057 16.1926C9.97481 16.1633 9.89434 16.1256 9.81758 16.0803L9.80527 16.0725C9.73281 16.0287 9.66524 15.9793 9.60371 15.9252L9.59141 15.9135C9.28281 15.6271 8.94746 15.3357 8.6084 15.0412C8.02109 14.5309 7.20645 13.7947 6.71816 13.2795L6.71641 13.2781ZM12 0C15.3125 0 18.3141 1.34434 20.4869 3.51309C22.6557 5.68594 23.9998 8.6875 23.9998 12C23.9998 15.3127 22.6555 18.3143 20.4869 20.4871C18.3143 22.6559 15.3125 24 12 24C8.68731 24 5.68574 22.6559 3.51289 20.4871C1.34414 18.3143 0 15.3125 0 11.9998C0 8.6875 1.34414 5.68594 3.51289 3.51309C5.68594 1.34434 8.68731 0 12 0ZM18.9256 5.07441C17.1535 3.30215 14.7051 2.20625 12 2.20625C9.29473 2.20625 6.84629 3.30215 5.07422 5.07441C3.30215 6.84648 2.20625 9.29492 2.20625 11.9998C2.20625 14.7051 3.30215 17.1535 5.07422 18.9256C6.84629 20.6977 9.29473 21.7938 12 21.7938C14.7051 21.7938 17.1535 20.6979 18.9256 18.9256C20.6977 17.1533 21.7936 14.7051 21.7936 11.9998C21.7936 9.29492 20.6979 6.84648 18.9256 5.07441Z"
                                  fill="url(#paint0_linear_56_684)"
                                />
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_56_684"
                                  x1={0}
                                  y1={0}
                                  x2={24}
                                  y2="23.9998"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#0EB6D3" />
                                  <stop offset={1} stopColor="#00CECB" />
                                </linearGradient>
                                <clipPath id="clip0_56_684">
                                  <rect width={24} height={24} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          )}
                        </div>

                        <p>{f}</p>
                      </li>
                    ))}
                  </ul>

                  {bestValue && (
                    <div
                      style={{
                        transform: "translate(48px, 26px) rotate(44deg)",
                      }}
                      className="bg-white font-segoe-ui-bold uppercase absolute top-0 right-0 px-10"
                    >
                      <span className="gradient_text">Best Value</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricePlan;