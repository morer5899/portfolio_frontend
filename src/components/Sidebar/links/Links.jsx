import { motion } from 'framer-motion';
import React from 'react';
const variants={
    open:{
      transition:{
        staggerChildren:0.1,
      }
    },
    closed:{
      transition:{
        staggerChildren:0.05,
        staggerDirection:-1
      }
    },
}

const itemVariants={
  open:{
    y:0,
    opacity:1
  },
  closed:{
    y:50,
    opacity:0
  },
}

const Links = ({windoWidth}) => {
  const items=["Homepage","Skills","Projects","Contact"];

  return (
    <motion.div className='links' variants={variants}>
      {items.map((item,index)=>{
        return (<motion.a href={`#${item}`} key={index} variants={windoWidth<=750 && itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}} style={{borderRadius:"5px",padding:"2px"}} >{item}</motion.a>)
      })}
    </motion.div>
  )
}

export default Links
