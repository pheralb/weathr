// Requests ->

export const weatherUrl =
  "https://weatherapi-com.p.rapidapi.com/current.json?q=";

export const historyWeatherUrl = 
  "https://weatherapi-com.p.rapidapi.com/history.json?q=";

export const searchWeatherUrl =
  "https://weatherapi-com.p.rapidapi.com/search.json?q=";

// Fetch Options ->

export const fetchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
  },
};

