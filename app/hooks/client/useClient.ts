import customFetch from "@/app/utils/customFetch";
import { useQuery } from "@tanstack/react-query";

export const useClient =()=> useQuery({
    queryKey: ["clients"],
    queryFn:()=> customFetch.get("/users")
})



