// theme.ts

// 1. import `extendTheme` function
import {
  extendTheme,
  StyleFunctionProps,
  useColorModeValue,
  type ThemeConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const getBorderColor = (props: any) => mode("gray.200", "gray.600")(props);

const colors = {
  brand: { 100: "#000", 200: "#f2f2f2" },
  border: "#f2f2f2",
};

const theme = extendTheme({
  config,
  colors,
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "semibold",
      },
      variants: {
        primary: (props: StyleFunctionProps) => ({
          bg: "brand.200",
          _hover: {
            bg: "brand.100",
            color: "white",
          },
          _dark: {
            bg: "gray.600",
            color: "white",
            _hover: {
              bg: "brand.100",
              color: "white",
            },
          },
        }),
        secondary: (props: StyleFunctionProps) => ({
          bg: "red.200",
          _hover: {
            bg: "brand.100",
            color: "white",
          },
        }),
      },
      defaultProps: {
        size: "sm",
        // default is md
        // default is gray
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.800")(props),
      },
    }),
  },
});

export default theme;
