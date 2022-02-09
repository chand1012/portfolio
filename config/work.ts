import type { ProjectCardProps } from "../components/ProjectCard";

const workExperience: ProjectCardProps[] = [
  {
    title: "Stealth Startup",
    description:
      "Web3 startup on building on Avalanche.",
    link: "#",
    linkText: "Coming Soon",
    imageURL: "/img/code.jpg",
    imageMode: "contain",
    // imageBgColor: "white",
  },
  {
    title: "PillarGG - Senior Full Stack Engineer",
    description:
      "Lead a development team creating AI-powered content creation software. Used React, Node, MongoDB, Python, and AWS.",
    imageURL: "/img/pillar.png",
    linkText: "Pillar GitHub",
    link: "https://github.com/pillargg",
    imageMode: "contain",
    imageBgColor: "white",
  },
  {
    title: "DeepHire - Full Stack Software Contractor",
    description:
      "Assisted in the improvement of their web API and their React frontend. Single Quarter Contract.",
    imageURL: "/img/deephire.svg",
    linkText: "DeepHire Website",
    link: "https://deephire.com",
    imageMode: "contain",
    imageBgColor: "white",
  },
  {
    title: "Automated Packaging Systems - Software Engineering Intern",
    description:
      "Updated and compiled Linux for embedded systems using Yocto, updated and improved NodeJS web API, wrote automated testing software in Python.",
    imageURL: "/img/aps.jpg",
    linkText: "APS Website",
    link: "https://www.autobag.com/",
    imageMode: "contain",
    imageBgColor: "white",
  },
];

export default workExperience;
