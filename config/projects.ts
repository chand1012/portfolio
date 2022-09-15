import type { ProjectCardProps } from "../components/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "Discord-Quick-Meme",
    description:
      "Discord Reddit retrieval bot on over 1,000 unique Discord servers. Gets content from Reddit and posts it in a Discord server or chat. Uses Go and MongoDB.",
    imageURL:
      "https://raw.githubusercontent.com/chand1012/Discord-Quick-Meme/master/icon/MemeBotBlue512.png",
    linkText: "GitHub Page",
    link: "https://github.com/chand1012/Discord-Quick-Meme",
  },
  {
    title: "AutoStonks",
    description:
      "Algorithm Trading bot written in Python for the Alpaca Market platform.",
    imageURL: "/img/stocks.jpg",
    linkText: "GitHub Page",
    link: "https://github.com/CasualCodersProjects/autostonks",
  },
  {
    title: "ImageCropAPI",
    description:
      "Simple Image Cropping API. Allows users to crop, resize, and convert images via an HTTP web API. Written in Python with Pillow and FastAPI.",
    imageURL: "/img/imagecrop.jpg",
    linkText: "GitHub Page",
    link: "https://github.com/chand1012/ImageCropAPI",
  },
  {
    title: "This Website",
    description:
      "A portfolio website built with Next.js, Vercel, and Chakra UI.",
    imageURL: "/img/portfolio.jpg",
    linkText: "GitHub Page",
    link: "https://github.com/chand1012/portfolio",
  },
];

export default projects;
