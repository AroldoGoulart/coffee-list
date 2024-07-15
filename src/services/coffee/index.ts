import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { API } from "../api";
import { CoffeeItem } from "./types";

const fetchCoffeeData = async () => {
    const response = await API.get(`/coffee/hot`);
    return response.data;
};

export function useCoffee(
    options?: UseQueryOptions<CoffeeItem[], undefined>
) {
    return useQuery({
        queryKey: ['coffee'],
        queryFn: fetchCoffeeData,
        ...options,
    })
}