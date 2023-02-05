import React, { useCallback, useEffect, useRef } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen, onClose } = useAlertContext();

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    getFieldProps,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string()
        .min(25, "Must be 25 characters at minimum")
        .required("Required"),
    }),
  });

  useEffect(() => {
    if (response.type && response.message !== "") {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        resetForm();
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512da8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <VStack spacing={4}>
              <FormControl isInvalid={errors.firstName && touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  onChange={handleChange}
                  value={values.firstName}
                  id="firstName"
                  name="firstName"
                  {...getFieldProps("firstName")}
                />

                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email && touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  name="email"
                  type="email"
                  {...getFieldProps("email")}
                />

                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  value={values.type}
                  onChange={handleChange}
                >
                  <option style={{ color: "black" }} value="hireMe">
                    Freelance project proposal
                  </option>
                  <option style={{ color: "black" }} value="openSource">
                    Open source consultancy session
                  </option>
                  <option style={{ color: "black" }} value="other">
                    Other
                  </option>
                </Select>
              </FormControl>
              <FormControl isInvalid={errors.comment && touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  value={values.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="comment"
                  name="comment"
                  height={250}
                  {...getFieldProps("comment")}
                />
                <FormErrorMessage>{errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
