import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './slider.css'

const Slider = () => {
    return (
        <div className="w-full">
            <Carousel
                autoPlay
                infiniteLoop
                interval={3500}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                stopOnHover={true}
            >
                <div className="relative w-full aspect-[7/2] min-h-[180px] bg-[url('/assets/home-1.jpg')] bg-center bg-cover">
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                    <div className="relative z-10 text-white text-start w-11/12 mx-auto lg:pt-10 pt-8">
                        <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold w-full md:w-1/2">Welcome to M.tower.</h2>
                        <p className="lg:text-2xl md:text-lg text-sm lg:mt-2 md:mt-1 mt-0 font-thin">Where comfort meets convenience.</p>
                    </div>
                </div>
                <div className="relative w-full aspect-[7/2] min-h-[180px] bg-[url('/assets/home-2.jpg')] bg-center bg-cover">
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                    <div className="relative z-10 text-white text-start w-11/12 mx-auto lg:pt-10 pt-8">
                        <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold w-full md:w-1/2">Your dream flat in the heart of Dhaka.</h2>
                    </div>
                </div>
                <div className="relative w-full aspect-[7/2] min-h-[180px] bg-[url('/assets/home-3.jpg')] bg-center bg-cover">
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                    <div className="relative z-10 text-white text-start w-11/12 mx-auto lg:pt-10 pt-8">
                        <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold w-full md:w-1/2">Rent today and start your new journey.</h2>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;