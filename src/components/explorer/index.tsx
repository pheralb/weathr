import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Drawer from "@/common/drawer";
import { FloppyDisk, Heart } from "phosphor-react";
import { useEffect, useState } from "react";
import Location from "./location";
import { SaveLocation } from "@/interfaces/saveLocation";

type Props = {
  w?: string;
  borderLeft?: string;
  display?: string;
};

const Index = (props: Props) => {
  const [savedLocations, setSavedLocations] = useState(
    localStorage.savedLocations ? JSON.parse(localStorage.savedLocations) : []
  );

  useEffect(() => {
    localStorage.setItem("savedLocations", JSON.stringify(savedLocations));
  }, [savedLocations]);

  const deleteLocation = (id: string) => {
    setSavedLocations(
      savedLocations.filter((location: SaveLocation) => location.id !== id)
    );
  };

  return (
    <>
      <Drawer
        title="Saved (beta)"
        ariaLabel="Saved"
        icon={<Heart size={22} weight="bold" />}
      >
        {savedLocations.length ? (
          <Box>
            <Text mb="4" textAlign="center">{savedLocations.length} saved</Text>
            {savedLocations.map((option: SaveLocation) => {
              return (
                <>
                  <Location
                    key={option.id}
                    url={option.url}
                    title={option.title}
                    country={option.country}
                  />
                </>
              );
            })}
          </Box>
        ) : (
          <Flex justifyContent="center" alignItems="center" mt="4">
            <VStack>
              <FloppyDisk size={32} weight="bold" />
              <Text mb="2" mt="4" textAlign="center">
                All the locations you save will appear here
              </Text>
            </VStack>
          </Flex>
        )}
      </Drawer>
    </>
  );
};

export default Index;
