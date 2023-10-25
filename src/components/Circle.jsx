import { tacoIcon } from "../assets";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const Circle = () => {
  const { scrollY } = useScroll();
  const [rotate, setRotate] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setRotate(latest / 4);
  });
  return (
    <div
      className="fixed bottom-36 left-[-2rem] bg-lightGreen rounded-full md:w-28 md:h-28 z-30 flex justify-center items-center border-8 border-green max-md:hidden "
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <img src={tacoIcon} alt="taco" width={20} height={20} />
      <img
        src={tacoIcon}
        alt="taco"
        width={20}
        height={20}
        className="max-md:hidden"
      />
      <img
        src={tacoIcon}
        alt="taco"
        width={20}
        height={20}
        className="max-md:hidden"
      />
    </div>
  );
};

export default Circle;
