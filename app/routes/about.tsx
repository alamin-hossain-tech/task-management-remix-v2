import { Box, Button, useColorMode } from "@chakra-ui/react";
import React from "react";

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box color={"brand.100"}>
      {" "}
      this is about page
      <Button onClick={toggleColorMode}>Toggle</Button>
    </Box>
  );
};

export default About;
