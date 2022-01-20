import type { ProjectCardProps } from "../components/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "Discord-Quick-Meme",
    description:
      "Discord Reddit retrieval bot on over 1,000 unique Discord servers. Uses Go and MongoDB.",
    imageURL:
      "https://raw.githubusercontent.com/chand1012/Discord-Quick-Meme/master/icon/MemeBotBlue512.png",
    linkText: "Check it out!",
    link: "https://github.com/chand1012/Discord-Quick-Meme",
  },
  {
    title: "ImageCropAPI",
    description:
      "Simple Image Cropping API. Written with Python, Pillow, and FastAPI.",
    imageURL: "/img/imagecrop.jpg",
    linkText: "Check it out!",
    link: "https://github.com/chand1012/ImageCropAPI",
  },
  {
    title: "This Website",
    description:
      "A portfolio website built with Next.js, Vercel, and Chakra UI.",
    imageURL: "/img/portfolio.jpg",
    linkText: "Check it out!",
    link: "https://github.com/chand1012/portfolio",
  },
];

export default projects;
