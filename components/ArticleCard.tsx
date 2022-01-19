import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";

export interface ArticleCardProps {
  title: string;
  description: string;
  link: string;
  date: Date | string;
}

const ArticleCard = ({ title, description, link, date }: ArticleCardProps) => {
  // format the date as month, date, year
  const dateString = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Flex p={2} alignItems="center" justifyContent="center">
      <Box
        mx="auto"
        px={2}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("blue.100", "blue.800")}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {dateString}
          </chakra.span>
        </Flex>

        <Box mt={2}>
          <Link
            fontSize="2xl"
            color={useColorModeValue("gray.800", "gray.100")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.700", "gray.200"),
              textDecor: "underline",
            }}
            href={link}
          >
            {title}
          </Link>
          <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            {description}
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Link
            color={useColorModeValue("gray.600", "gray.200")}
            _hover={{
              textDecor: "underline",
            }}
            href={link}
          >
            Read more
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ArticleCard;
