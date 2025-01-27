import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useAvailableCoupon = () => {
    const axiosPublic = useAxiosPublic();
    const { data: availableCoupons = [], refetch } = useQuery({
        queryKey: ['available-coupon'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/available-coupon`);
            return res.data;
        }
    })
    return [availableCoupons, refetch];
};

export default useAvailableCoupon;