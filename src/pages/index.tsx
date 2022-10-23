import Home from "@views/Home";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Musawo - The future of Health Care</title>
        <meta
          name="description"
          content="Making Health care service delivery in Africa better"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
};

export default HomePage;
