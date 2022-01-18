import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";

import CTA from "../components/CallToAction";
import NavBar from "../components/NavBar";
import Features from "../components/Features";
import useArticles from "../hooks/articles";

import styles from "../styles/Home.module.css";
import ArticleCard from "../components/ArticleCard";

const LatestArticle = (
  data: any,
  isLoading: boolean,
  error: any,
  isError: boolean
) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.log(error);
    return null;
  }

  // get first item from data.items
  const article = data.items[0];

  return (
    <Box mx="auto" px={6} py={8}>
      <ArticleCard
        title={article.title}
        link={article.link}
        date={article.pubDate}
        description={article.contentSnippet}
      />
    </Box>
  );
};

const Home: NextPage = () => {
  const {
    data: articles,
    isLoading: isArticlesLoading,
    error: articlesError,
    isError: isArticlesError,
  } = useArticles();

  const latestArticle = LatestArticle(
    articles,
    isArticlesLoading,
    articlesError,
    isArticlesError
  );

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
      {latestArticle}
    </div>
  );
};

export default Home;
