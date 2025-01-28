import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../providers/AuthProvider';

const useMyInfo = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { data: myInfo = [], refetch } = useQuery({
        queryKey: ['my-info', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-info?email=${user.email}`);
            return res.data;
        }
    })
    return [myInfo, refetch];
};

export default useMyInfo;