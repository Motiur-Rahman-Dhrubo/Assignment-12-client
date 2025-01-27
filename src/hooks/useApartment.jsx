import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useApartment = () => {
    const axiosSecure = useAxiosSecure();
    const { data: apartment = [], refetch } = useQuery({
        queryKey: ['apartments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/apartments`);
            return res.data;
        }
    })
    return [apartment, refetch];
};

export default useApartment;