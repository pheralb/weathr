const WeatherHost = "weatherapi-com.p.rapidapi.com";
const WeatherKey = import.meta.env.VITE_RAPIDAPI_KEY;

export const FetchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": WeatherHost,
    "X-RapidAPI-Key": "ca6240d2e7msh909fee956dd4e80p103671jsnfe4261b10b57",
  },
};

export const WeatherUrl =
  "https://weatherapi-com.p.rapidapi.com/current.json?q=Tacoronte";
