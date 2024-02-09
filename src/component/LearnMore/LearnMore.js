import React from "react";
import "./LearnMore.css";
const LearnMore = () => {
  return (
    <div className="learnMore">
      <div>
        <h1>Want to Learn More About Referrizer</h1>
      </div>
      <div className="learnMore-mid">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis
          soluta praesentium <br></br> Lorem ipsum dolor sit amet consectetur
          adipisicing
        </p>
      </div>
      <div>
        <input
          type="search"
          placeholder="Enter Your email"
          className="inputMail"
        />
        <button className="subscribe">Subscribe</button>
      </div>
    </div>
  );
};

export default LearnMore;
