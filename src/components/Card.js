import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link,
  Box,
  // Image,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

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
        <Link isExternal>
          <Text color="black" fontWeight="semibold" fontSize="14">
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Card;
