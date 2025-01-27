import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allUser = [], refetch } = useQuery({
        queryKey: ['all-users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-users`);
            return res.data;
        }
    })
    return [allUser, refetch];
};

export default useAllUser;