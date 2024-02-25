import {
  Box,
  Button,
  HStack,
  Input,
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
import {
  NavLink,
  json,
  useLoaderData,
  useNavigate,
  useParams,
  useSubmit,
} from "@remix-run/react";
import { child, get, push, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import AddIcon from "~/components/icons/add-icon";
import { db } from "~/firebase.config";
import { loader } from "~/root";

const LeftSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const submit = useSubmit();
  const [name, setName] = useState("");
  const newSave = () => {
    submit({ name }, { method: "POST" });
  };
  const params = useParams();
  const { data } = useLoaderData<typeof loader>();

  return (
    <>
      <VStack
        justifyContent={"space-between"}
        h={"calc(100vh - 70px)"}
        p={"16px"}
        align={"start"}
      >
        <VStack gap={5} w={"full"}>
          <HStack justifyContent={"space-between"} w={"full"}>
            <Text>Your Boards</Text>
            <Box cursor={"pointer"} onClick={onOpen}>
              <AddIcon />
            </Box>
          </HStack>
          {Object.keys(data).map((id) => (
            <Box
              key={id}
              w={"full"}
              rounded={"6px"}
              bg={params.id === id ? "blue.100" : "gray.100"}
            >
              <NavLink to={id}>
                <Box w={"full"} py={"4px"} px={"16px"}>
                  <Text>{data[id]["name"]}</Text>
                </Box>
              </NavLink>
            </Box>
          ))}
        </VStack>
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
          <ModalBody>
            <Input onChange={(e) => setName(e.target.value)} value={name} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={newSave} variant="ghost">
              Secondary Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LeftSidebar;
