import React from "react";
import Profile from "../assets/developer.svg";
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';
import{ FaTelegramPlane} from "react-icons/fa"
import {
  AiOutlineGoogle, 
  AiOutlineFacebook,
  AiOutlineGithub,
} from "react-icons/ai";


const Home = () => {
  return (
    <section className="px-5 py-32 text-chead " id="Home" >
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between " >
        <motion.div 
            initial={{x:-400 }}
            animate={{ x:0}}
            transition={{ delay: 1, duration: 1, type: "tween" }}
           className="hero-info pb-5 md:pb-0 ">
          <h1 className="text-5xl lg:text-6xl ">
            Hi, I am              
                  <br/>
            <span className="text-blu font-semibold nM">Dave Bryan </span>
            <Typewriter
                    options={{
                      autoStart: true,
                      loop:true,
                      delay:40,
                      strings:[
                        " Frontend Developer",
                        
                      ],
                    }}  
                  />
          </h1>

          <p className="py-5 text-blu" >
            Passionate about creating interactive application
          </p>

          <div className="flex py-5 ">
            <a
              href="mailto:sevilladavebryan@gmail.com"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGoogle size={40} className="fill-red-600" />{" "}
            </a>
            <a
              href="https://www.t.me/@Daviesss666/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <FaTelegramPlane size={40} className="fill-cyan-500"/>{" "}
            </a>
            <a
              href="https://www.facebook.com/davebryan.sevilla/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineFacebook size={40} className="fill-blue-500"/>{" "}
            </a>
            <a
              href="https://github.com/Daviesss666"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} className="fill-gray-900" />{" "}
            </a>
          </div>

          <br/><a
            href="https://drive.google.com/file/d/1gLYmNaxyL_DueAKj5fpLc0uDU99F9rxV/view?usp=share_link"
            className=" btn bg-sky-500/100 rounded-full text-gray-100 font-medium border-2 border-sky-300 px-6 py-3 hover:bg-transparent hover:text-stone-900 duration-500"
          >
            <span>See My Resume</span>
          </a>
        </motion.div>
                    
        <motion.div
           initial={{x:700  }}
           animate={{ x:0}}
           transition={{ delay: 2, duration: 1, type: "spring", stiffness: 100  }}
          className="hero-img  ">
            <img
                src={Profile}
                alt="coding illustration"
                className="lgw-[10%] 2xl:hidden "
            />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;