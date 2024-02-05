// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const styles = {
  global: {
    body: {
      borderColor: "red",
    },
  },
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    border: "#DBDBDB",
  },
});

export default theme;
