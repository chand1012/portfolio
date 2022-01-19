import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageURL: string;
  linkText: string;
  link: string;
}

const ProjectCard = ({
  title,
  description,
  imageURL,
  linkText,
  link,
}: ProjectCardProps) => {
  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.600")}
      p={50}
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
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage: `url('${imageURL}')`,
            }}
          ></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            {title}
          </chakra.h2>
          <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
            {description}
          </chakra.p>

          <Box mt={8}>
            <Link
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "gray.800" }}
              href={link}
            >
              {linkText}
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
