import { HoursForecast } from "@/interfaces/hoursForecast";

export interface WeatherData {
  temp_c?: string;
  current_condition?: string;
  icon_condition?: string;
  humidity?: string;
  gust_kph?: string;
  wind_kph?: string;
  is_day?: number;
  localtime?: string;
  city_name?: string;
  max_temp_c?: string;
  min_temp_c?: string;
  hours_forecast?: HoursForecast[];
}
