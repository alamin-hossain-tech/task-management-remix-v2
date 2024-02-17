// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
const colors = {
  brand: { 100: "#000", 200: "#f2f2f2" },
  border: "#DBDBDB",
};

const theme = extendTheme({
  config,
  colors,
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
    },
  },
});

export default theme;
