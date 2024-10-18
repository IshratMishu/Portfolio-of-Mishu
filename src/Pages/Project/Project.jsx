import landing from '../../assets/landing.png'
import hockey from '../../assets/hockey.png'
import estate from '../../assets/estate.png'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsGithub } from "react-icons/bs";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Project = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='mx-5 mb-28' data-aos="fade-up">
            <h2 className="text-center mt-16 text-3xl font-medium mx-5 mb-16">Where creativity meets code <span className='text-[#ac859e]'>–</span> exploring my journey through web development projects.</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-center">
                <div className='border-2 rounded-2xl border-[#2e2c39] shadow-md shadow-[#ac859e] bg-[#ac859e] text-white border-b-8 border-r-8'>
                    <div className="h-80 rounded-2xl"
                        style={{
                            backgroundImage: `url(${landing})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center top',
                            transition: 'background-position ease-in-out 3s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundPosition = 'center bottom';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundPosition = 'center top';
                        }}>
                    </div>
                    <div className='text-center px-2 py-5 space-y-2'>
                        <h2 className='text-2xl font-bold'>PlantEra</h2>
                        <p className='text-lg'>A Plant-Themed Landing Page</p>
                        <div className='flex items-center justify-around'>
                            <BsGithub className='text-3xl text-[#2e2c39] border-[#2e2c39] border-2 rounded-full hover:border-white' data-tooltip-id="github-tooltip"/>
                            <Tooltip id="github-tooltip" content="Source Code" place="top" style={{ fontSize: '10px', padding: '4px 8px' }}/>
                            <a href="https://ishratmishu.github.io/Plant-Landing-Page/" target="_blank" className='btn btn-sm text-white border-2 border-[#ac859e] bg-[#2e2c39] rounded-md hover:bg-[#ac859e] hover:border-[#2e2c39]'>Visit Project</a>
                        </div>
                    </div>
                </div>

                <div className='border-2 rounded-2xl border-[#2e2c39] shadow-md shadow-[#ac859e] bg-[#ac859e] text-white border-b-8 border-r-8'>
                    <div className="h-80 rounded-2xl"
                        style={{
                            backgroundImage: `url(${hockey})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center top',
                            transition: 'background-position ease-in-out 3s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundPosition = 'center bottom';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundPosition = 'center top';
                        }}>
                    </div>
                    <div className='text-center px-2 py-5 space-y-2'>
                        <h2 className='text-2xl font-bold'>Hockey’s</h2>
                        <p className='text-lg'>A Hockey Club Landing Page</p>
                        <div className='flex items-center justify-around'>
                            <BsGithub className='text-3xl text-[#2e2c39] border-[#2e2c39] border-2 rounded-full hover:border-white' data-tooltip-id="github-tooltip"/>
                            <a href="https://ishratmishu.github.io/Hockey-Assignment3/" target="_blank" className='btn btn-sm text-white border-2 border-[#ac859e] bg-[#2e2c39] rounded-md hover:bg-[#ac859e] hover:border-[#2e2c39]'>Visit Project</a>
                        </div>
                    </div>
                </div>

                <div className='border-2 rounded-2xl border-[#2e2c39] shadow-md shadow-[#ac859e] bg-[#ac859e] text-white border-b-8 border-r-8'>
                    <div className="h-80 rounded-2xl"
                        style={{
                            backgroundImage: `url(${estate})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center top',
                            transition: 'background-position ease-in-out 3s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundPosition = 'center bottom';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundPosition = 'center top';
                        }}>
                    </div>
                    <div className='text-center px-2 py-5 space-y-2'>
                        <h2 className='text-2xl font-bold'>LuxVista</h2>
                        <p className='text-lg'>A Real Estate Website using React, Tailwind CSS, Firebase Authentication</p>
                        <div className='flex items-center justify-around'>
                            <BsGithub className='text-3xl text-[#2e2c39] border-[#2e2c39] border-2 rounded-full hover:border-white' data-tooltip-id="github-tooltip"/>
                            <a href="https://real-estate-react-projec-2f7cf.web.app" target="_blank" className='btn btn-sm text-white border-2 border-[#ac859e] bg-[#2e2c39] rounded-md hover:bg-[#ac859e] hover:border-[#2e2c39]'>Visit Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;