import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAnnouncement = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allAnnouncements = [], refetch } = useQuery({
        queryKey: ['announcements'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/announcements`);
            return res.data;
        }
    })
    return [allAnnouncements, refetch];
};

export default useAnnouncement;