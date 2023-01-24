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
      size="2xl"
      name="Muhammad Sabah Ibrahim"
      alt="Muhammad"
      bg="red.400"
    />

    <Text paddingTop={2} fontWeight="medium" fontSize="20">
      {greeting}
    </Text>
    <Box paddingTop="4">
      <Text fontWeight="bold" align="center" fontSize="40">
        {bio1}
      </Text>
      <Text fontWeight="bold" align="center" fontSize="40" width={800}>
        {bio2}
      </Text>
    </Box>
  </FullScreenSection>
);

export default LandingSection;
