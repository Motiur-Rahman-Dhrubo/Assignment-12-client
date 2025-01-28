import Swal from "sweetalert2";
import useRequest from "../../hooks/useRequest";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";


const MakePayment = () => {

    const [request] = useRequest();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const month = e.target.month.value;
        Swal.fire({
            title: "Are you sure?",
            text: `You want to confirm ${request[0]?.reqFlat} for ${month}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const updateMonth = {
                    selectedMonth: month,
                };

                const requestRes = await axiosSecure.patch(`/request-month/${request[0]?._id}`, updateMonth);
                console.log(requestRes)

                if (requestRes.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Confirmed!",
                        text: `${request[0]?.reqFlat} no apartment has been confirmed for ${month}. Pay Now.`,
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Proceed Payment",
                    }).then((payResult) => {
                        if (payResult.isConfirmed) {
                            navigate("/member-dashboard/payment");
                        }
                    });
                }
            }
        });
    }

    return (
        <div className="w-11/12 mx-auto mt-2 md:mt-5">
            <form onSubmit={handleSubmit}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Member Email:</span>
                    </label>
                    <input type="text" defaultValue={request[0]?.reqUserEmail} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Floor No:</span>
                    </label>
                    <input type="text" defaultValue={request[0]?.reqFlatFloor} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Block Name:</span>
                    </label>
                    <input type="text" defaultValue={request[0]?.reqFlatBlock} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Apartment No:</span>
                    </label>
                    <input type="text" defaultValue={request[0]?.reqFlat} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Monthly Rent:</span>
                    </label>
                    <input type="text" defaultValue={`${request[0]?.reqFlatRent}৳`} className="input input-bordered" readOnly />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Select Month:</span>
                    </label>
                    <select className="select select-bordered" defaultValue={""} name="month" required>
                        <option value="" disabled>
                            Select a month
                        </option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </div>

                <input className="btn btn-primary w-full mt-4" type="submit" value="Pay Now" />

            </form>
        </div>
    );
};

export default MakePayment;