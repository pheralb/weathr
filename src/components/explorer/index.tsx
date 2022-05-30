import { useEffect, useState } from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { HeartStraight } from "phosphor-react";
import NoLocations from "./noLocations";
import useLocalStorage from "@/hooks/useLocalStorage";

type Props = {
  w?: string;
  borderLeft?: string;
  display?: string;
};

const Index = (props: Props) => {

  const [locations, setLocations] = useLocalStorage("savedLocations", []);

  useEffect(() => {
    localStorage.getItem("savedLocations");
    
  }, []);

  return (
    <Box
      as="nav"
      pos="fixed"
      right="0"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      w="80"
      borderLeftWidth="1px"
      shadow="sm"
      {...props}
    >
      <Box p="4" mt="2" w="full">
        <Text fontSize="2xl" mb="3" fontFamily="Inter-Semibold">
          Saved:
        </Text>
        {locations.length < 0 ? (
          <></>
        ) : (
          <>
            <NoLocations />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Index;
