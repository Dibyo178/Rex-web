import React from "react";
import Blog from "../components/Blog";
import Button from "../components/Button";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import BlogImage1 from "../assets/coinbond.png";
import BlogImage2 from "../assets/blogImage2.jpg";
import BlogImage3 from "../assets/blogImage3.jpg";
import "../styles/sections/Blogs.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";
import { Link } from "react-router-dom";
function Blogs() {
  const [element, controls] = useScroll();

  return (
    <div className="blogs-container" id="blog" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Works" color="pink" lineCenter={true} />
          <p>Insights and advice from our experts.</p>
        </motion.div>
        <div className="blogs">
          <Blog
            image={BlogImage1}
            title="Coinbond is a decentralized cryptocurrency platform."
            subTitle="Coinbond  provides various financial services based on Blockchain technology, Staking, NFT, P2E, Metaverse, Web3.0 user experience in the crypto scene."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage2}
            title="A Day in the life on an Engineering Manager"
            subTitle="During the eight years I spent as an engineering manager, I regularly tracked how I spent my time. As a startup engineering manager, I was ... "
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage3}
            title="How to Build a Strong Remote Work Culture"
            subTitle="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
            variants={cardAnimation}
            animate={controls}
          />
        </div>
        <div
          className="button-container"
          variants={textAnimation}
          animate={controls}
        >
          <Link to="/works" style={{ textDecoration: "none" }}>
            <Button content="View All" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
