import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@chakra-ui/layout";
import { Button, Link, Icon, Flex } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

import CTA from "../components/CallToAction";
import NavBar from "../components/NavBar";
import Features from "../components/Features";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";
import LatestArticles from "../components/LatestArticles";
import Projects from "../components/Projects";

import projects from "../config/projects";
import workExperience from "../config/work";

const ProjectLink = (
  <Flex alignItems="center" justifyContent="center">
    <Button
      size={"lg"}
      as={Link}
      target="_blank"
      href="https://github.com/chand1012?tab=repositories"
      colorScheme={"blue"}
    >
      {" "}
      More Projects <Icon as={FiExternalLink} ml={2} />{" "}
    </Button>
  </Flex>
);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chandler Lofland | Driven. Intelligent. Software.</title>
        <meta
          name="description"
          content="A collection of my projects and works."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Box mx={5} px={6} py={8}>
        <CTA />
      </Box>
      <Box px={6} py={8}>
        <Features />
      </Box>
      <Box mx="auto" px={6} py={8}>
        <Projects
          projects={workExperience}
          title="Work Experience"
          description="Startup and Enterprise"
        />
      </Box>
      <Box mx="auto" px={6} py={8}>
        <Projects
          projects={projects}
          title="Projects"
          description="My personal just-for-fun projects."
          moreLink={ProjectLink}
        />
      </Box>
      <Box mx="auto" px={6} py={8}>
        <LatestArticles max={3} />
      </Box>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
