import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Icon,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";

const CTA = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
      <Flex bg="brand.400">
        <Image
          src="/img/banner.jpg"
          alt="Chandler"
          fit="contain"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <chakra.span
          color={useColorModeValue("brand.600", "gray.300")}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
          Full Stack Software Engineer
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
          Chandler Lofland
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
        >
          Software Developer and Startup Entrepreneur with a passion for
          creating cutting edge software in a rapidly changing industry.
        </chakra.p>
        <Box display="inline-flex" rounded="md" shadow="md">
          <Link href="https://docs.google.com/document/d/12e4IwMAA7qYuqqWLyQUYQQ01UkC9V4Hai0d_jm9IY7o/edit?usp=sharing">
            <Button colorScheme={"blue"} variant="solid">
              Resume
              <Icon as={FiExternalLink} ml={2} />
            </Button>
          </Link>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default CTA;
