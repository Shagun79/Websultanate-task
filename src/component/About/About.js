import React from "react";
import pic1 from "../Image/img1.png";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <span class="blue-dot"></span>
        <span class="yellow-dot"></span>
        <span class="orange-dot"></span>
        <h6 className="about-us"> About Us</h6>
        <div className="content-top">
          <h1 className="about-heading">
            Who we are <br></br> and what we do
          </h1>
        </div>
        <div className="content-down">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis
            soluta praesentium hic delectus nesciunt temporibus repellendus
            aliquam vel molestiae.
          </p>
        </div>
      </div>
      <div className="aboutImage">
        <img className="aboutimg1" src={pic1} />
      </div>
    </div>
  );
};
