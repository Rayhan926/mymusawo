import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { menus } from "@config/constants";

function Header() {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const closeSidebar = (e: any) =>
    e?.target?.id === "mobile_sidebar" && setShowSidebar(false);
  const closeSidebarForcely = () => setShowSidebar(false);
  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
  }, [showSidebar]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 duration-[0.4s] py-4 xl:py-5 ${
        fixedHeader ? "bg-[#0DB6D2]" : "xl:!pt-7"
      }`}
      id="top_header"
    >
      <div className="container relative flex justify-between items-center ">
        {/* Logo Start */}
        <div className="shrink-0">
          <Link href="/">
            <a className="w-[140px] block xl:w-[200px]">
              <svg
                className="w-full"
                viewBox="0 0 196 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width={196} height={71} fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_9_10"
                      transform="translate(0 -0.00263088) scale(0.00188679 0.00520861)"
                    />
                  </pattern>
                  <image
                    id="image0_9_10"
                    width={530}
                    height={193}
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </a>
          </Link>
        </div>
        {/* Logo End */}

        <div>
          {/* Nav Start */}
          <div
            onClick={closeSidebar}
            id="mobile_sidebar"
            className={`fixed pointer-events-none top-0 left-0 w-full h-screen bg-black/50 z-50 xl:static xl:w-auto xl:h-auto xl:bg-transparent opacity-0 duration-200 ${
              showSidebar ? "opacity-100 pointer-events-auto" : ""
            } xl:opacity-100 xl:pointer-events-auto font-openSans`}
          >
            <ul
              className={`mobile_sidebar_gradeint xl:bg-gradient-to-r xl:from-transparent xl:to-transparent border-r-2 xl:border-r-0 border-transparent gap-10 font-inter font-normal text-black xl:text-white bg-white pt-5 xl:pt-0 w-[80%] xl:w-auto xl:flex h-full xl:h-auto xl:bg-transparent -translate-x-full duration-200 ${
                showSidebar ? "translate-x-0" : ""
              } xl:translate-x-0`}
            >
              {menus.map((nav, i) => (
                <li key={i}>
                  <a
                    href={nav.url}
                    onClick={closeSidebarForcely}
                    className="hover:text-blue border-b-2 border-transparent hover:border-primary duration-100 px-6 py-2.5 block xl:p-1 uppercase"
                  >
                    {nav.text}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className="text-white hover:text-white border-b-2 border-transparent hover:border-primary hover:scale-110 duration-100 xl:hidden"
              onClick={() => setShowSidebar((prev) => !prev)}
            >
              <GiHamburgerMenu color="#fff" size={25} />
            </div>
          </div>
          {/* Nav End */}
          <div className="text-white flex items-center gap-6 xl:gap-8">
            {/* Hamburger Icon --Start-- */}
            <div
              className="hover:text-white xl:hidden"
              onClick={() => setShowSidebar((prev) => !prev)}
            >
              {showSidebar ? (
                <IoMdClose size={28} className="relative z-50" />
              ) : (
                <GiHamburgerMenu size={25} />
              )}
            </div>
            {/* Hamburger Icon --End-- */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
