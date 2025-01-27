import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useAllCoupon = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allCoupons = [], refetch } = useQuery({
        queryKey: ['all-coupon'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-coupon`);
            return res.data;
        }
    })
    return [allCoupons, refetch];
};

export default useAllCoupon;