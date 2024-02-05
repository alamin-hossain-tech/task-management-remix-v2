import {
  Avatar,
  Box,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";
import React from "react";
import CalendarIcon from "~/components/icons/calendar-icon";
import MessageQuestion from "~/components/icons/message-question";
import NotificationIcon from "~/components/icons/notification-icon";
import SearchIcon from "~/components/icons/search-icon";

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
          <HStack
            alignItems={"center"}
            justify={"space-between"}
            h={"70px"}
            borderBottom={"1px"}
            borderColor={"border"}
            position={"sticky"}
            left={0}
            top={0}
            zIndex={99}
            bgColor={"white"}
            px={"48px"}
            justifyContent={"space-between"}
          >
            <InputGroup w={"250px"} bgColor={"#f5f5f5"}>
              <InputLeftAddon px={"8px"} bgColor={"transparent"}>
                <SearchIcon />
              </InputLeftAddon>
              <Input
                placeholder="Search for anything..."
                borderLeft={"none"}
                pl={0}
                _focus={{
                  boxShadow: "none",
                  outline: "none",
                  borderColor: "border",
                }}
              />
            </InputGroup>
            <HStack gap={"50px"}>
              {/* icons  */}
              <HStack gap={"24px"}>
                <CalendarIcon />
                <MessageQuestion />
                <NotificationIcon />
              </HStack>
              <HStack gap={"24px"}>
                <Box textAlign={"right"}>
                  <Text fontWeight={500}>John Doe</Text>
                  <Text fontSize={"sm"}>California, USA</Text>
                </Box>
                <Avatar size={"sm"} name="John" />
              </HStack>
            </HStack>
          </HStack>
          <Outlet />
        </Box>
      </Flex>
    </>
  );
};

export default MainLayout;
