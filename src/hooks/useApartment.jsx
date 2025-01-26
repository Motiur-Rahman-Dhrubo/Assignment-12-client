import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useApartment = () => {
    const axiosPublic = useAxiosPublic();
    const { data: apartment = [], refetch } = useQuery({
        queryKey: ['apartments'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/apartments`);
            return res.data;
        }
    })
    return [apartment, refetch];
};

export default useApartment;