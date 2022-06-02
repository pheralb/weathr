import { HoursForecast } from "./hoursForecast";

export interface Forecast {
  date2: string;
  date3: string;
  hours_forecast_date2: HoursForecast[];
  hours_forecast_date3: HoursForecast[];
}
