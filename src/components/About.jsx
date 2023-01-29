import React from "react";
import AboutImg from "../assets/aboutt.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className=" text-gray-800 px-5 py-32 " id="About" >
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-5xl font-bold mb-5 text-blu pb-2 nM">
            About Me
          </h2>

          
          <p className="py-5 indent-9 tracking-wider font-normal text-gray-900 text-justify">
          Hello, my name is Dave Bryan P. Sevilla and I am an aspiring web developer.
          I am currently sharpening my skills through self-study and online courses, 
          focusing specifically on front-end development utilizing HTML, CSS, and JavaScript.
          I am excited to learn about the latest technologies and trends in web development and am eager to apply my knowledge to real-world projects.
          </p>

         
        </div>

        <motion.div
          initial={{x:700  }}
          animate={{ x:0}}
          transition={{ delay: 2, duration: 1, type: "spring", stiffness: 100  }}
          className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;