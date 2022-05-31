import useSWR from "swr";
import { nanoid } from "nanoid";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { weatherUrl } from "@/services/rapidapi";

import { Button, Flex, HStack, IconButton, Text } from "@chakra-ui/react";

import Resume from "@/components/resume";
import Hours from "@/components/hours";
import Loading from "@/components/status/loading";

import AnimatePage from "@/animate/pages";
import { Heart, MapPin } from "phosphor-react";
import toast from "react-hot-toast";

const Search = () => {
  let params = useParams();
  const [isDefault, setIsDefault] = useState(false);
  const { data, error } = useSWR(`${weatherUrl}${params.name}`);

  if (error) return <Navigate to="/404" />;
  if (!data) return <Loading message="Loading..." />;

  const setDefaultLocation = () => {
    localStorage.setItem("defaultLocation", JSON.stringify(params.name));
    toast(`${data.location.name} is your default location`, {
      icon: "🛩️",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const setSaveLocation = () => {
    const newLocation = {
      id: nanoid(),
      title: `${data.location.name}`,
      url: `/search/${data.location.name}`,
    };
    localStorage.setItem("savedLocations", JSON.stringify(newLocation));
    toast(`${data.location.name} is saved`, {
      icon: "🎉",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <AnimatePage>
      <Flex mb="5" direction="column" alignItems="center">
        <Text
          fontSize={{ base: "5xl", sm: "6xl" }}
          mt={{ base: "3", sm: "6xl" }}
          fontFamily="Inter-Semibold"
        >
          {data.location.name}
        </Text>
        <Text fontSize="2xl" mb="3">
          {data.location.country}
        </Text>
        <HStack>
          <IconButton
            aria-label="Save location"
            icon={<Heart size="18" />}
            variant="ghost"
            borderWidth="1px"
            size="md"
            onClick={setSaveLocation}
          />
          <Button
            fontWeight="light"
            leftIcon={<MapPin size="18" />}
            onClick={setDefaultLocation}
            isDisabled={isDefault}
          >
            {isDefault ? "Your default location" : "Save as Default"}
          </Button>
        </HStack>
      </Flex>
      <Resume
        temp_c={data.current.temp_c}
        current_condition={data.current.condition.text}
        icon_condition={data.current.condition.icon}
        humidity={data.current.humidity}
        gust_kph={data.current.wind_kph}
        wind_kph={data.current.wind_kph}
        is_day={data.current.is_day}
        localtime={data.location.localtime_epoch}
        city_name={data.location.name}
        max_temp_c={data.forecast.forecastday[0].day.maxtemp_c}
        min_temp_c={data.forecast.forecastday[0].day.mintemp_c}
      />
      <Hours hours_forecast={data.forecast.forecastday[0].hour} />
    </AnimatePage>
  );
};

export default Search;
