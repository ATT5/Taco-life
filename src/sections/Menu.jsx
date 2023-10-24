import {
  curve,
  tacos,
  elote,
  water,
  burritos,
  nachos,
  tamales,
} from "../assets/index";
import { motion } from "framer-motion";
import { useState } from "react";
const menu = {
  tacos: { title: "Pastor", img: tacos, color: "bg-lessGreen" },
  elote: { title: "Elote", img: elote, color: "bg-orange" },
  nachos: { title: "Nachos", img: nachos, color: "bg-lessGreen" },
  tamales: { title: "Tamales", img: tamales, color: "bg-lessGreen" },
  horchata: { title: "Horchata", img: water, color: "bg-pink" },
  burritos: { title: "Burrito", img: burritos, color: "bg-lessGreen" },
};
let animated = false;

const Menu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(null);
  function handleMouseEnter(index) {
    setIsHovered(true);
    setIndex(index);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <section
      className=" bg-[#fff6f6] flex justify-center flex-col   "
      id="menu"
    >
      <img src={curve} alt="curve" className="w-full h-80  rotate-180" />
      <section className="bg-green flex flex-col items-center max-md:px-10 md:px-24">
        <h4 className="text-white font-oi text-center lg:text-9xl max-md:text-4xl  md:text-7xl relative top-[-10rem]">
          DROOLING
          <br /> YET?
        </h4>
        <div className=" grid grid-cols-3 max-lg:grid-cols-2 gap-10 max-md:grid-cols-1">
          {Object.values(menu).map((el, ind) => (
            <div
              key={el.title}
              className={`${el.color} font-dela rounded-lg p-1 flex flex-col items-center overflow-hidden mb-4`}
              onMouseEnter={() => handleMouseEnter(ind)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.h5
                className="text-6xl mb-6 text-center text-green m-0"
                initial={{ x: 0 }}
                animate={
                  isHovered && index === ind ? { x: ["-100%", "100%"] } : ""
                }
                transition={
                  isHovered
                    ? {
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                        stagger: 0,
                      }
                    : ""
                }
              >
                {el.title}
              </motion.h5>
              <motion.h5
                className="text-5xl mb-6 text-center text-green m-0"
                initial={{ x: 0 }}
                animate={
                  isHovered && index === ind ? { x: ["-100%", "100%"] } : ""
                }
                transition={
                  isHovered
                    ? {
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                        stagger: 0,
                      }
                    : ""
                }
              >
                {el.title}
              </motion.h5>
              <motion.img
                src={el.img}
                alt={el.title}
                className="w-[90%] h-60 relative bottom-[-3rem] text-"
                initial={{ x: 0 }}
                animate={
                  isHovered && index === ind ? { x: ["-100%", "100%"] } : ""
                }
                transition={
                  isHovered
                    ? {
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                        stagger: 0,
                      }
                    : ""
                }
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Menu;
