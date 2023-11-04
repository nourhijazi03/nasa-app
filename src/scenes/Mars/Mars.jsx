import React from "react";
import apolo1 from "../../assets/apolo1.jpg";
import apolo2 from "../../assets/apolo2.webp";
import apolo3 from "../../assets/apolo3.jpg";
import apolo4 from "../../assets/apolo4.jpg";
import apolo5 from "../../assets/apolo5.jpg";
function Mars() {
  const imgstyle = "w-[200px] h-[180px]";
  const hstyle="text-l text-slate-700 ";
  const sstyle="text-orange-400 text-sm";
  return (
    <section id="mars" className="w-full min-h-screen pt-5 ">
      <h1 className="text-3xl font-bold text-slate-700 text-center pt-3">
        Apollo 11
      </h1>
      <h5 className="text-xl text-orange-400 text-center p-0 pb-3">
        "First Moon Landing"
      </h5>
      <div
        className="w-[60%] mx-auto h-[60%] my-auto max-sm:w-full max-sm:h-auto  
         grid grid-rows-2 grid-flow-col gap-2 "
      >
        <img src={apolo3} className="w-[300px] h-full row-span-2"></img>
        <img src={apolo1} className={imgstyle}></img>
        <img src={apolo2} className={imgstyle}></img>

        <img src={apolo4} className={imgstyle}></img>
        <img src={apolo5} className={imgstyle}></img>
      </div>
      <div className="flex justify-around pt-4 bg-orange-200 pb-3 max-sm:flex-col
      max-sm:items-center">
        <p className="w-3/5 text-slate-700 max-sm:w-4/5">
          Apollo 11 (July 16–24, 1969) was the American spaceflight that first
          landed humans on the Moon. Commander Neil Armstrong and Lunar Module
          Pilot Buzz Aldrin landed the Apollo Lunar Module Eagle on July 20,
          1969, at 20:17 UTC, and Armstrong became the first person to step onto
          the Moon's surface six hours and 39 minutes later, on July 21 at 02:56
          UTC. Aldrin joined him 19 minutes later, and they spent about two and
          a quarter hours together exploring the site they had named Tranquility
          Base upon landing. Armstrong and Aldrin collected 47.5 pounds (21.5
          kg) of lunar material to bring back to Earth as pilot Michael Collins
          flew the Command Module Columbia in lunar orbit, and were on the
          Moon's surface for 21 hours, 36 minutes before lifting off to rejoin
          Columbia.
          <br />
          <br />
          Armstrong's first step onto the lunar surface was broadcast on live TV
          to a worldwide audience. He described the event as "one small step for
          man, one giant leap for mankind." Apollo 11 effectively proved U.S.
          victory in the Space Race to demonstrate spaceflight superiority, by
          fulfilling a national goal proposed in 1961 by President John F.
          Kennedy, "before this decade is out, of landing a man on the Moon and
          returning him safely to the Earth."
        </p>
        <div className="w-1/5  flex flex-col justify-center p-2 border-t-8 border-b-8 border-double 
        border-slate-700 border-spacing-1 max-sm:w-4/5 ">
          <h1 className={hstyle}>
            Mission Type : <span className={sstyle}>Crewed Lunar Landing</span>
          </h1>
          <h1 className={hstyle}>
            Mission Duration :{" "}
            <span className={sstyle}>8 days, 3 hours, 18 minutes, 35 seconds</span>
          </h1>
          <h1 className={hstyle}>
            Spacecraft : <span className={sstyle}>Apollo CSM-107 Apollo LM-5</span>
          </h1>
          <h1 className={hstyle}>
            Rocket : <span className={sstyle}>Saturn V SA-506</span>
          </h1>
          <h1 className={hstyle}>
            Crew Size : <span className={sstyle}>Three</span>
          </h1>
          <h1 className={hstyle}>
            Crew Members :{" "}
            <span className={sstyle}>Neil A. Armstrong ,Michael Collins, Edwin E. Aldrin Jr.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Mars;
