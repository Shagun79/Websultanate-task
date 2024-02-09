import React from "react";
import pic1 from "../Image/img2.jpeg";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="Mission">
      <div className="missionAll">
        <div className="Mission-content">
          <h6 className="Mission-us"> Mission</h6>
          <div className="content-top">
            <h1 className="Mission-heading">Our Mission</h1>
          </div>
          <div className="content-down">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis
              soluta praesentium hic delectus nesciunt temporibus repellendus
              aliquam vel molestiae.
            </p>
          </div>
        </div>
        <div className="Mission-img">
          <img className="img1" src={pic1} />
        </div>
      </div>
    </div>
  );
};

export default Mission;
