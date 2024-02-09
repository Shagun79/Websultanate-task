import React from "react";
import "./Values.css";
import img1 from "../Image/s1.png";
import img2 from "../Image/s2.png";
import img3 from "../Image/s3.png";

const Values = () => {
  return (
    <div className="Values">
      <div className="value-top">
        <p className="values-us"> Values</p>
        <h1 className="values-heading">Our values</h1>
      </div>
      <div className="value-bottom">
        <ul>
          <li>
            <img src={img1} className="value-img" />
            <h2> People first</h2>
            <span>
              Create high-converting landing page in <br></br> minutes, even if
              you are not a marketing.
            </span>
          </li>
          <li>
            <img src={img2} className="value-img" />
            <h2> Customer-Focused</h2>
            <span>
              Get to the top of Google search results with <br></br> SEO
              optimized pages.
            </span>
          </li>
          <li>
            <img src={img3} className="value-img" />
            <h2> Transparency </h2>
            <span>
              Attract a high volume of free-traffic and <br></br> turn it into
              paying customers.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Values;
