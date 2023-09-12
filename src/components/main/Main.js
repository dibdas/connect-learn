import React from "react";
import "./Main.scss";
import image from "./../../image.png";

function Main() {
  return (
    <>
      <div className="main-bg">
        <div className="body-text">
          <h4>⭐⭐⭐⭐⭐ 4.9/5 on google reviews. </h4>
          <div className="skills">Life Skills by 18 </div>
          <div className="goals">Life Goals by 35 </div>
          <div className="child">For every child!</div>
        </div>
        <div className="body-image">
          <img src={image} className="image" />
        </div>
      </div>
    </>
  );
}

export default Main;
