import {
  Box,
  Button,
  HStack,
  Image,
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
  useColorMode,
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
  const { colorMode } = useColorMode();

  return (
    <>
      <VStack
        justifyContent={"space-between"}
        h={"calc(100vh - 70px)"}
        p={"16px"}
        align={"start"}
        fontWeight={500}
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
              bg={
                params.id === id
                  ? "gray.600"
                  : colorMode === "dark"
                  ? "gray.900"
                  : "blackAlpha.200"
              }
              color={
                params.id === id
                  ? "white"
                  : colorMode === "light"
                  ? "black"
                  : "white"
              }
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
            py={"16px"}
            rounded={"4px"}
            boxShadow={"md"}
          >
            <Image
              mt={"-30px"}
              w={"40px"}
              mx={"auto"}
              src="/logo-2.svg"
            ></Image>
            <Text textAlign={"center"}>Task Management</Text>
          </Box>
        </VStack>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
            />
          </ModalBody>

          <ModalFooter gap={"8px"} justifyContent={"start"}>
            <Button onClick={newSave} variant="secondary">
              Secondary Action
            </Button>
            <Button variant={"red"} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LeftSidebar;
