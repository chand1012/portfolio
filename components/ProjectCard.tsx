import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Link,
  Image,
  Icon,
  Button,
} from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageURL: string;
  imageMode?: "cover" | "contain";
  imageBgColor?: string;
  linkText: string;
  link: string;
}

const ProjectCard = ({
  title,
  description,
  imageURL,
  linkText,
  link,
  imageMode = "cover",
  imageBgColor,
}: ProjectCardProps) => {
  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.600")}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Flex alignItems="center" justifyContent="center">
            <Image
              h={{ base: 64, lg: 300 }}
              rounded={{ lg: "lg" }}
              alt={title}
              src={imageURL}
              fit={imageMode}
              bg={imageBgColor}
            />
          </Flex>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            {title}
          </chakra.h2>
          <chakra.p mt={4} color={useColorModeValue("gray.500", "gray.400")}>
            {description}
          </chakra.p>

          <Box mt={8}>
            <Button as={Link} href={link} isExternal colorScheme={"blue"}>
              {linkText}
              <Icon as={FiExternalLink} ml={2} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
