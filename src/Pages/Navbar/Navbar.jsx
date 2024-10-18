import { NavLink } from "react-router-dom";

const Navbar = () => {

    const linkStyle = ({ isActive }) => {
        return {
            color: isActive ? "black" : "",
            background: "none",
            borderBottom: isActive? "2px solid blue" : "",
            borderRadius: isActive? "0" : ""
        };
    };

    return (
        <div className="navbar mt-5">
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
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-slate-800">
                        <li className="hover:border-l-2 hover:border-r-2 hover:border-primary"><NavLink style={linkStyle} to='/'>HOME</NavLink></li>
                        <li className="hover:border-l-2 hover:border-r-2 hover:border-primary"><NavLink to='/about' style={linkStyle}>ABOUT ME</NavLink></li>
                        <li className="hover:border-l-2 hover:border-r-2 hover:border-primary"> <NavLink to='/project' style={linkStyle}>PROJECTS</NavLink></li>
                        <li className="hover:border-l-2 hover:border-r-2 hover:border-primary"><NavLink to='/contact' style={linkStyle}>CONTACT</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="hover:border-l-2 hover:border-r-2 hover:border-primary"><NavLink style={linkStyle} to='/'>HOME</NavLink></li>
                    <li className="hover:border-l-2 hover:border-r-2 hover:border-primary"><NavLink to='/about' style={linkStyle}>ABOUT ME</NavLink></li>
                    <li className="hover:border-l-2 hover:border-r-2 hover:border-primary"> <NavLink to='/project' style={linkStyle}>PROJECTS</NavLink></li>
                    <li className="hover:border-l-2 hover:border-r-2 hover:border-primary"><NavLink to='/contact' style={linkStyle}>CONTACT</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;