import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";
import Header from "../header/Header";
import LeftSidebar from "../left-sidebar/LeftSidebar";

const MainLayout = () => {
  return (
    <>
      <Flex gap={0} position={"relative"}>
        <Box
          w={"250px"}
          position={"sticky"}
          left={0}
          top={0}
          borderRight={"1px"}
          borderColor={"border"}
          zIndex={99}
        >
          {/* logo box  */}
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
          {/* logo box end  */}

          {/* Left Side Bar  */}
          <LeftSidebar />
          {/* left side bart end  */}
        </Box>
        <Box w={"full"}>
          {/* header start  */}
          <Header />
          {/* header end  */}
          <Box h={"calc(100vh - 70px)"} p={"16px"}>
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default MainLayout;
