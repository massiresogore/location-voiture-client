import customFetch from "@/app/utils/customFetch";
import { useQuery } from "@tanstack/react-query";

export const useAutomobile =()=> useQuery({
    queryKey: ['automobiles'],
    queryFn:()=> customFetch.get("/automobiles"),
    staleTime: 60 * 1000, //60s
    retry: 3,
  });
  