import { fetchOptions } from "@/services/rapidapi";

// Fetcher ->
export const fetcher = (url: string) =>
  fetch(url, fetchOptions).then((res) => res.json());
