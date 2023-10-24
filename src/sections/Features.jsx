import { plants, bolw, ingredients, stars } from "../assets";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const benefits = {
  plant: {
    title: "FRESH INGREDIENTS",
    img: plants,
    description:
      'Indulge in the bold flavors of our tacos crafted with the freshest ingredients."',
  },
  ingredients: {
    title: "REAL INGREDIENTS",
    img: ingredients,
    description: '"Embark on a cosmic journey for your taste buds.',
  },
  texture: {
    title: "UNREAL TEXTURE",
    img: stars,
    description: "It’s meat. Really, it is!",
  },
  bolw: {
    title: "BLAND IS BANNED",
    img: bolw,
    description: "Foodies unite, because here flavour rules.",
  },
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className=" flex gap-11 items-center  bg-[#fff6f6] flex-col  pt-20 md:px-24 max-md:pt-14 pb-20  lg:h-screen max-md:px-10 "
      id="benefits"
    >
      <h3 className="font-dela text-3xl " ref={ref}>
        FEATURES & <br />
        BENEFITS
      </h3>
      <div className="grid grid-cols-4 gap-10 font-rubik text-green  max-lg:grid-cols-2 max-sm:grid-cols-1 bg-[#fff6f6]">
        {Object.values(benefits).map((el) => (
          <article
            className="w-[100%] flex justify-center flex-col items-center"
            key={el.title}
          >
            <motion.img
              src={el.img}
              alt={el.title}
              className="w-[50%] h-[50%]"
              animate={isInView ? { scale: [1, 1.5, 1] } : ""}
              transition={{ duration: 1 }}
            />
            <h4 className="text-center font-rubik font-bold pt-9">
              {el.title}
            </h4>
            <p className="text-center">{el.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
