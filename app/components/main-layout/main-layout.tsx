import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";
import React from "react";

const MainLayout = () => {
  return (
    <>
      <Flex gap={0} position={"relative"}>
        <Box
          w={"250px"}
          h={"100dvh"}
          position={"sticky"}
          left={0}
          top={0}
          borderRight={"1px"}
          borderColor={"border"}
          zIndex={99}
        >
          <HStack
            w={"full"}
            h={"70px"}
            borderBottom={"1px"}
            borderColor={"border"}
            align={"center"}
            justify={"center"}
          >
            <Heading>Logo</Heading>
          </HStack>
        </Box>
        <Box w={"full"}>
          <Box
            w={"full"}
            h={"70px"}
            borderBottom={"1px"}
            borderColor={"border"}
            position={"sticky"}
            left={0}
            top={0}
            zIndex={99}
            bgColor={"white"}
          ></Box>
          <Outlet />
        </Box>
      </Flex>
    </>
  );
};

export default MainLayout;
