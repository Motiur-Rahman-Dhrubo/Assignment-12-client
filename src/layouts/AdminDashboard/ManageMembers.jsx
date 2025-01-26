import useAllMember from "../../hooks/useAllMember";

const ManageMembers = () => {

    const [allMember, refetch] = useAllMember();

    const handleDelete = (member) => {
        alert(member._id)
    }

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
                                <tr key={member._id}>
                                    <th>{index + 1}</th>
                                    <td>{member.userName}</td>
                                    <td>{member.userEmail}</td>
                                    <td><button onClick={() => {handleDelete(member)}} className="btn btn-xs btn-error">Delete</button></td>
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