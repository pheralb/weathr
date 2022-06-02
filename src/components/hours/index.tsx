import { WeatherData } from "@/interfaces/weatherData";
import { HStack } from "@chakra-ui/react";
import HoursCard from "./card";

const Index = ({ hours_forecast }: WeatherData) => {
  return (
    <HStack overflowY="auto" spacing={4} pb="4">
      {hours_forecast?.map((hour) => {
        return (
          <HoursCard
            key={hour.time_epoch}
            temp_c={hour.temp_c}
            time_epoch={hour.time_epoch}
            is_day={hour.is_day}
            condition={hour.condition}
            date={hour.date}
          />
        );
      })}
    </HStack>
  );
};

export default Index;
