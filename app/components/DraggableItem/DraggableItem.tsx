import {
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { removeItem } from "~/redux/features/drag-drop/drag-drop.slice";

const DraggableItem = forwardRef((props, ref) => {
  const { item, task, itemIndex } = props;
  const dispatch = useDispatch();

  return (
    <Draggable key={task.id} draggableId={task.id} index={itemIndex}>
      {(provided, snapshot) => (
        <Box
          bg={snapshot.isDragging ? "gray.100" : "white"}
          _dark={{ bg: "gray.700" }}
          mb={"12px"}
          rounded={"8px"}
          w={"full"}
          py={"12px"}
          px={"16px"}
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={provided.draggableProps.style}
          {...provided.dragHandleProps}
          bgColor={snapshot.isDragging ? "blue.100" : ""}
        >
          <HStack justifyContent={"space-between"}>
            <Text fontWeight={500} fontSize={"sm"}>
              {task.heading}
            </Text>
            <HStack gap={3}>
              <Menu>
                <MenuButton
                  _hover={{
                    color: "blackAlpha.900",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <g fill="currentColor">
                      <circle cx="10" cy="15" r="2" />
                      <circle cx="10" cy="10" r="2" />
                      <circle cx="10" cy="5" r="2" />
                    </g>
                  </svg>
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem
                    onClick={() =>
                      dispatch(
                        removeItem({
                          columnId: item.id,
                          itemId: task.id,
                        })
                      )
                    }
                  >
                    Delete
                  </MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
        </Box>
      )}
    </Draggable>
  );
});

export default DraggableItem;
