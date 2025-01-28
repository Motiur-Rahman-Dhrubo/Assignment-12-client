import Swal from "sweetalert2";
import usePendingRequest from "../../hooks/usePendingRequest";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useApartment from "../../hooks/UseApartment";

const AgreementRequests = () => {

    const [pendingRequests, refetch] = usePendingRequest();
    const [apartment] = useApartment();
    const axiosSecure = useAxiosSecure();

    const handleReject = (id) => {
        
        Swal.fire({
                    title: "Are you sure?",
                    text: `You want to delete this request!`,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete!",
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        const updateRequest = {
                            status: "checked",
                            acceptDate: null,
                        };
                        const requestRes = await axiosSecure.patch(`/request/${id}`, updateRequest);
        
                        if (requestRes.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `This agreement request has been removed successfully.`,
                                icon: "success",
                            });
                            refetch();
                        }
                    }
                });
    }

    const handleAccept = (request) => {

        const selectedApartment = apartment.find((flat) => flat._id === request.reqFlatID);

        if (selectedApartment?.availability === "rented") {
            Swal.fire({
                title: "Unavailable!",
                text: "This flat is already rented. You cannot accept this request.",
                icon: "error",
            });
            return;
        }
        
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to accept this request?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Accept!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const now = new Date();
                const acceptDate = now
                    .toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    })
                    .replace(",", "");

                const updateRequest = {
                    status: "checked",
                    acceptDate: acceptDate,
                };

                const requestRes = await axiosSecure.patch(`/request/${request._id}`, updateRequest);

                const updateUser = { action: "member" };
                const userRes = await axiosSecure.patch(`/user/${request.reqUserId}`, updateUser);
                const updateFlat = { action: "rented" };
                const flatRes = await axiosSecure.patch(`/apartment/${request.reqFlatID}`, updateFlat);

                if (requestRes.data.modifiedCount > 0 && userRes.data.modifiedCount > 0 && flatRes.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Accepted!",
                        text: "The agreement request has been accepted and is ready for the payment process.",
                        icon: "success",
                    });
                    refetch();
                }
            }
        });
    };


    return (
        <div className="w-11/12 mx-auto mt-2 md:mt-5 flex flex-col md:gap-4 gap-3">
            {
                pendingRequests.map((request) => (
                    <div key={request._id} className="border p-4 rounded-lg">
                        <h2 className="text-base md:text-lg"><span className="font-semibold">User Name: </span>{request.reqUserName}</h2>
                        <h2 className="text-base md:text-lg"><span className="font-semibold">User Email: </span>{request.reqUserEmail}</h2>
                        <div className="text-sm md:text-base flex flex-col md:flex-row mt-2">
                            <p className="w-1/2"><span className="font-semibold">Floor No: </span>{request.reqFlatFloor}</p>
                            <p className="w-1/2"><span className="font-semibold">Block Name: </span>{request.reqFlatBlock}</p>
                        </div>
                        <div className="text-sm md:text-base flex flex-col md:flex-row">
                            <p className="w-1/2"><span className="font-semibold">Room No: </span>{request.reqFlat}</p>
                            <p className="w-1/2"><span className="font-semibold">Monthly Rent: </span>{request.reqFlatRent}৳</p>
                        </div>
                        <p className="text-sm md:text-base mt-2"><span className="font-semibold">Agreement Request Date: </span>{request.agreementRequestDate}</p>
                        <div className="flex gap-2 mt-4">
                            <button onClick={() => handleAccept(request)} className="btn btn-primary btn-sm">Accept Request</button>
                            <button onClick={() => handleReject(request._id)} className="btn btn-secondary btn-sm">Reject Request</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AgreementRequests;