import { chef, hug, friends, squiggleWhite, squiggle, family } from "../assets";

const About = () => {
  return (
    <section className="relative" id="about">
      <div className="w-full min-h-screen bg-pink text-green flex flex-col md:justify-center md:px-24 max-md:pt-14 max-md:px-10  sticky top-0 z-10 ">
        <img
          src={squiggleWhite}
          alt="squiggle"
          className="relative  top-0 left-1/3 w-14 h-14 object-contain"
        />
        <h3 className="text-[2.5rem] font-bold font-dela leading-10 mb-7 pt-6 max-md:text-2xl">
          CURIOUS... BY NAME,
          <br className="max-md:hidden" /> BY NATURE
        </h3>
        <article className="max-lg:text-center flex max-lg:flex-col-reverse max-md:w-full">
          <p className=" text-lg font-thin font-rubik lg:w-2/3 tracking-widest leading-7 ">
            It’s what inspires us to whip up, throw together, tear, shake, and
            break the rules – on a mission to redefine food for a new
            generation.
          </p>
          <img
            src={chef}
            alt="chef"
            className="w-[80%] h-[80%] max-md:w-[90%] max-md:h-[90%] relative lg:top-[-5rem] max-lg:pb-6"
          />
        </article>
      </div>
      {/* part 2️⃣ */}
      <div className="w-full h-screen bg-white text-green flex flex-col  md:px-24 max-md:pt-14 max-md:px-10  sticky top-0 z-10 pt-14 ">
        <img
          src={squiggle}
          alt="squiggle"
          className="relative  top-0 left-1/3 w-14 h-14 object-contain"
        />
        <h3 className="text-[2.5rem] font-bold font-dela leading-10 mb-7 pt-6 max-md:text-2xl">
          INSPARING GOOD THROUGH <br />
          TASTY GOODNESS
        </h3>
        <article className="max-lg:text-center flex max-lg:flex-col-reverse max-md:w-full">
          <p className=" text-lg font-thin font-rubik lg:w-2/3 tracking-widest leading-7 ">
            We’re here to inspire discovery and tempt everyone to eat more
            TACOS. Because we care about yours stomach.
          </p>
          <img
            src={hug}
            alt="hug"
            className="w-[80%] h-[80%] max-md:w-[90%] max-md:h-[90%] relative lg:top-[-5rem] max-lg:pb-6"
          />
        </article>
      </div>
      {/* part  3️⃣*/}
      <div className="w-full h-screen bg-lightGreen text-green flex flex-col  md:px-24 max-md:pt-14 max-md:px-10  sticky top-0 z-10 pt-14 ">
        <img
          src={squiggle}
          alt="squiggle"
          className="relative  top-0 left-1/3 w-14 h-14 object-contain"
        />
        <h3 className="text-[2.5rem] font-bold font-dela leading-10 mb-7 pt-6 max-md:text-2xl">
          SHARE WITH YOUR FRIENDS
        </h3>
        <article className="max-lg:text-center flex max-lg:flex-col-reverse max-md:w-full">
          <p className=" text-lg font-thin font-rubik lg:w-2/3 tracking-widest leading-7 ">
            We’re here to inspire discovery and tempt everyone to eat more
            TACOS. Because we care about yours stomach.
          </p>
          <img
            src={friends}
            alt="friends"
            className="w-[80%] h-[80%] max-md:w-[90%] max-md:h-[90%] relative lg:top-[-5rem] max-lg:pb-6"
          />
        </article>
      </div>
      {/* part 4️⃣ */}
      <div className="w-full h-screen bg-green text-white flex flex-col  md:px-24 max-md:pt-14 max-md:px-10  sticky top-0 z-10 pt-14 ">
        <img
          src={squiggle}
          alt="squiggle"
          className="relative  top-0 left-1/3 w-14 h-14 object-contain"
        />
        <h3 className="text-[2.5rem] font-bold font-dela leading-10 mb-7 pt-6 max-md:text-2xl">
          FLAVOURSOME FOOD
          <br className="max-lg:hidden" /> FOR EVRYBODY
        </h3>
        <article className="max-lg:text-center flex max-lg:flex-col-reverse max-md:w-full">
          <p className=" text-lg font-thin font-rubik lg:w-2/3 tracking-widest leading-7 ">
            Where our mission is to bring the joy of flavorsome food to
            everybody's table! Step into a world where tacos take center stage,
            and every bite is a fiesta for your taste buds.
          </p>
          <img
            src={family}
            alt="family"
            className="w-[80%] h-[80%] max-md:w-[90%] max-md:h-[90%] relative lg:top-[-5rem] max-lg:pb-6"
          />
        </article>
      </div>
    </section>
  );
};

export default About;
