import React from "react";
import proj1 from "../assets/h2.png"
import proj2 from "../assets/D.png"

const Project = () => {
  return (
    <section className=" text-black px-5 py-32" id="Project">
      <div className="container mx-auto items-center justify-center md:justify-between">
         <h2 className="text-5xl font-bold mb-5 text-blu pb-2 nM">
              Project
          </h2>
            <div className="container mx-auto grid md:grid-cols-3 gap-4">
              <div>
                  <img src={proj1}
                  alt="coding illustration"
                  className=""/>
              </div>
              <div>
              <img src={proj2}
              alt="coding illustration"
              className=""/>
              </div>
              <div>
              <img src={proj2}
              alt="coding illustration"
              className=""/>
              </div>
            </div>
      </div>   
    </section>
  );
};

export default Project;