import useSWR from "swr";
import { weatherUrl } from "@/services/rapidapi";
import { Flex, Text } from "@chakra-ui/react";

import Resume from "@/components/resume";
import Error from "@/components/status/error";
import Loading from "@/components/status/loading";

import useLocalStorage from "@/hooks/useLocalStorage";
import AnimatePage from "@/animate/pages";

const Home = () => {
  const [defaultLocation, setDefaultLocation] = useLocalStorage(
    "defaultLocation",
    "Spain"
  );
  const { data, error } = useSWR(`${weatherUrl}${defaultLocation}`);

  if (error) return <Error message={error} />;
  if (!data) return <Loading message="Loading..." />;

  return (
    <>
      <AnimatePage>
        <Flex direction="column" alignItems="center">
          <Text
            fontSize={{ base: "5xl", sm: "6xl" }}
            mt={{ base: "3", sm: "6xl" }}
            fontFamily="Inter-Semibold"
          >
            {data.location.name}
          </Text>
          <Text fontSize="2xl" mb="5">
            {data.location.country}
          </Text>
        </Flex>
        <Resume
          temp_c={data.current.temp_c}
          current_condition={data.current.condition.text}
          humidity={data.current.humidity}
          gust_kph={data.current.wind_kph}
          wind_kph={data.current.wind_kph}
        />
      </AnimatePage>
    </>
  );
};

export default Home;
