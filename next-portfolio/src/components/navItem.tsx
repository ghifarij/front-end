import Link from "next/link";

function NavItem() {
  return (
    <div className="text-white content-center ">
      <Link className="hover:underline" href={"/"}>
        Home
      </Link>
      <Link className="px-5 hover:underline" href={"/about"}>
        About
      </Link>
      <Link className="hover:underline" href={"/projects"}>
        Projects
      </Link>
    </div>
  );
}

export default NavItem;
