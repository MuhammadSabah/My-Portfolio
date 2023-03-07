import React, { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, useStatStyles, Tooltip } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const socials = [
  {
    title: "Mail",
    icon: faEnvelope,
    url: "mailto: hama.s.ibrahim9@gmail.com",
  },
  {
    title: "WhatsApp: +964 751 163 0373",
    icon: faWhatsapp,
    url: "https://api.whatsapp.com/send?phone=9647511630373",
  },
  {
    title: "GitHub",
    icon: faGithub,
    url: "https://github.com/MuhammadSabah",
  },
  {
    title: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/muhammad-sabah-4791b7226/",
  },
  // {
  //   icon: "Leetcode",
  //   url: "https://leetcode.com/MuhammadSabah/",
  // },
  {
    title: "StackOverflow",
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/14839602/hama-sabah",
  },
];

const Header = () => {
  const [y, setY] = useState(window.scrollY);
  const [translate, setTranslate] = useState(0);

  const handleScroll = useCallback(
    (e) => {
      const window = e.currentTarget;
      // console.log("window.scrollY: " + window.scrollY);
      // console.log("Y: " + y);

      if (y > window.scrollY) {
        setTranslate(0);
      }
      if (y < window.scrollY) {
        setTranslate(-200);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transform={`translateY(${translate}px)`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="center"
        >
          <nav>
            <HStack spacing={{ base: 8, md: 8 }}>
              {socials.map((social) => {
                return (
                  <Tooltip key={social.title} hasArrow label={social.title}>
                    <a key={social.url} href={social.url} target="_blank">
                      {social.icon === "Leetcode" ? (
                        <Icon icon="cib:leetcode" fontSize="30" />
                      ) : (
                        <FontAwesomeIcon icon={social.icon} size="2xl" />
                      )}
                    </a>
                  </Tooltip>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack display={{ base: "none", md: "inline-block" }} spacing={8}>
              <a onClick={handleClick("skills")} role="button">
                My Skills
              </a>
              <a onClick={handleClick("projects")} role="button">
                Projects
              </a>
              <a onClick={handleClick("contactme")} role="button">
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
