import type { ProjectCardProps } from "../components/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "Aurora",
    description: "AI powered chatbot, image generator, and video summarizer for Discord. Powered by OpenAI, written in Python and Nextcord.",
    imageURL: "https://aurora.timesurgelabs.com/images/406bf0610c19ae9ccd305b1fc989c4e9.png",
    linkText: "Website",
    link: "https://aurora.timesurgelabs.com",
  },
  {
    title: "OttoDocs",
    description:
      "An AI powered documentation generator. Written in Go.",
    imageURL: "https://camo.githubusercontent.com/986260174dae42c830043c5a5ce5aea69201b864a813fedc66dcc0e44db98bf3/68747470733a2f2f7668732e636861726d2e73682f7668732d3541367533495459534970327164315437586459454d2e676966",
    linkText: "Website",
    link: "https://ottodocs.timesurgelabs.com",
  },
  {
    title: "sq",
    description:
      "Simple, easy to use converter and query tool for SQLite, CSV, JSON, and JSONL. Written in Go, inspired by jq.",
    imageURL: "https://raw.githubusercontent.com/chand1012/sq/main/img/social_banner.jpg",
    linkText: "GitHub",
    link: "https://github.com/chand1012/sq",
  },
  {
    title: "caffeineClipper",
    description: "Simple Tauri App that clips twitch clips with a hotkey.",
    imageURL: "/img/caffeineClipper.png",
    linkText: "GitHub",
    link: "https://github.com/chand1012/caffeineClipper",
    imageBgColor: "white",
  },
  {
    title: "This Website",
    description:
      "A portfolio website built with Next.js, Vercel, and Chakra UI.",
    imageURL: "/img/portfolio.jpg",
    linkText: "GitHub",
    link: "https://github.com/chand1012/portfolio",
  },
  {
    title: "Discord-Quick-Meme",
    description:
      "Discord Reddit retrieval bot on over 1,000 unique Discord servers. Gets content from Reddit and posts it in a Discord server or chat. Uses Go and MongoDB. Killed by Reddit API changes.",
    imageURL:
      "https://raw.githubusercontent.com/chand1012/Discord-Quick-Meme/master/icon/MemeBotBlue512.png",
    linkText: "GitHub",
    link: "https://github.com/chand1012/Discord-Quick-Meme",
  },
];

export default projects;
