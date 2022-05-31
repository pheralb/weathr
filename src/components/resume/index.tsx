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

const Index = ({
  temp_c,
  current_condition,
  humidity,
  wind_kph,
  icon_condition,
  max_temp_c,
  min_temp_c,
}: WeatherData) => {
  return (
    <SimpleGrid
      minChildWidth={{ base: "140px", md: "120px" }}
      spacing={{ base: "10px", sm: "30px" }}
      mb="5"
    >
      <Card>
        <Box>
          <Center>
            <Image src={icon_condition} boxSize={"35px"} />
          </Center>
          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            fontFamily="Inter-Semibold"
          >
            {temp_c}
          </Text>
          <Box>
            <Text title={current_condition} isTruncated>
              ºC - {current_condition}
            </Text>
          </Box>
        </Box>
      </Card>
      <Card>
        <Box>
          <Icon as={Thermometer} boxSize={30} />
          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            fontFamily="Inter-Semibold"
          >
            {max_temp_c} / {min_temp_c}
          </Text>
          <Text>ºC - Max/Min</Text>
        </Box>
      </Card>
      <Card>
        <Box>
          <Icon as={Drop} boxSize={30} />
          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            fontFamily="Inter-Semibold"
          >
            {humidity}
          </Text>
          <Text>% - Humidity</Text>
        </Box>
      </Card>
      <Card>
        <Box>
          <Icon as={Wind} boxSize={30} />
          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            fontFamily="Inter-Semibold"
          >
            {wind_kph}
          </Text>
          <Text>km/h - Wind speed</Text>
        </Box>
      </Card>
    </SimpleGrid>
  );
};

export default Index;
