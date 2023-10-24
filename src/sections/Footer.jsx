import { looking, wave, instagram, facebook, github } from "../assets";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <footer className=" bg-[#fff6f6]" id="footer">
      <div className=" sticky top-0 z-10 ">
        <motion.p
          className="text-center font-dela text-5xl md:text-7xl text-orange mb-9  pt-12 "
          ref={ref}
          animate={
            isInView ? { scale: [0.2, 1], opacity: [0.2, 0.6, 0.8, 1] } : ""
          }
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          HUNGRY?
        </motion.p>
        <motion.img
          src={looking}
          alt="person"
          className="w-full h-96 "
          animate={
            isInView ? { scale: [0.2, 1], opacity: [0.2, 0.6, 0.8, 1] } : ""
          }
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
      <div className=" bg-[#fff6f6]">
        <img src={wave} alt="wave" className="w-full h-32  object-cover " />
        <div className="h-[450px] max-md:h-[600px] bg-pink"></div>
        <div className="bg-pink pb-10 pt-32 text-[#042f1a] flex md:justify-around max-lg:flex-col max-lg:items-center">
          <div className="flex md:px-24 max-md:px-10 gap-6  rounded-xl bg-orange mb-4 max-md:w-[90%] items-center py-2">
            <p>Contact me:</p>
            <a
              href="https://www.facebook.com/arturo.baylon.16"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px]"
            >
              <img
                src={facebook}
                alt="facebook"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/arturo.baylon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="instagram"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://github.com/ATT5"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </a>
          </div>
          <p className="border-b-2 border-gray-200 max-md:text-center">
            © TACOS CURIOUS 2023 |
            <span className="text-green">Designed by Arturo Baylon 💻</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
