// React Router ->
import { Routes, Route, useLocation } from "react-router-dom";

// Pages ->
import { Home, Search } from "@/pages";

// Chakra UI, Framer Motion & custom theme ->
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import "@/styles/index.css";
import theme from "@/theme";

// Global Layout ->
import Layout from "@/layout";

const App = () => {
  const location = useLocation();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/search/:name" element={<Search />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
