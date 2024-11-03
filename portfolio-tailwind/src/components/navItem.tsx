import { Link } from "react-router-dom";

function NavItem() {
  return (
    <div className="text-white content-center md:ml-20">
      <Link className="hover:underline" to={"/"}>
        Home
      </Link>
      <Link className="px-5 hover:underline" to={"/about"}>
        About
      </Link>
      <Link className="hover:underline" to={"/projects"}>
        Projects
      </Link>
    </div>
  );
}

export default NavItem;
