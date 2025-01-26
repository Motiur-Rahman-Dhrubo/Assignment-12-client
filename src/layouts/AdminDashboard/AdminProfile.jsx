import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useApartment from "../../hooks/UseApartment";
import useAllUser from "../../hooks/useAllUser";


const AdminProfile = () => {

    const { user } = useContext(AuthContext);
    const [apartment] = useApartment();
    const [allUser] = useAllUser();

    const availableRooms = apartment.filter((room) => room.availability === "available");
    const unavailableRooms = apartment.filter((room) => room.availability === "unavailable");
    console.log(availableRooms, unavailableRooms)
    const PercentageOfAvailableRooms = ((availableRooms?.length / apartment?.length) * 100).toFixed(2);
    const PercentageOfUnavailableRooms = ((unavailableRooms?.length / apartment?.length) * 100).toFixed(2);
    
    const normalUsers = allUser.filter((user) => user.userRole === "user");
    const members = allUser.filter((user) => user.userRole === "member");
    
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
    
                <h2 className="md:text-xl text-sm"><span className="font-semibold">Total number of rooms:</span>  <span>{apartment?.length}</span></h2>
                <h2 className="md:text-xl mt-2 text-sm"><span className="font-semibold">Number of users:</span>  <span>{normalUsers?.length}</span></h2>
                <h2 className="md:text-xl mt-2 text-sm"><span className="font-semibold">Number of members:</span>  <span>{members?.length}</span></h2>
    
                <div className="divider divider-neutral"></div>
    
                <h2 className="md:text-xl text-sm"><span className="font-semibold">Percentage of available rooms:</span>  <span>{PercentageOfAvailableRooms}%</span></h2>
                <h2 className="md:text-xl mt-2 text-sm"><span className="font-semibold">Percentage of unavailable rooms:</span>  <span>{PercentageOfUnavailableRooms}%</span></h2>
            </div>
        );
};

export default AdminProfile;