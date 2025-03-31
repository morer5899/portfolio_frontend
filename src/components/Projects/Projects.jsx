import React, { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import item1 from "../../assets/register.png";
import Contact from "../contact/Contact";

const items = [
  {
    id: 1,
    title: "authentication and authorization",
    img: item1,
    link:"https://authentication-frontend-dusky.vercel.app",
    desc: "This MERN stack project implements robust user authentication and authorization. Users can securely sign up and log in using JWT-based authentication. Authorization ensures access control by assigning roles and permissions. A Forgot Password feature allows users to reset their password via email verification. The project also includes secure password verification using bcrypt for hashing and comparing passwords, ensuring sensitive user data remains protected. The backend is built with Node.js and Express, while MongoDB handles the database. The frontend, developed in React, provides a seamless user interface. This project follows best practices for security and scalability in modern web applications."
  },
];


const Single = ({ item ,Link}) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p className="disciption">{item.desc}</p>
            <button 
              onClick={() => window.open(Link, "_blank", "noopener,noreferrer")}>
                  See Demo
            </button>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
  });
  return (
     <div className="portfolio" ref={ref}>
      {items.map((item) => {
        return <Single item={item} key={item.id} Link={item.link}/>;
      })}
      <div className="progress">
        <h1 className="header">Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
