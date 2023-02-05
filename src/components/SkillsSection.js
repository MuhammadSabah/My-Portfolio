import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Box, Text, Link, Image, Tooltip } from "@chakra-ui/react";
import skills from "../skillsData";

const SkillsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14213d"
      isDarkBackground
      // p={{ md: 16, lg: 8 }}
      alignItems="flex-start"
      py={{ lg: 28 }}
      mt={{ base: 24, lg: 0 }}
      px={{ base: "36px", md: 10, lg: 0 }}
      spacing={8}
      pb={{ base: "28", md: "0", lg: 32 }}
    >
      <Box>
        <Heading textAlign="left" as="h1" id="skills-section">
          Skills & Tools
        </Heading>
        <Box w="100%" mt="32px">
          <Text fontSize="26px" fontFamily="Roboto Mono" fontWeight="semibold">
            Front-End
          </Text>
          <Box mt="16px" display="flex" flexWrap="wrap" gap="20px">
            {skills.frontEnd.map((item, index) => (
              <Tooltip key={item.tool} hasArrow label={item.tool}>
                <Image
                  cursor="pointer"
                  boxSize="50px"
                  objectFit="cover"
                  src={item.src}
                ></Image>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Box>
      <Box w="100%" mt="16px">
        <Text fontSize="26px" fontFamily="Roboto Mono" fontWeight="semibold">
          Back-End
        </Text>
        <Box mt="16px" display="flex" flexWrap="wrap" gap="20px">
          {skills.backEnd.map((item, index) => (
            <Tooltip key={item.tool} hasArrow label={item.tool}>
              <Image
                cursor="pointer"
                boxSize="50px"
                objectFit="cover"
                src={item.src}
              ></Image>
            </Tooltip>
          ))}
        </Box>
      </Box>
      <Box w="100%" mt="16px">
        <Text fontSize="26px" fontFamily="Roboto Mono" fontWeight="semibold">
          Mobile
        </Text>
        <Box mt="16px" display="flex" flexWrap="wrap" gap="20px">
          {skills.mobile.map((item, index) => (
            <Tooltip key={item.tool} hasArrow label={item.tool}>
              <Image
                cursor="pointer"
                boxSize="50px"
                objectFit="cover"
                src={item.src}
              ></Image>
            </Tooltip>
          ))}
        </Box>
      </Box>
      <Box w="100%" mt="16px">
        <Text fontSize="26px" fontFamily="Roboto Mono" fontWeight="semibold">
          Others
        </Text>
        <Box mt="16px" display="flex" flexWrap="wrap" gap="20px">
          {skills.other.map((item, index) => (
            <Tooltip key={item.tool} hasArrow label={item.tool}>
              <Image
                cursor="pointer"
                boxSize="50px"
                objectFit="cover"
                src={item.src}
              ></Image>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default SkillsSection;
