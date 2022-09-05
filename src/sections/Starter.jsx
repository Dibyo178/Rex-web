import React from "react";
import Lottie from "react-lottie";
import data from "../assets/Lottie/home1.json";
// import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useScroll } from "../components/useScroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import WorkImage from "../assets/work.svg";
import "../styles/sections/Starter.scss";
import { headerAnimation, imageAnimation } from "../utils/Animations";

export default function Starter() {
  const [element, controls] = useScroll();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <span>
      <div className="main-container" ref={element}>
        {/* <Navbar /> */}

        <div className="container">
          <motion.div
            className="content"
            variants={headerAnimation}
            animate={controls}
            transition={{ delay: 0.2, type: "tween" }}
          >
            <h1>
              We Provide Solutions to Help You to Build or Grow Your Buisness!
            </h1>
            <p>
              Rex success is attributed to the collective performance of its
              team. Effective, open communication in our workplace keeps us
              focused and driven towards providing you with an outstanding
              service
            </p>
            <div className="button-container">
              {/* <Button content="Watch Video" icon={<GoPlay />} /> */}
              <Button
                color="pink"
                content="Hire Us"
                icon={<HiOutlineArrowNarrowRight />}
              />
            </div>
          </motion.div>
          <motion.div
            className="image"
            variants={imageAnimation}
            animate={controls}
            transition={{ type: "tween" }}
          >
            {/* <img src={WorkImage} alt="Work Image" /> */}
            <img
              src={require("../assets/Lottie/rex.gif").default}
              className="rex"
              alt=""
            />
            {/* <Lottie
             
              options={defaultOptions}
              style={{ marginTop: "10px", padding: "70px" }}
              height={400}
              width={450}
            /> */}
          </motion.div>
        </div>
      </div>
    </span>
  );
}
