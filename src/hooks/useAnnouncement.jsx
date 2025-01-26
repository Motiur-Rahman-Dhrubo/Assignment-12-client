import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAnnouncement = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allAnnouncements = [], refetch } = useQuery({
        queryKey: ['announcements'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/announcements`);
            return res.data;
        }
    })
    return [allAnnouncements, refetch];
};

export default useAnnouncement;