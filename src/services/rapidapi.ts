// Forecast Weather API:
export const weatherUrl =
  "https://weatherapi-com.p.rapidapi.com/forecast.json?q=";

// Search/Autocomplete API:
export const searchWeatherUrl =
  "https://weatherapi-com.p.rapidapi.com/search.json?q=";

// Fetch Options:
export const fetchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
  },
};
