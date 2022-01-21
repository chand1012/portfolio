import { Flex, Stack, useColorModeValue, Box, Text } from "@chakra-ui/react";

import ProjectCard, { ProjectCardProps } from "./ProjectCard";

export interface ProjectsProps {
  projects: ProjectCardProps[];
  title: string;
  description: string;
  moreLink?: JSX.Element;
}

const Projects = ({
  projects,
  title,
  description,
  moreLink,
}: ProjectsProps) => {
  const bgColor = useColorModeValue("gray.200", "gray.600");
  const headerColor = useColorModeValue("gray.800", "gray.100");
  const headerBoxColor = useColorModeValue("white", "gray.800");
  const subHeaderColor = useColorModeValue("gray.600", "gray.400");

  const projectCards = projects.map(
    (project: ProjectCardProps, index: number) => {
      return <ProjectCard key={index} {...project} />;
    }
  );

  return (
    <Flex p={2} alignItems="center" justifyContent="center">
      <Box mx="auto" px={2} py={4} rounded="lg" shadow="lg" bg={bgColor}>
        <Stack spacing={6} bg={bgColor}>
          <Box
            mx="auto"
            px={2}
            py={4}
            rounded="lg"
            shadow="lg"
            bg={headerBoxColor}
            maxW="2xl"
          >
            <Flex p={2} alignItems="center" justifyContent="center">
              <Text fontSize="4xl" fontWeight="bold" color={headerColor}>
                {title}
              </Text>
            </Flex>
            <Flex p={2} alignItems="center" justifyContent="center">
              <Text color={subHeaderColor} fontSize="xl">
                {description}
              </Text>
            </Flex>
          </Box>
          {projectCards}
          {moreLink}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Projects;
