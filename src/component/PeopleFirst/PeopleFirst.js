import React from "react";
import "./PeopleFirst.css";
import pic1 from "../Image/img3.png";

const PeopleFirst = () => {
  return (
    <div className="PeopleFirst">
      <div className="PeopleFirstAll">
        <div className="PeopleFirst-content">
          <h6 className="PeopleFirst-us"> People first</h6>
          <h1 className="PeopleFirst-heading">Community That Has Impact</h1>
          <p className="people-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis
            soluta praesentium hic delectus nesciunt temporibus repellendus
            aliquam vel molestiaesit amet consectetur adipisicing elit. Ea nobis
            soluta praesentium hic delectus nesciunt temporibus repellendus
          </p>
          <p className="people-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis
            soluta praesentium hic delectus nesciunt temporibus repellendus
            aliquam vel molestiae sit amet consectetur adipisicing elit. Ea
            nobis soluta praesentium hic delectus nesciunt temporibus
            repellendus
          </p>
        </div>
        <div className="PeopleFirst-img">
          <img className="im1" src={pic1} />
        </div>
      </div>
    </div>
  );
};

export default PeopleFirst;
