import React from "react";
import FullScreenSection from "./FullScreenSection";
import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
} from "@chakra-ui/react";
import Card from "./Card";
import projects from "../projectsData";

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#415a77"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Tabs isManual isLazy variant="enclosed">
        <TabList mx="16px">
          <Tab
            fontWeight="semibold"
            _selected={{ color: "white", bg: "#fca311" }}
          >
            Front-End
          </Tab>
          <Tab
            fontWeight="semibold"
            _selected={{ color: "white", bg: "blue.400" }}
          >
            Flutter
          </Tab>
          <Tab
            fontWeight="semibold"
            _selected={{ color: "white", bg: "green.400" }}
          >
            Python
          </Tab>
          <Tab
            fontWeight="semibold"
            _selected={{ color: "white", bg: "#9c6644" }}
          >
            Java
          </Tab>
        </TabList>
        <TabPanels overflowY="auto" height="880px">
          <TabPanel>
            <Box
              display="grid"
              gridTemplateColumns="repeat(2,minmax(0,1fr))"
              gridGap={8}
              alignItems="start"
            >
              {projects.frontEnd.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.getImageSrc}
                  gitHubLink={project.github}
                  previewLink={project.livePreview}
                  techStack={project.techStack}
                />
              ))}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box
              display="grid"
              gridTemplateColumns="repeat(2,minmax(0,1fr))"
              gridGap={8}
              alignItems="start"
            >
              {projects.flutter.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.getImageSrc}
                  gitHubLink={project.github}
                  previewLink={project.livePreview}
                  techStack={project.techStack}
                />
              ))}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box
              display="grid"
              gridTemplateColumns="repeat(2,minmax(0,1fr))"
              gridGap={8}
              alignItems="start"
            >
              {projects.python.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.getImageSrc}
                  gitHubLink={project.github}
                  previewLink={project.livePreview}
                  techStack={project.techStack}
                />
              ))}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box
              display="grid"
              gridTemplateColumns="repeat(2,minmax(0,1fr))"
              gridGap={8}
              alignItems="start"
            >
              {projects.java.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.getImageSrc}
                  gitHubLink={project.github}
                  previewLink={project.livePreview}
                  techStack={project.techStack}
                />
              ))}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </FullScreenSection>
  );
};

export default ProjectsSection;
