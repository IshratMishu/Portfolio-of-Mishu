import { NavLink } from "react-router-dom";

const Navbar = () => {

    const linkStyle = ({ isActive }) => {
        return {
            background: "none",
            borderBottom: isActive ? "2px solid #ac859e" : "",
            borderRadius: isActive ? "0" : ""
        };
    };

    return (
        <div className="navbar pt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-md z-[1] gap-4 mt-2 w-52 px-5 py-10 shadow bg-[#2e2c39] text-[#ffffff]">
                        <li className="hover:border-b-2 hover:border-[#ac859e]"><NavLink style={linkStyle} to='/'>HOME</NavLink></li>
                        <li className="hover:border-b-2 hover:border-[#ac859e]"><NavLink to='/about' style={linkStyle}>ABOUT ME</NavLink></li>
                        <li className="hover:border-b-2 hover:border-[#ac859e]"> <NavLink to='/project' style={linkStyle}>PROJECTS</NavLink></li>
                        <li className="hover:border-b-2 hover:border-[#ac859e]"><NavLink to='/contact' style={linkStyle}>CONTACT</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="hover:border-b-2 hover:border-[#ac859e]"><NavLink style={linkStyle} to='/'>HOME</NavLink></li>
                    <li className="hover:border-b-2 hover:border-[#ac859e]"><NavLink to='/about' style={linkStyle}>ABOUT ME</NavLink></li>
                    <li className="hover:border-b-2 hover:border-[#ac859e]"><NavLink to='/project' style={linkStyle}>PROJECTS</NavLink></li>
                    <li className="hover:border-b-2 hover:border-[#ac859e]"><NavLink to='/contact' style={linkStyle}>CONTACT</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;