import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";


const Apartments = () => {

    const [allApartments, setAllApartments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/apartments')
            .then(res => res.json())
            .then(data => {
                setAllApartments(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-8 md:mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {allApartments.map((apartment) => (
                    <div key={apartment._id} className="border group">
                        <div className="overflow-hidden border">
                            <img src={apartment.apartment_image} alt="apartment_image" className="w-full aspect-[3/2] content-center transform transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div className="p-4">
                            <h2><span className="font-semibold">Apartment No:</span> {apartment.apartment_no}</h2>
                            <p><span className="font-semibold">Floor No:</span> {apartment.floor_no}</p>
                            <p><span className="font-semibold">Block:</span> {apartment.block_name}</p>
                            <p><span className="font-semibold">Monthly Rent:</span> {apartment.rent}৳</p>
                            <p><span className="font-semibold">Status:</span> {apartment.availability ? "Available" : "Unavailable"}</p>
                            <button className="w-full text-center text-black font-semibold border border-black py-1 mt-2 hover:bg-black hover:text-white transition-all duration-300">Agreement</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Apartments;