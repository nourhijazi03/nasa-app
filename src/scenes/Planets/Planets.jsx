import React, { useState } from "react";
import { planetsArray } from "./data";
import FadeIn from "../../components/FadeIn";
function Planets() {
  const [zplanet, setZplanet] = useState("Choose A Planet");
  const [desc, setDesc] = useState("Loading.....");
  const [bg, setBG] = useState("");

  return (
    <section id="planets" className="min-h-screen p-2 w-full flex-col border-b-4 border-slate-700 ">
      <FadeIn direction='right' delay={0.4}>
      <h1 className="text-orange-200 text-3xl text-center mb-2 capitalize bg-slate-700 p-4">
        Get to know the planets
      </h1>
      </FadeIn>
      <div className="bg-white flex w-full h-screen 
      max-sm:w-full max-sm:flex-col">
        <div
          className="bg-slate-700 w-1/5 overflow-y-auto  max-sm:inline-flex max-sm:w-auto max-sm:h-[120px]
          max-sm:overflow-x-hidden max-sm:p-2 "
        >
          {planetsArray.map((item, index) => (
            <div
              className="w-[200px] h-[170px] bg-gray-500 m-2 mx-auto rounded-full cursor-pointer
               max-sm:h-[60px] max-sm:w-[200px] hover:drop-shadow-[0_20px_20px_#ffe7d6] "
              key={index}
              onClick={() => {
                setZplanet(item.name);
                setDesc(item.desc);
                setBG(item.bg);
              }}
            >
              <img
                src={item.logo}
                className="w-full h-full rounded-full"
                alt={item.name}
              />
            </div>
          ))}
        </div>

        <div
          className="w-4/5 h-full flex flex-col justify-center items-center text-slate-700
            max-sm:w-full max-sm:m-0"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition:"center"
          }}
        >
          <div className="w-2/5 flex flex-col bg-yellow-50 justify-center items-center p-4 max-sm:w-4/5
          ">
            <h1 className="text-2xl text-orange-900 font-extrabold uppercase max-sm:text-lg">
              {zplanet}
            </h1>
            <p className="text-xl font-semibold first-letter:text-7xl first-letter:text-orange-300
            max-sm:text-sm">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planets;
