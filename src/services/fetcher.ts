import { fetchOptions } from "@/services/rapidapi";

// Fetcher ->
export const fetcher = (url: string) =>
  fetch(url, fetchOptions)
    .then((response) => {
      if (response.status >= 400 && response.status <= 499) {
        response.json().then((data) => {
          return response.status;
        });
      } else {
        return response.json();
      }
    })
    .catch((error) => console.log(error));
