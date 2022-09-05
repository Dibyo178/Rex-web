import React from "react";
import Navbar from "../../../components/Navbar";
import About from "../../../sections/About";
import Blogs from "../../../sections/Blogs";
import Footer from "../../../sections/Footer";
import Starter from "../../../sections/Starter";
import Testimonials from "../../../sections/Testimonials";
import Why from "../../../sections/Why";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Starter />
      <About />
      <Why />
      <Testimonials />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
