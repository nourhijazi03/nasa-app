import React, { useEffect, useState } from 'react'
import axios from "axios";
const APIKEY="iSHpBwuutVsUk2mk8j5N4fgV6W2AVKev5i9b7fT9";
function POTD() {
    const[potd,setPotd]=useState("");
    const[rpotd,setRpotd]=useState([]);

    useEffect(()=>{
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`)
        .then((res)=>setPotd(res.data))
        
    },[])
    useEffect(()=>{
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&count=5`)
        .then((res)=>(setRpotd(res.data)))
    },[])
    
  return (
    <section id='potd' className='min-h-screen bg-orange-100 pt-[10px] pb-6' >
        <div className='w-full flex justify-center max-sm:flex-col'>

        <div className='w-3/5 max-sm:w-full'>
        <h1 className='text-3xl pl-2 text-slate-700 '>Picture Of The Day</h1>
        <h3 className='text-orange-500 text-xl pl-5'>{potd.title}</h3>
        <p className='w-5/6 m-5 text-orange-900 '>{potd.explanation}</p>
        </div>


        <div className='w-2/5 p-2 m-2 mr-6 max-sm:w-full'>
            <img src={potd.url} alt='picture' className=' rounded-lg drop-shadow-xl'></img>
        </div>
        </div>


        <div className='w-full max-sm:hidden'>
            <h2 className='text-2xl ml-5 mb-4 text-slate-700 border-l-4 border-dashed  border-slate-700 w-[250px]'><span className='text-3xl text-orange-400'>
                R</span>andom Images</h2>
            <div className='w-full flex justify-evenly'>
                {rpotd.map((data,key)=>(
                    <div className='w-[200px] h-[150px] border-2 border-orange-700 flex flex-col items-center
                    bg-[linear-gradient(_#ffe7d6,_#fff)] rounded-md' key={key}>
                    <img src={data.url} className='h-[90px] w-[190px] mt-3 rounded-xl' alt='randomImage'/>
                    <p className='text-primary-200 text-sm mx-auto font-semibold text-center'>{data.title}</p>
                </div>
                ))}    
                
            </div>
        </div>
    </section>
  )
}

export default POTD