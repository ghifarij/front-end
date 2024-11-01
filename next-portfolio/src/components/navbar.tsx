import Image from "next/image";
import NavItem from "./navItem";
import batman from "../assets/batman.jpg";

function Navbar() {
  return (
    <div className="flex justify-between bg-black h-[70px] w-[100%] items-center">
      <div className="avatar ml-[10px]">
        <Image src={batman} alt="batman" className="w-12" />
      </div>
      <NavItem />
      <button className="mr-5 border-2 h-11 px-2 rounded-3xl hover:opacity-80">
        Download CV
      </button>
    </div>
  );
}

export default Navbar;
