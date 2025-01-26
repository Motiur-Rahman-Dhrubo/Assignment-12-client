import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllMember = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allMember = [], refetch } = useQuery({
        queryKey: ['members'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/members`);
            return res.data;
        }
    })
    return [allMember, refetch];
};

export default useAllMember;