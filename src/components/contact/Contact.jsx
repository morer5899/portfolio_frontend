import React, {  useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  const [data,setData]=useState({
    name:"",
    email:"",
    message:""
  })
  const chanheHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    try {

      const response=await axios.post("https://portfolio-backend-t1b5.onrender.com/user/sendEmail",data,{
        headers:{
          "Content-Type":"application/json",
        },
        withCredentials:true
      });
      if(response.data.success){
        toast.success(response.data.message);
        setData({name:"",email:"",message:""});
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants} className="heading">Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>morer5899@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Mumbai</span>
        </motion.div>
       
      </motion.div>
      
      <div className="formContainer">
        <motion.form
          initial={{ opacity: 0 }}
          animate={isInView && { opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
          onSubmit={submitHandler}
          id="contact-form"
        >
          <input type="text" placeholder="name" name="name" onChange={chanheHandler} value={data.name} id="name" />
          <input type="email" placeholder="email" name="email" value={data.email} onChange={chanheHandler} id="email"/>
          <textarea rows={8} placeholder="Message" value={data.message} name="message" onChange={chanheHandler} id="textbox"/>
          <button type="submit" id="submit-btn">submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
