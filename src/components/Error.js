import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import error from "../images/error.png";

const Error = () => {
  useEffect(() => {
    setTimeout(() => {
      // console.log("hiii");
      // let btn = document.getElementsByClassName("home-btn")[0];
      // console.log(btn);

      // window.location.href = "https://www.cloudangles.com/";

      // window.location.replace = "https://www.cloudangles.com/";
    }, 5000);
  }, []);
  return (
    <div className="err-full">
      <img src={error} alt="error" />
      <p className="e1">Screen Size not supported</p>
      <p className="e2">For better experience,</p>
      <p className="e2">
        We suggest you to use minimum 1024 * 720 resolution display
      </p>
      <a href="https://www.cloudangles.com/">
        <button className="err-btn">Back to Home</button>
      </a>
      {/* <a href="" className="home-btn">
        home page
      </a> */}
    </div>
  );
};

export default Error;
