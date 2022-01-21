import React from "react";

import {
  chakra,
  Box,
  Flex,
  Avatar,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Link,
  Icon,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { AiOutlineMenu } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Gslr() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        style={{ position: "sticky", top: 0, zIndex: 10 }}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="#"
              title="Chandler's Portfolio"
              display="flex"
              alignItems="center"
            >
              <Avatar size="sm" src="/img/avatar.jpg" alt="Chandler" />
              <VisuallyHidden>Chandler Lofland</VisuallyHidden>

              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Chandler Lofland
              </chakra.h1>
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button
                as={Link}
                target="_blank"
                href="https://docs.google.com/document/d/1zXkVOnQs5l1T-iCz4UO3FDavdChg_VACi2lqh2AY8ko/edit?usp=sharing"
                variant="ghost"
              >
                Resume
                <Icon as={FiExternalLink} ml={2} />
              </Button>
              <Button
                as={Link}
                href="https://blog.chand1012.dev/"
                variant="ghost"
              >
                Blog
                <Icon as={FiExternalLink} ml={2} />
              </Button>
              <IconButton aria-label="Toggle Mode" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </IconButton>
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Button
                  as={Link}
                  target="_blank"
                  href="https://docs.google.com/document/d/1zXkVOnQs5l1T-iCz4UO3FDavdChg_VACi2lqh2AY8ko/edit?usp=sharing"
                  variant="ghost"
                >
                  Resume
                  <Icon as={FiExternalLink} ml={2} />
                </Button>
                <Button
                  as={Link}
                  href="https://blog.chand1012.dev/"
                  variant="ghost"
                >
                  Blog
                  <Icon as={FiExternalLink} ml={2} />
                </Button>
                <IconButton
                  mt={4}
                  aria-label="Toggle Mode"
                  onClick={toggleColorMode}
                  variant={colorMode === "light" ? "ghost" : "solid"}
                >
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </IconButton>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
