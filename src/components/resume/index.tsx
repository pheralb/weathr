import { WeatherData } from "@/interfaces/weatherData";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import Card from "@/components/card";

const Index = ({
  temp_c,
  current_condition,
  humidity,
  gust_kph,
  wind_kph,
}: WeatherData) => {
  return (
    <Container maxW="container.lg">
      <SimpleGrid minChildWidth="120px" spacing={{ base: "10px", sm: "30px" }}>
        <Card>
          <Box>
            <Text fontSize="6xl" fontFamily="Inter-Semibold">
              {temp_c}
            </Text>
            <Box>
              <Text fontFamily="Inter-Semibold">ºC - {current_condition}</Text>
            </Box>
          </Box>
        </Card>
        <Card>
          <Box>
            <Text fontSize="4xl" fontFamily="Inter-Semibold">
              {humidity}
            </Text>
            <Text fontFamily="Inter-Semibold">% - Humidity</Text>
          </Box>
        </Card>
        <Card>
          <Box>
            <Text
              fontSize={{ base: "5xl", sm: "6xl" }}
              fontFamily="Inter-Semibold"
            >
              {wind_kph}
            </Text>
            <Text fontFamily="Inter-Semibold">km/h - Wind speed</Text>
          </Box>
        </Card>
        <Card>
          <Box>
            <Text
              fontSize={{ base: "5xl", sm: "6xl" }}
              fontFamily="Inter-Semibold"
            >
              {gust_kph}
            </Text>
            <Text fontFamily="Inter-Semibold">% - Wind gust</Text>
          </Box>
        </Card>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
