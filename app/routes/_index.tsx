import { Box, Button, useColorMode } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Task Management" },
    { name: "description", content: "Welcome to Task Management" },
  ];
};

export default function Index() {
  return <Box> hello world</Box>;
}
