import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Box, Text, Link, Image, Tooltip } from "@chakra-ui/react";
import skills from "../skillsData";

const SkillsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14213d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      py={28}
      spacing={8}
    >
      <Box>
        <Heading textAlign="left" as="h1" id="skills-section">
          Skills & Tools
        </Heading>
        <Box w="100%" mt="16px">
          <Text fontSize="26px" fontWeight="semibold">
            Front-End
          </Text>
          <Box mt="12px" display="flex" flexWrap="wrap" gap="20px">
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
        <Text fontSize="26px" fontWeight="semibold">
          Back-End
        </Text>
        <Box mt="12px" display="flex" flexWrap="wrap" gap="20px">
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
        <Text fontSize="26px" fontWeight="semibold">
          Mobile
        </Text>
        <Box mt="12px" display="flex" flexWrap="wrap" gap="20px">
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
        <Text fontSize="26px" fontWeight="semibold">
          Others
        </Text>
        <Box mt="12px" display="flex" flexWrap="wrap" gap="20px">
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
      {/* <Box pt="100px">
        <Heading textAlign="left" as="h1" id="education-section">
          Informal Education
        </Heading>
        <Box w="100%" mt="16px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            fontSize="28px"
            fontWeight="semibold"
            gap="60px"
          >
            <Text>
              ● WeCode Mobile Application Bootcamp | Rwanga Foundation
            </Text>
            <Link
              href="https://drive.google.com/file/d/1l7bPIvpOt0A-G_6ddH-BGvgItV2HQA0q/view"
              isExternal
              fontSize="18px"
              color="#fca311"
            >
              Certificate
            </Link>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            fontSize="26px"
            fontWeight="semibold"
            gap="60px"
          >
            <Text fontSize="28px" fontWeight="semibold">
              ● Advanced React Course by Meta
            </Text>
            <Link
              href="https://www.coursera.org/account/accomplishments/certificate/R9X77ESJ8BZQ"
              isExternal
              fontSize="18px"
              color="#fca311"
            >
              Certificate
            </Link>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            fontSize="26px"
            fontWeight="semibold"
            gap="60px"
          >
            <Text fontSize="26px" fontWeight="semibold">
              ● Crash Course on Python by Google
            </Text>
            <Link
              isExternal
              href="https://www.coursera.org/account/accomplishments/certificate/SX2R8FZ9MKDD"
              fontSize="18px"
              color="#fca311"
            >
              Certificate
            </Link>
          </Box>
        </Box>
      </Box> */}
    </FullScreenSection>
  );
};

export default SkillsSection;
