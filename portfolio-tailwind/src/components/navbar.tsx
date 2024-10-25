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
      <button className="text-white m-2 btn btn-outline">Download CV</button>
    </div>
  );
}

export default Navbar;
