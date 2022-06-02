import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CardLarge = ({ children }: Props) => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bg={bg}
      p={{ base: 2, md: 4 }}
      borderWidth="2px"
      borderRadius="10px"
    >
      {children}
    </Flex>
  );
};

export default CardLarge;
