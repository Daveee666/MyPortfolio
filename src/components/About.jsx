import React,{useEffect} from "react";
import AboutImg from "../assets/aboutt.svg";
import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {

  useEffect(() =>{
    AOS.init();
    AOS.refresh();
  },[]);

  return (
    <>
   
    <section  className=" text-gray-800 px-5 py-32 " id="About"  >
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-5xl font-bold mb-5 text-blu pb-2 nM">
            About Me
          </h2>

          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
            <p   className="py-5 indent-9 tracking-wider font-normal text-gray-900 text-justify ">
            Hello, my name is Dave Bryan P. Sevilla and I am an aspiring web developer.
            I am currently sharpening my skills through self-study and online courses, 
            focusing specifically on front-end development utilizing HTML, CSS, and JavaScript.
            I am excited to learn about the latest technologies and trends in web development and am eager to apply my knowledge to real-world projects.
            </p>
          </div>
         
        </div>

        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
          className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default About;