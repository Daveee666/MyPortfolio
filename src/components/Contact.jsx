import React from "react";
import AboutImg from "../assets/profile-pic.png";
import{  FaTelegramPlane} from "react-icons/fa"
import {
  AiOutlineGoogle,
  AiOutlineFacebook,
  AiOutlineGithub,
} from "react-icons/ai";



const Contact = () => {
  return (
    <section className=" text-gray-800 px-5 py-32" id="Contact">
      <div className="container mx-auto items-center justify-center md:justify-between">
         <h2 className="text-5xl font-bold mb-5 text-blu pb-2 nM">
              Contact
          </h2>

          <div className="flex flex-row max-sm:flex-col">
            <div className="main-content-profile flex-auto py-5 order-1 max-sm:order-last max-sm:justify-items-center max-sm:items-center">
              <h1 className="mt-12 text-2xl text-justify">
                If you have any questions or want to hire me, please contact me:
              </h1>
              <div className="flex py-5 flex-col">
                <div className="flex flex-row">
                    <a
                      href="mailto:sevilladavebryan@gmail.com"
                      className="pr-4 inline-block text-accent hover:text-white py-2"
                    >
                      {" "}
                      <AiOutlineGoogle size={40} className="fill-red-600" />{" "}
                    </a>
                    <p className="py-3 text-xl"> sevilladavebryan@gmail.com</p>
                </div>
                <div className="flex flex-row">
                    <a
                      href="https://www.t.me/@Daviesss666/"
                      className="pr-4 inline-block text-accent hover:text-white py-2"
                    >
                      {" "}
                      <FaTelegramPlane size={40} className="fill-cyan-500" />{" "}
                    </a>
                    <p className="py-3 text-xl"> @Daviesss666</p>
                </div>
                <div className="flex flex-row">
                    <a
                      href="https://www.facebook.com/davebryan.sevilla/"
                      className="pr-4 inline-block text-accent hover:text-white py-2"
                    >
                      {" "}
                      <AiOutlineFacebook size={40} className="fill-blue-500" />{" "}
                    </a>
                    <p className="py-3 text-xl"> Dave Bryan Sevilla</p>
                </div>
                <div className="flex flex-row">
                    <a
                      href="https://github.com/Daviesss666"
                      className="pr-4 inline-block text-accent hover:text-white py-2"
                    >
                      {" "}
                      <AiOutlineGithub size={40} className="fill-black" />{" "}
                    </a>
                    <p className="py-3 text-xl"> @Daviesss666</p>
                </div>
          </div>
            </div>
                <div className="image-content-profile order-2  ">
                <img
                  src={AboutImg}
                  alt="coding illustration"
                  className="rounded-full max-w-sm justify-items-center items-center object-fill"
                />
                </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;