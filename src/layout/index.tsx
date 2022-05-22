import { ComponentChildren } from "preact";
import Header from "@/layout/header";
import { Box } from "@chakra-ui/react";

type Props = {
  children?: ComponentChildren;
};

const Index = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Box as="main" pr={{ base: 5, md: 5 }} pl={{ base: 5, md: 5 }}>
        {children}
      </Box>
    </>
  );
};

export default Index;
