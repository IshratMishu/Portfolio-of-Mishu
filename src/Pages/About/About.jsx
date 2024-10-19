import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Biography from './Biography';
import Sidebar from '../Sidebar/Sidebar'

const About = () => {

    return (
        <div className="mx-5 md:mx-10">
            <Sidebar></Sidebar>
            <Biography></Biography>
            <Skills></Skills>
            <Education></Education>
        </div>
    );
};

export default About;

