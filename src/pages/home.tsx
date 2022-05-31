import useSWR from "swr";
import { weatherUrl } from "@/services/rapidapi";
import { Container, Flex, Text } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

import Resume from "@/components/resume";
import Hours from "@/components/hours";
import Loading from "@/components/status/loading";

import useLocalStorage from "@/hooks/useLocalStorage";
import AnimatePage from "@/animate/pages";

const Home = () => {
  const [defaultLocation, setDefaultLocation] = useLocalStorage(
    "defaultLocation",
    "Spain"
  );
  const { data, error } = useSWR(`${weatherUrl}${defaultLocation}`);

  if (error) return <Navigate to="/404" />;
  if (!data) return <Loading message="Loading..." />;

  return (
    <>
      <AnimatePage>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Text
            fontSize={{ base: "5xl", sm: "6xl" }}
            mt={{ base: "3", sm: "0" }}
            fontFamily="Inter-Semibold"
          >
            {data.location.name}
          </Text>
          <Text fontSize="2xl" mb="5">
            {data.location.country}
          </Text>
          <Container maxW="container.xl">
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
          </Container>
        </Flex>
      </AnimatePage>
    </>
  );
};

export default Home;
