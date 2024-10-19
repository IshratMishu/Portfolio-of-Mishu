import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="mt-28 relative" id='skill' data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
            <h1 className="text-center mb-0 md:mb-20 text-4xl md:text-5xl font-bold text-[#2e2c39]">SKILLS</h1>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 md:gap-10 gap-2">
                <div>
                    <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl rotate-6 absolute top-44 md:left-auto left-10 shadow-md shadow-[#2e2c39] border-2 border-[#ac859e] bg-[#ac859e] rounded-2xl text-white hover:bg-[#2e2c39] hover:border-[#ac859e]">JavaScript</p>
                    <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl absolute top-72 -rotate-6 md:left-auto left-8 shadow-md shadow-[#2e2c39] border-2 border-[#ac859e] bg-[#ac859e] rounded-2xl text-white hover:bg-[#2e2c39] hover:border-[#ac859e]">React</p>
                </div>
                <div>
                    <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl relative md:top-32 top-20 md:left-auto left-5 shadow-md shadow-[#2e2c39] border-2 border-[#ac859e] bg-[#ac859e] rounded-2xl text-white hover:bg-[#2e2c39] hover:border-[#ac859e]">Tailwind</p>
                    <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl relative md:left-80 left-44 shadow-md shadow-[#2e2c39] border-2 border-[#ac859e] bg-[#ac859e] rounded-2xl text-white hover:bg-[#2e2c39] hover:border-[#ac859e]">CSS</p>
                    <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl relative md:left-80 left-44 -rotate-12 shadow-md shadow-[#2e2c39] border-2 border-[#ac859e] bg-[#ac859e] rounded-2xl text-white hover:bg-[#2e2c39] hover:border-[#ac859e]">HTML</p>
                </div>
                <div>
                    <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl absolute top-[22rem] md:left-auto left-5 shadow-md shadow-[#ac859e] border-2 border-[#ac859e] bg-[#2e2c39] rounded-2xl text-white hover:bg-[#ac859e] hover:border-[#2e2c39]">NodeJS</p>
                    <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl relative md:top-44 md:right-24 top-72 -right-24 md:-rotate-45 rotate-90 shadow-md shadow-[#ac859e] border-2 border-[#ac859e] bg-[#2e2c39] rounded-2xl text-white hover:bg-[#ac859e] hover:border-[#2e2c39]">ExpressJS</p>
                </div>
                <div>
                    <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl relative lg:top-44 lg:left-52 md:top-10 md:left-5 left-40 -top-8 -rotate-3 shadow-md shadow-[#2e2c39] border-2 border-[#ac859e] bg-[#ac859e] rounded-2xl text-white hover:bg-[#2e2c39] hover:border-[#ac859e]">MongoDB</p>
                    <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl rotate-12 relative left-36 md:left-56 lg:top-5 md:top-1 shadow-md shadow-[#2e2c39] border-2 border-[#ac859e] bg-[#ac859e] rounded-2xl text-white hover:bg-[#2e2c39] hover:border-[#ac859e]">Github</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl relative left-36 rotate-6 shadow-md shadow-[#ac859e] border-2 border-[#ac859e] bg-[#2e2c39] rounded-2xl text-white hover:bg-[#ac859e] hover:border-[#2e2c39]">Figma</p>
                <p className="md:w-44 w-32 p-2 md:p-4 text-center text-xl md:text-2xl relative md:left-32 -left-32 md:top-auto -top-24 shadow-md shadow-[#ac859e] border-2 border-[#ac859e] bg-[#2e2c39] rounded-2xl text-white hover:bg-[#ac859e] hover:border-[#2e2c39]">Web Design</p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 mt-6 gap-10">
                <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl rotate-12 relative md:left-auto left-5 md:top-auto top-4 shadow-md shadow-[#ac859e] border-2 border-[#ac859e] bg-[#2e2c39] rounded-2xl text-white hover:bg-[#ac859e] hover:border-[#2e2c39]">Surge</p>
                <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl shadow-md shadow-[#ac859e] border-2 border-[#ac859e] bg-[#2e2c39] rounded-2xl text-white hover:bg-[#ac859e] hover:border-[#2e2c39]">Netlify</p>
                <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl rotate-3 relative md:left-auto left-5 shadow-md shadow-[#ac859e] border-2 border-[#ac859e] bg-[#2e2c39] rounded-2xl text-white hover:bg-[#ac859e] hover:border-[#2e2c39]">Vercel</p>
                <p className="md:w-36 w-28 p-2 md:p-4 text-center text-xl md:text-2xl -rotate-12 relative md:left-auto left-5 shadow-md shadow-[#ac859e] border-2 border-[#ac859e] bg-[#2e2c39] rounded-2xl text-white hover:bg-[#ac859e] hover:border-[#2e2c39]">Firebase</p>
            </div>
        </div>
    );
};

export default Skills;