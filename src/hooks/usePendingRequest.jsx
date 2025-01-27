import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const usePendingRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { data: pendingRequests = [], refetch } = useQuery({
        queryKey: ['pending-requests'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/pending-requests`);
            return res.data;
        }
    })
    return [pendingRequests, refetch];
};

export default usePendingRequest;