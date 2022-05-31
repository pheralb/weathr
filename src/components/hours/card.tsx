import { HoursForecast } from "@/interfaces/hoursForecast";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { Moon, SunDim } from "phosphor-react";

const HoursCard = ({ temp_c, is_day, time_epoch }: HoursForecast) => {
  const convertEpoch = (epoch: number) => {
    const date = new Date(epoch * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime =
      hours + ":" + minutes.substr(-2);
    return formattedTime;
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      p="4"
      w="100%"
      borderWidth="1px"
      borderRadius="15px"
      shadow="sm"
    >
      <Text>{convertEpoch(time_epoch)}</Text>
      {is_day ? (
        <Icon name="sun" as={SunDim} mt="3" mb="3" boxSize="35px" color="yellow.500" />
      ) : (
        <Icon name="moon" as={Moon} mt="3" mb="3" boxSize="35px" color="gray.500" />
      )}
      <Text>{temp_c}º</Text>
    </Flex>
  );
};

export default HoursCard;
