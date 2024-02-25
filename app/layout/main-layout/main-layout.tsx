import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";
import Header from "../header/Header";
import LeftSidebar from "../left-sidebar/LeftSidebar";

const MainLayout = () => {
  return (
    <Box position={"relative"}>
      {/* logo box  */}
      <HStack w={"full"} position={"sticky"} top={0} left={0} gap={0}>
        <HStack
          w={"250px"}
          h={"70px"}
          borderBottom={"1px"}
          borderRight={"1px"}
          borderColor={"border"}
          _dark={{ borderColor: "gray.700" }}
          align={"center"}
          justify={"center"}
          flexShrink={0}
        >
          <Heading>Logo</Heading>
        </HStack>
        <Header />
      </HStack>

      {/* logo box end  */}

      <Flex gap={0}>
        <Box
          w={"250px"}
          position={"sticky"}
          left={0}
          top={0}
          borderRight={"1px"}
          borderColor={"border"}
          _dark={{ borderColor: "gray.700" }}
          zIndex={99}
          flexShrink={0}
        >
          {/* Left Side Bar  */}
          <LeftSidebar />
          {/* left side bart end  */}
        </Box>
        <Box p={"16px"} overflowX={"auto"}>
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainLayout;
