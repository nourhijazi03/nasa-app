import React from 'react';
import introVideo from "../../assets/into-vid.mp4";
import FadeIn from '../../components/FadeIn';
import {BiArrowFromLeft} from "react-icons/bi";


function Home() {
  return (
    <section id='home'  className='h-full w-full relative'>
        <div className='video-container'>
        <video src={introVideo} className='videoSite' loop autoPlay muted ></video>
        </div>


    <FadeIn delay={0.2} direction="right">
        <div className=' h-screen flex flex-col w-4/6 justify-center items-start ml-2 text-orange-300 font-bold
        max-sm:items-center max-sm:w-[90%] max-sm:m-3'>
            <h1 className='text-6xl'>NASA's Curious Universe</h1>
            <p className='text-xl w-3/5 max-sm:w-full '>Explore everything from our home planet to the farthest edges of the universe</p>
            <button className=' bg-slate-800 border p-1 px-3 m-1 border-main-100 pr-6 w-44
            text-main-100 hover:text-gray-600 hover:bg-main-100   flex justify-center
            transition-all duration-[700ms] ease-in
             items-center hover:justify-between'>
                <a href='https://www.nasa.gov/' target='_blank'>
                Visit NASA  
                
                </a>
                <BiArrowFromLeft size="20px"/>
            </button>
        </div>
        </FadeIn>



    </section>
  )
}

export default Home