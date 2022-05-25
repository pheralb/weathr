import useSWR from "swr";
import { useNavigate, useParams } from "react-router-dom";
import { weatherUrl } from "@/services/rapidapi";

import { Button, Flex, Icon, Text } from "@chakra-ui/react";

import Resume from "@/components/resume";
import Error from "@/components/status/error";
import Loading from "@/components/status/loading";

import { IoSaveOutline } from "react-icons/io5";
import AnimatePage from "@/animate/pages";

const Search = () => {
  let params = useParams();
  const navigate = useNavigate();

  const { data, error } = useSWR(`${weatherUrl}${params.name}`, {
    // When 400 error...
    onErrorRetry: (error) => {
      if (error.status === 400) {
        navigate("/404");
      }
    },
  });

  if (error) return <Error message={error} />;
  if (!data) return <Loading message="Loading..." />;

  const saveLocation = () => {
    localStorage.setItem("defaultLocation", JSON.stringify(params.name));
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
        <Button
          fontWeight="light"
          leftIcon={<Icon as={IoSaveOutline} />}
          onClick={saveLocation}
        >
          Save location by default
        </Button>
      </Flex>
      <Resume
        temp_c={data.current.temp_c}
        current_condition={data.current.condition.text}
        humidity={data.current.humidity}
        gust_kph={data.current.wind_kph}
        wind_kph={data.current.wind_kph}
      />
    </AnimatePage>
  );
};

export default Search;
