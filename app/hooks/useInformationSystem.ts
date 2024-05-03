import { useQuery } from "@tanstack/react-query";
import customFetch from "../utils/customFetch";

export const useInformationSystem =  () => useQuery(
    {
      queryKey: ["informationSystem"],
      queryFn: async ()=> await customFetch.get("/automobiles/information"),
      staleTime: 60 * 100,
      retry: 3
    }
  );
  