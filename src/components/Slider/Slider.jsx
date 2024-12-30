import React from 'react'
import "./slider.scss"
import item1 from "../../assets/css.jpg";
import item2 from "../../assets/express.png";
import item3 from "../../assets/javascript.jpg";
import item4 from "../../assets/mongodb.png";
import item5 from "../../assets/nodejs.jpg";
import item6 from "../../assets/reactjs.jpg";
import item7 from "../../assets/rest.png";
const Slider = () => {
  const skills=[item1,item2,item3,item4,item5,item6,item7];
  return (
    <div className='banner'>
      <div className="slider" style={{"--quantity":skills.length}}>
        {skills.map((item,index)=>{
          return<div className="item" style={{"--position":index}} key={index}><img src={item} alt="img" /></div>
        })}
      </div>
      <div className="content" >
        <h1 data-content="Skills">Skills</h1>
        <div className="author">
          <h2>suhas sonwane</h2>
          <p><b>mern stack developer</b></p>
        </div>
      </div>
    </div>
  )
}

export default Slider
