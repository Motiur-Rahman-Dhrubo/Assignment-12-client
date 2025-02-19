import { useContext, useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useRequest from "../../hooks/useRequest";
import useApartment from "../../hooks/UseApartment";
import useAdmin from "../../hooks/useAdmin";
import useMember from "../../hooks/useMember";
import useMyInfo from "../../hooks/useMyInfo";


const Apartments = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [request, refetch] = useRequest();
    const [isAdmin] = useAdmin();
    const [isMember] = useMember();
    const [myInfo] = useMyInfo();

    const [apartment] = useApartment();
    const [allApartments, setAllApartments] = useState([]);
    const [filteredApartments, setFilteredApartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        if (apartment.length > 0) {
            setAllApartments(apartment);
            setFilteredApartments(apartment);
            setLoading(false);
        }
    }, [apartment]);

    if (loading) {
        return <Loading></Loading>;
    }

    const totalPages = Math.ceil(filteredApartments.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedApartments = filteredApartments.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleFilterByRent = (range) => {
        let filteredData;
        if (range === "all") {
            filteredData = allApartments;
        } else {
            const [first_number, last_number] = range.split("-").map(Number);
            filteredData = allApartments.filter(
                (apartment) => apartment.rent >= first_number && apartment.rent <= last_number
            );
        }
        setFilteredApartments(filteredData);
        setCurrentPage(1);
    };

    const handleSortByAscendingly = () => {
        const sortedData = [...filteredApartments].sort((a, b) => a.rent - b.rent);
        setFilteredApartments(sortedData);
        setCurrentPage(1);
    };

    const handleSortByDescendingly = () => {
        const sortedData = [...filteredApartments].sort((a, b) => b.rent - a.rent);
        setFilteredApartments(sortedData);
        setCurrentPage(1);
    };

    const handleAgreement = (RequestFlat) => {
        if (!user || !user.email) {
            return Swal.fire({
                position: "top",
                icon: "error",
                title: "You are not logged in!",
                text: "Please log in to continue.",
                confirmButtonText: "Go to Login",
            }).then(() => {
                navigate("/login", { state: { from: location }, replace: true });
            });
        }

        if (isAdmin) {
            return Swal.fire({
                position: "top",
                icon: "error",
                title: "Admins cannot rent apartments!",
                confirmButtonText: "Ok",
            });
        }

        if (isMember) {
            return Swal.fire({
                position: "top",
                icon: "error",
                title: "You have already rented an apartment.",
                text: "You cannot rent more than one apartment.",
                confirmButtonText: "Ok",
            });
        }

        if (request.length > 0) {
            return Swal.fire({
                position: "top",
                icon: "error",
                title: "You can only apply for one apartment at a time.",
                confirmButtonText: "Ok",
            });
        }

        Swal.fire({
            title: "Are you sure?",
            text: `You are about to request Apartment No: ${RequestFlat.apartment_no}.`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, proceed!",
        }).then((result) => {
            if (result.isConfirmed) {
                const now = new Date();
                const requestDate = now
                    .toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    })
                    .replace(",", "");

                const requestedFlat = {
                    reqFlatID: RequestFlat._id,
                    reqUserName: user.displayName,
                    reqUserEmail: user.email,
                    reqUserId: myInfo[0]._id,
                    reqFlatFloor: RequestFlat.floor_no,
                    reqFlatBlock: RequestFlat.block_name,
                    reqFlat: RequestFlat.apartment_no,
                    reqFlatRent: RequestFlat.rent,
                    reqStatus: "pending",
                    agreementRequestDate: requestDate,
                    agreementAcceptDate: null,
                    rentMonth: null,
                };

                axiosSecure.post("/requests", requestedFlat).then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Request Sent!",
                            text: "Your request has been submitted successfully. Please wait for admin approval.",
                            icon: "success",
                        });
                        refetch();
                    }
                });
            }
        });
    };



    return (
        <div className="w-11/12 mx-auto mt-2 md:mt-4 mb-8 md:mb-12">
            <div className="flex justify-between w-full">
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="text-black font-semibold border border-black py-2 px-4 hover:bg-black hover:text-white transition-all duration-[300ms]">Sort By Rent</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 border text-black border-black z-[1] w-52 p-2">
                        <li><a onClick={() => handleSortByAscendingly()} className="justify-center font-semibold rounded-none hover:border border-black hover:py-[7px] py-2 hover:bg-black hover:text-white ">Ascendingly</a></li>
                        <li><a onClick={() => handleSortByDescendingly()} className="justify-center font-semibold rounded-none hover:border border-black hover:py-[7px] py-2 hover:bg-black hover:text-white ">Descendingly</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="text-black font-semibold border border-black py-2 px-4 hover:bg-black hover:text-white transition-all duration-[300ms]">Search By Rent</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 border text-black border-black z-[1] w-52 p-2">
                        <li><a onClick={() => handleFilterByRent("all")} className="justify-center font-semibold rounded-none hover:border border-black hover:py-[7px] py-2 hover:bg-black hover:text-white ">All</a></li>
                        <li><a onClick={() => handleFilterByRent("1001-2000")} className="justify-center font-semibold rounded-none hover:border border-black hover:py-[7px] py-2 hover:bg-black hover:text-white ">1001-2000</a></li>
                        <li><a onClick={() => handleFilterByRent("2001-3000")} className="justify-center font-semibold rounded-none hover:border border-black hover:py-[7px] py-2 hover:bg-black hover:text-white ">2001-3000</a></li>
                    </ul>
                </div>
            </div>


            <div className="mt-2 md:mt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {paginatedApartments.map((apartment) => (
                    <div key={apartment._id} className="border group">
                        <div className="overflow-hidden border">
                            <img src={apartment.apartment_image} alt="apartment_image" className="w-full aspect-[3/2] content-center transform transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        <div className="p-4 text-black">
                            <h2><span className="font-semibold">Apartment No:</span> {apartment.apartment_no}</h2>
                            <p><span className="font-semibold">Floor No:</span> {apartment.floor_no}</p>
                            <p><span className="font-semibold">Block:</span> {apartment.block_name}</p>
                            <p><span className="font-semibold">Monthly Rent:</span> {apartment.rent}৳</p>
                            <p className={apartment.availability === "unavailable" || apartment.availability === "rented" ? "text-red-500" : ""}>
                                <span className="font-semibold">Status:</span> <span className="capitalize">{apartment.availability}</span>
                            </p>
                            <button onClick={() => handleAgreement(apartment)} className={`w-full text-center font-semibold border py-1 mt-2 transition-all duration-300 ${apartment.availability === "unavailable" || apartment.availability === "rented" ? "bg-red-200 text-gray-500" : "text-black border-black hover:bg-black hover:text-white"}`} disabled={apartment.availability === "unavailable" || apartment.availability === "rented"}>Agreement</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center mt-6 gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} className={`px-3 py-1 border ${currentPage === index + 1 ? "bg-black text-white" : "bg-white text-black"} hover:bg-black hover:text-white transition-all duration-300`} onClick={() => handlePageChange(index + 1)}> {index + 1} </button>
                ))}
            </div>
        </div>
    );
};

export default Apartments;