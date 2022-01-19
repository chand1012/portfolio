import {
  Flex,
  Stack,
  Spinner,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import useArticles from "../hooks/articles";

export interface LatestArticlesProps {
  max?: number;
}

const LatestArticles = ({ max }: LatestArticlesProps) => {
  const { data, isLoading, error, isError } = useArticles(max);
  const bgColor = useColorModeValue("gray.200", "gray.600");
  const headerColor = useColorModeValue("gray.800", "gray.100");
  const headerBoxColor = useColorModeValue("white", "gray.800");

  if (isLoading) {
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
          <Stack bg={bgColor}>
            <Box
              mx="auto"
              px={2}
              py={4}
              rounded="lg"
              shadow="lg"
              bg={headerBoxColor}
              maxW="2xl"
            >
              <Text
                color={headerColor}
                py={6}
                align="center"
                fontSize="4xl"
                fontWeight="bold"
              >
                Latest Blog Posts
              </Text>
            </Box>
            <Spinner alignSelf={"center"} />
          </Stack>
        </Box>
      </Flex>
    );
  }

  if (isError) {
    console.log(error);
    return null;
  }

  const articles = data.items.map((article: any, index: number) => {
    return (
      <ArticleCard
        title={article.title}
        link={article.link}
        date={article.pubDate}
        description={article.contentSnippet}
        key={index}
      />
    );
  });

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
        <Stack py={4} bg={bgColor} spacing={3}>
          <Box
            mx="auto"
            my={4}
            px={0}
            py={2}
            rounded="lg"
            shadow="lg"
            bg={headerBoxColor}
            maxW="2xl"
          >
            <Text
              color={headerColor}
              py={2}
              px={2}
              align="center"
              fontSize="4xl"
              fontWeight="bold"
            >
              Latest Blog Posts
            </Text>
          </Box>
          <Stack spacing={3}>{articles}</Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default LatestArticles;
