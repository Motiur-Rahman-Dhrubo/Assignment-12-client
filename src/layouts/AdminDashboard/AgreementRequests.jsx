import usePendingRequest from "../../hooks/usePendingRequest";

const AgreementRequests = () => {

    const [pendingRequests, refetch] = usePendingRequest();

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
                            <button className="btn btn-primary btn-sm">Accept Request</button>
                            <button className="btn btn-secondary btn-sm">Reject Request</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AgreementRequests;