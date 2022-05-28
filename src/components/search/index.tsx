import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Input,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";
import { searchWeatherUrl } from "@/services/rapidapi";
import { fetcher } from "@/services/fetcher";
import { SearchData } from "@/interfaces/searchData";
import SearchItem from "./searchItem";

type Props = {};

const index = (props: Props) => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value.length > 4) {
      fetchCityWeather();
      setDisplay(true);
    }
  };

  const fetchCityWeather = async () => {
    const response = await fetcher(`${searchWeatherUrl}` + `${search}`);
    setOptions(response);
    console.log(options);
  };

  return (
    <>
      <IconButton
        variant="ghost"
        aria-label="Open/Close Sidebar"
        icon={<MagnifyingGlass size={22} weight="bold" />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerHeader mt="3" fontWeight="light" mb="0">
            Search
          </DrawerHeader>

          <DrawerBody>
            <Input
              placeholder="Type here (min. 4 letters)..."
              onChange={(e) => handleChange(e)}
            />
            <Box p="3" mt="2">
              <Text>{options.length ? `${options.length} results` : null}</Text>
              {display ? (
                <>
                  {options.map((option: SearchData) => {
                    return (
                      <>
                        <SearchItem key={option.id} name={option.name} />
                      </>
                    );
                  })}
                </>
              ) : null}
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              w="100%"
              fontWeight="light"
              onClick={onClose}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default index;
