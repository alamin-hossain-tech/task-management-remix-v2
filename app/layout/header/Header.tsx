import {
  Avatar,
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import CalendarIcon from "~/components/icons/calendar-icon";
import DarkIcon from "~/components/icons/dark-icon";
import LightIcon from "~/components/icons/light-icon";
import MessageQuestion from "~/components/icons/message-question";
import NotificationIcon from "~/components/icons/notification-icon";
import SearchIcon from "~/components/icons/search-icon";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      alignItems={"center"}
      justify={"space-between"}
      h={"70px"}
      borderBottom={"1px"}
      borderColor={"border"}
      _dark={{ borderColor: "gray.700" }}
      position={"sticky"}
      right={0}
      top={0}
      zIndex={99}
      pr={"32px"}
      pl={"16px"}
      justifyContent={"space-between"}
      w={"full"}
    >
      <InputGroup w={"250px"}>
        <InputLeftElement pointerEvents={"none"}>
          <SearchIcon />
        </InputLeftElement>
        <Input
          placeholder="Search for anything..."
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
          {colorMode === "light" ? (
            <Box cursor={"pointer"} onClick={toggleColorMode}>
              <DarkIcon />
            </Box>
          ) : (
            <Box onClick={toggleColorMode} cursor={"pointer"}>
              <LightIcon />
            </Box>
          )}
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
  );
};

export default Header;
