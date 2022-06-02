import { AstroData } from "@/interfaces/astroData";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import AstroItem from "./item";

const Index = (props: AstroData) => {
  return (
    <HStack overflowY="auto" spacing={4}>
      <AstroItem title={props.moonrise} image="/icons/moonrise.svg" />
      <AstroItem title={props.moonset} image="/icons/moonset.svg" />
      <AstroItem title={props.sunrise} image="/icons/sunrise.svg" />
      <AstroItem title={props.sunset} image="/icons/sunset.svg" />
    </HStack>
  );
};

export default Index;
