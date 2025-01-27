import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllMember = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allMember = [], refetch } = useQuery({
        queryKey: ['members'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/members`);
            return res.data;
        }
    })
    return [allMember, refetch];
};

export default useAllMember;