import React from "react";
import BrandName from "../components/BrandName";
import { useScroll } from "../components/useScroll";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";
import "../styles/sections/Footer.scss";
import { fromUp, fromDown } from "../utils/Animations";
import { Link } from "react-router-dom";

function Footer() {
  const [element, controls] = useScroll();

  return (
    <div className="footer-container" ref={element}>
      <div className="container">
        <div className="main-container">
          <motion.div
            className="news-letter"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <BrandName isFooter={true} />
            <p>
              Join our newsletter to get updated with our Offers & Discounts.
            </p>
            <div className="mail">
              <input type="email" placeholder="Please Enter Your Email" />
              <button>
                <AiOutlineSend />
              </button>
            </div>
          </motion.div>
          <motion.div
            className="quick-links"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/about">About</Link>
                {/* <a href="/sections/About">About</a> */}
              </li>
              <li>
                <Link to="/testimonials">Testimonial</Link>
                {/* <a href="#">Testimonial</a> */}
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
                {/* <a href="#">Contact Us</a> */}
              </li>
              <li>
                <Link to="/works">Portfolio</Link>
                {/* <a href="#">Portfolio</a> */}
              </li>
              {/* <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li> */}
            </ul>
          </motion.div>
          <motion.div
            className="industries"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="#">Website Development</a>
              </li>
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">Website Design</a>
              </li>
              <li>
                <a href="#">Mobile App Design</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">IOS App Development</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="touch"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Get in Touch</h3>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="detail">
                <div className="detail-name">Email</div>
                <div className="detail-content">
                  <a href="#">support.rex@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="detail">
                <div className="detail-name">Phone</div>
                <div className="detail-content">
                  <a href="#">10099916</a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="detail">
                <div className="detail-name">Location</div>
                <div className="detail-content">
                  <a href="#">
                    {" "}
                    Rex It Communication Ltd Cardiff, United Kingdom
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="copyright">
          <div className="copy">
            <p>Copyright 2022. All Rights Reserved.</p>
          </div>
          <div className="icons">
            <div className="icon">
              <a href="#">
                <FaFacebookF />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <AiFillInstagram />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                {" "}
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
