import { FaDownload } from "react-icons/fa";
import 'animate.css';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className="h-screen mt-10 text-center">
            <p className="text-xl mb-3">Hey👋</p>
            <p className="text-xl mb-6 animate__animated animate__bounceInLeft">It’s <span className="text-[#ac859e] font-semibold">Ishrat Jahan Mishu</span></p>
            <h2 className="md:text-6xl text-2xl text-[#ac859e]">a Junior <span className="lg:text-8xl md:text-7xl text-3xl text-[#2e2c39]">Front-End{' '} <br /> Dev
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