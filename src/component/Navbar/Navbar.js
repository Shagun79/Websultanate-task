import React from "react";
import "./Navbar.css";
import referrizeImg from "../Image/rereerize.png";

const Navbar = () => {
  return (
    <div className="mainMenu">
      <div className="nav">
        <div className="referrize-img">
          <img src={referrizeImg} className="referrize" />
        </div>
        <div className="middle-text">
          <ul>
            <li className="nav-text">Solutions</li>
            <li className="nav-text">Pricing</li>
            <li className="nav-text">Testimonials</li>
          </ul>
        </div>
        <div className="right-btns">
          <button className="log-in">Log In</button>
          <button className="get-start">Get Started for Free</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
