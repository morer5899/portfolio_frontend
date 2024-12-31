import React, { useRef } from 'react'
import "./parallax.scss";
import { motion,useScroll,useTransform} from 'framer-motion';

const Parallax = ({type}) => {
  const ref=useRef();
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start start","end start"]
  })
  
  let yBg=useTransform(scrollYProgress,[0,1],["0%","100%"]);
  return (
    <div>
    <div className='parallax' ref={ref} style={{"background":type==="Services"||"Contact"?"linear-gradient(180deg #111132,#0c0c1d)":"linear-gradient(180deg,#111132,#505064)"}}>
      <motion.h1 style={{y:yBg}}>{type} </motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div className='planets' style={{y:yBg,backgroundImage:`Url(${type==="Services"||"Contact"?"/planets.png":"/sun.png"})`}}></motion.div>
      <motion.div className='stars' style={{x:yBg}}></motion.div>
    </div>
    </div>
  )
}

export default Parallax
