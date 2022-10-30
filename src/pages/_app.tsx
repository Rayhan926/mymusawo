import "swiper/css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@components/Footer";
import Header from "@components/Header";

function MyApp({ Component, pageProps }: AppProps) {
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
