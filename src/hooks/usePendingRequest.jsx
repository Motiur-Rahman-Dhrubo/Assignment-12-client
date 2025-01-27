import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const usePendingRequest = () => {
    const axiosPublic = useAxiosPublic();
    const { data: pendingRequests = [], refetch } = useQuery({
        queryKey: ['pending-requests'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/pending-requests`);
            return res.data;
        }
    })
    return [pendingRequests, refetch];
};

export default usePendingRequest;