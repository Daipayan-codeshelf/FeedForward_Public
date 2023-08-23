import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Feed Forward</span>
          <span className="secondaryText">
            Help together to build a better World
            <br />
            Find your Hostel Nearby
          </span>
          <button className="button" href>
            <a href="mailto:daipayan.nits@gmail.com">Mail me at</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
