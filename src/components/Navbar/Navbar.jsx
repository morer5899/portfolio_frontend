import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import Links from "../Sidebar/links/Links";

const Navbar = () => {
  const [windowWidth,setWindowWidth]=useState(window.innerWidth);
  useEffect(()=>{
    const handleResize=()=>{setWindowWidth(window.innerWidth);}
    window.addEventListener("resize",handleResize);
    return ()=> window.removeEventListener("resize",handleResize);
  },[]);
  return (
    <div className="navbar">
      {/* sidebar */}
      {windowWidth<=750?<Sidebar/>:(<div className="wrapper">
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Suhas Sonwane</motion.span>
        <div className="social">
         <Links windowWidth={windowWidth}/>
        </div>
      </div>)}
    </div>
  );
};

export default Navbar;
