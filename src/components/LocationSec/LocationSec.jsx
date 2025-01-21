import { Map, Marker } from "@vis.gl/react-google-maps";

const LocationSec = () => {

    const position = { lat: 23.794446, lng: 90.402678 };

    return (
        <div className="mt-8 md:mt-12 w-full">
            <div className="w-11/12 mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black">
                    Our Location
                </h2>
                <p className="text-sm md:text-base lg:text-lg md:mt-5 mt-3 text-center text-black">
                    Visit us at <span className="text-indigo-600 font-semibold">77/C Motiur Tower, Dhaka 1213, Bangladesh</span>.
                    Here's how you can reach us.
                </p>
            </div>

            <div className="mt-6">
                <Map className="w-full aspect-[7/2] min-h-[180px]"
                    defaultCenter={position}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                >
                    <Marker position={position} />
                </Map>
            </div>
        </div>
    );
};

export default LocationSec;