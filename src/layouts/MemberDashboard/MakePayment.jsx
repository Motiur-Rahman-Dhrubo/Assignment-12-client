import Swal from "sweetalert2";
import useRequest from "../../hooks/useRequest";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MakePayment = () => {
    const [request] = useRequest();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        floor: "",
        block: "",
        flat: "",
        rent: ""
    });

    useEffect(() => {
        if (request[0]) {
            setFormData({
                email: request[0].reqUserEmail,
                floor: request[0].reqFlatFloor,
                block: request[0].reqFlatBlock,
                flat: request[0].reqFlat,
                rent: `${request[0].reqFlatRent}৳`
            });
        }
    }, [request]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const month = e.target.month.value;
        Swal.fire({
            title: "Are you sure?",
            text: `You want to confirm ${formData.flat} for ${month}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const updateMonth = { selectedMonth: month };

                const requestRes = await axiosSecure.patch(`/request-month/${request[0]?._id}`, updateMonth);
                console.log(requestRes)

                if (requestRes.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Confirmed!",
                        text: `${formData.flat} no apartment has been confirmed for ${month}. Pay Now.`,
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
                    <input type="text" value={formData.email} className="input input-bordered rounded-none" readOnly />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Floor No:</span>
                    </label>
                    <input type="text" value={formData.floor} className="input input-bordered rounded-none" readOnly />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Block Name:</span>
                    </label>
                    <input type="text" value={formData.block} className="input input-bordered rounded-none" readOnly />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Apartment No:</span>
                    </label>
                    <input type="text" value={formData.flat} className="input input-bordered rounded-none" readOnly />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Monthly Rent:</span>
                    </label>
                    <input type="text" value={formData.rent} className="input input-bordered rounded-none" readOnly />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Select Month:</span>
                    </label>
                    <select className="select select-bordered rounded-none" defaultValue={""} name="month" required>
                        <option value="" disabled>Select a month</option>
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

                <input className="btn btn-primary w-full mt-4 rounded-none" type="submit" value="Pay Now" />

            </form>
        </div>
    );
};

export default MakePayment;
