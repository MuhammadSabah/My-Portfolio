import React from "react";
import { Avatar, Heading, VStack, Box, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Muhammad!";
const bio1 = "A Software Engineer";
const bio2 = "specialized in React, Flutter, and interested in Python";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#18181b"
    // backgroundColor="#2A4365"
  >
    <Avatar
      size={{ base: "xl", md: "2xl" }}
      name="Muhammad Sabah Ibrahim"
      alt="Muhammad"
      bg="#512da8"
    />

    <Text
      paddingTop={{ base: 12, md: 2 }}
      fontFamily="Roboto Mono"
      fontWeight="medium"
      fontSize="20"
    >
      {greeting}
    </Text>
    <Box paddingTop={{ base: "6", md: "4" }} px={{ base: "12px", md: "0px" }}>
      <Text
        fontWeight="bold"
        align="center"
        fontSize={{ base: "26", md: "40" }}
      >
        {bio1}
      </Text>
      <Text
        fontWeight="bold"
        align="center"
        fontSize={{ base: "26", md: "40" }}
        maxWidth={800}
        px={{ base: "40px", md: "0px" }}
      >
        {bio2}
      </Text>
    </Box>
  </FullScreenSection>
);

export default LandingSection;
