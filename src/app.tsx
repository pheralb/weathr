// React Router ->
import { Routes, Route, useLocation } from "react-router-dom";

// Pages ->
import { Home, Search, Error404 } from "@/pages";

// Chakra UI, Framer Motion & custom theme ->
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/index.css";
import theme from "@/theme";

// React-Hot-Toast ->
import { Toaster } from "react-hot-toast";

// Service Worker Generator ->
import SW from "@/sw";

// Global Layout ->
import Layout from "@/layout";

const App = () => {
  const location = useLocation();
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/search/:name" element={<Search />} />
            <Route path="/404" element={<Error404 />} />
          </Routes>
        </Layout>
      </ChakraProvider>
      <SW />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default App;
