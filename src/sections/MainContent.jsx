import { tacos, squiggle, wave } from "../assets";
import { motion } from "framer-motion";

const MainContent = () => {
  return (
    <section className="bg-green w-full  text-center text-white font-dela flex items-center flex-col ">
      <motion.h2
        className="relative text-9xl max-sm:text-8xl max-lg:mt-50"
        initial={{ opacity: 0, y: -40 }}
        animate={{ scale: [0.5, 1.3, 1], opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        TACO-YOUR
        <img
          src={squiggle}
          alt="squiggle"
          className=" absolute left-[70%] z-20"
        />
        <img
          src={squiggle}
          alt="squiggle"
          className=" absolute left-[20%] rotate-180 z-20 max-sm:left-[10%]"
        />
      </motion.h2>
      <motion.img
        animate={{ scale: [0.5, 1.2, 1] }}
        src={tacos}
        alt="tacos"
        className="w-[600px] h-[400px] relative z-10  bottom-8 max-sm:w-[400px] max-sm:h-[300px] object-contain max-sm:pl-9"
      />
      <motion.h2
        className="text-9xl relative z-20 bottom-28 max-sm:text-8xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ scale: [0.5, 1.3, 1], opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        LIFE
      </motion.h2>
      <img src={wave} alt="wave" className="w-full h-32  object-cover mt-20" />
    </section>
  );
};

export default MainContent;
