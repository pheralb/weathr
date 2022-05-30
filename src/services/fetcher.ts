import { fetchOptions } from "@/services/rapidapi";

// Fetcher ->
export const fetcher = async (url: string) => {
  const res = await fetch(url, fetchOptions);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }

  return res.json();
};
