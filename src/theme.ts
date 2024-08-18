import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    green: {
      50: "#e5f4e3",
      100: "#c1e1b8",
      200: "#99cc8b",
      300: "#70b75f",
      400: "#4ca235",
      500: "#338b1c",
      600: "#267017",
      700: "#1a5410",
      800: "#0e3709",
      900: "#021a03",
    },
    white: {
      50: "#ffffff", // Pure white
      100: "#f9f9f9", // Almost white
      200: "#f2f2f2", // Very light gray
      300: "#ebebeb", // Light gray
      400: "#e5e5e5", // Light gray with a hint of darkness
      500: "#dedede", // Slightly darker light gray
      600: "#d7d7d7", // Medium light gray
      700: "#d0d0d0", // Medium gray
      800: "#c9c9c9", // Medium dark gray
      900: "#c2c2c2",
    },

    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#636363",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
  components: {
    Switch: {
      baseStyle: (props: StyleFunctionProps) => ({
        track: {
          bg: mode("white.300", "green.600")(props),
        },
        thumb: {
          bg: mode("white.900", "white.50")(props),
        },
      }),
    },
  },
});

export default theme;
