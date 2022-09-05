import React, { useState } from "react";
import Button from "./Button";
import BrandName from "./BrandName";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import "../styles/components/Navbar.scss";
import { navbarAnimation } from "../utils/Animations";
import home from "../sections/Starter";
import about from "../sections/About";
import services from "../sections/Why";
import works from "../sections/Blogs";
import testimonial from "../sections/Testimonials";
import contact from "../sections/Footer";

import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.png";
// import BrandName from "../components/BrandName";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [toggleNavbar, setToggleNavbar] = useState(false);
  // const navbarToggler = () => {
  //   setToggleNavbar(!toggleNavbar);
  // };
  return (
    <div className="Navbar">
      <BrandName />
      <span className="nav-logo">
        {/* <img
          src={require("../assets/rex.png").default}
          className="rex"
          alt=""
        /> */}
        {/* Rex */}
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        {/* <Link to="/"> */}
        <NavLink className="Link" to="/">
          Home
        </NavLink>
        {/* </Link> */}
        {/* <Link to="/about"> */}
        <NavLink className="Link" to="/about">
          About
        </NavLink>
        {/* </Link> */}
        {/* <Link to="/service"> */}
        <NavLink className="Link" to="/service">
          Service
        </NavLink>
        {/* </Link> */}
        {/* <Link to="/works"> */}
        <NavLink className="Link" to="/works">
          Works
        </NavLink>
        {/* </Link> */}
        {/* Testimonials */}
        {/* <Link to="/testimonials "> */}
        <NavLink className="Link" to="/testimonials">
          Testimonials
        </NavLink>
        {/* </Link> */}
        {/* <Link> */}
        <NavLink className="Link" to="/contact">
          Contact
        </NavLink>
        {/* </Link> */}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>

    // <motion.div
    //   className={`navbar ${toggleNavbar === true ? "active" : ""}`}
    //   variants={navbarAnimation}
    //   transition={{ delay: 0.1 }}
    // >
    //   <span>
    //     <div className="col">
    //       <BrandName image={logo} />
    //       <div className="collapseble-button">
    //         {!toggleNavbar ? (
    //           <GiHamburgerMenu onClick={navbarToggler} />
    //         ) : (
    //           <MdClose onClick={navbarToggler} />
    //         )}
    //       </div>
    //     </div>
    //     <nav>
    //       <div className="links">
    //         <ul>
    //           <li>
    //             <a href="#about">About</a>
    //           </li>
    //           <li>
    //             <a href="#services">Services</a>
    //           </li>

    //           <li>
    //             <a href="#testimonial">Testimonial</a>
    //           </li>

    //           <li>
    //             <a href="#blog">Blog</a>
    //           </li>
    //           <li>
    //             <Button content="Contact" />
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    //   </span>
    // </motion.div>
  );
}
