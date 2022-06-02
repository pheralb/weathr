import { AstroData } from "@/interfaces/astroData";
import { Box, Image, Text } from "@chakra-ui/react";

const AstroItem = (props: AstroData) => {
  return (
    <Box p="4">
      <Image src={props.image} boxSize="20" alt={props.title} />
      <Text fontSize="xl" fontFamily="Inter-Semibold">
        {props.hour}
      </Text>
      <Text color="gray.500" textAlign="center">
        {props.title}
      </Text>
    </Box>
  );
};

export default AstroItem;

