import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import { useDispatch, useSelector } from "react-redux";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import {
  addColumn,
  addItem,
  addState,
  removeColumn,
  removeItem,
  updateColumn,
} from "~/redux/features/drag-drop/drag-drop.slice";
import { storeState } from "~/redux/store";
import { FormEvent, useEffect, useRef, useState } from "react";
import CommentIcon from "~/components/icons/comment-icon";
import LinkIcon from "~/components/icons/link-icon";

export const meta: MetaFunction = () => {
  return [
    { title: "Task Management" },
    { name: "description", content: "Welcome to Task Management" },
  ];
};

const HeadingComponent = ({ provided, item, dispatch, index }) => {
  const [edit, setEdit] = useState();
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
          onKeyDown={(e) => e.key === "Enter" && setEdit("")}
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

export default function Index() {
  const dragItems = useSelector((state: storeState) => state.dragItems);
  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId, type } = result;
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      // If dropped outside the list or dropped in the same position
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(dragItems);
      const [movedItem] = newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, movedItem);

      dispatch(addState({ value: newColumnOrder }));
    } else if (type === "item") {
      const sourceColumn = dragItems.find(
        (item) => item.id === source.droppableId
      );
      const destinationColumn = dragItems.find(
        (item) => item.id === destination.droppableId
      );

      if (source.droppableId === destination.droppableId) {
        // Reordering items within the same column
        const newItems = Array.from(sourceColumn.items);
        const [removed] = newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, removed);

        dispatch(
          updateColumn({
            columnId: source.droppableId,
            property: "items",
            value: newItems,
          })
        );
      } else {
        const newSourceItems = Array.from(sourceColumn.items);
        const [removed] = newSourceItems.splice(source.index, 1);
        const newDestinationItems = destinationColumn.items
          ? Array.from(destinationColumn.items)
          : Array.from([]);
        newDestinationItems.splice(destination.index, 0, removed);
        dispatch(
          updateColumn({
            columnId: source.droppableId,
            property: "items",
            value: newSourceItems,
          })
        );
        dispatch(
          updateColumn({
            columnId: destination.droppableId,
            property: "items",
            value: newDestinationItems,
          })
        );
      }
    }
  };
  const [loading, setLoading] = useState(true);
  const [addColumnOpen, setAddColumnOpen] = useState(false);
  const [addItemOpen, setAddItemOpen] = useState({ active: false, id: "" });
  const [details, setDetails] = useState();

  const handleAddBoard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (
      e.currentTarget.elements.namedItem("title") as HTMLInputElement
    ).value;

    dispatch(
      addColumn({
        title,
      })
    );
    e.currentTarget.reset();
    setAddColumnOpen(false);
  };

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

  const addBoardRef = useRef();
  const addItemRef = useRef();

  return (
    <Flex

    // bgColor={"yellow.50"}
    >
      <Box>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="main" direction="horizontal" type="column">
            {(provided, snapshot) => (
              <Box
                ref={provided.innerRef}
                paddingRight={
                  snapshot.isUsingPlaceholder &&
                  Object.values(dragItems).length > 1
                    ? "325px"
                    : "0px"
                }
              >
                <Flex alignItems={"start"}>
                  {!loading || true
                    ? dragItems?.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snap) => (
                              <Box
                                p={"12px"}
                                rounded={"8px"}
                                key={item}
                                bgColor={"blackAlpha.100"}
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

                                <Droppable
                                  droppableId={item.id}
                                  direction="vertical"
                                  type="item"
                                >
                                  {(provided, snap) => (
                                    <Box
                                      rounded={"8px"}
                                      mt={"8px"}
                                      // bgColor={
                                      //   snapshot.isUsingPlaceholder &&
                                      //   "blackAlpha.200"
                                      // }
                                      // py={
                                      //   snapshot.isUsingPlaceholder &&
                                      //   "12px"
                                      // }
                                    >
                                      <VStack
                                        ref={provided.innerRef}
                                        rounded={"8px"}
                                        p={1}
                                        gap={0}
                                      >
                                        {item?.items?.map((task, itemIndex) => (
                                          <Draggable
                                            key={task.id}
                                            draggableId={task.id}
                                            index={itemIndex}
                                          >
                                            {(provided, snapshot) => (
                                              <Box
                                                bg={
                                                  snapshot.isDragging
                                                    ? "gray.100"
                                                    : "white"
                                                }
                                                mb={"12px"}
                                                rounded={"8px"}
                                                w={"full"}
                                                py={"12px"}
                                                px={"16px"}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                style={
                                                  provided.draggableProps.style
                                                }
                                                {...provided.dragHandleProps}
                                                bgColor={
                                                  snapshot.isDragging
                                                    ? "blue.100"
                                                    : ""
                                                }
                                              >
                                                <HStack
                                                  justifyContent={
                                                    "space-between"
                                                  }
                                                >
                                                  <Text
                                                    fontWeight={500}
                                                    fontSize={"sm"}
                                                    onClick={() => {
                                                      setDetails(task);
                                                    }}
                                                  >
                                                    {task.heading}
                                                  </Text>
                                                  <HStack
                                                    gap={3}
                                                    color={"blackAlpha.400"}
                                                  >
                                                    {/* <HStack
                                                      gap={1}
                                                      alignItems={"center"}
                                                    >
                                                      <CommentIcon />
                                                      <Text>3</Text>
                                                    </HStack> */}

                                                    {/* <LinkIcon /> */}
                                                    <Menu>
                                                      <MenuButton
                                                        _hover={{
                                                          color:
                                                            "blackAlpha.900",
                                                        }}
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="20"
                                                          height="20"
                                                          viewBox="0 0 20 20"
                                                        >
                                                          <g fill="currentColor">
                                                            <circle
                                                              cx="10"
                                                              cy="15"
                                                              r="2"
                                                            />
                                                            <circle
                                                              cx="10"
                                                              cy="10"
                                                              r="2"
                                                            />
                                                            <circle
                                                              cx="10"
                                                              cy="5"
                                                              r="2"
                                                            />
                                                          </g>
                                                        </svg>
                                                      </MenuButton>
                                                      <MenuList>
                                                        <MenuItem>
                                                          Download
                                                        </MenuItem>
                                                        <MenuItem>
                                                          Create a Copy
                                                        </MenuItem>
                                                        <MenuItem>
                                                          Mark as Draft
                                                        </MenuItem>
                                                        <MenuItem
                                                          onClick={() =>
                                                            dispatch(
                                                              removeItem({
                                                                columnId:
                                                                  item.id,
                                                                itemId: task.id,
                                                              })
                                                            )
                                                          }
                                                        >
                                                          Delete
                                                        </MenuItem>
                                                        <MenuItem>
                                                          Attend a Workshop
                                                        </MenuItem>
                                                      </MenuList>
                                                    </Menu>
                                                  </HStack>
                                                </HStack>
                                              </Box>
                                            )}
                                          </Draggable>
                                        ))}
                                      </VStack>
                                      {provided.placeholder}
                                    </Box>
                                  )}
                                </Droppable>

                                <Box>
                                  {addItemOpen.active &&
                                  addItemOpen.id === item.id ? (
                                    <Box
                                      w={"full"}
                                      p={"12px"}
                                      mt={3}
                                      bg={"white"}
                                      rounded={"8px"}
                                    >
                                      <form
                                        onSubmit={(e) =>
                                          handleAddItem(e, item.id)
                                        }
                                      >
                                        <Input name="title" ref={addItemRef} />
                                        <HStack pt={"8px"}>
                                          <Button
                                            colorScheme="blue"
                                            type="submit"
                                          >
                                            Add
                                          </Button>{" "}
                                          <IconButton
                                            colorScheme="red"
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
                                                  fill-rule="evenodd"
                                                  d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94z"
                                                  clip-rule="evenodd"
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
                                      borderStyle={"dashed"}
                                      borderColor={"blackAlpha.500"}
                                      mt={3}
                                      variant={"outline"}
                                      color={"blackAlpha.600"}
                                      colorScheme="blue"
                                      onClick={() => {
                                        setAddItemOpen({
                                          active: true,
                                          id: item.id,
                                        });
                                        setTimeout(
                                          () => addItemRef.current.focus(),
                                          10
                                        );
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
                      })
                    : [...Array(3).keys()].map((_, index) => (
                        <Skeleton
                          key={index}
                          rounded={"8px"}
                          h={"400px"}
                          w={"250px"}
                          mr={"25px"}
                        />
                      ))}
                </Flex>
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
      <Box w={"300px"} flexShrink={0}>
        {addColumnOpen ? (
          <Box w={"full"} p={"12px"} bg={"blackAlpha.100"} rounded={"8px"}>
            <form onSubmit={handleAddBoard}>
              <Input name="title" ref={addBoardRef} />
              <HStack pt={"8px"}>
                <Button colorScheme="blue" type="submit">
                  Add
                </Button>{" "}
                <IconButton
                  aria-label=""
                  colorScheme="red"
                  onClick={() => setAddColumnOpen(false)}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  }
                />
              </HStack>
            </form>
          </Box>
        ) : (
          <Button
            w={"200px"}
            colorScheme="blue"
            onClick={() => {
              setAddColumnOpen(true);
              setTimeout(() => addBoardRef.current.focus(), 10);
            }}
          >
            Add New List
          </Button>
        )}
      </Box>
    </Flex>
  );
}
