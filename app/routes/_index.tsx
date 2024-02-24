import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  Skeleton,
} from "@chakra-ui/react";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, useLoaderData, useSubmit } from "@remix-run/react";
import mongoose from "mongoose";
import { FormEvent, useEffect, useRef, useState } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import DraggableColumn from "~/components/DraggableColumn/DraggableColumn";
import { prisma } from "~/db.server";

import TaskModel from "~/db/model/task.model";

import {
  addColumn,
  addState,
  updateColumn,
} from "~/redux/features/drag-drop/drag-drop.slice";
import { storeState } from "~/redux/store";

export const meta: MetaFunction = () => {
  return [
    { title: "Task Management" },
    { name: "description", content: "Welcome to Task Management" },
  ];
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

  const [addColumnOpen, setAddColumnOpen] = useState(false);

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

  const addBoardRef = useRef();
  const submit = useSubmit();
  const handleSave = () => {
    submit({ data: JSON.stringify(dragItems) }, { method: "POST" });
  };

  const data = useLoaderData();

  return (
    <>
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
                    {true
                      ? dragItems?.map((item, index) => {
                          return (
                            <DraggableColumn
                              item={item}
                              index={index}
                              key={item.id}
                            ></DraggableColumn>
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
            <Box
              w={"full"}
              p={"12px"}
              bg={"blackAlpha.100"}
              _dark={{ bg: "gray.600" }}
              rounded={"8px"}
            >
              <form onSubmit={handleAddBoard}>
                <Input name="title" ref={addBoardRef} />
                <HStack pt={"8px"}>
                  <Button variant={"secondary"} w={"120px"} type="submit">
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
              w={"200px"}
              colorScheme="blue"
              onClick={() => {
                setAddColumnOpen(true);
                setTimeout(() => addBoardRef.current.focus(), 10);
              }}
              variant={"primary"}
            >
              Add New List
            </Button>
          )}
        </Box>
      </Flex>

      <Button onClick={handleSave}>Save</Button>
    </>
  );
}

export const loader = async () => {
  const data = await prisma.tasks.findMany();
  return data;
};

export const action = async () => {
  try {
    const response = await prisma.tasks.create({
      data: { userId: "12345", tasks: "hello" },
    });

    console.log({ response });
    return null;
  } catch (error) {
    console.log({ error });
    return error;
  }
};
