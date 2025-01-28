import Swal from "sweetalert2";
import useAllMember from "../../hooks/useAllMember";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageMembers = () => {

    const [allMember, refetch] = useAllMember();
    
    const axiosSecure = useAxiosSecure();

    const handleDelete = async (member) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to delete ${member.userName} from the member list!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const updateUser = { action: "user" };
                const userRes = await axiosSecure.patch(`/user/${member._id}`, updateUser);

                if (userRes.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `${member.userName} has been removed successfully.`,
                        icon: "success",
                    });
                    refetch();
                }
            }
        });
    };



    return (
        <div className="w-11/12 mx-auto mt-2 md:mt-5">
            <div className="overflow-x-auto">
                <table className="table min-w-[650px]">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Remove Member</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allMember.map((member, index) => (
                                <tr key={member._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{member.userName}</td>
                                    <td>{member.userEmail}</td>
                                    <td><button onClick={() => { handleDelete(member) }} className="btn btn-xs btn-error">Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMembers;