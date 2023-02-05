import { useState } from "react";
import emailjs from "@emailjs/browser";

const sendRequest = async (data) =>
  emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    {
      from_name: data.firstName,
      message: data.comment,
      from_email: data.email,
      type: data.type,
    },
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState({});

  const submit = async (url, data) => {
    setLoading(true);
    try {
      console.log(data);
      await sendRequest(data)
        .then((res) => {
          setResponse({
            type: "success",
            message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
          });
        })
        .catch((err) => {
          throw new Error("Something went wrong!");
        });
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
