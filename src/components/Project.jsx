import React, {useEffect}from "react";
import proj1 from "../assets/h2.png"
import proj2 from "../assets/D.png"
import AOS from "aos";
import "aos/dist/aos.css";


const Project = () => {

  useEffect(()=>{
    AOS.init()
    AOS.refresh()
  },[]);

  return (
    <section className=" text-black px-5 py-32" id="Project">
      <div className="container mx-auto items-center justify-center md:justify-between">
         <h2 className="text-5xl font-bold mb-5 text-blu pb-2 nM">
              Project
          </h2>
            <div className="container mt-12 mx-auto grid md:grid-cols-3 gap-4">
              <div className="relative" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                  <img src={proj1} alt="coding illustration" className=""/>
                  <div className="flex absolute left-5 right-12 top-[13px] bottom-0 mx-auto w-[80%] h-[80%]  bg-[#0F172A]  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                    <p className="py-5 text-center font-bold px-2 text-white">
                        E-commerce for Water Refilling Station in Nasugbu,Batangas. Built with Php, MySql, Css and JavaScript
                    </p>

                      <div className="mx-auto">
                        <a
                          href="https://h2order.infinityfreeapp.com/"
                          className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                        >
                          Live
                        </a>
                        <a
                          href="https://github.com/Daviesss666"
                          className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                        >
                          Code
                        </a>
                      </div>
                  </div>
                 </div>
              <div className="relative" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000" data-aos-easing="ease-in-sine" >
                  <img src={proj2} alt="coding illustration" className=""/>
                  <div className="flex absolute left-5 right-12 top-[13px] bottom-0 mx-auto w-[80%] h-[80%]  bg-[#0F172A]  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                    <p className="py-5 text-center font-bold px-2 text-white">
                        A simple Portfolio. Built with React and Tailwind CSS
                    </p>

                      <div className="mx-auto">
                        <a
                          href="https://davebryansevilla-portfolio.netlify.app/"
                          className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                        >
                          Live
                        </a>
                        <a
                          href="https://github.com/Daviesss666/MyPortfolio"
                          className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                        >
                          Code
                        </a>
                      </div>
                  </div>
              </div>
              <div className="relative" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000" data-aos-easing="ease-in-sine">
                  <img src={proj2} alt="coding illustration" className=""/>
                  <div className="flex absolute left-5 right-12 top-[13px] bottom-0 mx-auto w-[80%] h-[80%]  bg-[#0F172A]  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                    <p className="py-5 text-center font-bold px-2 text-white">
                        A simple Portfolio. Built with React and Tailwind CSS
                    </p>

                      <div className="mx-auto">
                        <a
                          href="https://davebryansevilla-porfolio.netlify.app/"
                          className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                        >
                          Live
                        </a>
                        <a
                          href="https://github.com/Daviesss666/MyPortfolio"
                          className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                        >
                          Code
                        </a>
                      </div>
                  </div>
              </div>
            </div>
      </div>   
    </section>
  );
};

export default Project;