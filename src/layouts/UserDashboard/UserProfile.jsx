import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const UserProfile = () => {

    const { user } = useContext(AuthContext);

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

            <h2 className="md:text-2xl text-base"><span className="font-semibold">Agreement accept date:</span>  <span className="text-red-400">None</span></h2>

            <div className="divider divider-neutral">Rented Apartment Info</div>

            <h2 className="md:text-xl text-sm"><span className="font-semibold">Floor No:</span>  <span className="text-red-400">None</span></h2>
            <h2 className="md:text-xl mt-2 text-sm"><span className="font-semibold">Block Name:</span>  <span className="text-red-400">None</span></h2>
            <h2 className="md:text-xl mt-2 text-sm"><span className="font-semibold">Room No:</span>  <span className="text-red-400">None</span></h2>
        </div>
    );
};

export default UserProfile;