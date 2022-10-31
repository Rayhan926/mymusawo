import "swiper/css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@components/Footer";
import Header from "@components/Header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import useScrollToSection from "@hooks/useScrollToSection";

gsap.registerPlugin(ScrollToPlugin);

function MyApp({ Component, pageProps }: AppProps) {
  useScrollToSection();
  return (
    <>
      <Header />
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
