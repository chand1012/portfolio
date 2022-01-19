import {
  Flex,
  Stack,
  Spinner,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

import ProjectCard, { ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "Discord-Quick-Meme",
    description:
      "Discord Reddit retrieval bot on over 1,000 unique Discord servers. Uses Go and MongoDB.",
    imageURL:
      "https://raw.githubusercontent.com/chand1012/Discord-Quick-Meme/master/icon/MemeBotBlue2048.png",
    linkText: "Check it out!",
    link: "https://github.com/chand1012/Discord-Quick-Meme",
  },
];

const Projects = () => {
  const bgColor = useColorModeValue("gray.200", "gray.600");

  const projectCards = projects.map(
    (project: ProjectCardProps, index: number) => {
      return <ProjectCard key={index} {...project} />;
    }
  );

  return (
    <Flex p={2} alignItems="center" justifyContent="center">
      <Box
        mx="auto"
        px={2}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={bgColor}
        maxW="2xl"
      >
        <Stack bg={bgColor}>{projectCards}</Stack>
      </Box>
    </Flex>
  );
};

export default Projects;
