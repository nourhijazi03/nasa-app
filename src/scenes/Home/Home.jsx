import React from 'react';
import introVideo from "../../assets/into-vid.mp4";
import bk from "../../assets/background.webp";
import FadeIn from '../../components/FadeIn';

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
            <button className=' bg-slate-800 border p-1 px-3 m-1 border-main-100 pr-6
            text-main-100 hover:text-orange-300 hover:bg-main-100 transition-colors ease-in'>
                <a href='https://www.nasa.gov/' target='_blank'>
                Visit NASA <span>**</span>
                </a>
            </button>
        </div>
        </FadeIn>



    </section>
  )
}

export default Home