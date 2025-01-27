import AboutBuilding from "../../components/AboutBuilding/AboutBuilding";
import AvailableCoupons from "../../components/AvailableCoupons/AvailableCoupons";
import LocationSec from "../../components/LocationSec/LocationSec";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <AboutBuilding></AboutBuilding>
            <AvailableCoupons></AvailableCoupons>
            <LocationSec></LocationSec>
        </>
    );
};

export default Home;