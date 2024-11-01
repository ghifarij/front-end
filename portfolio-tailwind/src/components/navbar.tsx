import NavItem from "./navItem";
import "../styles.css";
import batman from "../assets/batman.jpg";

function Navbar() {
  return (
    <div className="flex justify-between bg-black h-[70px] w-[100%]">
      <div className="avatar ml-[10px]">
        <img src={batman} alt="batman" />
      </div>
      <NavItem />
      <a
        href="https://drive.google.com/file/d/1MeOXhwsAd9UhAEW_JjPP_GmIYHHPdYEk/view?usp=sharing"
        download="afga-cv"
        target="_blank"
      >
        {" "}
        <button className="text-white m-2 btn btn-outline rounded-3xl">
          Download CV
        </button>
      </a>
    </div>
  );
}

export default Navbar;
