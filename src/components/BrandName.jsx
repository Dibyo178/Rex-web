import React from "react";
import "../styles/components/BrandName.scss";
// import logo from "../assets/logo.jpg";
function BrandName({ isFooter = false }) {
  return (
    <div className={`brand ${isFooter === true ? "footer" : ""}`}>
      <img src={require("../assets/rex.png").default} className="rex" alt="" />
      {/* <span>rex</span> */}
    </div>
  );
}

export default BrandName;
