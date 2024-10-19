import { FaDownload } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="h-screen md:mt-16 mt-20 text-center space-y-5 mx-5" data-aos="fade-up"
     data-aos-duration="3000">
            <p className="text-3xl mb-4">Hey👋</p>
            <p className="text-2xl mb-6">It’s <span className="text-[#ac859e] font-semibold">Ishrat Jahan Mishu</span></p>
            <h2 className="md:text-6xl text-3xl text-[#ac859e]">a Junior <span className="lg:text-8xl md:text-7xl text-5xl text-[#2e2c39]">Front-End{' '} <br /> Dev
                <Typewriter
                    words={['eloper']}
                    loop={10}
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                <span className="text-[#ac859e]">.</span></span></h2>
            <div className="flex justify-center">
                <a href="https://drive.google.com/uc?export=download&id=1i-p1slaBaKZXEPTdpkKaoKUwCeN_64ow" download="Resume of Ishrat Jahan Mishu.pdf">
                    <button className="btn text-white text-xl md:text-2xl mt-10 md:mt-16 shadow-md shadow-[#ac859e] border-2 border-[#ac859e] bg-[#2e2c39] rounded-md hover:bg-[#ac859e] hover:border-[#2e2c39]">Resume <FaDownload /></button>
                </a>
            </div>
        </div>
    );
};

export default Banner;