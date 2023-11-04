import React from 'react';
import planets from "../../src/assets/planets.png";

function Footer() {
    const aStyle="text-orange-400 font-semibold text-xl"
  return (
    <div className='w-full h-full flex justify-between bg-[_#040927]'>
        <div className='flex flex-col justify-center ml-9 text-orange-200'>
            <h3>Visit <a href='https://www.nasa.gov/' target='_blank' className={aStyle}>Nasa </a> For More Information</h3>
            <h3>Nasa <a href='https://api.nasa.gov/' target='_blank' className={aStyle}>API </a> for Picture Of The Day</h3>
            <h3>Wikipedia <a href='https://en.wikipedia.org/wiki/Apollo_11' target='_blank' className={aStyle}>Apollo11 </a> </h3>
            <h3>Created by <a href='https://nourh-hijazi-portfolio.netlify.app' target='_blank' className={aStyle}>Nour.H</a></h3>
        </div>
        <div className='w-[300px] h-[300px] flex justify-center items-center
        max-sm:w-[50px] max-sm:h-[50px]'>
        <img src={planets} className=' h-[200px] max-sm:h-full ' ></img>
        </div>
    </div>
  )
}   

export default Footer