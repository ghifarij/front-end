import NavItem from "./navItem";
import "../styles.css";
import batman from "../assets/batman.jpg";

function Navbar() {
  return (
    <div className="flex justify-between bg-black h-[60px] w-[100%]">
      <div className="avatar ml-[10px]">
        <img src={batman} alt="batman" />
      </div>
      <NavItem />
      <a
        href="https://drive.google.com/file/d/1MeOXhwsAd9UhAEW_JjPP_GmIYHHPdYEk/view?usp=sharing"
        download="afga-cv"
        target="_blank"
        className="content-center mr-4"
      >
        {" "}
        <button className="text-white border-2 border-yellow-500 px-2 py-1 rounded-3xl hover:bg-gray-800">
          Download CV
        </button>
      </a>
    </div>
  );
}

export default Navbar;
