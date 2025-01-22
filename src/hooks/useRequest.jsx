import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../providers/AuthProvider';

const useRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { data: request = [], refetch } = useQuery({
        queryKey: ['request', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/requests?email=${user.email}`);
            return res.data;
        }
    })
    return [request, refetch];
};

export default useRequest;