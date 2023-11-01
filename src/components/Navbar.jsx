import React, { useState } from 'react';
import logo from "../assets/108056960-planet-vector-icon-isolated-on-transparent-background-planet-logo-concept.jpg";
import NavLink from './NavLinks';
import {IoMdPlanet} from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import FadeIn from './FadeIn';
function Navbar() {
    const[showMobileMenu,setShowMobileMenu]=useState(false);
  return (
    <FadeIn direction="down" delay={0.2}>
    <div id='navbar'
     className='w-full fixed top-0 z-30 h-[60px] bg-slate-800 border-b border-solid border-orange-200  px-5 py-3  flex justify-between text-center'>
        <div className='flex cursor-pointer '>
           <IoMdPlanet size="40px" className='text-orange-200'/>
            <h1 className='text-orange-200 text-2xl font-semibold'>
                NA<span className='text-orange-400 text-3xl' style={{textShadow:"6px 8px 5px white"}}>S</span>A
                </h1>
        </div>

        <div className='hidden md:flex'>
            <ul className='pr-[100px]'>
                <NavLink>
                    Test1
                </NavLink>
                <NavLink>
                    Test2
                </NavLink>
                <NavLink>
                    Test3
                </NavLink>
            </ul>
        </div>
        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-slate-800 h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer text-orange-300"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul className="pt-[60px] items-center flex flex-col gap-8">
            <NavLink to="services" mobileMenu>
              test1
            </NavLink>
            <NavLink to="products" mobileMenu>
              test2
            </NavLink>
            <NavLink to="reference" mobileMenu>
              test3
            </NavLink>
          </ul>
          </div>
    </div>
    </FadeIn>
  )
}

export default Navbar