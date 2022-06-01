import useSWR from "swr";
import { BASE_URL } from "../constants/app.constrants";
import { TableData } from "../types/DataHandlingTypes";

export interface swrLoadingResponse {
  data: any;
  error: any;
  isLoading: boolean;
}

export const fetcher = (key: string, args: any) => {
  return fetch(key, args).then((res) => res.json());
};

export const useSWRLoading: (key: string, args: any) => swrLoadingResponse = (
  key,
  args
) => {
  const { data, error } = useSWR([key, args], fetcher);

  return {
    data: data,
    error: error,
    isLoading: !error && !data,
  };
};

export const useFetchData = () => {
  return useSWRLoading(`${BASE_URL}/kanban-data`, { method: "GET" });
};

export const submitTasks = async (value: TableData) => {
  const response = await fetcher(`${BASE_URL}/kanban-data`, {
    method: "POST",
    body: JSON.stringify(value),
  });
  return response;
};
