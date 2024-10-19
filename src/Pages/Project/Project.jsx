import landing from '../../assets/landing.png'
import estate from '../../assets/estate.png'
import clay from '../../assets/clay.png'
import fit from '../../assets/fit.png'
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
        <div className='mx-5 mb-28' data-aos="fade-up"
        data-aos-duration="3000">
            <h2 className="text-center mt-16 text-3xl font-medium mx-5 mb-16">Where creativity meets code <span className='text-[#ac859e]'>–</span> exploring my journey through web development projects.</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-center">

            <div className='border-2 rounded-2xl border-[#2e2c39] shadow-md shadow-[#ac859e] bg-[#ac859e] text-white border-b-8 border-r-8'>
                    <div className="h-64 rounded-2xl"
                        style={{
                            backgroundImage: `url(${fit})`,
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
                        <h2 className='text-2xl font-bold'>FitLife</h2>
                        <p className='text-lg'>A Fitness Service Web application using React, Tailwind CSS , MongoDB, Firebase Authentication & CRUD operation.</p>
                        <div className='flex items-center justify-around'>
                        <a href="https://github.com/IshratMishu/FitLife-Client" target="_blank"> <BsGithub className='text-3xl text-[#2e2c39] border-[#2e2c39] border-2 rounded-full hover:border-white' data-tooltip-id="github-tooltip"/></a>
                            <a href="https://service-assignment11.web.app/" target="_blank" className='btn btn-sm text-white border-2 border-[#ac859e] bg-[#2e2c39] rounded-md hover:bg-[#ac859e] hover:border-[#2e2c39]'>Visit Project</a>
                        </div>
                    </div>
                </div>


            <div className='border-2 rounded-2xl border-[#2e2c39] shadow-md shadow-[#ac859e] bg-[#ac859e] text-white border-b-8 border-r-8'>
                    <div className="h-64 rounded-2xl"
                        style={{
                            backgroundImage: `url(${clay})`,
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
                        <h2 className='text-2xl font-bold'>ClayPottery</h2>
                        <p className='text-lg'>A Ceramics & Pottery product listing Website using React, Tailwind CSS , MongoDB & Firebase Authentication.</p>
                        <div className='flex items-center justify-around'>
                        <a href="https://github.com/IshratMishu/Art-Craft-Client" target="_blank"> <BsGithub className='text-3xl text-[#2e2c39] border-[#2e2c39] border-2 rounded-full hover:border-white' data-tooltip-id="github-tooltip"/></a>
                            <a href="https://art-and-craft-a65d0.web.app/" target="_blank" className='btn btn-sm text-white border-2 border-[#ac859e] bg-[#2e2c39] rounded-md hover:bg-[#ac859e] hover:border-[#2e2c39]'>Visit Project</a>
                        </div>
                    </div>
                </div>


                <div className='border-2 rounded-2xl border-[#2e2c39] shadow-md shadow-[#ac859e] bg-[#ac859e] text-white border-b-8 border-r-8'>
                    <div className="h-64 rounded-2xl"
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
                        <p className='text-lg'>A Real Estate Website using React, Tailwind CSS & Firebase Authentication.</p>
                        <div className='flex items-center justify-around'>
                        <a href="https://github.com/IshratMishu/Real-Estate-Website" target="_blank"> <BsGithub className='text-3xl text-[#2e2c39] border-[#2e2c39] border-2 rounded-full hover:border-white' data-tooltip-id="github-tooltip"/></a>
                            <a href="https://real-estate-react-projec-2f7cf.web.app" target="_blank" className='btn btn-sm text-white border-2 border-[#ac859e] bg-[#2e2c39] rounded-md hover:bg-[#ac859e] hover:border-[#2e2c39]'>Visit Project</a>
                        </div>
                    </div>
                </div>
   
                <div className='border-2 rounded-2xl border-[#2e2c39] shadow-md shadow-[#ac859e] bg-[#ac859e] text-white border-b-8 border-r-8'>
                    <div className="h-64 rounded-2xl"
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
                        <p className='text-lg'>A Plant-Themed Landing Page built with HTML5 and CSS3.The design is fully responsive</p>
                        <div className='flex items-center justify-around'>
                             <a href="https://github.com/IshratMishu/Plant-Landing-Page" target="_blank"> <BsGithub className='text-3xl text-[#2e2c39] border-[#2e2c39] border-2 rounded-full hover:border-white' data-tooltip-id="github-tooltip"/></a>
                            <a href="https://ishratmishu.github.io/Plant-Landing-Page/" target="_blank" className='btn btn-sm text-white border-2 border-[#ac859e] bg-[#2e2c39] rounded-md hover:bg-[#ac859e] hover:border-[#2e2c39]'>Visit Project</a>
                        </div>
                    </div>
                </div>
            </div>
            <Tooltip id="github-tooltip" content="Source Code" place="top" style={{ fontSize: '10px', padding: '4px 8px' }}/>
        </div>
    );
};

export default Project;