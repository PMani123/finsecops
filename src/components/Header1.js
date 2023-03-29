import React from "react";
import { Link } from "react-router-dom";
import logoFin from "../images/logo-fso.png";
import { BsChevronLeft } from "react-icons/bs";
import cloudlogo from "../images/logo-cloudangles.svg";
import goback from "../images/go-back.png";
import "./foundation.css";

const Header = () => {
  return (
    <div>
      <div className="ro-head">
        <div className="head-left">
          <div className="logo-left">
            <img className="cloudlogo" src={logoFin} alt="cloudlogo" />
          </div>
          <div className="bred_txt">
            {/* <p className="head-left-p">FinSecOps</p> */}
            <p className="head-left-p2">Maturity Assesment</p>
          </div>
          {/* <p className="head-left-p">FinSecOps Maturity Assesment</p> */}
          <a href="https://www.cloudangles.com/">
            <button className="btn-head">
              <img src={goback} alt="goback" /> go back
            </button>
          </a>
        </div>
        <div className="head-right">
          <div className="head2-ri">
            <img src={logoFin} alt="logo" className="logo" />
          </div>
          <div>{/* <p>Finsecops</p> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

