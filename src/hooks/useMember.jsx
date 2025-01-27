import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMember = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isMember, isPending: isMemberLoading } = useQuery({
        queryKey: [user?.email, 'isMember'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/member/${user.email}`);
            return res.data?.member;
        }
    })
    return [isMember, isMemberLoading]
};

export default useMember;