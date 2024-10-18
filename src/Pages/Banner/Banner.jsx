import { FaDownload } from "react-icons/fa";
import 'animate.css';

const Banner = () => {
    return (
        <div className="md:h-[500px] h-[300px] mt-10 text-center">
            <p className="text-xl mb-3">Hey👋</p>
            <p className="text-xl mb-6">It’s Ishrat Jahan Mishu</p>
            <h2 className="md:text-6xl text-2xl">a Junior <span className="lg:text-8xl md:text-7xl text-3xl">Front-End <br /> Developer.</span></h2>
            <div className="flex justify-center">
                <a href="https://drive.google.com/uc?export=download&id=1i-p1slaBaKZXEPTdpkKaoKUwCeN_64ow" download="Resume of Ishrat Jahan Mishu.pdf">
                    <button className="btn text-xl md:text-2xl mt-10 md:mt-16 shadow-md shadow-secondary border-2 border-secondary bg-primary rounded hover:bg-neutral hover:border-secondary">Resume <FaDownload /></button>
                </a>
            </div>
        </div>
    );
};

export default Banner;