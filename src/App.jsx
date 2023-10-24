import NavBar from "./components/NavBar";
import MobileNav from "./components/MobileNav";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MainContent from "./sections/MainContent";
import About from "./sections/About";
import Features from "./sections/Features";
import Circle from "./components/Circle";
import Menu from "./sections/Menu";
import Footer from "./sections/Footer";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => setOpenMenu((prev) => !prev);
  return (
    <main className="font-rubik ">
      <Circle />
      <NavBar onClick={handleMenu} />
      <AnimatePresence>
        {openMenu && <MobileNav onClick={handleMenu} />}
      </AnimatePresence>
      <section>
        <MainContent />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Menu />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
