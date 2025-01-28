import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAllCoupon from "../../hooks/useAllCoupon";

const ManageCoupons = () => {

    const [allCoupons, refetch] = useAllCoupon();

    const axiosSecure = useAxiosSecure();

    const addCoupon = () => {
        Swal.fire({
            title: "Add Coupon",
            html: `
            <input type="text" id="couponCode" class="swal2-input" placeholder="Coupon Code">
            <input type="number" id="discountPercentage" class="swal2-input" placeholder="Discount Percentage">
            <textarea id="couponDescription" class="swal2-textarea" placeholder="Coupon Description"></textarea>
        `,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Save Coupon",
            preConfirm: () => {
                const couponCode = document.getElementById("couponCode").value;
                const discountPercentage = document.getElementById("discountPercentage").value;
                const couponDescription = document.getElementById("couponDescription").value;

                if (!couponCode || !discountPercentage || !couponDescription) {
                    Swal.showValidationMessage("Please fill out all fields.");
                    return false;
                }

                return { couponCode, discountPercentage, couponDescription };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const { couponCode, discountPercentage, couponDescription } = result.value;
                const addedCoupon = {
                    couponCode: couponCode,
                    discountPercentage: discountPercentage,
                    couponDescription: couponDescription,
                    availability: "available",
                }
                console.log(addedCoupon);

                axiosSecure.post('/add-coupon', addedCoupon)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Coupon Added!",
                                html: `
                                <strong>Code:</strong> ${couponCode}<br>
                                <strong>Discount:</strong> ${discountPercentage}%<br>
                                <strong>Description:</strong> ${couponDescription}
                                `,
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    };

    const handleAvailability = async (coupon) => {
        const newAvailability = coupon.availability === "available" ? "unavailable" : "available";
        const updateCoupon = { action: newAvailability }
        const couponRes = await axiosSecure.patch(`/coupon/${coupon._id}`, updateCoupon)
        if (couponRes.data.modifiedCount > 0) {
            Swal.fire({
                title: `Coupon ${newAvailability === "available" ? "Enabled" : "Disabled"}!`,
                text: `The coupon has been successfully updated to ${newAvailability}.`,
                icon: "success"
            });
            refetch();
        }
    };

    return (
        <div className="w-11/12 mx-auto mt-2 md:mt-5">
            <div className="overflow-x-auto">
                <table className="table min-w-[650px]">
                    <thead>
                        <tr>
                            <th>Coupon Code</th>
                            <th>Discount Percentage</th>
                            <th>Coupon Description</th>
                            <th>Availability</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCoupons.map((coupon) => (
                                <tr key={coupon._id} className="hover">
                                    <td>{coupon.couponCode}</td>
                                    <td>{coupon.discountPercentage}</td>
                                    <td>{coupon.couponDescription}</td>
                                    <td className={coupon.availability === 'available' ? "text-green-500" : "text-red-500"}>{coupon.availability}</td>
                                    <td><button onClick={() => { handleAvailability(coupon) }} className={coupon.availability === 'available' ? "btn btn-xs btn-error" : "btn btn-xs btn-success"}>{coupon.availability === 'available' ? "Disable" : "Enable"}</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex mt-4 justify-center"><button onClick={addCoupon} className="btn btn-primary">Add Coupon</button></div>
        </div>
    );
};

export default ManageCoupons;