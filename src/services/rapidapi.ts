const weatherHost = "weatherapi-com.p.rapidapi.com";
const weatherKey = import.meta.env.VITE_RAPIDAPI_KEY;

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
    "X-RapidAPI-Host": weatherHost,
    "X-RapidAPI-Key": "67a0048625msh9043c2cec667145p1bf18bjsn2ead66f76c24",
  },
};

