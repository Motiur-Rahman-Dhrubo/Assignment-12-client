import React from 'react';

const AboutBuilding = () => {
    return (
        <div className="mt-8 md:mt-12 w-11/12 mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black">
                About the Building
            </h2>

            <p className="text-sm md:text-base lg:text-lg md:mt-5 mt-3 text-center text-black">
                Discover the features that make <span className="text-indigo-600 font-semibold">M.Tower</span> the perfect choice for your living needs.
            </p>


            <ul className="md:mt-5 mt-3 flex flex-col gap-2 md:gap-4">
                <li className="flex items-center gap-4 hover:gap-6 transition-all duration-[300ms]">
                    <span className="text-indigo-600 text-3xl">&#10003;</span>
                    <p className="md:text-xl text-lg text-gray-700">
                        Car parking available on the ground floor.
                    </p>
                </li>
                <li className="flex items-center gap-4 hover:gap-6 transition-all duration-[300ms]">
                    <span className="text-indigo-600 text-3xl">&#10003;</span>
                    <p className="md:text-xl text-lg text-gray-700">
                        Spacious area in front of the building with a beautiful garden.
                    </p>
                </li>
                <li className="flex items-center gap-4 hover:gap-6 transition-all duration-[300ms]">
                    <span className="text-indigo-600 text-3xl">&#10003;</span>
                    <p className="md:text-xl text-lg text-gray-700">
                        Four lifts operating 24/7.
                    </p>
                </li>
                <li className="flex items-center gap-4 hover:gap-6 transition-all duration-[300ms]">
                    <span className="text-indigo-600 text-3xl">&#10003;</span>
                    <p className="md:text-xl text-lg text-gray-700">
                        Generator for backup electricity.
                    </p>
                </li>
                <li className="flex items-center gap-4 hover:gap-6 transition-all duration-[300ms]">
                    <span className="text-indigo-600 text-3xl">&#10003;</span>
                    <p className="md:text-xl text-lg text-gray-700">
                        Gas line connection for all flats.
                    </p>
                </li>
                <li className="flex items-center gap-4 hover:gap-6 transition-all duration-[300ms]">
                    <span className="text-indigo-600 text-3xl">&#10003;</span>
                    <p className="md:text-xl text-lg text-gray-700">
                        Wi-Fi and DTH services for every flat.
                    </p>
                </li>
                <li className="flex items-center gap-4 hover:gap-6 transition-all duration-[300ms]">
                    <span className="text-indigo-600 text-3xl">&#10003;</span>
                    <p className="md:text-xl text-lg text-gray-700">
                        24/7 security with guards and CCTV surveillance.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default AboutBuilding;