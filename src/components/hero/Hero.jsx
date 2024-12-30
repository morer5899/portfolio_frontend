import React from "react";
import "./hero.scss";
import { CgMouse } from "react-icons/cg";
import { motion } from "framer-motion";
const textVarients={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}

const sliderVarients={
  initial:{
   x:0
  },
  animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      rapeatType:"mirror",
      duration:20,
    }
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVarients} initial="initial" animate="animate">
          <motion.h2 variants={textVarients}>SUHAS SONWANE</motion.h2>
          <motion.h1 variants={textVarients}>MERN Stack Developer</motion.h1>
          <motion.div className="buttons" variants={textVarients}>
            <motion.button variants={textVarients}>See the Latest works</motion.button>
            <motion.button variants={textVarients}>Contact me</motion.button>
          </motion.div>
         <motion.div variants={textVarients} animate="scrollButton"><CgMouse className="image"/></motion.div>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVarients} initial="initial" animate="animate" style={{"marginBottom":"4vh"}}>
        MERN Stack Developer
      </motion.div>
     
    </div>
  );
};

export default Hero;
