import { render } from "preact";

// 🏹 React Router ->
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 📦 Pages ->
import { Home } from "@/pages";

// 🖌️ Chakra UI & custom theme ->
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/index.css";
import theme from "@/theme";

// 💅 Layout ->
import Layout from "@/layout";

render(
  <ChakraProvider theme={theme}>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </ChakraProvider>,
  document.getElementById("app")!
);
