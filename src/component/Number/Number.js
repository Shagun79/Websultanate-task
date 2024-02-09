import React from "react";
import "./Number.css";

const Number = () => {
  return (
    <div className="number">
      <div className="Number-top">
        <h6 className="Number-us"> Numbers</h6>
        <h1 className="Number-heading">Referrizer In Number</h1>
      </div>
      <div className="number-middle">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis
          soluta praesentium hic <br></br> delectus nesciunt temporibus
          repellendus aliquam vel molestiae.
        </p>
      </div>
      <div className="number-bottom">
        <ul>
          <li className="liFirst">
            2008 <p className="bottom-text">Year Founded</p>
          </li>
          <li>
            150+ <p className="bottom-text">Clients</p>
          </li>
          <li>
            90+ <p className="bottom-text">Country Saved</p>
          </li>
          <li>
            100+ <p className="bottom-text">Full time Employee</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Number;
