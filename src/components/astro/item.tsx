import { AstroData } from "@/interfaces/astroData";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const AstroItem = (props: AstroData) => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" p="4">
      <Image src={props.image} boxSize="60px" alt={props.title} />
      <Text fontSize="xl" fontFamily="Inter-Semibold">
        {props.hour}
      </Text>
      <Text color="gray.500" textAlign="center">
        {props.title}
      </Text>
    </Flex>
  );
};

export default AstroItem;
