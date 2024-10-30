import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center gap-8 items-center bg-[#070F2B] h-16 font-medium">
      <Link to={"/"} className="hover:text-gray-200 hover:underline">
        Home
      </Link>
      <Link to={"/register"} className="hover:text-gray-200 hover:underline">
        Register
      </Link>
    </div>
  );
}

export default Navbar;
