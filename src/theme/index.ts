import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    bg: {
      light: "#16161a",
      dark: "#16161a",
    },
  },
  fonts: {
    body: "Inter-Regular, sans-serif",
    heading: "Inter-Medium, sans-serif",
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        height: "100%",
        maxHeight: "100vh",
        backgroundColor: mode("light.100", "lightDark.900")(props),
      },
    }),
  },
});

export default theme;
