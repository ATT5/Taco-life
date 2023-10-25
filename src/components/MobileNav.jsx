import Modal from "./Modal";
import { circle } from "../assets";
import { motion } from "framer-motion";

const MobileNav = ({ onClick }) => {
  return (
    <Modal>
      <h2 className="font-dela text-3xl absolute top-0 text-green text-center">
        TACO
        <br /> LIFE
      </h2>
      <button
        className="absolute right-5 top-6 bg-green h-10 w-10 flex justify-center items-center rounded-xl"
        onClick={onClick}
      >
        <img src={circle} alt="circle" />
      </button>

      <motion.ol
        className="flex justify-around items-center font-dela flex-col text-green font-bold text-2xl mb-52 "
        animate={{ scale: [1.5, 1] }}
        transition={{ duration: 1, stagger: 0.5, ease: "easeInOut" }}
      >
        <li className="cursor-pointer hover:text-white" onClick={onClick}>
          <a href="#about">ABOUT</a>
        </li>
        <li className="cursor-pointer hover:text-white" onClick={onClick}>
          <a href="#benefits">BENEFITS</a>
        </li>
        <li className="cursor-pointer hover:text-white" onClick={onClick}>
          <a href="#menu">MENU</a>
        </li>
        <li
          className=" p-1  rounded-md font-bold cursor-pointer hover:text-white"
          onClick={onClick}
        >
          <a href="#footer">CONTACT US</a>
        </li>
      </motion.ol>
    </Modal>
  );
};

export default MobileNav;
