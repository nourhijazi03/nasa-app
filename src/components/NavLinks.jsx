// react-scroll
import { Link } from "react-scroll";

const NavLink = ({ children, to, offset = -50, mobileMenu = false }) => {
    const className=mobileMenu ? `text-lg text-orange-200 font-semibold hover:text-white cursor-pointer
     w-full text-center `
    : `text-lg lg:text-xl text-orange-200 font-semibold mx-5 cursor-pointer hover:border-b border-dashed border-orange-100
    transition-all ease-in-out duration-200`
  return <Link to={to} spy={true} offset={offset} duration={1000}
  className={className}> 
    {children}
  </Link>;
};

export default NavLink;