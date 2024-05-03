import customFetch from "@/app/utils/customFetch";
import { useQuery } from "@tanstack/react-query";


export const useAgences =()=> useQuery({
  queryKey: ['agences'],
  queryFn:()=> customFetch.get("/agences"),
  //staleTime: 60 * 1000, //60s
  retry: 3,
});

