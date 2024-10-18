import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong, FaSquareInstagram } from "react-icons/fa6";
import 'animate.css';

const Footer = () => {
    return (
        <div>
            <hr className="text-[#ac859e]"/>
            <div className="text-center p-5 space-y-10">
                <nav>
                    <div className="flex gap-10 justify-center text-4xl items-center">
                        <FaArrowRightLong className="text-6xl text-[#ac859e] animate__animated animate__headShake animate__infinite hidden md:block" />
                        <a href="https://www.facebook.com/ishratjahan.mishu.33" target="_blank">
                            <FaFacebook className="hover:bg-[#ac859e] hover:rounded-full" />
                        </a>
                        <a href="www.linkedin.com/in/ishratmishu" target="_blank">
                            <FaLinkedin className="hover:bg-[#ac859e] hover:rounded-full" />
                        </a>
                        <a href="https://github.com/IshratMishu" target="_blank">
                            <FaGithub className="hover:bg-[#ac859e] hover:rounded-full" />
                        </a>
                        <a href="https://www.instagram.com/ishrat._.mishu" target="_blank">
                            <FaSquareInstagram className="hover:bg-[#ac859e] hover:rounded-full" />
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright <span className="text-[#ac859e]">©</span> {new Date().getFullYear()} - All right reserved by <span className="text-[#ac859e]">Ishrat Jahan Mishu</span></p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;