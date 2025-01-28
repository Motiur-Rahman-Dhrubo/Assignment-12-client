import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import useAvailableCoupon from "../../hooks/useAvailableCoupon";

const Payment = () => {

    const [request] = useRequest();
    const [availableCoupons] = useAvailableCoupon();
    console.log(availableCoupons)
    const [totalMoney, setTotalMoney] = useState(0);
    const [discountApplied, setDiscountApplied] = useState(false);

    useEffect(() => {
        setTotalMoney(request[0]?.reqFlatRent);
    }, [request]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (discountApplied) {
            alert("A coupon has already been applied. You cannot apply another coupon.");
            return;
        }

        const couponCode = e.target.coupon.value;

        const matchedCoupon = availableCoupons.find((coupon) => coupon.couponCode.toLowerCase() === couponCode.toLowerCase() && coupon.availability === "available");

        if (matchedCoupon) {
            const discountPercentage = parseFloat(matchedCoupon.discountPercentage);
            const discountAmount = (totalMoney * discountPercentage) / 100;
            const newTotal = totalMoney - discountAmount;

            setTotalMoney(newTotal);
            setDiscountApplied(true);

            alert(
                `Coupon applied! You received a ${discountPercentage}% discount. Your new total is ${newTotal}৳.`
            );
        } else {
            alert("Invalid or unavailable coupon code. Please try again.");
        }

        e.target.coupon.value = "";
    };

    return (
        <div className="w-11/12 mx-auto mt-2 md:mt-5">
            <div className="border rounded-lg p-4">
                <h2 className="md:text-xl text-lg">Please, Pay <strong>{totalMoney}৳</strong> for the month of <strong>{request[0]?.rentMonth}</strong></h2>
                {discountApplied && (
                    <p className="text-green-600 mt-2">
                        A discount has been applied to your total.
                    </p>
                )}
                <div className="divider"></div>
                <form onSubmit={handleSubmit}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Have You Any Coupon?</span>
                        </label>
                        <input type="text" name="coupon" placeholder="Coupon Code" className="input input-bordered" required />
                    </div>

                    <input className="btn btn-primary w-full mt-4" type="submit" value="Apply Coupon" />

                </form>
            </div>
        </div>
    );
};

export default Payment;