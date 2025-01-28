import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useRequest from "../../hooks/useRequest";

const MemberProfile = () => {

    const { user } = useContext(AuthContext);

    const [request] = useRequest();
    
        return (
            <div className="w-11/12 mx-auto mt-2 md:mt-5">
                <div className="flex items-center md:gap-5 gap-3">
                    <img src={user.photoURL ? user.photoURL : "/assets/user.png"} alt="user_photo" className="w-2/12 aspect-[1/1] object-cover rounded-full md:border-[6px] border-4 border-black" />
                    <div className="md:text-3xl text-base">
                        <h2><span className="font-semibold">User Name:</span> {user.displayName}</h2>
                        <p className="md:mt-5 mt-1"><span className="font-semibold">Email:</span> {user.email}</p>
                    </div>
                </div>
    
                <div className="divider divider-neutral"></div>
    
                <h2 className="md:text-2xl text-base"><span className="font-semibold">Agreement accept date:</span>  <span className={request[0]?.agreementAcceptDate ? "" : "text-red-400"}>{request[0]?.agreementAcceptDate ? request[0]?.agreementAcceptDate : "None"}</span></h2>
    
                <div className="divider divider-neutral">Rented Apartment Info</div>
    
                <h2 className="md:text-xl text-sm"><span className="font-semibold">Floor No:</span>  <span>{request[0]?.reqFlatFloor}</span></h2>
                <h2 className="md:text-xl mt-2 text-sm"><span className="font-semibold">Block Name:</span>  <span>{request[0]?.reqFlatBlock}</span></h2>
                <h2 className="md:text-xl mt-2 text-sm"><span className="font-semibold">Room No:</span>  <span>{request[0]?.reqFlat}</span></h2>
                <h2 className="md:text-xl mt-2 text-sm"><span className="font-semibold">Monthly Rent:</span>  <span>{request[0]?.reqFlatRent}৳</span></h2>
                <h2 className="md:text-xl mt-2 text-sm"><span className="font-semibold">Request Status:</span>  <span>{request[0]?.reqStatus}</span></h2>
            </div>
        );
};

export default MemberProfile;