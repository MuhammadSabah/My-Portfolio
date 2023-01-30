import React from "react";
import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link,
  Box,
  Tag,
  Avatar,
  TagLabel,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      maxWidth="md"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white"
    >
      <Image src={imageSrc} alt="Project Image" />
      <Box p={4} display="flex" alignItems="baseline" flexDirection="column">
        <Box
          color="black"
          mt="1"
          fontWeight="bold"
          as="h6"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>
        <Box paddingY="3" color="blackAlpha.800" fontSize="14">
          {description}
        </Box>
        <HStack justifyContent="end " w="100%">
          <Link isExternal style={{ textDecoration: "none" }}>
            <Tag
              size="lg"
              colorScheme="gray"
              boxShadow="md"
              borderRadius="full"
            >
              <HStack>
                <FontAwesomeIcon icon={faGithub} size="lg" pr="12px" />
                <TagLabel>GitHub</TagLabel>
              </HStack>
            </Tag>
          </Link>
          <Link isExternal style={{ textDecoration: "none" }}>
            <Tag
              size="lg"
              colorScheme="blue"
              boxShadow="md"
              borderRadius="full"
            >
              <HStack>
                <FontAwesomeIcon icon={faEye} size="lg" pr="12px" />
                <TagLabel>Live Preview</TagLabel>
              </HStack>
            </Tag>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Card;
