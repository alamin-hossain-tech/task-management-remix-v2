import {
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import React from "react";
import AddIcon from "~/components/icons/add-icon";

const LeftSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <VStack
        justifyContent={"space-between"}
        h={"calc(100vh - 70px)"}
        p={"16px"}
        align={"start"}
      >
        <HStack justifyContent={"space-between"} w={"full"}>
          <Text>Your Boards</Text>
          <Box cursor={"pointer"} onClick={onOpen}>
            <AddIcon />
          </Box>
        </HStack>
        <VStack w={"full"} align={"start"} mt={"16px"}>
          <Box
            w={"full"}
            bg={"gray.600"}
            color={"white"}
            px={"12px"}
            py={"6px"}
            rounded={"4px"}
          >
            <Text>Mo App</Text>
          </Box>
        </VStack>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>hello</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LeftSidebar;
