import React from "react";
import { chakra, Box, Flex, useColorModeValue, Stack } from "@chakra-ui/react";
import { CgBrowser, CgServer } from "react-icons/cg";
import { FaCogs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export default function Features() {
  const Feature = (props: any) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            bg={useColorModeValue("gray.900", "gray.500")}
            color="white"
          >
            {props.icon}
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color={useColorModeValue("gray.900", "gray.300")}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={12} bg={useColorModeValue("white", "gray.800")} rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h2
              color={useColorModeValue("brand.600", "brand.600")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Skills
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900", "gray.300")}
            ></chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              Full stack. Zero Compromises.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="Frontend Technologies"
                icon={<CgBrowser size={24} />}
              >
                React, React Native, Tailwind CSS, Bootstrap CSS, HTML5
                (HTML/CSS/JS)
              </Feature>

              <Feature
                title="Backend Technologies"
                icon={<CgServer size={24} />}
              >
                NodeJS, Express, Django, FastAPI, Redis, MongoDB, MySQL
              </Feature>

              <Feature title="DevOps Technologies" icon={<FaCogs size={24} />}>
                Docker, Jenkins, GitHub Actions, AWS, Linode, Linux
              </Feature>

              <Feature title="Languages" icon={<SiJavascript size={24} />}>
                Javascript, Typescript, Python, Go, C/C++, Lua, Shell Scripting
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
