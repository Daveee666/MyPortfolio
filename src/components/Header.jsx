import React, { useState,useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

function Header() {

  let Links = [
    {name:"About",link:"/#About"},
    {name:"Project",link:"/#Project"},
    {name:"Contact Me",link:"/#Contact"},
  ];

  let [open,setOpen]=useState(false);
  
  useEffect(() =>{
    AOS.init();
    AOS.refresh();
  },[]);

  return (
    <>
        <header className='w-full fixed top 0 left-0 z-10'>
          <div
              data-aos="fade-down" 
              className='md:flex items-center justify-between bg-white py-4 md:px10 px-7'> 
              <div className='flex items-center '> 
                
                  <span className='text-gray-400 text-2xl'> &lt; </span>
                  <span className='text-chead text-2xl font-scriptt' > DaveBryan Sevilla </span>
                  <span className='text-gray-400 text-2xl'> /&gt; </span>
                   
              </div>
              <div className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden' onClick={()=>setOpen(!open)}>
                  <ion-icon name={open ? 'close': 'menu'}></ion-icon>
              </div>
              <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all-duration-500 ease-in  ${open?'top-15':'top-[-490px]'} mr-20 `}>
                  {
                    Links.map((Link)=>(
                      <li key={Link.name} className='md:ml-8 text-lg md:my-0 my-7 font-normal '>  
                          <a href={Link.link} className=' text-gray-800 hover:text-sky-500 duration-500 active:text-blue-500' >{Link.name}</a>
                      </li>
                    ))
                  }
              </ul>   
              </div>
        </header> 
    </>
    
  );
}

export default Header;
