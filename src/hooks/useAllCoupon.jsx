import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAllCoupon = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allCoupons = [], refetch } = useQuery({
        queryKey: ['all-coupon'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-coupon`);
            return res.data;
        }
    })
    return [allCoupons, refetch];
};

export default useAllCoupon;