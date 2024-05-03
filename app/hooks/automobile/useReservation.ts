import customFetch from "@/app/utils/customFetch";
import { useQuery } from "@tanstack/react-query";


export const useReservation = () => useQuery(
  {
    queryKey: ["reservations"],
    queryFn: ()=> customFetch.get("/automobiles/reservations"),
    staleTime: 60 * 100,
    retry: 3
  }
);


  
