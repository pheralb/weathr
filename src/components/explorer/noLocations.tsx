import { Flex, Icon, Text } from "@chakra-ui/react";
import { MapPinLine } from "phosphor-react";

const NoLocations = () => {
  return (
    <Flex
      direction="column"
      p="3"
      justifyContent="center"
      alignItems="center"
    >
      <Icon as={MapPinLine} boxSize="30px" mb="2" />
      <Text fontSize="15px" fontFamily="Inter-Semibold">
        Save here your favorite cities
      </Text>
    </Flex>
  );
};

export default NoLocations;
