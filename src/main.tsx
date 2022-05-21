import { render } from "preact";

// 🏹 React Router ->
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 📦 Pages ->
import { Home } from "@/pages";

// 🖌️ Chakra UI & custom theme ->
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/index.css";
import theme from "@/theme";

render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("app")!
);
