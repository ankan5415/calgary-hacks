import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  useSystemColorMode: false,
  initialColorMode: "dark",
  styles: {
    global: (props) => ({
      body: {
        // bg: mode("white.100", "white.100")(props),
      },
    }),
  },
});

export default theme;
