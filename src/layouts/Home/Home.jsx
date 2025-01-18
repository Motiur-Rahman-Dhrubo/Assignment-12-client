import AboutBuilding from "../../components/AboutBuilding/AboutBuilding";
import Footer from "../../components/Footer/Footer";
import LocationSec from "../../components/LocationSec/LocationSec";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <AboutBuilding></AboutBuilding>
            <LocationSec></LocationSec>
            <Footer></Footer>
        </>
    );
};

export default Home;