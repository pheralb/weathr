import useSWR from "swr";
import { weatherUrl } from "@/services/rapidapi";
import { fetcher } from "@/services/fetcher";

import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import Card from "@/components/card";
import Error from "@/components/status/error";
import Loading from "@/components/status/loading";

import { Moon, Sun } from "phosphor-react";
import useLocalStorage from "@/hooks/useLocalStorage";
import AnimatePage from "@/animate/pages";

const Home = () => {
  const [defaultLocation, setDefaultLocation] = useLocalStorage(
    "defaultLocation",
    "Spain"
  );
  const { data, error } = useSWR(`${weatherUrl}${defaultLocation}`, fetcher);

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
        <Container maxW="container.lg">
          <SimpleGrid
            minChildWidth="120px"
            spacing={{ base: "10px", sm: "30px" }}
          >
            <Card>
              <Box>
                <Text fontSize="6xl" fontFamily="Inter-Semibold">
                  {data.current.temp_c}º
                </Text>
                <HStack justifyContent="center">
                  {data.current.is_day ? (
                    <Icon as={Sun} mt="1" boxSize="5" />
                  ) : (
                    <Icon as={Moon} mt="1" boxSize="5" />
                  )}
                  <Text fontFamily="Inter-Semibold">
                    {data.current.condition.text}
                  </Text>
                </HStack>
              </Box>
            </Card>
            <Card>
              <Box>
                <Text fontSize="6xl" fontFamily="Inter-Semibold">
                  {data.current.humidity}
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
                  {data.current.gust_kph}
                </Text>
                <Text fontFamily="Inter-Semibold">% - Wind gust</Text>
              </Box>
            </Card>
            <Card>
              <Box>
                <Text
                  fontSize={{ base: "5xl", sm: "6xl" }}
                  fontFamily="Inter-Semibold"
                >
                  {data.current.wind_kph}
                </Text>
                <Text fontFamily="Inter-Semibold">km/h - Wind speed</Text>
              </Box>
            </Card>
          </SimpleGrid>
        </Container>
      </AnimatePage>
    </>
  );
};

export default Home;
