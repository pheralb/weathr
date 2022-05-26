import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    bg: {
      light: "#FFFFFF",
      dark: "#13111C",
    },
    light: {
      white: "#FFFFFF",
      dark: "#232323",
    },
  },
  fonts: {
    body: "Inter-Regular, sans-serif",
    heading: "Inter-SemiBold, sans-serif",
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        height: "100%",
        maxHeight: "100vh",
        background: mode(
          "radial-gradient(circle at 1px 1px, #E5E5E5 1px, #FFFFFF 0)",
          "radial-gradient(circle at 1px 1px, #212121 1px, #13111C 0)"
        )(props),
        backgroundSize: "40px 40px",
        fontSize: "14px",
      },
    }),
  },
});

export default theme;
