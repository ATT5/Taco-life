import { menu } from "../assets";

const NavBar = ({ onClick }) => {
  return (
    <header className="bg-green text-white py-2    ">
      <nav>
        <ol className="flex justify-around items-center font-semibold ">
          <li className="cursor-pointer max-sm:hidden ">
            <a href="#about">ABOUT</a>
          </li>
          <li className="cursor-pointer max-sm:hidden">
            <a href="#benefits">BENEFITS</a>
          </li>
          <li className="text-center text-4xl font-bold font-dela ">
            TACO <br />
            LIFE
          </li>
          <li className="cursor-pointer max-sm:hidden">
            <a href="#menu">MENU</a>
          </li>
          <li className="bg-pink p-1 font-dela rounded-md font-bold text-black hover:text-white cursor-pointer max-sm:hidden">
            <a href="#footer">CONTACT US</a>
          </li>
        </ol>
      </nav>
      <button
        className="sm:hidden bg-pink w-10 h-10 absolute top-6 right-5 flex justify-center items-center rounded-md"
        onClick={onClick}
      >
        <img src={menu} alt="menu" />
      </button>
    </header>
  );
};

export default NavBar;
