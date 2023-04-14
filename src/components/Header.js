import React from "react";
import logoFin from "../images/finsecopslogo.svg";
import "./foundation.css";
import girl from '../images/girl.png';
import calogo from "../images/CALogo.svg"
import phone from "../images/phone.png"

const Header = ({ dialog }) => {

  function contactCare(e) {
    dialog(true)
  }

  return (
    <div>
      <div className="ro-head">
        <div className="head-left">
          <img src={calogo} alt="" className="finsecopslogo" />
          <div className="logo-left">
            <img className="cloudlogo" src={logoFin} alt="cloudlogo" />
          </div>
          <div className="flex-center">
            <div>
              <a target="_blank" rel="noopener" href="https://www.cloudangles.com/pages/offers.html#offer2">
                <button className="btn-head purple">
                  Register for Workshop
                </button>
              </a>
            </div>
            <div>
              {/* <a target="_blank" rel="noopener" href="https://www.cloudangles.com/pages/contact.html"> */}
              <button className="btn-head white sales" onClick={(e) => { contactCare(e) }} >
                <img src={phone} alt="Phone Icon" />  Talk to Sales
              </button>
              {/* </a> */}
            </div>
          </div>
          <div>
            <a target="_blank" rel="noopener" href="https://www.cloudangles.com/">
              <button className="btn-head">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" className="backsvg" cy="12.6345" r="12" fill="#EE691E" />
                  <path
                    d="M13.209 18.5095C12.998 18.5095 12.8105 18.4392 12.6699 18.2986L8.16992 13.7986C7.86523 13.5173 7.86523 13.0251 8.16992 12.7439L12.6699 8.2439C12.9512 7.93921 13.4434 7.93921 13.7246 8.2439C14.0293 8.52515 14.0293 9.01733 13.7246 9.29858L9.76367 13.2595L13.7246 17.2439C14.0293 17.5251 14.0293 18.0173 13.7246 18.2986C13.584 18.4392 13.3965 18.5095 13.209 18.5095Z"
                    fill="white"
                  />
                </svg>
                <p className="goback"> go back</p>
              </button>
            </a>
          </div>

        </div>

        <div className="head-right">
          <img src={girl} alt='girl' />
        </div>
      </div>
    </div>
  );
};

export default Header;
