import mercuryImg from "../../assets/mercury.jpg";
import earthImg from "../../assets/earth.png";
import jupiterImg from "../../assets/jupiter.png";
import marsImg from "../../assets/mars.jpg";
import saturnImg from "../../assets/saturn.jpg";
import uranusImg from "../../assets/uranus.jpg";
import neptoneImg from "../../assets/neptune1.png";
import venusImg from "../../assets/venus.jpg";



import bgmercury from "../../assets/bgmercury.jpg";
import bgearth from "../../assets/earthbg.jpg";
import bgjupiter from "../../assets/jupiterbg.jpg";
import bgneptone from "../../assets/neptonebg.jpg";
import bgvenus from "../../assets/venusbg.jpg";
import bgmars from "../../assets/marsbg.jpg";
import bgsaturn from "../../assets/satrunbg.jpg";
import bguranus from "../../assets/uranusbg.jpg";
export const planetsArray = [
  {
    name: "mercury",
    logo: mercuryImg,
    type: "jpg",
    desc: `The smallest planet in our solar system and nearest to the Sun, 
    Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, 
    the Sun would appear more than three times as large as it does when viewed from Earth,
     and the sunlight would be as much as seven times brighter.`,
    bg:bgmercury,
  },
  {
    name: "earth",
    logo: earthImg,
    type: "png",
    desc: `Earth, our home planet, is a world unlike any other. The third planet from the sun,
    Earth is the only place in the known universe confirmed to host life.
    With a radius of 3,959 miles, Earth is the fifth largest planet in our solar system,
    and it's the only one known for sure to have liquid water on its surface. Earth is
    also unique in terms of monikers. Every other solar system planet was named for a Greek or Roman deit`,
    bg:bgearth,
    
  },
  {
    name: "jupiter",
    logo: jupiterImg,
    type: "png",
    desc:`Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system 
    more than twice as massive as all the other planets combined. Jupiter's stripes and swirls are 
    actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium.`,
    bg:bgjupiter,       

  },
  {
    name: "neptone",
    logo: neptoneImg,
    type: "png",
    desc:`
    Neptune, third most massive planet of the solar system and the eighth and outermost 
    planet from the Sun. Because of its great distance from Earth, 
    it cannot be seen with the unaided eye. With a small telescope, it appears as a tiny, faint blue-green disk`,
    bg:bgneptone,

  },
  {
    name: "venus",
    logo: venusImg,
    type: "jpg",
    desc:`Venus is a cloud-swaddled planet named for a love goddess, and often called Earth's twin. 
    But pull up a bit closer, and Venus turns hellish. 
    Our nearest planetary neighbor, the second planet from the Sun, has a surface hot enough to melt lead`,
    bg:bgvenus,

  },
  {
    name: "mars",
    logo: marsImg,
    type: "jpg",
    desc:`Mars is no place for the faint-hearted. It's dry, rocky, and bitter cold. 
    The fourth planet from the Sun, Mars is one of Earth's two closest planetary neighbors (Venus is the other). 
    Mars is one of the easiest planets to spot in the night sky – it looks like a bright red point of light.`,
    bg:bgmars,
  },
  {
    name: "saturn",
    logo: saturnImg,
    type: "jpg",
    desc:`Saturn is the sixth planet from the Sun and the second largest planet in our solar system.
     Adorned with a dazzling system of icy rings, Saturn is unique among the planets.
     It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's.`,
    bg:bgsaturn,
  },
  {
    name: "uranus",
    logo: uranusImg,
    type: "jpg",
    desc:`
    The seventh planet from the Sun with the third largest diameter in our solar system, 
    Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and
     27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit.`,
     bg:bguranus,
  },
];
