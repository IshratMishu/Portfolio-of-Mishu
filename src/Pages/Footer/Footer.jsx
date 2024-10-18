import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong, FaSquareInstagram } from "react-icons/fa6";
import 'animate.css';

const Footer = () => {
    return (
        <div>
            <hr />
            <div className="text-center p-5 space-y-10">
                <nav>
                    <div className="flex gap-10 justify-center text-4xl items-center">
                        <FaArrowRightLong className="text-6xl animate__animated animate__headShake animate__infinite hidden md:block" />
                        <a href="https://www.facebook.com/ishratjahan.mishu.33" target="_blank">
                            <FaFacebook className="hover:bg-secondary hover:rounded-full" />
                        </a>
                        <a href="www.linkedin.com/in/ishratmishu" target="_blank">
                            <FaLinkedin className="hover:bg-secondary hover:rounded-full" />
                        </a>
                        <a href="https://github.com/IshratMishu" target="_blank">
                            <FaGithub className="hover:bg-secondary hover:rounded-full" />
                        </a>
                        <a href="https://www.instagram.com/ishrat._.mishu" target="_blank">
                            <FaSquareInstagram className="hover:bg-secondary hover:rounded-full" />
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Ishrat Jahan Mishu</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;