import React from "react";
import "./slider.scss";
import item1 from "../../assets/css.jpg";
import item2 from "../../assets/express.png";
import item3 from "../../assets/javascript.jpg";
import item4 from "../../assets/mongodb.png";
import item5 from "../../assets/nodejs.jpg";
import item6 from "../../assets/reactjs.jpg";
import item7 from "../../assets/rest.png";
const Slider = () => {
  const skills = [item1, item2, item3, item4, item5, item6, item7];
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": skills.length }}>
        {skills.map((item, index) => {
          return (
            <div className="item" style={{ "--position": index }} key={index}>
              <img src={item} alt="img" />
            </div>
          );
        })}
      </div>
      <div className="content">
        <h1 data-content="Skills">Skills</h1>
        <div className="author">
          <div>
            <p>HTML</p>
            <p>CSS</p>
            <p>javascript</p>
            <p>react js</p>
          </div>
          <div>
            <p>mongodb</p>
            <p>express js</p>
            <p>node js</p>
          </div>
          <p>REST API</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
