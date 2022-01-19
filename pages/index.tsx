import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/layout";

import CTA from "../components/CallToAction";
import NavBar from "../components/NavBar";
import Features from "../components/Features";

import styles from "../styles/Home.module.css";
import LatestArticles from "../components/LatestArticles";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chandler Lofland&apos;s Portfolio</title>
        <meta
          name="description"
          content="A collection of my projects and works."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Box mx="auto" px={6} py={8}>
        <CTA />
      </Box>
      <Box mx="auto" px={6} py={8}>
        <Features />
      </Box>
      <LatestArticles />
    </div>
  );
};

export default Home;
