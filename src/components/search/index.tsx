import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";
import { searchWeatherUrl } from "@/services/rapidapi";
import { fetcher } from "@/services/fetcher";
import { SearchData } from "@/interfaces/searchData";
import SearchItem from "./searchItem";
import Drawer from "@/common/drawer";

const index = () => {
  
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
  };

  return (
    <>
      <Drawer
        title="Search"
        ariaLabel="Search"
        icon={<MagnifyingGlass size={22} weight="bold" />}
      >
        <Input
          placeholder="Type here (min. 4 letters)..."
          onChange={(e) => handleChange(e)}
        />
        <Box mt="2">
          <Text mb="2" mt="4" textAlign="center">
            {options.length ? `${options.length} results` : null}
          </Text>
          {display ? (
            <>
              {options.map((option: SearchData) => {
                return (
                  <>
                    <SearchItem
                      key={option.id}
                      name={option.name}
                      region={option.region}
                      country={option.country}
                    />
                  </>
                );
              })}
            </>
          ) : null}
        </Box>
      </Drawer>
    </>
  );
};

export default index;
