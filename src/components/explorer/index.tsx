import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
  w?: string;
  borderLeft?: string;
  display?: string;
};

const Index = (props: Props) => {
  const [locations, setLocations] = useState(
    localStorage.savedLocations ? JSON.parse(localStorage.savedLocations) : []
  );

  useEffect(() => {
    localStorage.setItem("savedLocations", JSON.stringify(locations));
  }, [locations]);

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
      <Flex p="4" pl="7" mt="2" direction="column">
        <Text fontSize="2xl" mb="3" fontFamily="Inter-Semibold">
          Saved:
        </Text>
        {}
      </Flex>
    </Box>
  );
};

export default Index;
