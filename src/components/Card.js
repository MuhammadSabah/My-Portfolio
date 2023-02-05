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

const Card = ({
  title,
  description,
  imageSrc,
  gitHubLink,
  previewLink,
  techStack,
}) => {
  return (
    <Box
      maxWidth="md"
      borderRadius="lg"
      overflow="hidden"
      maxHeight="fit"
      backgroundColor="white"
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="Project Image"
          height="280px"
          w="100%"
          fit="cover"
        />
      )}
      <Box
        p={4}
        display="flex"
        alignItems="baseline"
        flexDirection="column"
        height="fit"
      >
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
        {techStack && (
          <Box>
            <HStack>
              {techStack.map((item, index) => (
                <Text
                  fontFamily="Roboto Mono"
                  fontWeight="semibold"
                  key={item}
                  color="gray.500"
                >
                  {index !== techStack.length - 1 ? item + "," : item}
                </Text>
              ))}
            </HStack>
          </Box>
        )}
        <HStack justifyContent="end " w="100%" mt="auto">
          {gitHubLink && (
            <Link
              href={gitHubLink}
              isExternal
              style={{ textDecoration: "none" }}
            >
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
          )}

          {previewLink && (
            <Link
              href={previewLink}
              isExternal
              style={{ textDecoration: "none" }}
            >
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
          )}
        </HStack>
      </Box>
    </Box>
  );
};

export default Card;
