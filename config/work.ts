import type { ProjectCardProps } from "../components/ProjectCard";

const workExperience: ProjectCardProps[] = [
  {
    title: "PillarGG - Senior Full Stack Engineer",
    description:
      "Leading a development team to create AI-powered content creation software. Current Employer. Using React, Node, MongoDB, Python, and AWS.",
    imageURL: "/img/pillar.png",
    linkText: "Pillar Website",
    link: "https://pillar.gg",
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
