import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, forwardRef, useEffect, useRef, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import {
  addItem,
  removeColumn,
  removeItem,
  updateColumn,
} from "~/redux/features/drag-drop/drag-drop.slice";
import DraggableItem from "../DraggableItem/DraggableItem";

const HeadingComponent = ({ provided, item, dispatch, index }) => {
  const [edit, setEdit] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (item.id === edit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [edit, item.id]);

  return (
    <HStack
      alignItems={"center"}
      justifyContent={"space-between"}
      {...provided.dragHandleProps}
      gap={"10px"}
    >
      {item.id === edit ? (
        <Input
          px={3}
          ref={inputRef}
          py={0}
          value={item.title}
          onChange={(e) =>
            dispatch(
              updateColumn({
                columnId: item.id,
                property: "title",
                value: e.target.value,
              })
            )
          }
          onBlur={() => setEdit("")}
          onKeyDown={(e) => {
            console.log(e.key);
            if (e.key === "Enter") {
              setEdit("");
            } else if (e.key === "Esc") {
              console.log(true);
              setEdit("");
            }
          }}
          fontSize={"lg"}
          fontWeight={500}
        />
      ) : (
        <Text
          px={3}
          py={1}
          fontSize={"lg"}
          fontWeight={500}
          onClick={() => {
            setEdit(item.id);
          }}
          w={"full"}
          border={"1.5px solid transparent"}
        >
          {item.title}
        </Text>
      )}

      <Menu>
        <MenuButton _hover={{ color: "blackAlpha.400" }}>
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
                removeColumn({
                  columnId: item.id,
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
  );
};

const DraggableColumn = forwardRef((props, ref) => {
  const { item, index } = props;
  const dispatch = useDispatch();
  const addItemRef = useRef();
  const [addItemOpen, setAddItemOpen] = useState({ active: false, id: "" });
  const [details, setDetails] = useState();

  const handleAddItem = (e: FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const title = (
      e.currentTarget.elements.namedItem("title") as HTMLInputElement
    ).value;

    if (title.length > 0 && title.trim() !== "") {
      dispatch(
        addItem({
          columnId: id,
          value: {
            heading: title,
          },
        })
      );
      e.currentTarget.reset();
    } else {
      return;
    }
  };
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snap) => (
        <Box
          p={"12px"}
          rounded={"8px"}
          key={item}
          bgColor={"blackAlpha.100"}
          _dark={{ bgColor: "gray.600" }}
          w={"300px"}
          mr={"25px"}
          flexShrink={0}
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={provided.draggableProps.style}
        >
          <HeadingComponent
            item={item}
            provided={provided}
            dispatch={dispatch}
            index={index}
          />
          {/* droppable  */}

          <Droppable droppableId={item.id} direction="vertical" type="item">
            {(provided, snap) => (
              <Box
                rounded={"8px"}
                maxH={"calc(100vh - 280px)"}
                overflowY={snap.isUsingPlaceholder ? "scroll" : "auto"}
                style={{ scrollbarGutter: "stable", scrollbarWidth: "thin" }}
                mt={"8px"}
              >
                <VStack
                  minH={"1px"}
                  ref={provided.innerRef}
                  rounded={"8px"}
                  gap={0}
                >
                  {item?.items?.map((task, itemIndex) => (
                    <DraggableItem
                      task={task}
                      itemIndex={itemIndex}
                      item={item}
                    ></DraggableItem>
                  ))}
                </VStack>
                {provided.placeholder}
              </Box>
            )}
          </Droppable>

          <Box>
            {addItemOpen.active && addItemOpen.id === item.id ? (
              <Box
                w={"full"}
                // mt={3}
                rounded={"8px"}
              >
                <form onSubmit={(e) => handleAddItem(e, item.id)}>
                  <Input name="title" ref={addItemRef} />
                  <HStack pt={"8px"}>
                    <Button variant={"secondary"} type="submit">
                      Add
                    </Button>{" "}
                    <IconButton
                      aria-label=""
                      variant={"red"}
                      onClick={() =>
                        setAddItemOpen({
                          active: false,
                          id: item.id,
                        })
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                    />
                  </HStack>
                </form>
              </Box>
            ) : (
              <Button
                w={"full"}
                mr={"16px"}
                borderStyle={"dashed"}
                borderColor={"blackAlpha.500"}
                // mt={3}
                variant={"outline"}
                onClick={() => {
                  setAddItemOpen({
                    active: true,
                    id: item.id,
                  });
                  setTimeout(() => addItemRef.current.focus(), 10);
                }}
              >
                Add Card
              </Button>
            )}
          </Box>
        </Box>
      )}
    </Draggable>
  );
});

export default DraggableColumn;
