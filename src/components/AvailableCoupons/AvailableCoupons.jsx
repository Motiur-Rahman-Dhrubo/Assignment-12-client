import { useState } from "react";
import useAvailableCoupon from "../../hooks/useAvailableCoupon";
import { CopyToClipboard } from "react-copy-to-clipboard";

const AvailableCoupons = () => {

    const [availableCoupons] = useAvailableCoupon();
    const [copiedCode, setCopiedCode] = useState("");

    return (
        <div className='mt-8 md:mt-12 w-11/12 mx-auto border p-4 rounded-lg bg-base-200'>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black">
                Discount Coupons
            </h2>

            <div className="md:mt-5 mt-3 flex gap-4 justify-center flex-wrap">
                {
                    availableCoupons?.map((coupon) => (
                        <div key={coupon._id} className="border w-[200px] p-4 rounded-lg flex flex-col bg-white">
                            <h2 className="text-6xl text-center font-semibold">{coupon.discountPercentage}%</h2>
                            <p className="mt-2"><span className="font-semibold">Code:</span> {coupon.couponCode}</p>
                            <p className="font-semibold">Description:</p>
                            <p className="flex-grow">{coupon.couponDescription}</p>
                            <div className="mt-2 flex justify-center">
                                <CopyToClipboard text={coupon.couponCode} onCopy={() => setCopiedCode(coupon.couponCode)}>
                                    <button className={`btn btn-primary btn-sm ${copiedCode === coupon.couponCode ? "btn-success" : ""}`}>
                                        {copiedCode === coupon.couponCode ? "Copied!" : "Copy Code"}
                                    </button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AvailableCoupons;