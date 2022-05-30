import { WeatherData } from "@/interfaces/weatherData";
import {
  Box,
  Center,
  Container,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Card from "@/components/card";
import { Drop, Thermometer, Wind } from "phosphor-react";
import useSWR from "swr";
import { historyWeatherUrl } from "@/services/rapidapi";
import Loading from "@/components/status/loading";

const Index = ({
  temp_c,
  current_condition,
  humidity,
  wind_kph,
  icon_condition,
  is_day,
  city_name,
}: WeatherData) => {
  const utcDate = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
  const url = `${historyWeatherUrl}${city_name}&dt=${utcDate}`;
  const { data } = useSWR(url);

  if (!data) return <Loading message="Loading..." />;

  return (
    <Container maxW="container.lg">
      <SimpleGrid
        minChildWidth={{ base: "140px", md: "120px" }}
        spacing={{ base: "10px", sm: "30px" }}
      >
        <Card>
          <Box>
            <Center>
              <Image src={icon_condition} boxSize={"35px"} />
            </Center>
            <Text fontSize="4xl" fontFamily="Inter-Semibold">
              {temp_c}
            </Text>
            <Box>
              <Text fontFamily="Inter-Semibold">ºC - {current_condition}</Text>
            </Box>
          </Box>
        </Card>
        <Card>
          <Box>
            <Icon as={Thermometer} boxSize={30} />
            <Text
              fontSize="4xl"
              fontFamily="Inter-Semibold"
            >
              {is_day
                ? `${data.forecast.forecastday[0].day.maxtemp_c} / ${data.forecast.forecastday[0].day.mintemp_c}`
                : `${data.forecast.forecastday[0].day.maxtemp_c} / ${data.forecast.forecastday[0].day.mintemp_c}`}
            </Text>
            <Text fontFamily="Inter-Semibold">ºC - Max/Min</Text>
          </Box>
        </Card>
        <Card>
          <Box>
            <Icon as={Drop} boxSize={30} />
            <Text fontSize="4xl" fontFamily="Inter-Semibold">
              {humidity}
            </Text>
            <Text fontFamily="Inter-Semibold">% - Humidity</Text>
          </Box>
        </Card>
        <Card>
          <Box>
            <Icon as={Wind} boxSize={30} />
            <Text fontSize="4xl" fontFamily="Inter-Semibold">
              {wind_kph}
            </Text>
            <Text fontFamily="Inter-Semibold">km/h - Wind speed</Text>
          </Box>
        </Card>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
