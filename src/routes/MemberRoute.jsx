import { useContext } from "react";
import useMember from "../hooks/useMember";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const MemberRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const [isMember, isMemberLoading] = useMember();
    const location = useLocation();


    if (loading || isMemberLoading) {
        return <Loading></Loading>
    }

    if (user && isMember) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default MemberRoute;