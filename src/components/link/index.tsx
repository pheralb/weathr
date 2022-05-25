import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  href: string;
  children?: React.ReactNode;
};

const Index = ({ href, children }: Props) => {
  return (
    <RouterLink to={href}>
      <ChakraLink
        _focus={{ borderColor: "transparent" }}
        _hover={{ textTransform: "" }}
      >
        {children}
      </ChakraLink>
    </RouterLink>
  );
};

export default Index;
