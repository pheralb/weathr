const weatherHost = "weatherapi-com.p.rapidapi.com";
const weatherKey = import.meta.env.VITE_RAPIDAPI_KEY;
export const weatherUrl =
  "https://weatherapi-com.p.rapidapi.com/current.json?q=";

// Fetch Options ->
export const fetchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": weatherHost,
    "X-RapidAPI-Key": "67a0048625msh9043c2cec667145p1bf18bjsn2ead66f76c24",
  },
};

