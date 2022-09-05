import React from "react";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Starter from "./sections/Starter";
import Why from "./sections/Why";
import Blogs from "./sections/Blogs";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./styles/components/Home/Home";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Router>
      <span>
        {loading ? (
          <ScaleLoader
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%,",
              height: "100vh",
              background: "black",
            }}
            className="loading"
            color={"#50E3C2"}
            loading={loading}
            size={150}
          />
        ) : (
          <div>
            {/* <Router> */}

            {/* <Navbar /> */}

            <motion.div initial="hidden" animate="show">
              <ScrollToTop />

              {/* <Route path="/" element={} />
                <Route path="/about" element={} />
                <Route path="/about" element={<About />} /> */}
              {/* <Starter />
              <About />
              <Why />
              <Testimonials />
              <Blogs />
              <Footer /> */}

              <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Starter /> */}
                <Route path="/about" element={<About />} />
                {/* <About /> */}
                <Route path="/service" element={<Why />} />
                {/* <Why /> */}
                <Route path="/testimonials" element={<Testimonials />} />
                {/* <Testimonials /> */}
                <Route path="/works" element={<Blogs />} />
                {/* <Blogs /> */}
                <Route path="/contact" element={<Footer />} />
                {/* <Footer /> */}
              </Routes>
              {/* </Router> */}
              {/* </Router> */}
            </motion.div>
          </div>
          // </Router>
        )}
      </span>
    </Router>
  );
}

export default App;
