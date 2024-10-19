import { FaGratipay } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Sidebar = () => {
    return (
        <div className="flex gap-10 sticky top-0 z-10 pt-5 justify-center">
           <a href="#bio"> <FaGratipay className="text-4xl text-[#2e2c39] border-4 rounded-full border-[#ac859e]" data-tooltip-id="Biography-tooltip"/></a>

            <a href="#skill"><GiSkills className="text-4xl text-white bg-[#2e2c39] border-4 rounded-full border-[#ac859e]" data-tooltip-id="Skills-tooltip"/></a>

           <a href="#edu"> <FaGraduationCap className="text-4xl text-white bg-[#2e2c39] border-4 rounded-full border-[#ac859e]" data-tooltip-id="Education-tooltip"/></a>

            <Tooltip id="Biography-tooltip" content="Biography" place="top" style={{ fontSize: '10px', padding: '4px 8px', backgroundColor: '#ac859e'}}/>
            <Tooltip id="Skills-tooltip" content="Skills" place="top" style={{ fontSize: '10px', padding: '4px 8px', backgroundColor: '#ac859e' }}/>
            <Tooltip id="Education-tooltip" content="Education" place="top" style={{ fontSize: '10px', padding: '4px 8px' , backgroundColor: '#ac859e' }}/>
        </div>
    );
};

export default Sidebar;